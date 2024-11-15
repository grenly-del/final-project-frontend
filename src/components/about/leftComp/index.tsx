import type { LeftType } from "../../../pages/about"
import { useEffect, useState } from "react"
import LoadingBars from "../../loadingBars"
import {AnimatePresence, motion} from 'framer-motion'
import { animasiBtnVarians, bouncing, leftBouncing, transitionSettings } from "../../../config/animation";
interface LeftCompProps {
    data?: LeftType; // Tambahkan ? agar bisa undefined
}

const LeftComp:React.FC<LeftCompProps> = ({data}) => {
    const [getData, setData] = useState<LeftType | null>(null); // Mulai dengan `null` agar mudah mendeteksi perubahan
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log(data)
        if (data != undefined) {
            setData(data); // Set data baru yang diterima dari parent
            setIsLoading(false); // Set isLoading ke false jika data tersedia
        }
    }, [data]); 

    return (
        <>
        <AnimatePresence>
        {!isLoading && getData ? (
            <aside className="w-[100%%] relative h-[100vh] flex items-center">
                <main>
                    <motion.p
                    variants={bouncing}
                    animate="animate"
                    transition={{
                        duration: 0.5,
                        bounce: true
                    }}
                    >{getData.name}</motion.p>
                    <motion.h2 
                    className="font-bold text-5xl"
                    variants={leftBouncing}
                    initial="initial"
                    animate="animate"
                    transition={{
                        duration:0.4,
                        delay: 0.5
                    }}
                    >{getData.title.first} <span className="bg-gradient-to-r from-secondColor to-firstColor bg-clip-text text-transparent">{getData.title.second}</span>
                    
                    
                    </motion.h2>
                    <motion.p className="font-light mt-6"
                    initial="initial"
                    variants={leftBouncing}
                    animate="animate"
                    transition={{
                        x: {
                            duration: 0.4,
                            delay: 0.7,
                        },
                        opacity: {
                            duration: 0.2
                        }
                    }}
                    
                    >{getData.paragraph}</motion.p>
                    <div className="mt-16 flex">
                        <motion.div 
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "10px"
                        }}
                        variants={animasiBtnVarians}
                        initial="initial"
                        animate="animate"
                        transition={transitionSettings}
                        >
                        <a href="/details" className="btn-style">{getData.button}</a>
                        </motion.div>
                    </div>
                </main>
            </aside>
        ): (

            <LoadingBars />
        )}
        </AnimatePresence>
        </>
    )
}

export default LeftComp