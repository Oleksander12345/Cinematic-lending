import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const HeroSection = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const subheadingRef = useRef(null)
  const ctaRef = useRef(null)
  const overlayRef = useRef(null)

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    // Overlay fade
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.5,
    })

    // Text animations
    gsap.fromTo(
      headingRef.current,
      { y: 100, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.6,
        delay: 1,
        ease: "expo.out",
      }
    )

    gsap.fromTo(
      subheadingRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        delay: 1.8,
        ease: "expo.out",
      }
    )

    gsap.fromTo(
      ctaRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 2.4,
        ease: "expo.out",
      }
    )

    // Zoom-out effect on scroll
    gsap.to(sectionRef.current, {
      scale: 0.95,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      ease: "none",
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
        autoPlay
        loop
        muted
        playsInline
      >
        {/* <source src="/videos/visual-bg.mp4" type="video/mp4" /> */}
      </video>
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black opacity-70 z-[-1]"
      ></div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1
          ref={headingRef}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)]"
        >
          Unlock the Cinematic Web
        </h1>
        <p
          ref={subheadingRef}
          className="mt-6 text-lg md:text-xl text-gray-200 backdrop-blur-md"
        >
          A scroll-based immersive experience like never before.
        </p>
        <button
          ref={ctaRef}
          onClick={handleScroll}
          className="mt-10 px-8 py-4 bg-white text-black text-lg font-semibold rounded-lg shadow-xl hover:bg-gray-100 transition-all duration-300"
        >
          Start Scrolling
        </button>
      </div>
    </section>
  )
}

export default HeroSection
