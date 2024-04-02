interface IProps {
    img: JSX.Element
    title: string
    subtitle: string
}

const SingleStatistic = ({ img, title, subtitle }: IProps) => {
  return (
    <div className="bg-white w-full flex flex-col items-center px-8 pt-20 pb-8 rounded-md relative">
        <div className="absolute -top-10 bg-dark-violet flex flex-col items-center justify-center p-6 rounded-full">
            {img}
        </div>
        <div className="flex flex-col items-center gap-4">
            <p className="text-2xl text-dark-violet font-bold">{title}</p>
            <p className="text-center text-gray-10">{subtitle}</p>
        </div>
    </div>
  )
}

export default SingleStatistic