/**
 * Custom 11ty filters
 */

module.exports = {
  /**
   * Format a date using Intl.DateTimeFormat
   * @param {Date} date - The date to format
   * @param {string} format - The format to use (short, medium, long, full)
   * @returns {string} The formatted date
   */
  formatDate: (date, format = 'medium') => {
    const options = { dateStyle: format };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  },

  /**
   * Limit an array to a specific number of items
   * @param {Array} arr - The array to limit
   * @param {number} limit - The maximum number of items to return
   * @returns {Array} The limited array
   */
  limit: (arr, limit) => arr.slice(0, limit),

  /**
   * Sort an array of objects by a specific key
   * @param {Array} arr - The array to sort
   * @param {string} key - The key to sort by
   * @returns {Array} The sorted array
   */
  sortBy: (arr, key) => {
    return arr.sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
  }
};