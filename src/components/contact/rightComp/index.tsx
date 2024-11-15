import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import {AnimatePresence, motion} from 'framer-motion'
import { bouncing, fadeLeft, fadeRightSkills, fadeRigth } from '../../../config/animation'
import type { RightType } from '../../../pages/contact'
interface RightCompProps {
    data?: RightType
}
const RightComp:React.FC<RightCompProps> = ({data}) => {
    return (
        
            <aside className="w-full h-full relative">
                <main className="mt-20">
                    <h1 className="text-2xl font-bold"
                    
                    >{data?.title}</h1>
                    <p>{data?.desc}</p>
                    <section className="mt-7 flex gap-x-44">
                        <div className="text-[15px] flex flex-col gap-y-6">
                            {data?.contact?.map((val, index) => (
                                <div key={index} className="flex gap-x-3 items-center">
                                    <img src={val.image} alt="" />
                                    <h4>{val.field}</h4>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-y-6">
                            {data?.contact?.map((val, index) => (
                                <p key={index}>{`${val.value}`}</p>
                            ))}
                        </div>
                    </section>
                </main>
            </aside>
        
    )
}

export default RightComp