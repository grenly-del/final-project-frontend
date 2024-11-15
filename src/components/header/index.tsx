import { FaBars } from "react-icons/fa";
import {useState, useEffect} from 'react'

const Header = () => {
    const [isScrolled, setScrolled] = useState(false)
    const [isClick, setIsClick] = useState(false)
    const handleClick = () => {
        setIsClick(!isClick)
    }
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true)
            }else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }


    }, [])
    return (
        <header className={`w-full fixed z-10 ${isScrolled ? 'bg-[rgba(122,255,110,0.44)]' : ''}`}>
            <main className="flex justify-between px-20">
                <div className='flex flex-col items-center'>
                    <img src="./logo-personal.png" alt="" className='w-16'/>
                    <h3 className="bg-gradient-to-r from-firstColor to-secondColor font-bold text-center text-lg bg-clip-text text-transparent text-shadow">Grantly Edward</h3>
                </div>
                <div className="flex items-center">
                    <FaBars size={20} onClick={handleClick} className="cursor-pointer"/>
                </div>
                {isClick && (
                     <div className="absolute right-20 top-20">
                     <ul className="w-[250px] [&>li]:my-2 flex flex-col gap-y-10 rounded-lg text-center bg-[rgba(255,255,255,.8)] shadow-md shadow-[rgba(0,0,0,.1)]">
                         <li><a href="/" className="transition-all duration-200 ease-in-out hover:bg-slate-300 w-full block py-2">Home</a></li>
                         <li><a href="/about" className="transition-all duration-200 ease-in-out hover:bg-slate-300 w-full block py-2">Education</a></li>
                         <li><a href="/details" className="transition-all duration-200 ease-in-out hover:bg-slate-300 w-full block py-2">Skills</a></li>
                         <li><a href="/contact" className="transition-all duration-200 ease-in-out hover:bg-slate-300 w-full block py-2">Contact</a></li>
                     </ul>
                 </div>
                )}
               
            </main>
        </header>
    )
}

export default Header