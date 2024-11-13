import { RightType } from "../../../pages/about";
import { useState, useEffect } from "react";
import LoadingBars from "../../loadingBars";
import {AnimatePresence, motion} from 'framer-motion'
import { fadeRigth } from "../../../config/animation";

interface RightCompProps {
    data?: RightType; // Tambahkan ? agar bisa undefined
}


interface EducationType {
    desc: string
    title: string
}




const RightComp:React.FC<RightCompProps> = ({data}) => {
    const [getData, setData] = useState<RightType | null>(null); // Mulai dengan `null` agar mudah mendeteksi perubahan
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (data != undefined) {
            console.log(data.desc)
            setData(data); // Set data baru yang diterima dari parent
            setIsLoading(false); // Set isLoading ke false jika data tersedia
        }
    }, [data]); 
    return (
        <>
        <AnimatePresence>
            {!isLoading ? (
                <aside className="w-[55%] relative">
                <main className="mt-10 relative">
                    <motion.h2 className="text-2xl font-bold"
                    variants={fadeRigth}
                    initial="initial"
                    animate="animate"
                    >{getData?.subtitle}</motion.h2>
                    <motion.p className="text-sm"
                    variants={fadeRigth}
                    initial="initial"
                    animate="animate"
                    transition={{
                        delay: 0.5
                    }}
                    >{getData?.desc}</motion.p>
                    <div className="flex relative mt-5 h-full w-full">
                        <div className="ml-10 w-full h-full flex flex-col gap-y-20 ">
                            {getData?.education.map((nilai:EducationType, index:number) => (
                            <motion.div key={index}
                                variants={fadeRigth}
                                initial="initial"
                                animate="animate"
                                transition={{
                                    delay: 1 + index * 0.5,
                                }}
                            >
                                <div className="w-[20px] h-[20px] bg-black rounded-[50%] absolute left-0"></div>
                                <div>
                                    <h3 className="font-bold"
                                    >{nilai.title}</h3>
                                    <p className="text-base"><span className="italic font-semibold">{nilai.title}</span> {nilai.desc}</p>
                                </div>
                            </motion.div>
                            ))}
                        </div>
                        <motion.div className="absolute h-[90%] w-[20px]"
                        initial={{
                            scale: 0,
                            opacity: 0
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1
                        }}
                        transition={{
                            delay: 3
                        }}
                        
                        >
                            <div className="absolute h-full w-1 translate-x-[-50%] left-[50%] bg-black"></div>
                        </motion.div>
                    </div>
                </main>
            </aside>
            ):(
                <LoadingBars />
            )}
        </AnimatePresence>
        </>
    )
}

export default RightComp