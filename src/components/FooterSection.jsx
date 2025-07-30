import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const FooterSection = () => {
  const footerRef = useRef(null)
  const headingRef = useRef(null)
  const buttonRef = useRef(null)
  const copyrightRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            end: "center 80%",
            scrub: true,
          },
        }
      )

      gsap.fromTo(
        [headingRef.current, buttonRef.current, copyrightRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            scrub: true,
          },
        }
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer
      ref={footerRef}
      className="relative min-h-[60vh] w-full text-white flex flex-col items-center justify-center px-8 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-[-2]">
        <img
          src="/images/footer-bg.jpg"
          alt="Footer background"
          className="w-full h-full object-cover opacity-80" 
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/80 to-black/90 backdrop-blur-sm z-[-1]" />

      <h3
        ref={headingRef}
        className="text-3xl md:text-5xl font-extrabold text-center mb-8 tracking-tight leading-snug drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
      >
        Ready to build <span className="text-indigo-400">cinematic</span> experiences?
      </h3>

      <a
        ref={buttonRef}
        href="#"
        className="px-10 py-4 bg-white text-black text-lg font-semibold rounded-full shadow-lg hover:bg-indigo-500 hover:text-white transition duration-300 transform hover:scale-105"
      >
        Let’s Work Together
      </a>

      <div
        ref={copyrightRef}
        className="mt-16 text-sm text-gray-400 text-center"
      >
        © {new Date().getFullYear()} <span className="text-gray-500">Your Name</span>. All rights reserved.
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500/60" />
    </footer>
)
}

export default FooterSection
