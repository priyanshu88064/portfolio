import star from "../assets/star.svg";
import ProjectItem from "./ProjectItem";
import {Swiper,SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import code from "../assets/code.png";
import stream from "../assets/stream.png";
import "swiper/css";
// import "swiper/swiper-bundle.css";



function Projects(){

    const projectsData = [
        {
            id:0,
            title:"Real-Time Code Editor",
            desc:"Collaborative coding platform where multiple users can connect and code together in real-time.",
            image:code
        },
        {
            id:1,
            title:"Stream4u - Live Streaming Application",
            desc:"A platform where users can start and watch live streams.",
            image:stream
        },
        {
            id:2,
            title:"Chat Application",
            desc:"",
            image:code
        }
    ];

    return (
        <div className="projects">
            <div className="phead">
                <img src={star} alt=""/>
                <div>Featured Projects</div>
            </div>
            <div className="c2">A curated selection of my most interesting projects.</div>
            <Swiper
                spaceBetween={40}
                slidesPerView={1.3}
                className="swiper"
                centeredSlides='true'
                autoplay={true}
                modules={[Pagination]}
                pagination={{
                    clickable:true
                }}

            >
                <SwiperSlide className="swi switemf"><ProjectItem item={projectsData[0]}/></SwiperSlide>
                <SwiperSlide className="swi"><ProjectItem item={projectsData[1]}/></SwiperSlide>
                <SwiperSlide className="swi switeml"><ProjectItem item={projectsData[2]}/></SwiperSlide>
            </Swiper>
        </div>
    );
}
export default Projects;