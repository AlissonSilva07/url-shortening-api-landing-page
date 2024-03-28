import IllustrationWorking from "../assets/IllustrationWorking"

const Hero = () => {
  return (
    <div className="w-full mt-20 flex flex-col items-center">
        <div className="w-full overflow-hidden">
          <IllustrationWorking className="scale-75 -translate-x-12 -translate-y-10" />
        </div>

        <div className="flex flex-col items-center gap-8 mx-4">
          <p className="text-4xl text-center text-very-dark-blue font-bold">More than just shorter links</p>

          <p className="text-center text-gray-10">Build your brand's recognition and get detailed insights on how your links are performing.</p>

          <button type="button" className="py-4 px-8 bg-cyan text-xl text-white font-bold rounded-full">Get Started</button>
        </div>
    </div>
  )
}

export default Hero