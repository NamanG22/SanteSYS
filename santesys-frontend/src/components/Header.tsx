import {useState} from 'react';
import { Link } from 'react-scroll';
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu=()=>{
        setIsOpen(!isOpen);
    }

    return (
        <nav role="navigation" className="absolute z-50 flex h-10 w-full items-center justify-between gap-x-1 px-4 transition-all duration-300 ease-in-out md:fixed md:px-10 lg:gap-x-1.5 lg:px-12 top-0 my-4">
            <a aria-label="home" className="flex h-full flex-1 transition-all focus:outline-coral-500 xl:flex-none" href="/">
                <div className="h-full min-h-cell-md max-h-cell-md flex grow group/cell transition-all">
                    <span className="border-mushroom-500 bg-mushroom-50 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right -mr-0.5 w-3 rounded-l-[6px] rounded-r-none border border-r-0"></span>
                    <div className="text-volcanic-900 border-mushroom-500 bg-mushroom-50 h-full min-h-cell-md max-h-cell-md truncate flex grow relative transition-all border-b border-t">
                        <div className="z-10 flex w-full items-center justify-between">
                            <div className="flex items-center px-2 py-4 xl:justify-center">
                                <p className="font-bold text-2xl flex">
                                    Sante
                                    <span className="text-red-600 flex">
                                        <span className="z-0">S</span>
                                        <span className="">Y</span>
                                        <span className="">S</span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <span className="border-mushroom-500 bg-mushroom-50 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right w-6 -skew-x-[21deg] rounded-tr-[10px] rounded-br-[4px] rounded-tl-none rounded-bl-none border border-l-0"></span>
                </div>
            </a>
            <div className="z-30 hidden h-full flex-1 xl:flex">
                <div className="h-full min-h-cell-md max-h-cell-md flex grow transition-all">
                    <span className="border-mushroom-500 bg-mushroom-50 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right w-6 -mr-4 -skew-x-[21deg] rounded-tl-[4px] rounded-bl-[10px] border border-r-0"></span>
                    <div className="text-volcanic-900 border-mushroom-500 bg-mushroom-50 h-full min-h-cell-md max-h-cell-md flex grow relative transition-all border-b border-t">
                        <div className="z-10 flex w-full items-center justify-between">
                            <ul className="z-30 h-full flex-1 flex-row items-center gap-x-10 px-8 xl:flex">
                                <li className="z-nav h-full w-auto px-0 py-0.5 2xl:relative " data-headlessui-state="">
                                    <Link 
                                        to="product-section" 
                                        smooth={true} 
                                        duration={2000}
                                        offset={-50} // Optional: Offset for fixed headers
                                        spy={true}
                                        activeClass="active"
                                        >
                                        <button className="group w-full cursor-pointer h-full relative focus:outline-none text-[14px] uppercase tracking-[0.08em] flex flex-row-reverse items-center justify-between xl:flex-row xl:justify-center before:content-[''] before:absolute before:-bottom-3 before:w-full before:h-3" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:r2q:">
                                            <div className="transition-colors duration-100 ease-in-out bg-transparent mb-[1px] h-[9px] w-[9px] rounded-full xl:mr-1.5 border border-volcanic-900 group-hover:bg-coral-500 group-hover:border-coral-500">
                                            </div>
                                            Products
                                        </button>
                                    </Link>
                                </li>
                                <div hidden 
                                    style={{
                                    position: 'fixed', 
                                    top: '1px', 
                                    left: '1px', 
                                    width: '1px',
                                    height: '0px', 
                                    padding: '0px', 
                                    margin: '-1px', 
                                    overflow: 'hidden', 
                                    clip: 'rect(0px, 0px, 0px, 0px)', 
                                    whiteSpace: 'nowrap', 
                                    borderWidth: '0px', 
                                    display: 'none'}}>
                                </div>
                                <li className="z-nav h-full w-auto px-0 py-0.5 2xl:relative" data-headlessui-state="">
                                    <button className="group w-full cursor-pointer h-full relative focus:outline-none text-[14px] uppercase tracking-[0.08em] flex flex-row-reverse items-center justify-between xl:flex-row xl:justify-center before:content-[''] before:absolute before:-bottom-3 before:w-full before:h-3" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:r2s:">
                                        <div className="transition-colors duration-100 ease-in-out bg-transparent mb-[1px] h-[9px] w-[9px] rounded-full xl:mr-1.5 border border-volcanic-900 group-hover:bg-coral-500 group-hover:border-coral-500">
                                        </div>
                                        For Hospitals
                                    </button>
                                </li>
                                <li className="z-nav h-full w-auto px-0 py-0.5 2xl:relative" data-headlessui-state="">
                                    <button className="group w-full cursor-pointer h-full relative focus:outline-none text-[14px] uppercase tracking-[0.08em] flex flex-row-reverse items-center justify-between xl:flex-row xl:justify-center before:content-[''] before:absolute before:-bottom-3 before:w-full before:h-3" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:r30:">
                                        <div className="transition-colors duration-100 ease-in-out bg-transparent mb-[1px] h-[9px] w-[9px] rounded-full xl:mr-1.5 border border-volcanic-900 group-hover:bg-coral-500 group-hover:border-coral-500">
                                        </div>
                                        Research
                                    </button>
                                </li>
                                <div hidden 
                                style={{
                                    position: 'fixed', 
                                    top: '1px', 
                                    left: '1px', 
                                    width: '1px',
                                    height: '0px', 
                                    padding: '0px', 
                                    margin: '-1px', 
                                    overflow: 'hidden', 
                                    clip: 'rect(0px, 0px, 0px, 0px)', 
                                    whiteSpace: 'nowrap', 
                                    borderWidth: '0px', 
                                    display: 'none'}}>
                                </div>
                                <li className="z-nav h-full w-auto px-0 py-0.5 2xl:relative" data-headlessui-state="">
                                    <button className="group w-full cursor-pointer h-full relative focus:outline-none text-[14px] uppercase tracking-[0.08em] flex flex-row-reverse items-center justify-between xl:flex-row xl:justify-center before:content-[''] before:absolute before:-bottom-3 before:w-full before:h-3" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:r32:">
                                        <div className="transition-colors duration-100 ease-in-out bg-transparent mb-[1px] h-[9px] w-[9px] rounded-full xl:mr-1.5 border border-volcanic-900 group-hover:bg-coral-500 group-hover:border-coral-500">
                                        </div>
                                        Company
                                    </button>
                                </li>
                                <div 
                                    style={{
                                    position: 'fixed', 
                                    top: '1px', 
                                    left: '1px', 
                                    width: '1px',
                                    height: '0px', 
                                    padding: '0px', 
                                    margin: '-1px', 
                                    overflow: 'hidden', 
                                    clip: 'rect(0px, 0px, 0px, 0px)', 
                                    whiteSpace: 'nowrap', 
                                    borderWidth: '0px', 
                                    display: 'none'}}>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <span className="border-mushroom-500 bg-mushroom-50 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right w-6 -skew-x-[21deg] rounded-tr-[10px] rounded-br-[4px] rounded-l-none border border-l-0"></span>
                </div>
            </div>
            <a href="/" rel="noopener noreferrer" target="_blank" data-fs-element="Marketing>Nav>Try now" className="focus:outline-coral-500">
                <div className="hidden h-full xl:flex">
                    <div className="h-full min-h-cell-md max-h-cell-md flex grow group/cell transition-all">
                        <span className="border-mushroom-500 bg-mushroom-50 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right w-6 -mr-4 -skew-x-[21deg] rounded-tl-[4px] rounded-bl-[10px] rounded-r-none border border-r-0"></span>
                        <div className="text-volcanic-900 border-mushroom-500 bg-mushroom-50 h-full min-h-cell-md max-h-cell-md truncate flex grow relative transition-all border-b border-t">
                            <div className="z-10 flex w-full items-center justify-between">
                                <p className="text-[14px] font-body px-2 py-6 uppercase tracking-[0.08em]">
                                    <span>Try now</span>
                                    <br/>
                                </p>
                            </div>
                        </div>
                        <span className="border-mushroom-500 bg-mushroom-50 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right -ml-0.5 w-3 rounded-r-[6px] border border-l-0"></span>
                    </div>
                </div>
            </a>
            <div className="relative z-nav h-full xl:hidden " data-headlessui-state="" >
                <button aria-label={isOpen ? "close":"menu"} onClick={toggleMenu} type="button" aria-expanded={isOpen} data-headlessui-state=""  id="headlessui-popover-button-:Rb57rrikva: ">
                    <div className="h-full min-h-cell-md max-h-cell-md flex grow group/cell transition-all">
                        <span className="border-mushroom-500 bg-mushroom-50 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right w-6 -mr-4 -skew-x-[21deg] rounded-tl-[4px] rounded-bl-[10px] border border-r-0"></span>
                        <div className="text-volcanic-900 border-mushroom-500 bg-mushroom-50 h-full min-h-cell-md max-h-cell-md truncate flex grow relative transition-all border-b border-t">
                            <div className="z-10 flex w-full items-center justify-between">
                                {isOpen ? <IoIosClose className="icon-default icon-close text-icon-sm"/>:<IoIosMenu className="icon-default icon-menu text-icon-sm"/>}
                            </div>
                        </div>
                        <span className="border-mushroom-500 bg-mushroom-50 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right -ml-0.5 w-3 rounded-r-[6px] border border-l-0"></span>
                    </div>
                </button>
                {isOpen && <div className="fixed right-0 top-0 z-30 sm:right-4 md:right-10 lg:right-12 flex flex-col justify-between overflow-y-auto xl:hidden bg-mushroom-50 sm:rounded-md sm:border sm:pt-0 h-full w-screen sm:w-[335px] sm:top-16 sm:h-[90%]" id="headlessui-popover-panel-:r4m:" tabIndex={-1} data-headlessui-state="open">
                    <div>
                        <div className="flex items-center justify-between border-b border-marble-400 px-5 py-3 sm:hidden">
                            <a href="/">
                                <button aria-label="home" type="button" data-headlessui-state="open">
                                    <div className="pl-5">
                                        <p className="font-bold text-2xl flex">
                                            Sante
                                            <span className="text-red-600 flex">
                                                <span className="z-0">S</span>
                                                <span className="">Y</span>
                                                <span className="">S</span>
                                            </span>
                                        </p>
                                    </div>
                                </button>
                            </a>
                            <button aria-label="close" type="button" onClick={toggleMenu} data-headlessui-state="open">
                                <IoIosClose className="icon-default icon-close text-icon-sm"/>
                            </button>
                        </div>
                        <ul className="flex flex-col items-center border-marble-400 [&amp;>*]:border-b">
                            <li className="z-nav w-full px-5 pl-10 py-4">
                                <button
                                    className="group w-full cursor-pointer h-full relative focus:outline-none text-[14px] uppercase tracking-[0.08em] flex flex-row-reverse items-center justify-between xl:flex-row xl:justify-center before:content-[''] before:absolute before:-bottom-3 before:w-full before:h-3">
                                    <div className="transition-colors duration-100 ease-in-out bg-transparent mb-[1px] h-[9px] w-[9px] rounded-full xl:mr-1.5 border border-volcanic-800 group-hover:border-coral-500 group-hover:bg-coral-500 group-focus:border-coral-500 group-focus:bg-coral-500"></div>
                                    Products
                                </button>
                            </li>
                            <li className="z-nav w-full px-5 pl-10 py-4">
                                <button className="group w-full cursor-pointer h-full relative focus:outline-none text-[14px] uppercase tracking-[0.08em] flex flex-row-reverse items-center justify-between xl:flex-row xl:justify-center before:content-[''] before:absolute before:-bottom-3 before:w-full before:h-3">
                                    <div className="transition-colors duration-100 ease-in-out bg-transparent mb-[1px] h-[9px] w-[9px] rounded-full xl:mr-1.5 border border-volcanic-800 group-hover:border-coral-500 group-hover:bg-coral-500 group-focus:border-coral-500 group-focus:bg-coral-500"></div>
                                    For Business
                                </button>
                            </li>
                            <li className="z-nav w-full px-5 pl-10 py-4">
                                <button className="group w-full cursor-pointer h-full relative focus:outline-none text-[14px] uppercase tracking-[0.08em] flex flex-row-reverse items-center justify-between xl:flex-row xl:justify-center before:content-[''] before:absolute before:-bottom-3 before:w-full before:h-3">
                                    <div className="transition-colors duration-100 ease-in-out bg-transparent mb-[1px] h-[9px] w-[9px] rounded-full xl:mr-1.5 border border-volcanic-800 group-hover:border-coral-500 group-hover:bg-coral-500 group-focus:border-coral-500 group-focus:bg-coral-500"></div>
                                    Developers
                                </button>
                            </li>
                            <li className="z-nav w-full px-5 pl-10 py-4">
                                <button className="group w-full cursor-pointer h-full relative focus:outline-none text-[14px] uppercase tracking-[0.08em] flex flex-row-reverse items-center justify-between xl:flex-row xl:justify-center before:content-[''] before:absolute before:-bottom-3 before:w-full before:h-3">
                                    <div className="transition-colors duration-100 ease-in-out bg-transparent mb-[1px] h-[9px] w-[9px] rounded-full xl:mr-1.5 border border-volcanic-800 group-hover:border-coral-500 group-hover:bg-coral-500 group-focus:border-coral-500 group-focus:bg-coral-500"></div>
                                    Research
                                </button>
                            </li>
                            <li className="z-nav w-full px-5 pl-10 py-4">
                                <button className="group w-full cursor-pointer h-full relative focus:outline-none text-[14px] uppercase tracking-[0.08em] flex flex-row-reverse items-center justify-between xl:flex-row xl:justify-center before:content-[''] before:absolute before:-bottom-3 before:w-full before:h-3">
                                    <div className="transition-colors duration-100 ease-in-out bg-transparent mb-[1px] h-[9px] w-[9px] rounded-full xl:mr-1.5 border border-volcanic-800 group-hover:border-coral-500 group-hover:bg-coral-500 group-focus:border-coral-500 group-focus:bg-coral-500"></div>
                                    Company
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="flex border-t border-marble-400 p-5 justify-center">
                        <div className="flex w-full flex-col">
                            <a rel="noopener noreferrer" className="focus:outline-none disabled:cursor-not-allowed inline-block" target="_blank" data-fs-element="Marketing>Nav>Try now" href="https://dashboard.cohere.ai/welcome/register">
                                <div className="relative flex grow">
                                    <div className="z-10 flex grow gap-x-2.5">
                                        <div className="h-full min-h-cell-md max-h-cell-md flex grow group/cell transition-all">
                                            <span className="bg-volcanic-900 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right -mr-0.5 w-3 rounded-l-[6px] rounded-r-none border-transparent"></span>
                                            <div className="bg-volcanic-900 text-white h-full min-h-cell-md max-h-cell-md truncate flex grow justify-between items-center transition-colors bg-clip-padding">
                                                <div className="z-10 w-full">
                                                    <span className="px-0 justify-between flex w-full items-center transition-all">
                                                        <span className="text-[14px] font-body uppercase">
                                                            <span>Try now</span>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="bg-volcanic-900 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right w-6 -skew-x-[21deg] rounded-tr-[10px] rounded-br-[4px] rounded-l-none border-transparent"></span>
                                        </div>
                                        <div className="h-full min-h-cell-md max-h-cell-md flex grow group transition-all -ml-1 grow-0 w-[]">
                                            <span className="bg-volcanic-900 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right w-6 -mr-4 -skew-x-[21deg] rounded-tl-[4px] rounded-r-none rounded-bl-[10px] border-transparent"></span>
                                            <div className="bg-volcanic-900 text-white h-full min-h-cell-md max-h-cell-md truncate flex grow justify-between items-center transition-colors bg-clip-padding">
                                                <div className="z-10 w-full">
                                                    <span className="px-0 flex justify-center transition-all">
                                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="bg-volcanic-900 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right -ml-0.5 w-3 rounded-r-[6px] border-transparent"></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a rel="noopener noreferrer" className="mt-3 focus:outline-none disabled:cursor-not-allowed inline-block" target="_blank" data-fs-element="Marketing>Nav>Sign in" href="https://dashboard.cohere.ai/welcome/login">
                                <div className="relative flex grow">
                                    <div className="z-10 flex grow gap-x-2.5">
                                        <div className="h-full min-h-cell-md max-h-cell-md flex grow group/cell transition-all">
                                            <span className="border-volcanic-900 bg-marble-100 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right -mr-0.5 w-3 rounded-l-[6px] rounded-r-none border border-r-0"></span>
                                            <div className="text-volcanic-900 border-volcanic-900 bg-marble-100 h-full min-h-cell-md max-h-cell-md truncate group-hover/cell:rounded-br-md flex grow relative transition-all border-b border-t">
                                                <div className="z-10 flex w-full items-center justify-between">
                                                    <span className="px-0 justify-between flex w-full items-center transition-all">
                                                        <span className="text-[14px] font-body uppercase">
                                                            <span>Sign in</span>
                                                            <br/>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="transition-all bg-clip-padding origin-top-right -ml-1 w-3 rounded-br-[6px] rounded-tr-[6px] border-b border-r border-t group-hover/cell:w-5 group-hover/cell:-skew-x-[18deg] group-hover/cell:rounded-br-[.25rem] group-hover/cell:rounded-tr-[0.6rem] bg-marble-100 border-volcanic-900 h-full min-h-cell-md max-h-cell-md"></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>}
            </div>
            <div    
                hidden
                style={{
                    position: "fixed",
                    top: "1px",
                    left: "1px",
                    width: "1px",
                    height: "0",
                    padding: "0",
                    margin: "-1px",
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    borderWidth: "0",
                    display: "none",
                }}>
            </div>
        </nav>    
    );
  };
  
  export default Header;
  