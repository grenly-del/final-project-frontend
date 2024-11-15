import { AnimatePresence, motion } from "framer-motion"
import { animasiBtnVarians, fadeLeft, infinityLeft, leftBouncing, transitionSettings } from "../../../config/animation"
import {useState, useEffect} from 'react'
import type { LeftType } from "../../../pages/details"
import LoadingBars from "../../loadingBars";

interface LeftCompProps {
    data?: LeftType; // Tambahkan ? agar bisa undefined
}

const DetailsComp:React.FC<LeftCompProps> = ({data}) => {
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
                {!isLoading ? (
                    <aside className="relative flex w-full h-full items-center">
                    <main>
                        <div className="relative w-full h-full mb-5">
                            <motion.div className="bg-firstColor w-32 h-1 mb-2"
                            variants={infinityLeft}
                            animate="animate"
                            transition={{
                                delay: 0.5,
                                duration: 4,
                                repeat: Infinity
                            }}
                            ></motion.div>
                            <motion.div className="bg-secondColor w-32 h-1 absolute left-20"
                            variants={infinityLeft}
                            animate="animate"
                            transition={{
                                delay: 1.5,
                                duration: 4,
                                repeat: Infinity
                            }}
                            ></motion.div>
                        </div>
                        <motion.h2 className="text-5xl font-bold"
                        variants={fadeLeft}
                        initial="initial"
                        animate="animate"
                        transition={{
                            delay: 0.4
                        }}
                        >{getData?.title}</motion.h2>
                        <motion.p className="font-light"
                        variants={leftBouncing}
                        initial="initial"
                        animate="animate"
                        >{getData?.paragraph}</motion.p>
                        <div className="mt-10 flex">
                            <motion.div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "10px"
                            }}
                            variants={animasiBtnVarians}
                            animate="animate"
                            initial="initial"
                            transition={transitionSettings}
                            >

                            <a href="/contact" className="text-white px-6 py-2 bg-gradient-to-r from-firstColor to-secondColor rounded-full">{getData?.button}</a>

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

export default DetailsComp