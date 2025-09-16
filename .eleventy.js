module.exports = function(eleventyConfig) {
  // Copy CSS files to output
  eleventyConfig.addPassthroughCopy("src/css");
  // Copy images to output
  eleventyConfig.addPassthroughCopy("src/assets");
  // Copy favicon files to output
  eleventyConfig.addPassthroughCopy("src/favicon");
  
  return {
    dir: {
      input: "src",
      output: "_site",
      layouts: "_layouts",
      includes: "_includes"
    }
  };
}; 