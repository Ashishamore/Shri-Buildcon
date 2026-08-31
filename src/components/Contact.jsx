import { useState } from "react"
import { Clock, Download, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"
import { company, services, whatsappLink } from "../data/site"

const EMPTY = { name: "", phone: "", email: "", service: services[0].title, message: "" }

function validate(form) {
  const errors = {}
  if (form.name.trim().length < 2) errors.name = "Please enter your name."
  if (!/^\d{10}$/.test(form.phone.replace(/\D/g, "").replace(/^91/, ""))) {
    errors.phone = "Enter a 10-digit mobile number."
  }
  if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) errors.email = "Check the email address."
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  /*
   * No backend yet: the enquiry is composed into a WhatsApp message so it lands
   * on the phone straight away. Swap this for a POST to a form service or an
   * API route once one exists.
   */
  function handleSubmit(event) {
    event.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    const lines = [
      `Website enquiry — ${company.name}`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      `Nature of work: ${form.service}`,
      form.message && `Scope: ${form.message}`,
    ].filter(Boolean)

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer")
    setSent(true)
    setForm(EMPTY)
  }

  const field =
    "w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-ink-800 placeholder:text-ink-300 transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none"

  return (
    <section id="contact" className="bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Discuss your requirement."
              description="Share the site location and the scope of work. We will inspect the site and issue a written estimate. There is no charge for the assessment."
            />

            <Reveal delay={100} className="mt-10 space-y-4">
              <a
                href={company.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-xl border border-sand-200 bg-white p-5 transition hover:border-ink-200 hover:shadow-md"
              >
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" strokeWidth={2} />
                <span>
                  <span className="block text-sm font-semibold text-ink-900">Office</span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink-500">
                    {company.address.lines.join(", ")}
                  </span>
                </span>
              </a>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={company.phoneHref}
                  className="flex items-start gap-4 rounded-xl border border-sand-200 bg-white p-5 transition hover:border-ink-200 hover:shadow-md"
                >
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" strokeWidth={2} />
                  <span>
                    <span className="block text-sm font-semibold text-ink-900">Call</span>
                    <span className="mt-1 block text-sm text-ink-500">{company.phoneDisplay}</span>
                  </span>
                </a>

                <a
                  href={`mailto:${company.email}`}
                  className="flex items-start gap-4 rounded-xl border border-sand-200 bg-white p-5 transition hover:border-ink-200 hover:shadow-md"
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" strokeWidth={2} />
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-ink-900">Email</span>
                    <span className="mt-1 block truncate text-sm text-ink-500">
                      {company.email}
                    </span>
                  </span>
                </a>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-sand-200 bg-white p-5">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" strokeWidth={2} />
                <span>
                  <span className="block text-sm font-semibold text-ink-900">Office hours</span>
                  <span className="mt-1 block text-sm text-ink-500">{company.hours}</span>
                </span>
              </div>

              <a
                href={company.brochureUrl}
                className="flex items-center gap-4 rounded-xl bg-ink-900 p-5 transition hover:bg-ink-800"
              >
                <Download className="h-5 w-5 shrink-0 text-brand-400" strokeWidth={2} />
                <span>
                  <span className="block text-sm font-semibold text-white">
                    Company profile (PDF)
                  </span>
                  <span className="mt-1 block text-sm text-ink-400">
                    Firm profile and completed works
                  </span>
                </span>
              </a>
            </Reveal>
          </div>

          {/* Enquiry form */}
          <Reveal delay={150}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-sand-200 bg-white p-7 shadow-sm sm:p-10"
            >
              <h3 className="text-2xl font-semibold text-ink-900">Send an enquiry</h3>
              <p className="mt-2 text-sm text-ink-500">
                Submitting this opens WhatsApp with your details prepared. Fields marked * are
                required.
              </p>

              <div className="mt-8 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink-700">
                    Full name *
                  </label>
                  <input
                    id="name"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                    className={`mt-2 ${field}`}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ink-700">
                      Mobile number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      inputMode="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="10-digit mobile number"
                      className={`mt-2 ${field}`}
                      aria-invalid={Boolean(errors.phone)}
                    />
                    {errors.phone && <p className="mt-1.5 text-sm text-red-600">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink-700">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="Optional"
                      className={`mt-2 ${field}`}
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-ink-700">
                    Nature of work
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={update("service")}
                    className={`mt-2 ${field}`}
                  >
                    {services.map((service) => (
                      <option key={service.id}>{service.title}</option>
                    ))}
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink-700">
                    Scope and details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Site location, approximate area and scope of work."
                    className={`mt-2 resize-none ${field}`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-ink-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-ink-800"
              >
                <Send className="h-4 w-4" />
                Send via WhatsApp
              </button>

              {sent && (
                <p
                  role="status"
                  className="mt-4 flex items-center gap-2 rounded-lg bg-sand-100 px-4 py-3 text-sm text-ink-700"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  WhatsApp should have opened in a new tab — send the message from there. If it
                  did not open, please call {company.phoneDisplay}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
