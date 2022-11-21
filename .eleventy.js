const UserConfig = require("@11ty/eleventy/src/UserConfig");
const tpPlugin = require("@teipublisher/pb-eleventy-plugin");
const faviconsPlugin = require("eleventy-plugin-gen-favicons");
const path = require("path");
const {injectManifest} = require("workbox-build/build");

/** @param {UserConfig} eleventyConfig */
module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy('src/resources/images/*');
    eleventyConfig.addPassthroughCopy('src/resources/scripts/*.js');
    eleventyConfig.addPassthroughCopy('src/resources/css/*.css');
    eleventyConfig.addPassthroughCopy('src/offline.json');
    eleventyConfig.addPassthroughCopy({
        'node_modules/workbox-sw/build/workbox-sw.js': 'resources/scripts/workbox-sw.js',
        'node_modules/@teipublisher/pb-components/dist/*.js': 'resources/scripts',
        'node_modules/@teipublisher/pb-components/i18n/common/*': 'resources/i18n/common',
    });

    eleventyConfig.addPlugin(tpPlugin, {
        remote: 'http://localhost:8080/exist/apps/guidelines/',
        data: {
            "idents": "api/idents"
        },
        index: {
            content: {
                "view1": {
                    selectors: "p,dd,li,h1,h2,h3,h4,h5,h6",
                    tag: 'guidelines'
                },
                "reference": {
                    selectors: ".tei-desc2",
                    tag: 'reference'
                }
            },
            title: {
                "breadcrumbs": {
                    selectors: ".breadcrumb",
                    allowHtml: true
                },
                "reference": function(json, outputDir) {
                    const ident = path.basename(outputDir);
                    this.link = `/ref/${ident}`;
                    return ident;
                }
            }
        }
    });

    eleventyConfig.addPlugin(faviconsPlugin, {
        manifestData: {
            title: "TEI P5: Guidelines for Electronic Text Encoding and Interchange",
            short_name: "TEI P5 Guidelines"
        }
    });
    
    eleventyConfig.on('eleventy.after', async () => {
        const result = await injectManifest({
            swSrc: '_site/sw.js',
            swDest: '_site/sw.js',
            globDirectory: '_site',
            globPatterns: [
              '**/*.jsonl',
              '**/*.css',
              '**/*.js',
              '*.json'
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