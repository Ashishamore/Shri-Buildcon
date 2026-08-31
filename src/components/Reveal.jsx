import { useEffect, useRef, useState } from "react"

/** Fades a block in the first time it scrolls into view. */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
