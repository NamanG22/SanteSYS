import Hero from '../components/Hero';
import Header from '../components/Header';
import CompanyCarousel from './../components/CompanyCarousel';
import Models from '../components/Models';
import PlayGround from '../components/PlayGround';
import Deployment from '../components/Deployment';
import Courses from '../components/Courses';
import Mission from '../components/Mission';
import Footer from '../components/Footer';

export const Layout = () => {
    return(
        <>
            <Header/>
            <Hero/>
            <CompanyCarousel/>      
            <Models/>
            <PlayGround/>      
            <Deployment/>
            <Courses/>
            <Mission/>
            <Footer/>
        </>
    )
} 