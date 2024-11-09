import {Routes, Route} from 'react-router-dom'
import Header from '../components/header'
import HomePage from '../pages/homepage'
import AboutPage from '../pages/about'
import DetailsPage from '../pages/details'

const ConfigRoutes = () => {
    return (
        <>
        <Header />
        <Routes>
            
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/details' element={<DetailsPage />} />
        </Routes>
        </>
        
    )
}

export default ConfigRoutes