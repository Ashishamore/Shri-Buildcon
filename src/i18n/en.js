import { EXPERIENCE_SINCE, yearsOfExperience } from "../data/constants"

/*
 * English copy. This file defines the shape every other locale must match —
 * add a key here first, then mirror it in mr.js and hi.js.
 *
 * Anything tagged PLACEHOLDER must be confirmed with the client before launch.
 */
export default {
  code: "en",
  htmlLang: "en",
  label: "English",

  tagline: "Builders & Developers",

  nav: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#developments" },
    { label: "Civil works", href: "#projects" },
    { label: "Clients", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],

  header: { quote: "Get a quote", languageLabel: "Language" },

  hero: {
    eyebrow: "Chhatrapati Sambhajinagar · Maharashtra",
    title: "Civil construction and land development.",
    intro: `executes industrial civil works, solar plant infrastructure and government contracts, and develops land for residential and commercial use. The firm is led by a civil engineer with ${yearsOfExperience} years on site.`,
    visit: "Request a site visit",
    whatsapp: "WhatsApp",
    credentials: [
      `${yearsOfExperience}+ years of site experience`,
      "Led by a B.E. Civil engineer",
      "Registered government contractor",
      "Approved vendor — Megh Engineering Ltd., Hyderabad",
    ],
  },

  showcase: { cta: "View project details" },

  stats: [
    {
      value: `${yearsOfExperience}+`,
      label: "Years of site experience",
      note: `Leadership on site since ${EXPERIENCE_SINCE}`,
    },
    { value: "120+", label: "Projects completed", note: "Industrial, infrastructure and development" }, // PLACEHOLDER
    { value: "04", label: "Service divisions", note: "Land through to infrastructure" },
    { value: "25+", label: "Site personnel", note: "Engineers and supervisors" }, // PLACEHOLDER
  ],

  about: {
    eyebrow: "About the firm",
    title: "One firm, from land to finished structure.",
    paragraphs: [
      `is a civil contracting, building and land development firm based at Pisadevi, Chhatrapati Sambhajinagar. It is led by Pradip Kale, a civil engineer who has worked on construction sites since ${EXPERIENCE_SINCE}.`,
      "The firm operates across four areas: land acquisition and plotted development, industrial civil works, civil infrastructure for solar power plants as an approved vendor to Megh Engineering Ltd., Hyderabad, and government contracting as a registered contractor.",
      "Land, statutory approvals, structural work and site infrastructure are handled by the same team, so a single firm stays accountable from the first site assessment through to handover. We mobilise our own engineers and supervisors to site, wherever the project is located.",
    ],
  },

  leadership: {
    eyebrow: "Leadership",
    name: "Pradip Ramchandra Kale",
    role: "Founder & Director",
    qualification: "B.E. Civil",
    bio: `Pradip Kale has worked on civil construction sites since ${EXPERIENCE_SINCE} — ${yearsOfExperience} years across industrial civil works, plotted development and departmental contracts. He supervises execution directly, and every estimate and handover is approved by him.`,
    quote:
      "We commit only to work we are equipped to complete, and we deliver it to specification. A contractor is judged after handover, not before it.",
    facts: [
      { value: `${yearsOfExperience}+`, label: "Years on site" },
      { value: "B.E.", label: "Civil engineering" },
      { value: "04", label: "Divisions supervised" },
    ],
  },

  services: {
    eyebrow: "Our services",
    title: "Four divisions, one execution team.",
    description:
      "Land, structure and site infrastructure handled by the same engineers — no handover gaps between contractors.",
    cta: "Discuss your requirement",
    items: {
      builders: {
        title: "Builders & Developers",
        summary: "Land acquisition through sanction, development and sale of N.A. plots.",
        points: [
          "Title check and 7/12 verification",
          "Layout sanction and N.A. conversion",
          "Roads, drainage and compound wall",
        ],
      },
      industrial: {
        title: "Industrial Civil Works",
        summary:
          "Foundations, R.C.C. structures and industrial flooring, built to approved drawings.",
        points: [
          "R.C.C. and structural works",
          "Machine foundations and flooring",
          "Works inside operating plants",
        ],
      },
      solar: {
        title: "Solar Power Plant Works",
        summary: "Civil works for solar plants, as an approved vendor to Megh Engineering Ltd.",
        points: [
          "Module mounting foundations",
          "Control room and inverter yard",
          "Grading, trenching and access roads",
        ],
      },
      government: {
        title: "Government Contracts",
        summary: "Registered contractor for public works, executed to departmental specification.",
        points: [
          "Departmental tenders",
          "Roads, buildings and infrastructure",
          "Measurement books and documentation",
        ],
      },
    },
  },

  developments: {
    eyebrow: "Our developments",
    title: "Homes and plots under development.",
    description:
      "Sanctioned schemes open for booking. Each brochure carries the plans, specifications and location map in full.",
    download: "Download brochure",
    enquire: "Enquire on WhatsApp",
    items: {
      "shri-park": {
        name: "Shri Park",
        type: "3 BHK row houses",
        status: "Booking open",
        location: "Gut No. 140, Behind Maruti Temple, Pisadevi, Chhatrapati Sambhajinagar",
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
        captions: {
          elevation: "Front elevation",
          aerial: "Aerial view",
          entrance: "Entrance and gate",
        },
      },
      "shree-nagari": {
        name: "Shree Nagari",
        type: "N.A. sanctioned residential plots",
        status: "Plots available",
        location:
          "Gut No. 54 (Part), Shendra Jahangir, near Limbe Chowk, Shendra Five-Star MIDC, Chhatrapati Sambhajinagar 431 001",
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
        captions: { layout: "Sanctioned layout plan", location: "Location map" },
      },
    },
  },

  gallery: {
    eyebrow: "Completed projects",
    title: "Recent work.",
    description:
      "Industrial civil works executed for manufacturing and processing units, much of it carried out inside operating plants.",
    viewLarger: "View larger",
    previous: "Previous project",
    next: "Next project",
    close: "Close",
    categories: {
      all: "All projects",
      structures: "Structures & flooring",
      foundations: "Foundations",
      roads: "Roads & paving",
      buildings: "Buildings & utilities",
    },
    projects: {
      "peb-shed-erection": {
        title: "Industrial Shed — Structural Erection",
        detail: "Primary frame and purlin erection on completed footings",
      },
      "crane-bay-flooring": {
        title: "Crane Bay Flooring",
        detail: "Full-bay industrial floor cast beneath an operating overhead crane",
      },
      "plant-floor-rails": {
        title: "Machine Bases & Floor Rails",
        detail: "Rail-embedded flooring and machine bases in an operating unit",
      },
      "foundation-raft": {
        title: "Machine Foundation Raft",
        detail: "Raft reinforcement and column cages tied prior to concreting",
      },
      "press-foundation": {
        title: "50 MN Press Foundation",
        detail: "Deep pit foundation executed for a 50 MN hydraulic press",
      },
      "column-pedestals": {
        title: "Column Pedestals",
        detail: "R.C.C. pedestals with anchor bolt assemblies, ready for erection",
      },
      "factory-internal-road": {
        title: "Factory Internal Road",
        detail: "Concrete road adjacent to an operating shed, under curing",
      },
      "plant-yard-paving": {
        title: "Plant Yard Paving",
        detail: "Heavy-duty concrete paving across an operating plant yard",
      },
      "site-office-cabin": {
        title: "Site Office & Security Cabin",
        detail: "R.C.C. cabin constructed, plastered and finished",
      },
      "rcc-water-tank": {
        title: "Underground Water Tank",
        detail: "Two-chamber R.C.C. tank cast in situ",
      },
    },
  },

  approach: {
    eyebrow: "Our process",
    title: "Four stages, applied to every project.",
    description:
      "The same procedure governs a plotted layout, an industrial shed and a departmental contract.",
    steps: [
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
    ],
    visionLabel: "Our vision",
    vision:
      "To be recognised as a civil contracting firm that clients return to for technical competence, transparent dealing and consistent delivery — on every site, whatever its scale or location.",
    missionLabel: "Our mission",
    mission:
      "To execute every project to the approved specification, within the committed schedule and at the agreed cost; to develop land responsibly for the people and businesses who will occupy it; and to maintain a permanent team of qualified engineers and supervisors.",
    valuesEyebrow: "How we operate",
    valuesTitle: "The commitments behind the contract.",
    valuesDescription:
      "Cost and schedule are contractual obligations. These four determine whether a client returns.",
    values: [
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
    ],
  },

  /*
   * PLACEHOLDER — written to complete the design. Names are shortened so they
   * do not point to any real person. Replace all three with real, approved
   * client feedback before launch.
   */
  testimonials: {
    eyebrow: "Client feedback",
    title: "Assessed on delivery.",
    items: [
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
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Discuss your requirement.",
    description:
      "Share the site location and the scope of work. We will inspect the site and issue a written estimate. There is no charge for the assessment.",
    officeLabel: "Office",
    callLabel: "Call",
    emailLabel: "Email",
    hoursLabel: "Office hours",
    hours: "Monday to Saturday · 9:30 am to 7:00 pm", // PLACEHOLDER
    profileTitle: "Company profile (PDF)",
    profileNote: "Firm profile and completed works",
    formTitle: "Send an enquiry",
    formNote: "Submitting this opens WhatsApp with your details prepared. Fields marked * are required.",
    nameLabel: "Full name *",
    namePlaceholder: "Your name",
    phoneLabel: "Mobile number *",
    phonePlaceholder: "10-digit mobile number",
    emailLabelOptional: "Email",
    emailPlaceholder: "Optional",
    serviceLabel: "Nature of work",
    otherOption: "Other",
    detailsLabel: "Scope and details",
    detailsPlaceholder: "Site location, approximate area and scope of work.",
    submit: "Send via WhatsApp",
    sent: "WhatsApp should have opened in a new tab — send the message from there. If it did not open, please call",
    errors: {
      name: "Please enter your name.",
      phone: "Enter a 10-digit mobile number.",
      email: "Check the email address.",
    },
  },

  footer: {
    blurb:
      "Civil contractors, builders and developers at Pisadevi, Chhatrapati Sambhajinagar, Maharashtra.",
    servicesHeading: "Services",
    companyHeading: "Company",
    contactHeading: "Contact",
    profileLink: "Company profile",
    brochureSuffix: "brochure",
    rights: "All rights reserved.",
  },

  whatsapp: {
    fab: "WhatsApp us",
    fabLabel: "Chat with us on WhatsApp",
    // {name} and {project} are filled in at the call site, so word order can
    // differ freely between languages.
    heroMessage: "I would like to discuss a project with {name}. (Sent from your website)",
    generalMessage: "I would like to enquire about a project with {name}.",
    projectMessage: "I would like to enquire about {project}. (Sent from your website)",
    enquiryHeading: "Website enquiry — {name}",
    fieldName: "Name",
    fieldPhone: "Phone",
    fieldEmail: "Email",
    fieldService: "Nature of work",
    fieldScope: "Scope",
  },
}
