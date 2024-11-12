import { NavLink } from "react-router-dom"
import {AnimatePresence, motion} from 'framer-motion'
import { useEffect, useState} from "react";
import LoadingBars from "../../loadingBars";
import type { HomeType } from "../../../pages/homepage";


const animasiBtnVarians = {
    initial: {
      x: '-500%',
      opacity: 0
    },
    animate: {
      x: '0%',
      opacity: 1,
      scale: [1, 1.15, 1]
    }
  };
  
const transitionSettings = {
    x: {
      duration: 0.2,
      delay: 0.2,
      type: 'spring'
    },
    scale: {
      delay: 1,
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'mirror'
    }
  };



const LeftComp = ({nilai}:{nilai:HomeType}) => {
    const [data, setData] = useState<HomeType>({
        subtitle: {first: '', second: '', third: ''},
        paragraph: '',
        name: '',
        button_1: '',
        button_2: ''
    })
    const [isLoading, setIsLoading] = useState(true)

    const fadeLeft = {
        initial: {
            x: '-50%',
            opacity: '0%'
        },
        animate: {
            x: '0%',
            opacity: '100%'
        }
    }
    const bouncing = {
        
        animate: {
            y: ['-100%', '-5%', '20%', '0%', '10%', '0%']
        }
    }

    const leftBouncing = {
        animate:{
            x: ['-100%', '-2%', '2%', '0%'],
        },
    }
   
    

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
                        backgroundSize: '200% 100%'
                    }}
                    animate={{
                        backgroundPosition:  ['0% 50%', '100% 50%', '0% 0%']
                    }}

                    transition={{
                        duration:2,
                        repeat: Infinity,
                        // repeatType: 'reverse',
                        ease: 'linear'
                    }}

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