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

  // ⬇️ Функція прокрутки до наступного екрану
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.5,
    })

    gsap.fromTo(
      headingRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        delay: 1,
        ease: "expo.out",
      }
    )

    gsap.fromTo(
      subheadingRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 1.5,
        ease: "expo.out",
      }
    )

    gsap.fromTo(
      ctaRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 2,
        ease: "expo.out",
      }
    )

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
      className="relative h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1629731410005-2091e94b44ac?auto=format&fit=crop&w=1500&q=80)",
      }}
    >
      {/* Overlay for fade-reveal */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black opacity-70 z-10"
      ></div>

      <div className="relative z-20 text-center px-6">
        <h1
          ref={headingRef}
          className="text-5xl md:text-7xl font-black tracking-tight leading-tight drop-shadow-lg"
        >
          Unlock the Cinematic Web
        </h1>
        <p
          ref={subheadingRef}
          className="mt-6 text-lg md:text-xl text-gray-200"
        >
          A smooth scroll-based experience like never before.
        </p>
        <button
          ref={ctaRef}
          onClick={handleScroll}
          className="mt-10 px-8 py-4 bg-white text-black text-lg font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300"
        >
          Start Scrolling
        </button>
      </div>
    </section>
  )
}

export default HeroSection
