const ModalNavigationMobile = () => {
  return (
    <div className="w-4/5 px-4 py-8 mx-8 gap-6 bg-dark-violet flex flex-col items-center rounded-xl z-50 absolute top-20">
        <div className="w-full flex flex-col items-center gap-8">
            <a href="" className="text-white font-bold">Features</a>
            <a href="" className="text-white font-bold">Prices</a>
            <a href="" className="text-white font-bold">Resources</a>
        </div>
        <div className="h-0.5 w-full bg-gray-10/30"></div>
        <div className="w-full flex flex-col items-center gap-4">
            <button type="button" className="w-full p-2 rounded-full text-white font-bold">Login</button>
            <button type="button" className="w-full p-2 rounded-full bg-cyan text-white font-bold">Sign Up</button>
        </div>
    </div>
  )
}

export default ModalNavigationMobile