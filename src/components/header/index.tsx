import { FaBars } from "react-icons/fa";

const Header = () => {
    return (
        <header className='w-full fixed'>
            <main className="flex justify-between px-20">
                <div className='flex flex-col items-center'>
                    <img src="./logo-personal.png" alt="" className='w-16'/>
                    <h3 className="bg-gradient-to-r from-firstColor to-secondColor font-bold text-center text-lg bg-clip-text text-transparent text-shadow">Grantly Edward</h3>
                </div>
                <div className="flex items-center">
                    <FaBars size={20} />
                </div>
            </main>
        </header>
    )
}

export default Header