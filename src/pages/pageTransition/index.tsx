import {motion} from 'framer-motion'
import { ReactNode } from 'react'

interface PageTransitionProps {
    children: ReactNode
}

const PageTransition:React.FC<PageTransitionProps> = ({children}) => {
    return (
        <section className='relative w-full h-[100vh]'>
            <motion.div
        className="fixed inset-0 bg-gray-800 origin-bottom z-[99999999]"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Konten Halaman */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>

      {/* Overlay Keluar */}
      <motion.div
        className="fixed inset-0 bg-gray-800 origin-top z-[99999999]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }} />
        </section>
    )
}

export default PageTransition