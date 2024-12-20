import DeployBack from '../assets/images/deployBack.webp';
import prescripto from '../assets/images/prescriptoLogo.png'
import comingSoon from '../assets/images/Group-1.png'
import quickQueue from '../assets/images/individuality-concept-silhouettes.jpg'

import { useState } from 'react';

const products = [
    { id: 1, name: "Prescripto", image: prescripto, descriptionHead:"A digital pad to digitalize prescriptions at point 0.", description:
        (<>
            <p>A tablet-based solution for digital prescriptions, allowing doctors to access patient histories and share information seamlessly.'</p>
            <ul className="list-disc my-2">
                <li>Write and share prescriptions digitally.</li>
                <li>Access a patient's complete medical history, including past treatments and reports.</li>
                <li>Collaborate with other doctors to discuss cases securely.</li>
                <li>Intuitive interface optimized for tablet usage.</li>
            </ul>
            <p className=""><span className="font-bold text-xl">Benefit: </span>Reduce errors, improve patient satisfaction, and save time.</p>
        </>),
    },
    { id: 2, name: "QuickQueue", image: quickQueue, descriptionHead:"Skip the line, save your time.", description:
        (<>
            <p>QuickQueue lets patients bypass long registration queues in hospitals, ensuring faster access to care.'</p>
            <ul className="list-disc my-2">
                <li>Digital registration for appointments and consultations.</li>
                <li>Check-in from anywhere via the app.</li>
                <li>Notifications for your turn to avoid unnecessary waiting.</li>
                <li>Integration with hospital systems for smooth coordination.</li>
            </ul>
            <p className=""><span className="font-bold text-xl">Benefit: </span>Reduce wait times and enhance the patient experience.</p>
        </>),
    },
    { id: 3, name: "Reporto", image: comingSoon, descriptionHead:"Your reports, anytime, anywhere.", description:
        (<>
            <p>'Reporto is your one-stop solution for accessing diagnostic test results and medical reports.</p>
            <ul className="list-disc my-2">
                <li>Instant upload of test results by laboratories.</li>
                <li>Easy access for both patients and doctors using a unique patient ID.</li>
                <li>AI-driven report insights for better understanding.</li>
                <li>Secure storage of reports for future reference.</li>
            </ul>
            <p className=""><span className="font-bold text-xl">Benefit: </span>No more misplaced reports; instant, secure access to your medical data.</p>
        </>),
    },
    { id: 4, name: "Care+", image: comingSoon, descriptionHead:"Personalized care, redefined.", description:
        (<>
            <p>Care+ combines the power of AI to offer personalized healthcare solutions tailored to your needs.</p>
            <ul className="list-disc my-2">
                <li>Insurance Check: Verify if your hospital visit is covered.</li>
                <li>Insurance Claim Assistance: Simplifies data sharing with insurance providers.</li>
                <li>Customizable Health Reminders: Set alerts for medication, water intake, exercise, and more.</li>
                <li>AI-Driven Advice: Get personalized health tips and lifestyle recommendations.</li>
            </ul>
            <p className=""><span className="font-bold text-xl">Benefit: </span>Make informed decisions and stay on top of your health routines.</p>

        </>),
    },
    { id: 5, name: "MediMove", image: comingSoon, descriptionHead:"Medicines delivered, swiftly and safely.", description:
        (<>
            <p>MediMove is your trusted partner for fast and reliable medicine delivery services.</p>
            <ul className="list-disc my-2">
                <li>Partnered with local pharmacies for instant medicine availability.</li>
                <li>Same-day delivery within six hours.</li>
                <li>Real-time tracking of your order.</li>
                <li>Notifications for refill reminders based on prescription dates.</li>
            </ul>
            <p className=""><span className="font-bold text-xl">Benefit: </span>Get your medicines without stepping out, ensuring convenience and care.</p>
        </>),
    },
    { id: 6, name: "Tele-consultation", image: comingSoon, descriptionHead:"Care from Anywhere, Anytime.", description:
        (<>
            <p>Empower patients to consult with healthcare professionals remotely through secure and seamless video calls.  </p>
            <ul className="list-disc my-2">
                <li>On-demand virtual consultations with licensed doctors.</li>
                <li>Secure video, audio, and chat options.</li>
                <li>Collaborate with other doctors to discuss cases securely.</li>
                <li>Digital prescriptions sent directly to patients.</li>
            </ul>
            <p className=""><span className="font-bold text-xl">Benefit: </span>Eliminates the need for physical visits, saving time while ensuring expert medical advice from the comfort of home.</p>

        </>),
    },
  ];

