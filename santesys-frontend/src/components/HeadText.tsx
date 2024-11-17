const HeadText = ()=>{
    return(
        <div className="w-full relative z-content py-12 lg:py-16 2xl:py-26 max-w-full-screen mx-auto px-5 md:px-10 lg:px-24 pt-24 lg:pt-32">
            <div className="flex flex-col justify-between">
                <div className="mb-[340px] md:mb-8 flex w-full flex-col justify-end">
                    <h1 className="text-6xl 2xl:text-8xl mb-[14px] md:!mb-12 tracking-tighter ibm-plex-mono-regular"
                        // style={{
                        //     fontVariationSettings: "'cuts' 100, 'move' 100",
                        //     fontVariantLigatures: "common-ligatures",
                        // }}
                    >
                        <span>The Integrated</span>
                        <br/>
                        <span>Health Ecosystem for Smarter Care</span>
                        <br/>
                    </h1>
                    <span className="text-md 2xl:text-lg font-body md:w-3/5 !mb-10 mb-6 ibm-plex-mono-regular">
                        <div className="[&amp;_a]:!inline portable-text-breaks">
                            <p className="text-3xl 2xl:text-5xl font-body">
                                Seamlessly connecting patients, doctors, labs, and 
                                <br/><br/>
                            </p>
                            <p className="text-3xl 2xl:text-5xl font-body"></p>
                            <p className="text-lg 2xl:text-3xl font-body">
                            pharmacies to deliver personalized, efficient, <br/>and AI-driven healthcare solutions.
                            </p>
                        </div>
                    </span>
                    <div className="mb-8 flex w-full flex-col">
                        <a 
                            className="sm:w-btn-md group focus:outline-none disabled:cursor-not-allowed inline-block" 
                            target="_self" 
                            data-fs-element="Marketing>Home>Hero>PrimaryCTA" 
                            href="/contact-sales"
                        >
                            <div className="relative flex grow">
                                <div className="z-10 flex grow gap-x-2.5 w-[300px]">
                                    <div className="h-full min-h-cell-md max-h-cell-md flex grow group transition-all w-[280px] group-hover:w-[260px]">
                                        <span className="bg-black h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right -mr-0.5 w-3 rounded-l-[6px] rounded-r-none border-transparent"></span>
                                        <div className="bg-black text-white h-full min-h-cell-md max-h-cell-md truncate flex grow justify-between items-center transition-colors bg-clip-padding">
                                            <div className="z-10 w-full">
                                                <span className="px-2 justify-between flex w-full items-center transition-all">
                                                    <span className="text-[14px] font-body uppercase">
                                                        <span>Get Started</span>
                                                        <br/>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <span className="bg-black h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right w-6 -skew-x-[21deg] rounded-tr-[10px] rounded-br-[4px] rounded-l-none border-transparent"></span>
                                    </div>
                                    <div className="h-full min-h-cell-md max-h-cell-md flex grow group transition-all -ml-1 w-[32px] group-hover:w-[51px]">
                                        <span className="bg-black h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right w-6 -mr-4 -skew-x-[21deg] rounded-tl-[4px] rounded-bl-[10px] border-transparent"></span>
                                        <div className="bg-black text-white h-full min-h-cell-md max-h-cell-md truncate flex grow justify-between items-center transition-colors bg-clip-padding">
                                            <div className="z-10 w-full">
                                                <span className="px-0 flex justify-center transition-all">
                                                    <i className="fas fa-arrow-right text-icon-md text-white"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <span className="bg-black h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right -ml-0.5 w-3 rounded-r-[6px] border-transparent"></span>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a 
                            rel="noopener noreferrer" 
                            className="mt-3 sm:w-btn-md group focus:outline-none disabled:cursor-not-allowed inline-block" 
                            target="_blank" 
                            data-fs-element="Marketing>Home>Hero>CTA2" 
                            href="#"
                        >
                            <div className="relative flex grow w-[300px]">
                                <div className="z-10 flex grow gap-x-2.5">
                                    <div className="h-full min-h-cell-md max-h-cell-md flex grow group transition-all">
                                        <span className="border-volcanic-900 bg-marble-100 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right -mr-0.5 w-3 rounded-l-[6px] rounded-r-none border border-r-0"></span>
                                        <div className="text-volcanic-900 border-volcanic-900 bg-marble-100 h-full min-h-cell-md max-h-cell-md truncate group-hover:rounded-br-md flex grow relative transition-all border-b border-t">
                                            <div className="z-10 flex w-full items-center justify-between">
                                                <span className="px-1 justify-between flex w-full items-center transition-all">
                                                    <span className="text-[14px] font-body uppercase">
                                                        <span>Explore Features</span>
                                                        <br/>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <span className="transition-all bg-clip-padding origin-top-right -ml-1 w-3 rounded-br-[6px] rounded-tr-[6px] rounded-l-none border-b border-r border-t group-hover:w-5 group-hover:-skew-x-[18deg] group-hover:rounded-br-[.25rem] group-hover:rounded-tr-[0.6rem] bg-marble-100 border-volcanic-900 h-full min-h-cell-md max-h-cell-md"></span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadText;