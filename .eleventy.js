const UserConfig = require("@11ty/eleventy/src/UserConfig");
const tpPlugin = require("../tei-publisher-eleventy");

/** @param {UserConfig} eleventyConfig */
module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy('src/resources/images/*');
    eleventyConfig.addPassthroughCopy('src/resources/scripts/*.js');

    eleventyConfig.addPlugin(tpPlugin, {
        remote: 'http://localhost:8040/exist/apps/guidelines/',
        data: {
            "idents": "api/idents"
        }
    });

    eleventyConfig.addCollection('json', )
    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
};