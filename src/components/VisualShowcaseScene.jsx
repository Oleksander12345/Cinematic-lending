import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const VisualShowcaseScene = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      })

      tl.fromTo(
        imageRef.current,
        { scale: 1.3, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
      ).fromTo(
        textRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" },
        "-=1"
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col md:flex-row items-center justify-center gap-16 px-8 py-20"
    >
      <img
        ref={imageRef}
        src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=700&q=80"
        alt="Visual"
        className="w-72 md:w-[400px] rounded-2xl shadow-[0_20px_60px_rgba(255,255,255,0.15)] object-cover transition-transform duration-500"
      />
      <div
        ref={textRef}
        className="max-w-md text-center md:text-left space-y-6 px-2"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-md">
          Cinematic Motion<br /> in Every Scroll
        </h2>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          The image comes to life as you scroll. This is more than animation — it's
          motion storytelling, engaging the user with visual rhythm and emotion.
        </p>
      </div>
    </section>
  )
}

export default VisualShowcaseScene
