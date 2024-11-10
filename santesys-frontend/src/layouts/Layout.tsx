import Header from '../components/Header';
import Hero from './../components/Hero';
import Products from '../components/Products';
import About from '../components/About';
import Ecosystem from '../components/Ecosystem';
import Vitals from '../components/Vitals';
import Role from '../components/Role';
import GetApp from '../components/GetApp';
import Video from '../components/Video';
import Demo from '../components/Demo';
import Footer from '../components/Footer';

export const Layout = () => {
    return(
        <div className="flex flex-col min-h-screen bg-white">
            <Header/>
            <div className="mt-24">
                <Hero/>
                <Products/>
                <About/>
                <Ecosystem/>
                <Vitals/>
                <Role/>
                <GetApp/>
                <Video/>
                <Demo/>
                <Footer/>
            </div>
        </div>
    )
} 