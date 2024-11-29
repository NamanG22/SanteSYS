import Hero from '../components/Hero';
import CompanyCarousel from '../components/CompanyCarousel';
import Models from '../components/Models';
import PlayGround from '../components/PlayGround';
import Products from '../components/Products';
import Courses from '../components/Courses';
import Mission from '../components/Mission';

const Home = ()=>{
    return(
        <>
            <Hero/>
            <CompanyCarousel/>     
            <Models/>
            <PlayGround/>      
            <Products/>
            <Courses/>
            <Mission/>
        </>
    )
}
export default Home;