import {Routes, Route} from 'react-router-dom'
import Header from '../components/header'
import HomePage from '../pages/homepage'
import AboutPage from '../pages/about'
import DetailsPage from '../pages/details'
import ContactPage from '../pages/contact'

const ConfigRoutes = () => {
    return (
        <>
        <Header />
        <Routes>
            
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/details' element={<DetailsPage />} />
            <Route path='/contact' element={<ContactPage />} />
        </Routes>
        </>
        
    )
}

export default ConfigRoutes