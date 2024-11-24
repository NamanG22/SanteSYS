import Video from './../subComponents/hero/Video';
import HeadText from './../subComponents/hero/HeadText';

const Hero = () => {
    return (
        <section className="relative w-full min-h-[390px] md:min-h-[475px] lg:min-h-[690px] 2xl:min-h-[800px]">
            <Video/>
            <HeadText/>
        </section>
    );
};

export default Hero;
