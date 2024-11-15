import {AnimatePresence, motion} from 'framer-motion'
import { fadeLeft, infinityLeft } from '../../../config/animation'
import type { LeftType } from '../../../pages/contact'
interface LeftCompProps {
    data?: LeftType
}

const LeftComp:React.FC<LeftCompProps> = ({data}) => {

    return (
        <AnimatePresence>
            <aside className="relative flex w-full h-full items-center">
                <main>
                    <div className="relative w-full h-full mb-5">
                        <motion.div className="bg-firstColor w-32 h-1 mb-2"
                        variants={infinityLeft}
                        animate="animate"
                        transition={{
                            duration: 4,
                            delay: 0.5,
                            repeat: Infinity
                        }}
                        ></motion.div>
                        <motion.div className="bg-secondColor w-32 h-1 absolute left-20"
                        variants={infinityLeft}
                        animate="animate"
                        transition={{
                            duration: 4,
                            delay: 1.5,
                            repeat: Infinity
                        }}
                        ></motion.div>
                    </div>
                    <motion.h2 className="text-5xl font-bold"
                    variants={fadeLeft}
                    initial="initial"
                    animate="animate"
                    transition={{
                        delay: 0.6
                    }}
                    >{data?.title}</motion.h2>
                    <motion.p className="font-light mt-5"
                    variants={fadeLeft}
                    initial="initial"
                    animate="animate"
                    transition={{
                        delay: 0.8,
                        type: 'spring'
                    }}
                    >{data?.desc}</motion.p>
                </main>
            </aside>
        </AnimatePresence>
    )
}

export default LeftComp