import {AnimatePresence} from 'framer-motion'
import {RiseLoader } from 'react-spinners';
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
               <RiseLoader color="#0824EF" />
                    
                
            </div>
            </AnimatePresence>
    )
}

export default LoadingBars