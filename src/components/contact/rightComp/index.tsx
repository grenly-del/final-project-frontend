import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
const RightComp = () => {
    return (
        <aside className="w-full h-full">
            <main className="mt-20">
                <h1 className="text-2xl font-bold">Visit</h1>
                <p>Visit my contact.</p>
                <section className="mt-7 flex gap-x-44">
                    <div className="text-[15px] flex flex-col gap-y-6">
                        <div className="flex gap-x-3 items-center">
                            <FaInstagram size={27}/>
                            <h4>Instagram</h4>
                        </div>
                        <div className="flex gap-x-3 items-center">
                            <FaWhatsapp size={27}/>
                            <h4>Whatsapp</h4>
                        </div>
                        <div className="flex gap-x-3 items-center">
                            <BiLogoGmail size={27}/>
                            <h4>Gmail</h4>
                        </div>
                        <div className="flex gap-x-3 items-center">
                            <FaGithub size={27}/>
                            <h4>Github</h4>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6">
                        <p>@grantly_edward</p>
                        <p>082187199940</p>
                        <p>snakeeys070@gmail.com</p>
                        <p>grenly-del</p>
                    </div>
                </section>
            </main>
        </aside>
    )
}

export default RightComp