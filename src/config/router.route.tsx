import {Routes, Route} from 'react-router-dom'
import Header from '../components/header'
import HomePage from '../pages/homepage'

const ConfigRoutes = () => {
    return (
        <>
        <Header />
        <Routes>
            <Route path='/' element={<HomePage />} />

        </Routes>
        </>
        
    )
}

export default ConfigRoutes