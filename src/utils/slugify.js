// slugify.js
export const slugify = (text) => {
    // Convert text to URL-friendly slug
    return text.toLowerCase().replace(/\s+/g, '-');
  };s