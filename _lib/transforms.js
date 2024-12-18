/**
 * Custom 11ty transforms
 */

const htmlmin = require('html-minifier');

module.exports = {
  /**
   * Minify HTML output
   * @param {string} content - The HTML content to minify
   * @param {string} outputPath - The output path of the file
   * @returns {string} The minified HTML
   */
  htmlmin: (content, outputPath) => {
    if (!outputPath || !outputPath.endsWith('.html')) {
      return content;
    }

    return htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true
    });
  }
};