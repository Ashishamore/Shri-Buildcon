import Reveal from "./Reveal"
import { stats } from "../data/site"

export default function Stats() {
  return (
    <section className="border-y border-ink-100 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 py-14 sm:px-8 lg:grid-cols-4 lg:py-16">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 80}
            className="border-ink-100 px-2 text-center lg:border-r lg:px-6 lg:last:border-r-0"
          >
            <p className="font-display text-4xl font-semibold text-ink-900 lg:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-semibold text-ink-700">{stat.label}</p>
            <p className="mt-1 text-xs text-ink-400">{stat.note}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
