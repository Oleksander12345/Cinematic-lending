import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const IntroScene = () => {
  const sectionRef = useRef(null)
  const leftTextRef = useRef(null)
  const rightTextRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom center",
        scrub: true,
      },
    })

    tl.fromTo(
      leftTextRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power2.out" }
    ).fromTo(
      rightTextRef.current,
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power2.out" },
      "<" // одночасно
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="h-screen bg-white text-black flex flex-col md:flex-row items-center justify-center px-8 gap-12 bg-gradient-to-br from-white to-gray-100"
    >
      <div
        ref={leftTextRef}
        className="text-4xl md:text-6xl font-extrabold max-w-md text-left leading-tight"
      >
        Everything begins<br />
        <span className="text-indigo-600">with a scroll</span>
      </div>
      <div
        ref={rightTextRef}
        className="text-lg max-w-md text-gray-600 leading-relaxed md:pr-6"
      >
        Scroll interactions can tell stories, guide users, and create unforgettable
        moments. This interface challenges the ordinary and invites you into a
        richer experience.
      </div>
    </section>
  )
}

export default IntroScene
