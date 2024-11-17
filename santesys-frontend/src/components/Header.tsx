const Header = () => {
    return (
        <nav role="navigation" className="absolute z-10 flex h-10 w-full items-center justify-between gap-x-1 px-4 transition-all duration-300 ease-in-out md:fixed md:px-10 lg:gap-x-1.5 lg:px-12 top-0 my-4">
            <a aria-label="home" className="flex h-full flex-1 transition-all focus:outline-coral-500 xl:flex-none" href="/">
                <div className="h-full min-h-cell-md max-h-cell-md flex grow group/cell transition-all">
                    <span className="border-mushroom-500 bg-white h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right -mr-0.5 w-3 rounded-l-[6px] rounded-r-none border border-r-0"></span>
                    <div className="text-volcanic-900 border-mushroom-500 bg-white h-full min-h-cell-md max-h-cell-md truncate flex grow relative transition-all border-b border-t">
                        <div className="z-10 flex w-full items-center justify-between">
                            <div className="flex items-center px-2 py-4 xl:justify-center">
                                {/* <img
                                alt="Cohere"
                                title=""
                                fetchPriority="high"
                                width="0"
                                height="0"
                                decoding="async"
                                data-nimg="1"
                                className="h-auto w-full object-contain"
                                style={{ color: 'transparent' }}
                                src="https://cdn.sanity.io/images/rjtqmwfu/production/ae020d94b599cc453cc09ebc80be06d35d953c23-102x18.svg"
                                /> */}
                                <p className="font-bold text-2xl">
                                    Sante
                                    <span className="text-red-600">
                                        <span className="z-0">S</span>
                                        <span className="">Y</span>
                                        <span className="">S</span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <span className="border-mushroom-500 bg-white h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right w-6 -skew-x-[21deg] rounded-tr-[10px] rounded-br-[4px] rounded-tl-none rounded-bl-none border border-l-0"></span>
                </div>
            </a>
            <div className="z-30 hidden h-full flex-1 xl:flex">
                <div className="h-full min-h-cell-md max-h-cell-md flex grow group transition-all">
                    <span className="border-mushroom-500 bg-white h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right w-6 -mr-4 -skew-x-[21deg] rounded-tl-[4px] rounded-bl-[10px] border border-r-0"></span>
                    <div className="text-volcanic-900 border-mushroom-500 bg-white h-full min-h-cell-md max-h-cell-md flex grow relative transition-all border-b border-t">
                        <div className="z-10 flex w-full items-center justify-between">
                            <ul className="z-30 h-full flex-1 flex-row items-center gap-x-10 px-8 xl:flex">
                                <li className="z-nav h-full w-auto px-0 py-0.5 2xl:relative" data-headlessui-state="">
                                    <button className="group w-full cursor-pointer h-full relative focus:outline-none text-xs uppercase tracking-[0.08em] flex flex-row-reverse items-center justify-between xl:flex-row xl:justify-center before:content-[&quot;&quot;] before:absolute before:-bottom-3 before:w-full before:h-3" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:r2q:">
                                        <div className="transition-colors duration-100 ease-in-out bg-transparent mb-[1px] h-[9px] w-[9px] rounded-full xl:mr-1.5 border border-volcanic-900">
                                        </div>
                                        Products
                                    </button>
                                </li>
                                {/* <div hidden="" style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;">
                                </div> */}
                                <li className="z-nav h-full w-auto px-0 py-0.5 2xl:relative" data-headlessui-state="">
                                    <button className="group w-full cursor-pointer h-full relative focus:outline-none text-xs uppercase tracking-[0.08em] flex flex-row-reverse items-center justify-between xl:flex-row xl:justify-center before:content-[&quot;&quot;] before:absolute before:-bottom-3 before:w-full before:h-3" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:r2s:">
                                        <div className="transition-colors duration-100 ease-in-out bg-transparent mb-[1px] h-[9px] w-[9px] rounded-full xl:mr-1.5 border border-volcanic-900">
                                        </div>
                                        For Business
                                    </button>
                                </li>
                                {/* <div hidden="" style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;">
                                </div> */}
                                <li className="z-nav h-full w-auto px-0 py-0.5 2xl:relative" data-headlessui-state="">
                                    <button className="group w-full cursor-pointer h-full relative focus:outline-none text-xs uppercase tracking-[0.08em] flex flex-row-reverse items-center justify-between xl:flex-row xl:justify-center before:content-[&quot;&quot;] before:absolute before:-bottom-3 before:w-full before:h-3" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:r2u:">
                                        <div className="transition-colors duration-100 ease-in-out bg-transparent mb-[1px] h-[9px] w-[9px] rounded-full xl:mr-1.5 border border-volcanic-900">
                                        </div>
                                        Developers
                                    </button>
                                </li>
                                {/* <div hidden="" style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;">
                                </div> */}
                                <li className="z-nav h-full w-auto px-0 py-0.5 2xl:relative" data-headlessui-state="">
                                    <button className="group w-full cursor-pointer h-full relative focus:outline-none text-xs uppercase tracking-[0.08em] flex flex-row-reverse items-center justify-between xl:flex-row xl:justify-center before:content-[&quot;&quot;] before:absolute before:-bottom-3 before:w-full before:h-3" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:r30:">
                                        <div className="transition-colors duration-100 ease-in-out bg-transparent mb-[1px] h-[9px] w-[9px] rounded-full xl:mr-1.5 border border-volcanic-900">
                                        </div>
                                        Research
                                    </button>
                                </li>
                                {/* <div hidden="" style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;">
                                </div> */}
                                <li className="z-nav h-full w-auto px-0 py-0.5 2xl:relative" data-headlessui-state="">
                                    <button className="group w-full cursor-pointer h-full relative focus:outline-none text-xs uppercase tracking-[0.08em] flex flex-row-reverse items-center justify-between xl:flex-row xl:justify-center before:content-[&quot;&quot;] before:absolute before:-bottom-3 before:w-full before:h-3" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:r32:">
                                        <div className="transition-colors duration-100 ease-in-out bg-transparent mb-[1px] h-[9px] w-[9px] rounded-full xl:mr-1.5 border border-volcanic-900">
                                        </div>
                                        Company
                                    </button>
                                </li>
                                {/* <div hidden="" style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;">
                                </div> */}
                            </ul>
                        </div>
                    </div>
                    <span className="border-mushroom-500 bg-white h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right w-6 -skew-x-[21deg] rounded-tr-[10px] rounded-br-[4px] rounded-l-none border border-l-0"></span>
                </div>
            </div>
            {/* <a href="#" rel="noopener noreferrer" target="_blank" data-fs-element="Marketing>Nav>Try now" className="focus:outline-coral-500"> */}
                <div className="hidden h-full xl:flex">
                    <div className="h-full min-h-cell-md max-h-cell-md flex grow group/cell transition-all">
                        <span className="border-mushroom-500 bg-white h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right w-6 -mr-4 -skew-x-[21deg] rounded-tl-[4px] rounded-bl-[10px] rounded-r-none border border-r-0"></span>
                        <div className="text-volcanic-900 border-mushroom-500 bg-white h-full min-h-cell-md max-h-cell-md truncate flex grow relative transition-all border-b border-t">
                            <div className="z-10 flex w-full items-center justify-between">
                                <p className="text-xs font-body px-2 py-6 uppercase tracking-[0.08em]">
                                    <span>Try now</span>
                                    <br/>
                                </p>
                            </div>
                        </div>
                        <span className="border-mushroom-500 bg-white h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right -ml-0.5 w-3 rounded-r-[6px] border border-l-0"></span>
                    </div>
                </div>
            {/* </a> */}
            {/* <div className="relative z-nav h-full xl:hidden " data-headlessui-state="" >
                <button aria-label="menu" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:Rb57rrikva:">
                    <div className="h-full min-h-cell-md max-h-cell-md flex grow group/cell transition-all">
                        <span className="border-mushroom-500 bg-mushroom-50 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right w-6 -mr-4 -skew-x-[21deg] rounded-tl-[4px] rounded-bl-[10px] border border-r-0"></span>
                        <div className="text-volcanic-900 border-mushroom-500 bg-mushroom-50 h-full min-h-cell-md max-h-cell-md truncate flex grow relative transition-all border-b border-t">
                            <div className="z-10 flex w-full items-center justify-between">
                                <i className="icon-default icon-menu text-icon-sm"></i>
                            </div>
                        </div>
                        <span className="border-mushroom-500 bg-mushroom-50 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right -ml-0.5 w-3 rounded-r-[6px] border border-l-0"></span>
                    </div>
                </button>
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
                }}
            >
            </div> */}

        </nav>    
    );
  };
  
  export default Header;
  