import Hero from "../components/Hero"
import LinkShortener from "../components/LinkShortener"
import Navigation from "../components/Navigation"

const Home = () => {
  return (
    <div className="bg-white flex flex-col items-center gap-6">
      <Navigation />
      <Hero />
      <LinkShortener />
    </div>
  )
}

export default Home