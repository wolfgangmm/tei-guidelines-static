const UserConfig = require("@11ty/eleventy/src/UserConfig");
const tpPlugin = require("@teipublisher/pb-eleventy-plugin");
const { extractPlainText } = require("@teipublisher/pb-eleventy-plugin/util");
const faviconsPlugin = require("eleventy-plugin-gen-favicons");
const path = require("path");
const {injectManifest} = require("workbox-build/build");

/**
 * Callback function returning index entries for main text chapters.
 * 
 * @param {Node} content HTML content as a DOM node
 * @param {any} meta full JSON metadata
 * @returns [any] an array of index documents
 */
function indexContent(content) {
    const divs = content.querySelectorAll('[class*=tei-div]');
    const idxEntries = [];
    divs.forEach((div) => {
        const crumbs = [];
        breadcrumbs(div, crumbs);
        const entry = {
            tag: 'guidelines'
        };
        entry.title = crumbs.reverse().join('');
        entry.content = extractPlainText(div, 'style,script,div');
        idxEntries.push(entry);
    });
    return idxEntries;
}

/**
 * Callback function returning an index entry for a reference page.
 * 
 * @param {Node} content HTML content as a DOM node
 * @param {any} meta full JSON metadata
 * @param {string} outputDir the current output directory
 * @returns [any] an array of index documents
 */
function indexReference(content, meta, outputDir) {
    const text = Array.from(content.querySelectorAll('.tei-desc2,p'))
        .map(elem => elem.textContent);

    const ident = path.basename(outputDir);
    return [
        {
            content: text.join(' '),
            title: `<a href="ref/${ident}">${ident}</a>`,
            tag: 'reference'
        }
    ]
}

/**
 * Output breadcrumbs for an index entry.
 * 
 * @param {Element} div the current root division
 * @param {*} crumbs the breadcrumbs leading to this division
 */
function breadcrumbs(div, crumbs) {
    const heading = div.querySelector(':scope > h1, :scope > h2, :scope > h3, :scope > h4, :scope > h5, :scope > h6');
    if (heading) {
        if (div.id) {
            crumbs.push(`<a class="breadcrumb" href="p5.xml?id=${div.id}#${div.id}">${heading.textContent}</a>`);
        } else {
            crumbs.push(`<span class="breadcrumb">${heading.textContent}</span>`);
        }
    }
    if (div.parentElement) {
        breadcrumbs(div.parentElement, crumbs);
    }
}

/** @param {UserConfig} eleventyConfig */
module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy('src/resources/images/*');
    eleventyConfig.addPassthroughCopy('src/resources/scripts/*.js');
    eleventyConfig.addPassthroughCopy('src/resources/css/*.css');
    eleventyConfig.addPassthroughCopy('src/resources/fonts/*');
    eleventyConfig.addPassthroughCopy('src/offline.json');
    // copy scripts and styles
    eleventyConfig.addPassthroughCopy({
        'node_modules/workbox-sw/build/workbox-sw.js': 'resources/scripts/workbox-sw.js',
        'node_modules/@teipublisher/pb-components/dist/*.js': 'resources/scripts',
        'node_modules/@teipublisher/pb-components/i18n/common/*': 'resources/i18n/common',
        'node_modules/prismjs/themes/*.css': 'resources/css/prismjs/'
    });

    // configure the TEI Publisher plugin
    eleventyConfig.addPlugin(tpPlugin, {
        remote: 'http://localhost:8080/exist/apps/guidelines/',
        data: {
            // retrieve idents for all TEI elements and classes. Add the result
            // as a global data object. A reference page will be generated for each ident 
            // using 11ty pagination.
            "idents": "api/idents"
        },
        index: {
            "view1": indexContent,
            "reference": indexReference
        }
    });

    // generate favicons
    eleventyConfig.addPlugin(faviconsPlugin, {
        manifestData: {
            title: "TEI P5: Guidelines for Electronic Text Encoding and Interchange",
            short_name: "TEI P5 Guidelines",
            start_url: "index.html",
            display: "standalone"
        }
    });
    
    // Install a service worker with offline caching
    eleventyConfig.on('eleventy.after', async () => {
        const result = await injectManifest({
            swSrc: '_site/sw.js',
            swDest: '_site/sw.js',
            globDirectory: '_site',
            globPatterns: [
              '**/*.jsonl',
              '**/*.css',
              '**/*.js',
              '*.json',
              'offline.*'
            ]
        });
        console.log('[service worker] %d files will be cached, size: %d mb', result.count, (result.size / 1048576).toFixed(2));
    });

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
};