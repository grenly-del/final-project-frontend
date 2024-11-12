import { useEffect, useState} from "react"
import {AnimatePresence, motion} from 'framer-motion'
import LoadingBars from "../../loadingBars"

const RightComp = ({urlImage}:{urlImage:string}) => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if(urlImage != '') {
            setIsLoading(false)
        }
        setIsLoading(true)
    }, [urlImage])
    return (
        <>
        <AnimatePresence mode="wait">
        {isLoading ? (
            <aside className="w-[70%]">
            <motion.img src={urlImage} alt=""
            initial={{
                scale: 0,
                opacity: '0%'
            }}
            animate={{
                scale: 1,
                opacity: '100%'
            }}

            transition={{
                duration: 1,
                delay: 1
            }}
            />
            

           
            
            
        </aside>
        ): (
            <LoadingBars />
        )}
        </AnimatePresence>
        </>
    )
}

export default RightComp