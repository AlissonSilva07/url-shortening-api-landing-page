import SingleStatistic from "./SingleStatistic"

import BrandRecognition from "../assets/icon-brand-recognition.svg"
import DetailedRecords from "../assets/icon-detailed-records.svg"
import FullyCustomizable from "../assets/icon-fully-customizable.svg"

const AdvancedStatistics = () => {
  return (
    <div className="w-full bg-gray-10/20 px-8 pt-40 pb-8 flex flex-col items-center gap-16">
        <div className="w-full flex flex-col items-center gap-4">
            <p className="text-3xl text-dark-violet font-bold text-center">Advanced Statistics</p>
            <p className="text-center">Track how our links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className="flex flex-col items-center gap-16 relative">
            <div className="absolute bottom-0 w-2 h-full bg-cyan"></div>
            <SingleStatistic 
                img={<img src={BrandRecognition} alt="Brand recognition"/>}
                title="Brand Recognition"
                subtitle="Boost your brand with each click. Generic links don't mean a thing. Branded links help instil confidence in your content." />
            <SingleStatistic 
                img={<img src={DetailedRecords} alt="Detailed records"/>}
                title="Detailed Records"
                subtitle="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." />
            <SingleStatistic 
                img={<img src={FullyCustomizable} alt="Fully customizable"/>}
                title="Fully Customizable"
                subtitle="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." />
        </div>
    </div>
  )
}

export default AdvancedStatistics