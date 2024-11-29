import logo from '../assets/svgs/SanteSYS-(1).svg'

const Footer = ()=>{
    return(
        <footer role="contentinfo">
            <section className="relative w-full flex flex-col bg-volcanic-900 py-12 text-marble-300 lg:pt-20">
                <div className="w-full relative z-content max-w-full-screen mx-auto px-5 md:px-10 lg:px-12">
                    <div className=" flex flex-col">
                        <div className="flex w-full flex-wrap">
                            <div className="grid w-full grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-y-5">
                                <ul className="w-full">
                                    <li className="text-[16px] uppercase font-body mb-4 text-marble-500 lg:mb-7 justify-center flex">
                                        <span>Products</span>
                                        <br/>
                                    </li>
                                    <li className="mb-3 flex justify-center">
                                        <a href="/prescripto">Prescripto</a>
                                    </li>
                                    {/* <li className="mb-3">
                                        <a href="/embed">Embed</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="/rerank">Rerank</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="/fine-tuning">Fine-tuning</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="/pricing">Pricing</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="/slackapp">Cohere in Slack</a>
                                    </li> */}
                                </ul>
                                {/* <ul className="w-full">
                                    <li className="text-[16px] uppercase font-body mb-4 text-marble-500 lg:mb-7">
                                        <span>Developers</span>
                                        <br/>
                                    </li>
                                    <li className="mb-3">
                                        <a href="https://dashboard.cohere.com/playground/chat" rel="noopener noreferrer" target="_blank">Playground</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="https://cohere.com/llmu" rel="noopener noreferrer" target="_blank">LLM University</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="https://docs.cohere.com" rel="noopener noreferrer" target="_blank">Documentation</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="https://docs.cohere.com/changelog" rel="noopener noreferrer" target="_blank">Release Notes</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="https://docs.cohere.ai/reference/about?__hstc=14363112.01113939d1ec4a035bf17f405a1c9714.1730039348131.1732032811642.1732045697559.15&amp;__hssc=14363112.7.1732045697559&amp;__hsfp=2437715757" rel="noopener noreferrer" target="_blank">API Reference</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="https://github.com/cohere-ai/cohere-toolkit" rel="noopener noreferrer" target="_blank">Toolkit</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="https://docs.cohere.ai/docs/integrations?__hstc=14363112.01113939d1ec4a035bf17f405a1c9714.1730039348131.1732032811642.1732045697559.15&amp;__hssc=14363112.7.1732045697559&amp;__hsfp=2437715757" rel="noopener noreferrer" target="_blank">App Integrations</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="https://docs.cohere.ai/docs/responsible-use?__hstc=14363112.01113939d1ec4a035bf17f405a1c9714.1730039348131.1732032811642.1732045697559.15&amp;__hssc=14363112.7.1732045697559&amp;__hsfp=2437715757" rel="noopener noreferrer" target="_blank">Responsible Use</a>
                                    </li>
                                </ul> */}
                                <ul className="w-full">
                                    <li className="text-[16px] uppercase font-body mb-4 text-marble-500 lg:mb-7 flex justify-center">
                                        <span>Company</span>
                                        <br/>
                                    </li>
                                    <li className="mb-3 flex justify-center"><a href="/about">About</a></li>
                                    <li className="mb-3 flex justify-center"><a href="/blog">Blog</a></li>
                                    <li className="mb-3 flex justify-center"><a href="/research">Research</a></li>
                                    <li className="mb-3 flex justify-center"><a href="/careers">Careers</a></li>
                                </ul>
                                <ul className="w-full">
                                    <li className="flex justify-center">
                                        <a rel="noopener noreferrer" className="group max-w-full disabled:cursor-not-allowed focus-visible:outline-1 focus-visible:outline focus-visible:outline-coral-500 rounded-sm [&amp;>*]:text-web3-md mb-4 flex lg:mb-7 [&amp;>*>*>i]:!text-marble-500 [&amp;>*]:!text-marble-500 [&amp;_span]:!text-3xs" target="_blank" href="/">
                                            <span className="flex items-center visited:text-coral-700 text-mushroom-50">
                                                <span className="">
                                                    <span className="text-[16px] font-body uppercase">
                                                        <span>Trust Center</span>
                                                        <br/>
                                                    </span>
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="mb-3 flex justify-center"><a href="/privacy">Privacy</a></li>
                                    <li className="mb-3 flex justify-center"><a href="/terms-of-use">Terms of Use</a></li>
                                    {/* <li className="mb-3"><a href="/saas-agreement">SaaS Agreement</a></li> */}
                                    {/* <li className="mb-3"><a href="/slo">SLO Agreement</a></li> */}
                                    <li className="mb-3 flex justify-center"><a href="/responsibility">Responsibility</a></li>
                                    <li className="mb-3 flex justify-center"><a href="/security">Security</a></li>
                                    {/* <li className="mb-3"><a href="/enterprise-data-commitments">Enterprise Data Commitments</a></li> */}
                                    {/* <li className="mb-3"><a href="/c4ai-cc-by-nc-license">C4AI CC-BY-NC License</a></li> */}
                                </ul>
                                <ul>
                                    <li className="text-[16px] uppercase font-body mb-4 text-marble-500 lg:mb-7 flex justify-center">
                                        <span>Contact</span>
                                        <br/>
                                    </li>
                                    <li className="mb-3 flex justify-center"><a href="/" rel="noopener noreferrer" target="_blank">Twitter</a></li>
                                    <li className="mb-3 flex justify-center"><a href="https://www.linkedin.com/company/santesys/" rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
                                    <li className="mb-3 flex justify-center"><a href="https://discord.com/invite/co-mmunity" rel="noopener noreferrer" target="_blank">Discord</a></li>
                                    <li className="mb-3 flex justify-center"><a href="/" rel="noopener noreferrer" target="_blank">Support</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-12 w-full lg:mt-20">
                        <img alt="Really big Cohere Logo" title="" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain motion-safe:opacity-0 motion-safe:animate-fadeInSpot h-auto w-full" style={{color:'transparent'}} src={logo}/>
                        {/* <LogoAnimation/> */}
                    </div>
                    <div className="my-8 border-t border-t-volcanic-800"></div>
                    <div className="flex flex-col justify-between md:flex-row lg:mb-6">
                        <div className="flex flex-row gap-x-8">
                            <p className="mb-6 md:mb-0">
                                <a href="/" target="_blank" rel="noreferrer">Twitter</a>
                            </p>
                            <p className="mb-6 md:mb-0">
                                <a href="https://www.linkedin.com/company/santesys/" target="_blank" rel="noreferrer">LinkedIn</a>
                            </p>
                            {/* <p className="mb-6 md:mb-0">
                                <a href="https://discord.com/invite/co-mmunity" target="_blank" rel="noreferrer">Discord</a>
                            </p> */}
                            <p className="mb-6 md:mb-0">
                                {/* <a href="mailto:support@cohere.com" target="_blank" rel="noreferrer">Support</a> */}
                                <a href="/" target="_blank" rel="noreferrer">Support</a>
                            </p>
                        </div>
                        <div className="flex flex-row flex-wrap items-center gap-x-8 text-marble-500">
                            <a href="/privacy">Privacy</a>
                            <a href="/terms-of-use">Terms of Use</a>
                            <p className="text-[14px] lg:text-base font-body">©SanteSYS 2024</p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}
export default Footer;