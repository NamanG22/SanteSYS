const PlayGround = () =>{
    return(
        <section className="relative w-full bg-onyx">
            <div className="w-full relative z-content py-12 lg:py-16 2xl:py-26 max-w-full-screen mx-auto px-5 md:px-10 lg:px-12">
                <div className="flex flex-col gap-y-10 px-[96.4px]">
                    <div className="w-full relative z-content max-w-full-screen flex flex-col justify-center rounded-xl rounded-none">
                        <div className="relative z-content h-full w-full flex flex-col-reverse justify-between gap-x-10 gap-y-5 lg:gap-x-20 2xl:gap-x-28 md:[&amp;>*]:w-1/2 items-center md:flex-row-reverse">
                            <div className="w-full self-center relative z-content w-full">
                                <div className="flex w-full flex-col items-center md:items-center">
                                    <div className="w-full motion-safe:[&amp;>*]:animate-[fadeInSpot_1s_ease-in-out]">
                                        <div className="relative box-content h-full">
                                            <div className="w-full pb-[100%] pb-[80%]"></div>
                                            <div className="absolute left-0 top-0 flex h-full w-full items-center overflow-visible">
                                                <div className="flex h-full w-full flex-col">
                                                    <img alt="" title="" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain motion-safe:opacity-0 motion-safe:animate-[fadeInSpot_0.2s_linear_forwards] !h-full" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/4c7a6d577e79c43f4e0415b3f56f943616dff916-647x531.svg"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div aria-label="slideshow controls" className="hidden mt-5 flex items-center">
                                        <button aria-current="true" className="m-2 h-4 w-4 rounded-full border border-blue-500 transition-all duration-700  bg-blue-500"></button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between">
                                <div className="text-marble-100 flex w-full flex-col justify-end">
                                    <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-body mb-6 mb-3">
                                        <span>Build with India Stack</span>
                                        <br/>
                                    </h2>
                                    <span className="text-xs lg:text-base font-body md:w-3/4 mb-6">
                                        <div className="[&amp;_a]:!inline portable-text--dark-mode portable-text-breaks">
                                            <p className="leading-[140%]"></p>
                                            <p className="leading-[140%]">Our Generative AI and Advanced Retrieval models work seamlessly together for applications requiring RAG. It's easy to connect and retrieve information from documents and enterprise data sources to build more powerful AI applications.</p>
                                            <p className="leading-[140%]">
                                                <br/>
                                                <br/>
                                                <br/>
                                            </p>
                                            <p className="leading-[140%]"></p>
                                        </div>
                                    </span>
                                    <div className="mb-8 flex w-full flex-col">
                                        <a rel="noopener noreferrer" className="sm:w-btn-md focus:outline-none disabled:cursor-not-allowed inline-block" target="_blank" href="https://dashboard.cohere.ai/welcome/register?__hstc=14363112.01113939d1ec4a035bf17f405a1c9714.1730039348131.1731932864669.1732032811642.14&amp;__hssc=14363112.1.1732032811642&amp;__hsfp=2437715757">
                                            <div className="relative flex grow">
                                                <div className="z-10 flex grow gap-x-2.5 group w-[300px]">
                                                    <div className="h-full min-h-cell-md max-h-cell-md flex grow group/cell transition-all w-[280px]">
                                                        <span className="bg-marble-100 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right -mr-0.5 w-3 rounded-l-[6px] rounded-r-none border-transparent"></span>
                                                        <div className="bg-marble-100 text-volcanic-900 h-full min-h-cell-md max-h-cell-md truncate flex grow justify-between items-center transition-colors bg-clip-padding">
                                                            <div className="z-10 w-full">
                                                                <span className="px-0 justify-between flex w-full items-center transition-all">
                                                                    <span className="text-[16px] font-body uppercase">
                                                                        <span>try the playground</span>
                                                                        <br/>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <span className="bg-marble-100 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right w-6 -skew-x-[21deg] rounded-tr-[10px] rounded-br-[4px] rounded-l-none border-transparent"></span>
                                                    </div>
                                                    <div className="h-full min-h-cell-md max-h-cell-md flex grow group/cell transition-all -ml-1 grow-0 w-[32px] group-hover:w-[51px]">
                                                        <span className="bg-marble-100 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right w-6 -mr-4 -skew-x-[21deg] rounded-tl-[4px] rounded-bl-[10px] rounded-r-none border-transparent"></span>
                                                        <div className="bg-marble-100 text-volcanic-900 h-full min-h-cell-md max-h-cell-md truncate flex grow justify-between items-center transition-colors bg-clip-padding">
                                                            <div className="z-10 w-full">
                                                                <span className="px-0 flex justify-center transition-all">
                                                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <span className="bg-marble-100 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right -ml-0.5 w-3 rounded-r-[6px] border-transparent"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PlayGround;