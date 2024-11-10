import logo from '../assets/images/HeaderLogo.png';

const Header = ()=>{
    return(
        <div className="fixed w-[98%] flex justify-between h-16 m-4 px-4 rounded-lg space-x-10 drop-shadow-lg bg-white">
            <div className="px-4 flex items-center">
                <img src={logo} alt="" className="w-44"/>
            </div>
            <div className="flex space-x-8 px-8">
                <button>Home</button>
                <button>Vitals</button>
                <button>Pricing</button>
            </div>
            <div className="flex space-x-4 px-4">
                <button className="border-slate-300 border my-2 px-2 rounded-md">Download App</button>
                <button className="bg-slate-900 text-white my-4 px-2 rounded-md">Contact Us</button>
            </div>
        </div>
    )
}

export default Header;