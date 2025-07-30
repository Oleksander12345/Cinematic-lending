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

      // Паралакс і масштаб зображення
      tl.fromTo(
        imageRef.current,
        { scale: 1.2, y: 60, opacity: 0 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 1.6,
          ease: "power3.out",
        }
      )
      // Текст — плавний зсув і з’явлення
        .fromTo(
          textRef.current,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.4,
            ease: "power3.out",
          },
          "-=1"
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-8 py-20 text-white overflow-hidden"
    >
      {/* 🎥 Фонове відео або зображення */}
      <div className="absolute inset-0 z-[-2]">
        <video
          className="w-full h-full object-cover opacity-40"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/visual.mp4" type="video/mp4" />
        </video>
        {/* Або, якщо хочеш статичне зображення:
        <img src="/images/visual-bg.jpg" className="w-full h-full object-cover opacity-30" />
        */}
      </div>

      {/* 🟣 Темна вуаль поверх відео */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/50 z-[-1]"></div>

      {/* Зображення з ефектом появи */}
      <img
        ref={imageRef}
        src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=700&q=80"
        alt="Visual"
        className="w-72 md:w-[400px] rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.5)] object-cover transition-transform duration-700"
      />

      {/* Контент */}
      <div
        ref={textRef}
        className="max-w-md text-center md:text-left space-y-6 px-2"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)]">
          Cinematic Motion<br /> in Every Scroll
        </h2>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          The image comes to life as you scroll. This is more than animation — it's
          motion storytelling, engaging the user with visual rhythm and emotion.
        </p>
      </div>
    </section>
  )
}

export default VisualShowcaseScene
