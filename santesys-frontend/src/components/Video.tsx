import videoBack from '../assets/videos/home-new-hero-cells-min.mp4';

const Video = ()=>{
    return(
        <video
            className="z-background absolute top-0 right-0 hidden h-full w-full object-cover lg:block"
            poster="/home-assets/home-new-hero-cells-desktop.webp"
            width="1920"
            height="1080"
            autoPlay
            loop
            muted
            playsInline
        >
            <source src={videoBack} type="video/mp4"/>
        </video>
    )
}
export default Video;