const Products = ()=>{

    const defaultSectionHead = "Our Product Suite"
    const defaultProductHead = "Enterprise-grade healthcare solutions, seamlessly deployed on cloud or on-premises.";
    const defaultProductSub = "Only SanteSYS ensures effortless integration, maximizing efficiency and enhancing your healthcare operations.";
    const [productHead,setProductHead] = useState(defaultProductHead);
    const [productSub,setProductSub] = useState<React.ReactNode>(defaultProductSub);
    const [sectionHead,setSectionHead] = useState(defaultSectionHead);

    return(
        <section 
        id="product-section"
        className="relative w-full">
            <div className="absolute top-0 left-0 h-full w-full">
                <img 
                alt="Background image for aesthetic purposes" 
                title="" 
                loading="lazy" 
                width="0" 
                height="0" 
                decoding="async" 
                data-nimg="1" 
                className="h-auto w-full object-contain hidden !h-full !object-cover object-center lg:block z-background" 
                style={{color:'transparent'}} 
                sizes="100vw" 
                // srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frjtqmwfu%2Fproduction%2F428a55c48eaaebbb496da97fecaf8d576254d5cc-1440x664.png&amp;w=640&amp;q=100 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frjtqmwfu%2Fproduction%2F428a55c48eaaebbb496da97fecaf8d576254d5cc-1440x664.png&amp;w=750&amp;q=100 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frjtqmwfu%2Fproduction%2F428a55c48eaaebbb496da97fecaf8d576254d5cc-1440x664.png&amp;w=828&amp;q=100 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frjtqmwfu%2Fproduction%2F428a55c48eaaebbb496da97fecaf8d576254d5cc-1440x664.png&amp;w=1080&amp;q=100 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frjtqmwfu%2Fproduction%2F428a55c48eaaebbb496da97fecaf8d576254d5cc-1440x664.png&amp;w=1200&amp;q=100 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frjtqmwfu%2Fproduction%2F428a55c48eaaebbb496da97fecaf8d576254d5cc-1440x664.png&amp;w=1920&amp;q=100 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frjtqmwfu%2Fproduction%2F428a55c48eaaebbb496da97fecaf8d576254d5cc-1440x664.png&amp;w=2048&amp;q=100 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frjtqmwfu%2Fproduction%2F428a55c48eaaebbb496da97fecaf8d576254d5cc-1440x664.png&amp;w=3840&amp;q=100 3840w" 
                src={DeployBack}/>
            </div>
            <div className="absolute top-0 left-0 h-full w-full">
                <img 
                alt="Background image for aesthetic purposes" 
                title="" 
                loading="lazy" 
                width="0" 
                height="0" 
                decoding="async" 
                data-nimg="1" 
                className="h-auto w-full object-contain hidden !h-full !object-cover object-center sm:block lg:hidden z-background" 
                style={{color:'transparent'}} 
                sizes="100vw" 
                // srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frjtqmwfu%2Fproduction%2F1baf827bbcb13e5c4f506dfb25408bfc71d492bc-320x746.png&amp;w=640&amp;q=100 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frjtqmwfu%2Fproduction%2F1baf827bbcb13e5c4f506dfb25408bfc71d492bc-320x746.png&amp;w=750&amp;q=100 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frjtqmwfu%2Fproduction%2F1baf827bbcb13e5c4f506dfb25408bfc71d492bc-320x746.png&amp;w=828&amp;q=100 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frjtqmwfu%2Fproduction%2F1baf827bbcb13e5c4f506dfb25408bfc71d492bc-320x746.png&amp;w=1080&amp;q=100 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frjtqmwfu%2Fproduction%2F1baf827bbcb13e5c4f506dfb25408bfc71d492bc-320x746.png&amp;w=1200&amp;q=100 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frjtqmwfu%2Fproduction%2F1baf827bbcb13e5c4f506dfb25408bfc71d492bc-320x746.png&amp;w=1920&amp;q=100 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frjtqmwfu%2Fproduction%2F1baf827bbcb13e5c4f506dfb25408bfc71d492bc-320x746.png&amp;w=2048&amp;q=100 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frjtqmwfu%2Fproduction%2F1baf827bbcb13e5c4f506dfb25408bfc71d492bc-320x746.png&amp;w=3840&amp;q=100 3840w" 
                src={DeployBack}/>
                <img 
                alt="Background image for aesthetic purposes" 
                title="" 
                loading="lazy" 
                width="0" 
                height="0" 
                decoding="async" 
                data-nimg="1" 
                className="h-auto w-full object-contain block !h-full !object-cover object-center sm:hidden z-background" 
                style={{color:'transparent'}} 
                sizes="100vw" 
                // srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frjtqmwfu%2Fproduction%2F1baf827bbcb13e5c4f506dfb25408bfc71d492bc-320x746.png&amp;w=640&amp;q=100 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frjtqmwfu%2Fproduction%2F1baf827bbcb13e5c4f506dfb25408bfc71d492bc-320x746.png&amp;w=750&amp;q=100 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frjtqmwfu%2Fproduction%2F1baf827bbcb13e5c4f506dfb25408bfc71d492bc-320x746.png&amp;w=828&amp;q=100 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frjtqmwfu%2Fproduction%2F1baf827bbcb13e5c4f506dfb25408bfc71d492bc-320x746.png&amp;w=1080&amp;q=100 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frjtqmwfu%2Fproduction%2F1baf827bbcb13e5c4f506dfb25408bfc71d492bc-320x746.png&amp;w=1200&amp;q=100 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frjtqmwfu%2Fproduction%2F1baf827bbcb13e5c4f506dfb25408bfc71d492bc-320x746.png&amp;w=1920&amp;q=100 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frjtqmwfu%2Fproduction%2F1baf827bbcb13e5c4f506dfb25408bfc71d492bc-320x746.png&amp;w=2048&amp;q=100 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frjtqmwfu%2Fproduction%2F1baf827bbcb13e5c4f506dfb25408bfc71d492bc-320x746.png&amp;w=3840&amp;q=100 3840w" 
                src={DeployBack}/>
            </div>
            <div className="flex w-full items-center relative z-content py-12 lg:py-8 2xl:py-26 max-w-full-screen mx-auto px-5 md:px-10 lg:px-12 min-h-screen">
                <div className="flex items-center md:py-10 lg:flex-row px-[96.4px]">
                    <div className="w-full lg:w-5/12">
                        <div className="flex flex-col justify-between">
                            <div className="relative z-content w-full flex w-full flex-col justify-end">
                                <p className="text-xs lg:text-base font-body mb-5 uppercase lg:mb-3 mb-4 lg:mb-3">
                                    <span>{sectionHead}
                                    </span>
                                    <br/>
                                </p>
                                <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-body !mb-8 md:w-1/2 lg:w-full mb-3">
                                    <span>{productHead}
                                    </span>
                                    <br/>
                                </h2>
                                <span className="text-xs lg:text-base font-body !mb-8 w-full md:w-1/2 lg:!mb-20 lg:w-2/3 mb-6">
                                    <div className="[&amp;_a]:!inline portable-text-breaks">
                                        <p className="leading-[140%]">{productSub}</p>
                                    </div>
                                </span>
                            </div>
                            <div className="flex flex-col justify-end">
                                <div className="flex w-full flex-col">
                                    <a className="sm:w-btn-md focus:outline-none disabled:cursor-not-allowed inline-block" target="_self" href="/">
                                        <div className="relative flex grow">
                                            <div className="z-10 flex grow gap-x-2.5 group w-[300px]">
                                                <div className="h-full min-h-cell-md max-h-cell-md flex grow group/cell transition-all w-[280px]">
                                                    <span className="bg-volcanic-900 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right -mr-0.5 w-3 rounded-l-[6px] rounded-r-none border-transparent"></span>
                                                    <div className="bg-volcanic-900 text-white h-full min-h-cell-md max-h-cell-md truncate flex grow justify-between items-center transition-colors bg-clip-padding">
                                                        <div className="z-10 w-full">
                                                            <span className="px-0 justify-between flex w-full items-center transition-all">
                                                                <span className="text-[14px] font-body uppercase">
                                                                    <span>Learn more</span>
                                                                    <br/>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className="bg-volcanic-900 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right w-6 -skew-x-[21deg] rounded-tr-[10px] rounded-br-[4px] rounded-l-none border-transparent"></span>
                                                </div>
                                                <div className="h-full min-h-cell-md max-h-cell-md flex grow group/cell transition-all -ml-1 grow-0 w-[32px] group-hover:w-[51px]">
                                                    <span className="bg-volcanic-900 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right w-6 -mr-4 -skew-x-[21deg] rounded-tl-[4px] rounded-bl-[10px] border-transparent"></span>
                                                    <div className="bg-volcanic-900 text-white h-full min-h-cell-md max-h-cell-md truncate flex grow justify-between items-center transition-colors bg-clip-padding">
                                                        <div className="z-10 w-full">
                                                            <span className="px-0 flex justify-center transition-all">
                                                                <i className="fas fa-arrow-right text-icon-md text-white"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className="bg-volcanic-900 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right -ml-0.5 w-3 rounded-r-[6px] border-transparent"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid w-full items-center gap-4 px-6 pt-12 md:grid-cols-3 md:gap-6 md:px-12 md:pt-16 lg:w-7/12 lg:gap-8 lg:px-0 lg:pt-0 grid-cols-2 ">
                        {products.map((product) => (
                            <div key={product.id}
                            onMouseEnter={()=>{
                                setSectionHead(product.name);
                                setProductHead(product.descriptionHead);
                                setProductSub(product.description);
                                }
                            }
                            onMouseLeave={()=>{
                                setSectionHead(defaultSectionHead);
                                setProductHead(defaultProductHead);
                                setProductSub(defaultProductSub);
                                }
                            }
                            className="hover:scale-100 transition-all"
                            >
                                <img 
                                    alt={product.name}
                                    title="" 
                                    loading="lazy" 
                                    width="0" 
                                    height="0" 
                                    decoding="async" 
                                    data-nimg="1" 
                                    className="h-auto w-full object-contain motion-safe:opacity-0 motion-safe:animate-[fadeInSpot_0.2s_linear_forwards] aspect-square rounded-3xl transition duration-200 ease-in-out bg-marble-400" 
                                    style={{color:'transparent'}} 
                                    src={product.image}/>
                            </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products;