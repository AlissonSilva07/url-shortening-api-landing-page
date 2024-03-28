import Hero from "../components/Hero"
import LinkShortener from "../components/LinkShortener"

const Home = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center gap-8 mt-10 px-6 md:px-32">
      <Hero />
      <LinkShortener />
    </div>
  )
}

export default Home