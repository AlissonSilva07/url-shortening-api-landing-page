import IllustrationWorking from "../assets/IllustrationWorking"

const Hero = () => {
  return (
    <div className="w-full flex flex-col gap-6 md:flex-row-reverse items-center">
        <div className="w-full overflow-hidden">
          <IllustrationWorking className="scale-[0.77] md:scale-100 -translate-x-20 md:translate-x-4" />
        </div>

        <div className="md:w-fit flex flex-col items-center md:items-start gap-6">
          <p className="text-4xl md:text-5xl text-center md:text-start text-very-dark-blue font-bold">More than just shorter links</p>

          <p className="text-center md:text-start text-gray-10">Build your brand's recognition and get detailed insights on how your links are performing.</p>

          <button type="button" className="py-4 px-8 bg-cyan text-xl text-white font-bold rounded-full">Get Started</button>
        </div>
    </div>
  )
}

export default Hero