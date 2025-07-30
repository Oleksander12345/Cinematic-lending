import FooterSection from "./components/FooterSection"
import HeroSection from "./components/HeroSection"
import HighlightScene from "./components/HighlightScene"
import ImmersionScene from "./components/ImmersionScene"
import IntroScene from "./components/IntroScene"
import StoryScene from "./components/StoryScene"
import VisualShowcaseScene from "./components/VisualShowcaseScene"

function App() {
  return (
    <>
      <HeroSection />
      <IntroScene />
      <VisualShowcaseScene />
      <ImmersionScene />
      <StoryScene />
      <HighlightScene />
      <FooterSection />
    </>
  )
}

export default App
