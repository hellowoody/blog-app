const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig){

    eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
        if( outputPath.endsWith(".html") ) {
          let minified = htmlmin.minify(content, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true
          });
          return minified;
        }
  
        return content;
    });

    eleventyConfig.addPassthroughCopy("src/assets")
    eleventyConfig.addPassthroughCopy("src/favicon.ico")

    return {
        passthroughFileCopy:true,
        dir:{
            input:"./src",
            output:"./_site",
            includes:"_includes",
        },
        templateFormats:[
            "md",
            "html",
        ]
    }
}