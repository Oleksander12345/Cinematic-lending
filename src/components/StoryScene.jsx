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
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.3,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
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
      className="min-h-screen py-28 bg-gradient-to-b from-white to-gray-100 text-black flex flex-col items-center justify-center px-6 md:px-12"
    >
      <h2 className="text-4xl md:text-6xl font-extrabold mb-20 text-center leading-tight tracking-tight text-gray-800 drop-shadow">
        The Scroll Story
      </h2>
      <div className="w-full max-w-4xl space-y-16">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="bg-white border-l-4 border-indigo-500 p-8 md:p-10 rounded-2xl shadow-lg transition duration-500 hover:shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-600 tracking-wide">
              {step.title}
            </h3>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed tracking-normal">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StoryScene
