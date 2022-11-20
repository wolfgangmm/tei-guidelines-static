const UserConfig = require("@11ty/eleventy/src/UserConfig");
const tpPlugin = require("../tei-publisher-eleventy");
const faviconsPlugin = require("eleventy-plugin-gen-favicons");
const path = require("path");

/** @param {UserConfig} eleventyConfig */
module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy('src/resources/images/*');
    eleventyConfig.addPassthroughCopy('src/resources/scripts/*.js');
    eleventyConfig.addPassthroughCopy('src/resources/css/*.css');

    eleventyConfig.addPlugin(faviconsPlugin, {
        manifestData: {
            title: "TEI P5: Guidelines for Electronic Text Encoding and Interchange",
            short_name: "TEI P5 Guidelines"
        }
    });
    eleventyConfig.addPlugin(tpPlugin, {
        remote: 'http://localhost:8040/exist/apps/guidelines/',
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

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
};