/**
 * Custom 11ty shortcodes
 */

module.exports = {
  /**
   * Create a figure with caption
   * @param {string} src - The image source
   * @param {string} alt - The image alt text
   * @param {string} caption - The figure caption
   * @returns {string} The figure HTML
   */
  figure: (src, alt, caption) => {
    return `<figure>
      <img src="${src}" alt="${alt}">
      <figcaption>${caption}</figcaption>
    </figure>`;
  },

  /**
   * Create a citation
   * @param {string} text - The citation text
   * @param {string} source - The source of the citation
   * @returns {string} The citation HTML
   */
  cite: (text, source) => {
    return `<cite class="citation">
      <span class="citation-text">${text}</span>
      <span class="citation-source">—${source}</span>
    </cite>`;
  }
};