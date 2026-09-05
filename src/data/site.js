/*
 * All site copy lives here so it can be edited without touching components.
 *
 * Anything tagged PLACEHOLDER was written to complete the design and must be
 * confirmed with the client before this goes live.
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
import directorPhoto from "../assets/director.jpg"
import shriParkElevation from "../assets/developments/shri-park-elevation.jpg"
import shriParkAerial from "../assets/developments/shri-park-aerial.jpg"
import shriParkEntrance from "../assets/developments/shri-park-entrance.jpg"
import shreeNagariLocation from "../assets/developments/shree-nagari-location.jpg"
import shriParkPlans from "../assets/developments/shri-park-plans.jpg"
import shreeNagariLayout from "../assets/developments/shree-nagari-layout.jpg"

/*
 * 2007 is when the DIRECTOR began working on site, not when the firm was
 * registered. The firm's own establishment year is still unknown — ask the
 * client for it before making any "established" claim on the site.
 */
export const EXPERIENCE_SINCE = 2007
export const yearsOfExperience = new Date().getFullYear() - EXPERIENCE_SINCE

export const company = {
  name: "ShreeBuildcon",
  legalName: "ShreeBuildcon", // update if the registered name is longer (Pvt. Ltd. etc.)
  // Logo lockup: set in HP Simplified, first part bold, second light, all caps.
  wordmark: { bold: "Shree", light: "Buildcon" },
  tagline: "Builders & Developers",
  phoneDisplay: "+91 96379 18081",
  phoneHref: "tel:+919637918081",
  whatsapp: "919637918081",
  email: "info@shreebuildcon.in", // PLACEHOLDER — confirm the real address
  hours: "Monday to Saturday · 9:30 am to 7:00 pm", // PLACEHOLDER
  brochureUrl: "/company-profile.pdf", // drop the PDF at public/company-profile.pdf
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

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#developments" },
  { label: "Civil works", href: "#projects" },
  { label: "Clients", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

/*
 * Residential developments, taken from the client's own brochures.
 * The brochure PDFs are served from public/brochures/.
 */
export const developments = [
  {
    id: "shri-park",
    name: "Shri Park",
    type: "3 BHK row houses",
    status: "Booking open",
    location: "Gut No. 140, Behind Maruti Temple, Pisadevi, Chhatrapati Sambhajinagar",
    image: shriParkElevation,
    strip: shriParkPlans,
    views: [
      { src: shriParkElevation, caption: "Front elevation" },
      { src: shriParkAerial, caption: "Aerial view" },
      { src: shriParkEntrance, caption: "Entrance and gate" },
    ],
    summary:
      "A scheme of ground-plus-two row houses, each with covered stilt parking, built on a standard R.C.C. frame structure.",
    heroHighlights: [
      "18 3 BHK row houses with stilt parking",
      "N.A., CIDCO and RERA approved",
      "Bank finance available",
    ],
    facts: [
      { label: "Configuration", value: "3 BHK row houses · 18 units" },
      { label: "Saleable area", value: "1,729 – 2,047 sq. ft." },
      { label: "Structure", value: "R.C.C. frame, G+2 with stilt parking" },
      { label: "Sanctions", value: "N.A. · CIDCO · RERA approved" },
    ],
    highlights: [
      "Vitrified tile flooring in all rooms",
      "Glazed tile dado in kitchen and bathrooms",
      "Concealed electrification with modular switches",
      "Powder-coated aluminium sliding windows with safety grills",
      "Sand-faced external plaster with premium paint",
      "Finance available from nationalised banks",
    ],
    credits: "Architect: Ar. Savinay Mirkute · R.C.C. consultant: Abhiranjan Consultant",
    brochure: "/brochures/shri-park-brochure.pdf",
  },
  {
    id: "shree-nagari",
    name: "Shree Nagari",
    type: "N.A. sanctioned residential plots",
    status: "Plots available",
    location:
      "Gut No. 54 (Part), Shendra Jahangir, near Limbe Chowk, Shendra Five-Star MIDC, Chhatrapati Sambhajinagar 431 001",
    image: shreeNagariLayout,
    views: [
      { src: shreeNagariLayout, caption: "Sanctioned layout plan", fit: "contain" },
      { src: shreeNagariLocation, caption: "Location map", fit: "contain" },
    ],
    summary:
      "A sanctioned residential layout on 9 m and 12 m internal roads, close to the Jalna highway and the Shendra Five-Star MIDC.",
    heroHighlights: [
      "64 sanctioned plots, 697 – 1,870 sq. ft.",
      "N.A. 42 certified, AMRDA sanctioned",
      "Cement roads, drainage and street lighting",
    ],
    facts: [
      { label: "Plots", value: "64 sanctioned plots" },
      { label: "Plot sizes", value: "697 – 1,870 sq. ft." },
      { label: "Sanctions", value: "N.A. 42 certified · AMRDA approved layout" },
      { label: "Internal roads", value: "9 m and 12 m cement concrete" },
    ],
    highlights: [
      "Internal cement concrete roads and street lighting",
      "Drainage line and electric D.P.",
      "Water well within the layout",
      "Secured compound wall on all sides",
      "Open space, children's play garden and Mahadev temple",
      "Bank loan facility available",
    ],
    note: "Developed in association with Abhiraj Associates.",
    brochure: "/brochures/shree-nagari-brochure.pdf",
  },
]

export const stats = [
  {
    value: `${yearsOfExperience}+`,
    label: "Years of site experience",
    note: `Leadership on site since ${EXPERIENCE_SINCE}`,
  },
  { value: "120+", label: "Projects completed", note: "Industrial, infrastructure and development" }, // PLACEHOLDER
  { value: "04", label: "Service divisions", note: "Land through to infrastructure" },
  { value: "25+", label: "Site personnel", note: "Engineers and supervisors" }, // PLACEHOLDER
]

export const services = [
  {
    id: "builders",
    icon: "building",
    title: "Builders & Developers",
    summary: "Land acquisition through sanction, development and sale of N.A. plots.",
    points: [
      "Title check and 7/12 verification",
      "Layout sanction and N.A. conversion",
      "Roads, drainage and compound wall",
    ],
  },
  {
    id: "industrial",
    icon: "factory",
    title: "Industrial Civil Works",
    summary: "Foundations, R.C.C. structures and industrial flooring, built to approved drawings.",
    points: [
      "R.C.C. and structural works",
      "Machine foundations and flooring",
      "Works inside operating plants",
    ],
  },
  {
    id: "solar",
    icon: "solar",
    title: "Solar Power Plant Works",
    summary: "Civil works for solar plants, as an approved vendor to Megh Engineering Ltd.",
    points: [
      "Module mounting foundations",
      "Control room and inverter yard",
      "Grading, trenching and access roads",
    ],
  },
  {
    id: "government",
    icon: "landmark",
    title: "Government Contracts",
    summary: "Registered contractor for public works, executed to departmental specification.",
    points: [
      "Departmental tenders",
      "Roads, buildings and infrastructure",
      "Measurement books and documentation",
    ],
  },
]

export const projectCategories = [
  { id: "all", label: "All projects" },
  { id: "structures", label: "Structures & flooring" },
  { id: "foundations", label: "Foundations" },
  { id: "roads", label: "Roads & paving" },
  { id: "buildings", label: "Buildings & utilities" },
]

/*
 * The client's own site photographs, in src/assets/projects/.
 *
 * Titles and details are read off the photographs — have the client confirm
 * them. `location` and `year` are blank because we do not know them; fill them
 * in and the caption will show them instead of `detail`.
 */
export const projects = [
  {
    id: "peb-shed-erection",
    title: "Industrial Shed — Structural Erection",
    detail: "Primary frame and purlin erection on completed footings",
    location: "",
    year: "",
    category: "structures",
    image: pebShedErection,
  },
  {
    id: "crane-bay-flooring",
    title: "Crane Bay Flooring",
    detail: "Full-bay industrial floor cast beneath an operating overhead crane",
    location: "",
    year: "",
    category: "structures",
    image: craneBayFlooring,
  },
  {
    id: "plant-floor-rails",
    title: "Machine Bases & Floor Rails",
    detail: "Rail-embedded flooring and machine bases in an operating unit",
    location: "",
    year: "",
    category: "structures",
    image: plantFloorRails,
  },
  {
    id: "foundation-raft",
    title: "Machine Foundation Raft",
    detail: "Raft reinforcement and column cages tied prior to concreting",
    location: "",
    year: "",
    category: "foundations",
    image: foundationRaft,
  },
  {
    id: "press-foundation",
    title: "50 MN Press Foundation",
    detail: "Deep pit foundation executed for a 50 MN hydraulic press",
    location: "",
    year: "",
    category: "foundations",
    image: pressFoundation,
  },
  {
    id: "column-pedestals",
    title: "Column Pedestals",
    detail: "R.C.C. pedestals with anchor bolt assemblies, ready for erection",
    location: "",
    year: "",
    category: "foundations",
    image: columnPedestals,
  },
  {
    id: "factory-internal-road",
    title: "Factory Internal Road",
    detail: "Concrete road adjacent to an operating shed, under curing",
    location: "",
    year: "",
    category: "roads",
    image: factoryInternalRoad,
  },
  {
    id: "plant-yard-paving",
    title: "Plant Yard Paving",
    detail: "Heavy-duty concrete paving across an operating plant yard",
    location: "",
    year: "",
    category: "roads",
    image: plantYardPaving,
  },
  {
    id: "site-office-cabin",
    title: "Site Office & Security Cabin",
    detail: "R.C.C. cabin constructed, plastered and finished",
    location: "",
    year: "",
    category: "buildings",
    image: siteOfficeCabin,
  },
  {
    id: "rcc-water-tank",
    title: "Underground Water Tank",
    detail: "Two-chamber R.C.C. tank cast in situ",
    location: "",
    year: "",
    category: "buildings",
    image: rccWaterTank,
  },
]

/** Every development view, flattened — the hero slideshow steps through these. */
export const heroSlides = developments.flatMap((project) =>
  project.views.map((view) => ({
    id: `${project.id}-${view.caption}`,
    src: view.src,
    caption: view.caption,
    fit: view.fit ?? "cover",
    projectId: project.id,
    name: project.name,
    type: project.type,
    status: project.status,
  })),
)

export const process = [
  {
    step: "01",
    title: "Site assessment",
    body: "We inspect the site, review your requirement and confirm what the ground conditions permit before any figure is discussed.",
  },
  {
    step: "02",
    title: "Detailed estimate",
    body: "An itemised quotation with specifications, quantities and a committed schedule. Any variation is agreed in writing before it is executed.",
  },
  {
    step: "03",
    title: "Execution and reporting",
    body: "Work is supervised by our own engineers, with scheduled progress reporting and quality checks at each stage of construction.",
  },
  {
    step: "04",
    title: "Handover and support",
    body: "Documented handover with completion records and as-built details. We remain available for support after the contract closes.",
  },
]

export const vision =
  "To be recognised as a civil contracting firm that clients return to for technical competence, transparent dealing and consistent delivery — on every site, whatever its scale or location."

export const mission =
  "To execute every project to the approved specification, within the committed schedule and at the agreed cost; to develop land responsibly for the people and businesses who will occupy it; and to maintain a permanent team of qualified engineers and supervisors."

export const values = [
  {
    icon: "handshake",
    title: "Reliability",
    body: "A substantial share of our work comes from repeat clients and referrals. Protecting that record governs how we take on and run every project.",
  },
  {
    icon: "message",
    title: "Transparent reporting",
    body: "Cost, schedule and site progress are reported as they stand, including delays. Clients are informed before decisions are taken, not afterwards.",
  },
  {
    icon: "scale",
    title: "Ethical dealing",
    body: "Accurate measurement, accurate billing and specified materials. We commit only to scope we are equipped to deliver.",
  },
  {
    icon: "graduation",
    title: "Qualified personnel",
    body: "Civil engineers and trained supervisors present through execution, with defined responsibility at every stage of the work.",
  },
]

/*
 * PLACEHOLDER — written to complete the design. Names are shortened so they do
 * not point to any real person. Replace all three with real, approved client
 * feedback before launch.
 */
export const testimonials = [
  {
    quote:
      "The shed extension was completed while the unit remained in production. Site discipline was maintained throughout and the final bill matched the quotation. Handover was two weeks ahead of the committed date.",
    name: "Sunil D.",
    role: "Operations Head, engineering unit, Waluj MIDC",
  },
  {
    quote:
      "Documentation was complete and verified before possession, and the internal road and drainage were already in place. The layout was delivered exactly as it had been represented to us.",
    name: "Vaishali P.",
    role: "Plot owner, Pisadevi",
  },
  {
    quote:
      "Measurement records and departmental documentation were maintained accurately for the full duration of the contract. That is not common, and it made certification and billing straightforward.",
    name: "Ramesh J.",
    role: "Coordinator, public works contract",
  },
]

export const director = {
  name: "Pradip Ramchandra Kale",
  initials: "PK",
  qualification: "B.E. Civil",
  role: "Founder & Director",
  photo: directorPhoto,
  bio: `Pradip Kale has worked on civil construction sites since ${EXPERIENCE_SINCE} — ${yearsOfExperience} years across industrial civil works, plotted development and departmental contracts. He supervises execution directly, and every estimate and handover is approved by him.`,
  quote:
    "We commit only to work we are equipped to complete, and we deliver it to specification. A contractor is judged after handover, not before it.",
  facts: [
    { value: `${yearsOfExperience}+`, label: "Years on site" },
    { value: "B.E.", label: "Civil engineering" },
    { value: "04", label: "Divisions supervised" },
  ],
}

export const credentials = [
  `${yearsOfExperience}+ years of site experience`,
  "Led by a B.E. Civil engineer",
  "Registered government contractor",
  "Approved vendor — Megh Engineering Ltd., Hyderabad",
]
