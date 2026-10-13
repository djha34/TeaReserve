/**
 * Tea Reserve — Site-wide configuration
 * ======================================
 * OWNER: Edit this file to update contact details, branding, and FSSAI number.
 *
 * IMPORTANT — FSSAI number:
 *   - Leave fssai as an empty string ("") during development.
 *   - Fill in your 14-digit FSSAI licence number before deploying to production.
 *   - The production build will FAIL if this is empty or invalid.
 */

export const site = {
  name: "Tea Reserve",
  tagline: "From Assam Garden to Your Table",
  description:
    "Pure CTC Tea with rich aroma and strong taste. Sourced from Assam gardens, packed fresh in Mumbai.",

  // Contact details
  email: "teareservemumbai@gmail.com",
  phone1: "7770094574",
  phone2: "7395092161",

  // WhatsApp — primary number with country code (no + sign)
  whatsappNumber: "917770094574",

  // Address
  address: "PO/PS Virar, Dist. Palghar 401404 (Mumbai)",
  city: "Mumbai",
  state: "Maharashtra",
  pincode: "401404",

  // Maps — embed URL for Virar, Palghar
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.123456789!2d72.8!3d19.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9c3f0000001%3A0x0!2sVirar%2C%20Palghar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890",

  // FSSAI Licence Number — MUST be 14 digits before production deploy
  // Leave empty ("") in development
  fssai: "",

  // Social / OG
  siteUrl: "https://teareserve.in", // TODO: update with real domain
  ogImage: "/assets/logo.jpeg",
};

export default site;


