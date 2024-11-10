import myImage from '../assets/images/MobBack21.png';

const Hero = ()=>{
    return(
        <div className="bg-gradient-to-l from-white to-blue-500 mx-4 rounded-lg flex items-center">
            <div className="flex flex-col w-3/4 text-center py-12 faculty-glyphic-regular">
                <h1 className="text-4xl font-extrabold">BEYOND HEALTHCARE.</h1>
                <h2 className="text-xl px-40 pb-24 pt-10">AI Powered Healthcare Automation System for Hospitals and Healthcare Providers. The single destination for all your healthcare needs.</h2>
                <button className="rounded-lg bg-[#023e8a] w-fit mx-auto p-3 font-semibold text-white">Book a Demo</button>
            </div>
            <div className="w-1/4 py-20">
                <img src={myImage} alt="image" className="h-auto w-5/6"/>
            </div>
        </div>
    )
}
export default Hero;