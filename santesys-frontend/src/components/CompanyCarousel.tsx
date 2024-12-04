// import hospital from '../assets/svgs/Group.svg';
// import doctor from '../assets/svgs/Mask-group.svg'
const CompanyCarousel = ()=>{
    return(
        <section className="flex justify-center bg-volcanic-900 px-12">
            <div className="flex w-full flex-col py-4 md:flex-row md:items-center lg:max-w-full lg:py-8">
                <p className="text-xs uppercase mb-5 ml-6 whitespace-nowrap  md:mx-12 md:mb-0 text-white">
                    <span>Our Customers</span>
                    <br/>
                </p>
                <div className="relative flex overflow-hidden">
                    <div className="absolute top-0 z-10 h-full w-[100px] md:from-volcanic-900 md:bg-gradient-to-r"></div>
                    <div style={{minWidth:'4840px'}} className="flex h-8 animate-scroll items-center justify-around lg:h-10">
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Hasura Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/7625097eb1d0ff87fe14bd943707a7a59a70932f-135x40.svg"/> */}
                            {/* <img src={hospital} alt="" className="w-full h-10"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Hospital</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            {/* <img src={doctor} alt="" className="w-full h-12"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Doctors</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            <span className="text-white ml-2 font-bold text-xl object-contain">Nurses</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Patients</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Pharmacies</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Laboratories</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Hasura Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/7625097eb1d0ff87fe14bd943707a7a59a70932f-135x40.svg"/> */}
                            {/* <img src={hospital} alt="" className="w-full h-10"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Hospital</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            {/* <img src={doctor} alt="" className="w-full h-12"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Doctors</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            <span className="text-white ml-2 font-bold text-xl object-contain">Nurses</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Patients</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Pharmacies</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Laboratories</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Hasura Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/7625097eb1d0ff87fe14bd943707a7a59a70932f-135x40.svg"/> */}
                            {/* <img src={hospital} alt="" className="w-full h-10"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Hospital</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            {/* <img src={doctor} alt="" className="w-full h-12"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Doctors</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            <span className="text-white ml-2 font-bold text-xl object-contain">Nurses</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Patients</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Pharmacies</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Laboratories</span>
                        </div>
                        {/* <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="HyperWrite Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/0520a2ac96811a525de5ce8435d34b94f623e9e0-158x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Borderless AI Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/a951eea679214f1278aafe006b5fb1ea1fe5f40c-169x40.svg"/>
                            </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                        <img alt="Oracle Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/befe7c0016c34552128b150fa5eacb834f64d721-143x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Notion Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/7dbc25133c2ae9152e5348da98de950d95a5b030-117x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Longshot Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/2e83e08f522c304f346aec91a990ed127dce9b01-175x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Jasper Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/cb3dce1d66c63f3ec9f497009ca2989e08212a88-139x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Helvia Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/ea1c7fd09909ae48d498bf0a458e0c2982c31568-131x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="BambooHR Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/491963b94007f5aef361fccec729006c93b85d43-167x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                        <img alt="Borderless AI Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/a951eea679214f1278aafe006b5fb1ea1fe5f40c-169x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Notion Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/7dbc25133c2ae9152e5348da98de950d95a5b030-117x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="DeepJudge Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/9ca89885053497db6b5f0979758b1531f54c1d12-178x40.svg"/>
                            </div>
                            <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Oracle Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/befe7c0016c34552128b150fa5eacb834f64d721-143x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Casetext Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/21796a5fae97adccbbc4cbedf97d003f44da38f7-171x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="BambooHR Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/491963b94007f5aef361fccec729006c93b85d43-167x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                        <img alt="Flowrite Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/5a49d1303c3adc753fcec74fbd01b8c5c83f77fb-142x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                        <img alt="Accenture Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/944ea1f82bc113321875b74fe77087b4fe9057e5-127x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Tabnine Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/fcace4fabb2fde85d794e596ffa9cc4f25ea35df-157x40.svg"/>
                            </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Johnson Lambert Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/45647a2727887a6daa07551d7dc46bf03efc141a-121x31.svg"/>
                        </div> */}
                    </div>
                    <div style={{minWidth:'4840px'}} className="flex h-8 items-center animate-scroll justify-around lg:h-10">
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Hasura Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/7625097eb1d0ff87fe14bd943707a7a59a70932f-135x40.svg"/> */}
                            {/* <img src={hospital} alt="" className="w-full h-10"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Hospital</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            {/* <img src={doctor} alt="" className="w-full h-12"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Doctors</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Nurses</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Patients</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Pharmacies</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Laboratories</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Hasura Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/7625097eb1d0ff87fe14bd943707a7a59a70932f-135x40.svg"/> */}
                            {/* <img src={hospital} alt="" className="w-full h-10"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Hospital</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            {/* <img src={doctor} alt="" className="w-full h-12"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Doctors</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Nurses</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Patients</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Pharmacies</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Laboratories</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Hasura Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/7625097eb1d0ff87fe14bd943707a7a59a70932f-135x40.svg"/> */}
                            {/* <img src={hospital} alt="" className="w-full h-10"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Hospital</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            {/* <img src={doctor} alt="" className="w-full h-12"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Doctors</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Nurses</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Patients</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Pharmacies</span>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            {/* <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/> */}
                            <span className="text-white ml-2 font-bold text-xl">Laboratories</span>
                        </div>
                        {/* <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Hasura Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/7625097eb1d0ff87fe14bd943707a7a59a70932f-135x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="HyperWrite Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/0520a2ac96811a525de5ce8435d34b94f623e9e0-158x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Borderless AI Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/a951eea679214f1278aafe006b5fb1ea1fe5f40c-169x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Oracle Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/befe7c0016c34552128b150fa5eacb834f64d721-143x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Notion Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/7dbc25133c2ae9152e5348da98de950d95a5b030-117x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Longshot Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/2e83e08f522c304f346aec91a990ed127dce9b01-175x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Jasper Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/cb3dce1d66c63f3ec9f497009ca2989e08212a88-139x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Helvia Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/ea1c7fd09909ae48d498bf0a458e0c2982c31568-131x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="BambooHR Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/491963b94007f5aef361fccec729006c93b85d43-167x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Salesforce Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/e14dfde7711f669b6ac8b79bb24972acf7f72a71-127x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Borderless AI Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/a951eea679214f1278aafe006b5fb1ea1fe5f40c-169x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Notion Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/7dbc25133c2ae9152e5348da98de950d95a5b030-117x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="DeepJudge Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/9ca89885053497db6b5f0979758b1531f54c1d12-178x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Oracle Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/befe7c0016c34552128b150fa5eacb834f64d721-143x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Casetext Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/21796a5fae97adccbbc4cbedf97d003f44da38f7-171x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="BambooHR Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/491963b94007f5aef361fccec729006c93b85d43-167x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Flowrite Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/5a49d1303c3adc753fcec74fbd01b8c5c83f77fb-142x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Accenture Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/944ea1f82bc113321875b74fe77087b4fe9057e5-127x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Tabnine Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/fcace4fabb2fde85d794e596ffa9cc4f25ea35df-157x40.svg"/>
                        </div>
                        <div className="flex h-8 items-center md:p-1 lg:h-10 lg:px-2 lg:py-2">
                            <img alt="Johnson Lambert Logo" title="" fetchPriority="high" width="0" height="0" decoding="async" data-nimg="1" className="h-auto w-full object-contain !h-10" style={{color:'transparent'}} src="https://cdn.sanity.io/images/rjtqmwfu/production/45647a2727887a6daa07551d7dc46bf03efc141a-121x31.svg"/>
                        </div> */}
                    </div>
                    <div className="absolute top-0 z-10 h-full w-[100px] md:from-volcanic-900 right-0 md:bg-gradient-to-l"></div>
                </div>
            </div>
        </section>
    )
}
export default CompanyCarousel;