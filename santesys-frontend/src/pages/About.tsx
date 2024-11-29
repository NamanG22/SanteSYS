import { Link } from 'react-scroll';
const About = ()=>{
    return (
        <>
            <Link to="product-section" smooth={true} duration={500}>
                <button>Scroll to Product Section</button>
            </Link>

            <section id="product-section" style={{ height: '100vh', backgroundColor: 'lightgray' }}>
            <h1>Product Section</h1>
            </section>

        </>
    )
}

export default About;