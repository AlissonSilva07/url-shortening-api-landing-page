import AdvancedStatistics from "../components/AdvancedStatistics"
import Hero from "../components/Hero"
import LinkShortener from "../components/LinkShortener"

const Home = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center gap-8 mt-10 md:px-32">
      <Hero />
      <LinkShortener />
      <AdvancedStatistics />
    </div>
  )
}

export default Home