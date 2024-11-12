import { NavLink } from "react-router-dom"
import {AnimatePresence, motion} from 'framer-motion'
import { useEffect, useState} from "react";
import LoadingBars from "../../loadingBars";
import type { HomeType } from "../../../pages/homepage";
import { animasiBtnVarians, transitionSettings, leftBouncing, fadeLeft, bouncing, textTransisi, textTransisiSettings } from "../../../config/animation";




const LeftComp = ({nilai}:{nilai:HomeType}) => {
    const [data, setData] = useState<HomeType>({
        subtitle: {first: '', second: '', third: ''},
        paragraph: '',
        name: '',
        button_1: '',
        button_2: ''
    })
    const [isLoading, setIsLoading] = useState(true)
   
    

    useEffect(() => {
        if (nilai && nilai.name) {
            setData({
                subtitle: nilai.subtitle,
                name: nilai.name,
                paragraph: nilai.paragraph,
                button_1: nilai.button_1,
                button_2: nilai.button_2,
            });
            setIsLoading(false); // Data berhasil diambil, set loading ke false
        }
    }, [nilai]); 

    return (
        <AnimatePresence initial={true}>
        <aside className="w-full">
            {!isLoading? (
                <main>
                <motion.p 
                className="font-normal"
                variants={bouncing}
                animate="animate"
                transition={{
                    duration: 0.4,
                    delay: 0.3,
                    ease: 'easeInOut'
                }}
                >{data.name}
                </motion.p>

                <motion.h1 
                variants={fadeLeft}
                initial="initial"
                animate="animate"
                transition={{
                    duration: 0.6,
                    delay: 0.1,
                    type: 'spring'
                }}

                className="text-5xl font-bold w-[700px]">{data.subtitle.first} 
                    <motion.span 
                    className="bg-gradient-to-r from-firstColor to-secondColor bg-clip-text text-transparent"
                    style={{
                        backgroundSize: '200% 200%'
                    }}
                    variants={textTransisi}
                    animate={{
                        backgroundPosition:  ['0% 50%', '100% 50%', '0% 0%']
                    }}

                    transition={textTransisiSettings}

                    >{data.subtitle.second}
                    
                    
                    </motion.span>{data.subtitle.third}</motion.h1>
                <motion.p 
                className="font-light mt-10"
                variants={leftBouncing}
                animate="animate"
                transition={{
                    duration: 0.2,
                    delay: 0.5,
                    ease: 'easeInOut'
                }}
                >{data.paragraph}</motion.p>
                <div className="flex gap-16 mt-10">
                    <motion.div 
                    variants={animasiBtnVarians}
                    initial="initial"

                    animate="animate"

                    transition={transitionSettings}
                    >
                        <NavLink to="#" className={'bg-gradient-to-r from-firstColor to-secondColor px-5 py-2 rounded-full text-center transition-all duration-1000 text-white hover:from-secondColor hover:to-firstColor'}>{data.button_1}</NavLink>
                    </motion.div>
                    <motion.div 
                    variants={animasiBtnVarians}
                    initial="initial"
                    animate="animate"
                    transition={transitionSettings}
                    >
                        <NavLink to="E" className={'bg-gradient-to-r from-firstColor to-secondColor px-5 py-2 rounded-full text-center transition-all duration-1000 text-white hover:from-secondColor hover:to-firstColor'}>{data.button_2}</NavLink>
                    </motion.div>
                </div>
            </main>
            ) : (
                <LoadingBars />
            )}
           
        </aside>
        </AnimatePresence>
    )
}

export default LeftComp