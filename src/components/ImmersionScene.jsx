import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const ImmersionScene = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin секції
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom+=400 top",
        scrub: true,
        pin: true,
        pinSpacing: true,
      })

      // Поетапна поява тексту
      gsap.fromTo(
        headingRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "top top",
            scrub: true,
          },
        }
      )

      gsap.fromTo(
        paragraphRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "center center",
            end: "bottom top",
            scrub: true,
          },
        }
      )

      // Масштаб і яскравість відео
      gsap.to(videoRef.current, {
        scale: 1.1,
        filter: "brightness(0.6)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        ease: "none",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white"
    >
      {/* 🎥 Відеофон */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover scale-105 transition duration-1000 will-change-transform"
        src="https://media.istockphoto.com/id/1459585081/uk/%D0%B2%D1%96%D0%B4%D0%B5%D0%BE/%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B0-%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D0%B0-%D0%BC%D0%B5%D1%80%D0%B5%D0%B6%D0%B5%D0%B2%D0%B0-%D1%81%D1%96%D1%82%D0%BA%D0%B0-%D0%BD%D0%B0%D0%B4-%D0%B7%D0%B5%D0%BC%D0%BB%D0%B5%D1%8E-%D0%BD%D0%B5%D0%B9%D1%80%D0%BE%D0%BD%D0%BD%D0%B0-%D0%BC%D0%B5%D1%80%D0%B5%D0%B6%D0%B0-%D1%88%D1%82%D1%83%D1%87%D0%BD%D0%BE%D0%B3%D0%BE-%D1%96%D0%BD%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D1%83-%D1%89%D0%BE-%D1%80%D0%BE%D1%81%D1%82%D0%B5-%D1%96.mp4?s=mp4-640x640-is&k=20&c=i-iJ4SrhzRvtCXWSZeVUVq6UuE1W__WaQABYIAakwCY="
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 🌓 Затінення + розмиття */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 backdrop-blur-md z-10" />

      {/* Текст */}
      <div className="relative z-20 px-6 text-center max-w-2xl">
        <h2
          ref={headingRef}
          className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-[0_5px_20px_rgba(0,0,0,0.8)]"
        >
          Immersive Cinematic Experience
        </h2>
        <p
          ref={paragraphRef}
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          This section captures attention by freezing the scroll and allowing the user
          to feel the atmosphere. Video, motion, and pinning combine into one story.
        </p>
      </div>
    </section>
  )
}

export default ImmersionScene
