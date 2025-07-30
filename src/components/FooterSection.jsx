import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const FooterSection = () => {
  const footerRef = useRef(null)

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
            end: "bottom 80%",
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
      className="relative min-h-[60vh] bg-gradient-to-t from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-8 py-20"
    >
      <h3 className="text-3xl md:text-5xl font-extrabold text-center mb-8 tracking-tight leading-snug drop-shadow-md">
        Ready to build <span className="text-indigo-500">cinematic</span> experiences?
      </h3>

      <a
        href="#"
        className="px-8 py-4 bg-white text-black text-lg font-semibold rounded-full shadow-md hover:bg-indigo-500 hover:text-white transition duration-300"
      >
        Let’s Work Together
      </a>

      <div className="mt-16 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} <span className="text-gray-400">Your Name</span>. All rights reserved.
      </div>

      {/* Декоративний елемент (опціонально) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500" />
    </footer>
  )
}

export default FooterSection
