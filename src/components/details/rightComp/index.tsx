import { AnimatePresence, motion } from "framer-motion"
import { fadeRightSkills, fadeRigth } from "../../../config/animation"
import type { RightType } from "../../../pages/details"
import {useState, useEffect} from 'react'
import LoadingBars from "../../loadingBars"

interface RightCompProps {
    data?: RightType
}

const RightComp:React.FC<RightCompProps> = ({data}) => {
    const [getData, setData] = useState<RightType | null>(null); // Mulai dengan `null` agar mudah mendeteksi perubahan
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log(data)
        if (data != undefined) {
            setData(data); // Set data baru yang diterima dari parent
            setIsLoading(false); // Set isLoading ke false jika data tersedia
        }
    }, [data]);
    return (
        <AnimatePresence>
            {!isLoading? (
                <aside className="w-full">
                <main className="mt-20">
                    <motion.h1 className="text-2xl font-bold"
                    variants={fadeRigth}
                    initial="initial"
                    animate="animate"
                    transition={{
                        delay: 0.6
                    }}
                    >{getData?.subtitle}</motion.h1>
                    <motion.p
                    variants={fadeRigth}
                    initial="initial"
                    animate="animate"
                    transition={{
                        delay: 0.8
                    }}
                    >{getData?.desc}</motion.p>
                    <section className="grid grid-cols-5 gap-y-10 mt-7">
                        {getData?.skills.map((el, index) => (
                            <motion.div key={index} className="w-full"
                            variants={fadeRightSkills}
                            initial="initial"
                            animate="animate"
                            transition={{
                                x:{
                                    delay: 1 + index * 0.4
                                },
                                y: {
                                    delay: 1.5 + index * 0.4,
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: 'mirror'    
                                },
                                
                            }}
                            >
                                <div>
                                    <img src={el.image} alt={el.title} />
                                </div>
                            </motion.div>
                        ))}
                
                    </section>
                </main>
            </aside>
            ): (
                <LoadingBars/>
            )}
        </AnimatePresence>
    )
}


export default RightComp