import Hero from "../components/Hero"
import Navigation from "../components/Navigation"

const Home = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center">
      <Navigation />
      <Hero />
    </div>
  )
}

export default Home