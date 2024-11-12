import {motion, AnimatePresence} from 'framer-motion'
import { AiOutlineLoading } from "react-icons/ai";

const LoadingBars = () => {
    
    return (
        <AnimatePresence>
        <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    position: 'fixed',
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0'
                }}
            >
               
                    <motion.div
                        animate={{ rotate: 360 }} // Rotasi penuh pada ikon
                        transition={{
                            duration: 1,
                            ease: "linear",
                            repeat: Infinity
                        }}
                    >
                        <AiOutlineLoading size={100} />
                    </motion.div>
                
            </div>
            </AnimatePresence>
    )
}

export default LoadingBars