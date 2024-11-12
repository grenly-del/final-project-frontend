import {Routes, Route, useLocation, Location} from 'react-router-dom'
import HomePage from '../pages/homepage'
import AboutPage from '../pages/about'
import DetailsPage from '../pages/details'
import ContactPage from '../pages/contact'
import PageTransition from '../pages/pageTransition'
import { AnimatePresence } from 'framer-motion'
import Header from '../components/header'
const AppRoutes = () => {
    const location:Location = useLocation()
    return (
        <AnimatePresence mode='wait' initial={false}>
                <Header />
                <Routes location={location} key={location.pathname}>
                    <Route
                    path="/"
                    element={
                        <PageTransition>
                        <HomePage />
                        </PageTransition>
                    }
                    />
                    <Route
                    path="/about"
                    element={
                        <PageTransition>
                        <AboutPage />
                        </PageTransition>
                    }
                    />
                    <Route
                    path="/details"
                    element={
                        <PageTransition>
                        <DetailsPage />
                        </PageTransition>
                    }
                    />
                    <Route
                    path="/contact"
                    element={
                        <PageTransition>
                        <ContactPage />
                        </PageTransition>
                    }
                    />
                </Routes>
            </AnimatePresence>
    )
}

export default AppRoutes
