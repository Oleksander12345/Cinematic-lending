import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const IntroScene = () => {
  const sectionRef = useRef(null)
  const leftTextRef = useRef(null)
  const rightTextRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom center",
          scrub: true,
        },
      })
        .fromTo(
          leftTextRef.current,
          { x: -200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.4,
            ease: "power3.out",
          }
        )
        .fromTo(
          rightTextRef.current,
          { x: 200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.4,
            ease: "power3.out",
          },
          "<"
        )
      gsap.to(sectionRef.current, {
        scale: 0.98,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex flex-col md:flex-row items-center justify-center px-8 gap-12 overflow-hidden text-white bg-black"
    >

      <div className="absolute inset-0 z-[-2]">
        <img
          src="/images/test-intro.jpg"
          alt="Intro background"
          className="w-full h-full object-cover opacity-30"
        />

      </div>


      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60 z-[-1]"></div>

      <div
        ref={leftTextRef}
        className="text-4xl md:text-6xl font-bold max-w-md leading-tight drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)]"
      >
        Everything begins
        <br />
        <span className="text-indigo-500">with a scroll</span>
      </div>
      <div
        ref={rightTextRef}
        className="text-lg max-w-md text-gray-300 leading-relaxed md:pr-6"
      >
        Scroll interactions can tell stories, guide users, and create unforgettable
        moments. This interface challenges the ordinary and invites you into a
        richer experience.
      </div>
    </section>
  )
}

export default IntroScene
