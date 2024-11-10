import mobile from '../assets/images/MobBack21.png';
import { IoLogoGooglePlaystore } from "react-icons/io5";

const GetApp = ()=>{
    return(
        <div className="flex p-4 justify-center text-white">
            <div className="bg-gradient-to-l from-cyan-500 to-[#03045e] flex p-4 space-x-8 px-36 rounded-2xl ">
                <div>
                    <img src={mobile} alt="" className="w-3/4"/>
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="font-bold text-4xl">SanteSYS Health</h1>
                    <h2>It's the perfect time to join the SanteSYS ecosystem.</h2>
                    <div>
                        <button>
                        <IoLogoGooglePlaystore />
                        </button>
                        <button></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GetApp;