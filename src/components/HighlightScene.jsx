import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const HighlightScene = () => {
  const sectionRef = useRef(null)
  const quoteRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        quoteRef.current,
        { scale: 0.9, opacity: 0.2, filter: "blur(6px)" },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "center center",
            scrub: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-6 md:px-12"
    >
      <h2
        ref={quoteRef}
        className="text-center text-4xl md:text-6xl font-black tracking-tight leading-tight max-w-5xl drop-shadow-xl text-white"
      >
        "Design is not just what it looks like and feels like.  
        <br className="hidden md:block" />
        Design is how it works."
      </h2>
    </section>
  )
}

export default HighlightScene
