import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const StoryScene = () => {
  const sectionRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemsRef.current,
        { y: 100, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.3,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const steps = [
    {
      title: "01. Concept",
      text: "Every great interface starts with a concept. The spark, the idea, the purpose.",
    },
    {
      title: "02. Design",
      text: "Visuals, motion, and interaction all blend together in a cohesive layout.",
    },
    {
      title: "03. Execution",
      text: "Perfected in code, refined through animation, and delivered to the user.",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-32 px-6 md:px-12 text-white flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-[-2]">
        <img
          src="/images/story-bg.jpg"
          alt="story background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 backdrop-blur-md z-[-1]" />

      <h2 className="text-5xl md:text-6xl font-extrabold mb-20 text-center leading-tight tracking-tight drop-shadow-[0_5px_20px_rgba(0,0,0,0.8)]">
        The Scroll Story
      </h2>

      <div className="w-full max-w-4xl space-y-16 z-10">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="bg-black/50 backdrop-blur-xl border-l-4 border-indigo-500 p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition duration-700"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-400 tracking-wide">
              {step.title}
            </h3>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed tracking-normal">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StoryScene
