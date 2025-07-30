import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const ImmersionScene = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom+=300 top",
        scrub: true,
        pin: true,
        pinSpacing: true,
      })

      gsap.fromTo(
        textRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
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
      className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white bg-black"
    >
      {/* Відео фон */}
      <video
  className="absolute top-0 left-0 w-full h-full object-cover scale-105 brightness-75 transition duration-1000"
  src="https://media.istockphoto.com/id/1459585081/uk/%D0%B2%D1%96%D0%B4%D0%B5%D0%BE/%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B0-%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D0%B0-%D0%BC%D0%B5%D1%80%D0%B5%D0%B6%D0%B5%D0%B2%D0%B0-%D1%81%D1%96%D1%82%D0%BA%D0%B0-%D0%BD%D0%B0%D0%B4-%D0%B7%D0%B5%D0%BC%D0%BB%D0%B5%D1%8E-%D0%BD%D0%B5%D0%B9%D1%80%D0%BE%D0%BD%D0%BD%D0%B0-%D0%BC%D0%B5%D1%80%D0%B5%D0%B6%D0%B0-%D1%88%D1%82%D1%83%D1%87%D0%BD%D0%BE%D0%B3%D0%BE-%D1%96%D0%BD%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D1%83-%D1%89%D0%BE-%D1%80%D0%BE%D1%81%D1%82%D0%B5-%D1%96.mp4?s=mp4-640x640-is&k=20&c=i-iJ4SrhzRvtCXWSZeVUVq6UuE1W__WaQABYIAakwCY="
  autoPlay
  muted
  loop
  playsInline
/>

      {/* Затінення */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10 backdrop-blur-sm" />

      {/* Текст */}
      <div
        ref={textRef}
        className="relative z-20 px-6 text-center max-w-3xl"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">
          Immersive Cinematic Experience
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          This section captures attention by freezing the scroll and allowing the user
          to feel the atmosphere. Video, motion, and pinning combine into one story.
        </p>
      </div>
    </section>
  )
}

export default ImmersionScene
