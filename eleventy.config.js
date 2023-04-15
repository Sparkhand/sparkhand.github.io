module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/favicon.ico");
    eleventyConfig.addPassthroughCopy("src/assets/css");
    eleventyConfig.addPassthroughCopy("src/assets/js");

    return {
        dir: {
            input: "src",
            output: "docs",
            includes: "_includes",
            layouts: "_includes/_layouts",
            data: "_data"
        }
    };
}