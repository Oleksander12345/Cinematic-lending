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
        {
          scale: 0.8,
          opacity: 0,
          filter: "blur(10px)",
          y: 100,
        },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
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
      className="relative h-screen w-full overflow-hidden flex items-center justify-center px-6 md:px-12 text-white"
    >
      {/* 🔥 Фон — відео або зображення */}
      <div className="absolute inset-0 z-[-2]">
        <img
          src="/images/highlight-bg.png"
          alt="Highlight background"
          className="w-full h-full object-cover opacity-25"
        />
      </div>

      {/* 🌓 Затемнення */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 backdrop-blur-sm z-[-1]" />

      {/* 🌟 Цитата */}
      <h2
        ref={quoteRef}
        className="text-center text-4xl md:text-6xl font-black tracking-tight leading-tight max-w-5xl text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)]"
      >
        "Design is not just what it looks like and feels like.  
        <br className="hidden md:block" />
        Design is how it works."
      </h2>
    </section>
  )
}

export default HighlightScene
