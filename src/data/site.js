/*
 * Language-neutral site data: contact details, images, file paths and ids.
 *
 * All copy lives in src/i18n/<locale>.js and is joined to this by id in the
 * language provider. Anything tagged PLACEHOLDER must be confirmed with the
 * client before launch.
 */

import columnPedestals from "../assets/projects/column-pedestals.jpg"
import craneBayFlooring from "../assets/projects/crane-bay-flooring.jpg"
import factoryInternalRoad from "../assets/projects/factory-internal-road.jpg"
import foundationRaft from "../assets/projects/foundation-raft.jpg"
import pebShedErection from "../assets/projects/peb-shed-erection.jpg"
import plantFloorRails from "../assets/projects/plant-floor-rails.jpg"
import plantYardPaving from "../assets/projects/plant-yard-paving.jpg"
import pressFoundation from "../assets/projects/press-foundation.jpg"
import rccWaterTank from "../assets/projects/rcc-water-tank.jpg"
import siteOfficeCabin from "../assets/projects/site-office-cabin.jpg"
import shriParkElevation from "../assets/developments/shri-park-elevation.jpg"
import shriParkAerial from "../assets/developments/shri-park-aerial.jpg"
import shriParkEntrance from "../assets/developments/shri-park-entrance.jpg"
import shriParkPlans from "../assets/developments/shri-park-plans.jpg"
import shreeNagariLayout from "../assets/developments/shree-nagari-layout.jpg"
import shreeNagariLocation from "../assets/developments/shree-nagari-location.jpg"

export { EXPERIENCE_SINCE, yearsOfExperience } from "./constants"

export const company = {
  name: "ShreeBuildcon",
  legalName: "ShreeBuildcon", // update if the registered name is longer (Pvt. Ltd. etc.)
  // Logo lockup: set in HP Simplified, first part bold, second light, all caps.
  wordmark: { bold: "Shree", light: "Buildcon" },
  phoneDisplay: "+91 96379 18081",
  phoneHref: "tel:+919637918081",
  whatsapp: "919637918081",
  email: "info@shreebuildcon.in", // PLACEHOLDER — confirm the real address
  brochureUrl: "/company-profile.pdf", // served from public/
  address: {
    lines: [
      "Gut No. 100, Near Pisadevi Mandir",
      "At Pisadevi, Dist. Chhatrapati Sambhajinagar",
      "Maharashtra",
    ],
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Pisadevi+Mandir+Chhatrapati+Sambhajinagar",
  },
}

export function whatsappLink(text) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`
}

/** Fills {token} placeholders in a translated string. */
export function fill(template, values = {}) {
  return template.replace(/\{(\w+)\}/g, (match, key) => values[key] ?? match)
}

/** Service divisions in display order; copy comes from the locale by id. */
export const services = [
  { id: "builders", icon: "building" },
  { id: "industrial", icon: "factory" },
  { id: "solar", icon: "solar" },
  { id: "government", icon: "landmark" },
]

/** Residential developments. Artwork extracted from the client's brochures. */
export const developments = [
  {
    id: "shri-park",
    image: shriParkElevation,
    strip: shriParkPlans,
    views: [
      { key: "elevation", src: shriParkElevation },
      { key: "aerial", src: shriParkAerial },
      { key: "entrance", src: shriParkEntrance },
    ],
    brochure: "/brochures/shri-park-brochure.pdf",
  },
  {
    id: "shree-nagari",
    image: shreeNagariLayout,
    views: [
      { key: "layout", src: shreeNagariLayout, fit: "contain" },
      { key: "location", src: shreeNagariLocation, fit: "contain" },
    ],
    brochure: "/brochures/shree-nagari-brochure.pdf",
  },
]

/** Completed civil works. `location` and `year` stay blank until confirmed. */
export const projects = [
  { id: "peb-shed-erection", category: "structures", image: pebShedErection, location: "", year: "" },
  { id: "crane-bay-flooring", category: "structures", image: craneBayFlooring, location: "", year: "" },
  { id: "plant-floor-rails", category: "structures", image: plantFloorRails, location: "", year: "" },
  { id: "foundation-raft", category: "foundations", image: foundationRaft, location: "", year: "" },
  { id: "press-foundation", category: "foundations", image: pressFoundation, location: "", year: "" },
  { id: "column-pedestals", category: "foundations", image: columnPedestals, location: "", year: "" },
  { id: "factory-internal-road", category: "roads", image: factoryInternalRoad, location: "", year: "" },
  { id: "plant-yard-paving", category: "roads", image: plantYardPaving, location: "", year: "" },
  { id: "site-office-cabin", category: "buildings", image: siteOfficeCabin, location: "", year: "" },
  { id: "rcc-water-tank", category: "buildings", image: rccWaterTank, location: "", year: "" },
]

export const categoryOrder = ["all", "structures", "foundations", "roads", "buildings"]
