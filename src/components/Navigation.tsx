import { useState } from "react"
import AppIcon from "../assets/AppIcon"
import Menu from "../assets/menu.png"
import ModalNavigationMobile from "./ModalNavigationMobile"

const Navigation = () => {

  const [ openMenu, setIsOpenMenu ] = useState<boolean>(false)

  const handleOpenMenu = () => {
    setIsOpenMenu(!openMenu)
  }

  return (
    <>
      <nav className="bg-white fixed top-0 right-0 left-0 h-20 flex items-center px-6 md:px-32 gap-8 justify-between z-50">
        <AppIcon />

        <div className="hidden flex-1 sm:flex items-center gap-4">
            <a href="" className="text-gray-10 font-bold hover:text-very-dark-blue">Features</a>
            <a href="" className="text-gray-10 font-bold hover:text-very-dark-blue">Prices</a>
            <a href="" className="text-gray-10 font-bold hover:text-very-dark-blue">Resources</a>
        </div>

        <div className="hidden sm:flex items-center gap-4">
            <button type="button" className="px-4 py-2 rounded-full text-gray-10 hover:text-very-dark-blue font-bold">Login</button>
            <button type="button" className="px-4 py-2 rounded-full bg-cyan text-white hover:bg-cyan/30 font-bold">Sign Up</button>
        </div>



        {/* Mobile Only */}            
        <button onClick={handleOpenMenu} type="button" className="sm:hidden">
          <img src={Menu} alt="" />
        </button>
      </nav>

      {openMenu && <ModalNavigationMobile /> }  
    </>             
  )
}

export default Navigation