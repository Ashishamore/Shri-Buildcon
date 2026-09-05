/*
 * 2007 is when the DIRECTOR began working on site, not when the firm was
 * registered. The firm's own establishment year is still unknown — ask the
 * client for it before making any "established" claim on the site.
 *
 * Kept apart from site.js so the locale bundles can use these figures without
 * importing anything that imports them back.
 */
export const EXPERIENCE_SINCE = 2007
export const yearsOfExperience = new Date().getFullYear() - EXPERIENCE_SINCE
