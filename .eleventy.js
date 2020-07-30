module.exports = function(eleventyConfig){

    eleventyConfig.addPassthroughCopy("src/assets")

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