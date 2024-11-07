import { NavLink } from "react-router-dom"

const LeftComp = () => {
    return (
        <aside className="w-full">
            <main>
                <p className="font-normal">Grantly Edward</p>
                <h1 className="text-5xl font-bold w-[700px]">Hi, Welcome To <span className="bg-gradient-to-r from-firstColor to-secondColor bg-clip-text text-transparent">My Personal</span> Website</h1>
                <p className="font-light mt-10">In this website, you will see everything about me</p>
                <div className="flex gap-x-10 mt-10">
                    <NavLink to="#" className={'bg-gradient-to-r from-firstColor to-secondColor w-36 py-2 rounded-full text-center text-white '}>Resume</NavLink>
                    <NavLink to="E" className={'bg-gradient-to-r from-firstColor to-secondColor w-36 py-2 rounded-full text-center text-white'}>Contact Me</NavLink>
                </div>
            </main>
        </aside>
    )
}

export default LeftComp