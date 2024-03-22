import { useRef } from "react";
import star from "../assets/star.svg";
import ProjectItem from "./ProjectItem";

function Projects(){
    
    const childRef = useRef([]);

    const projectsData = [
        {
            id:0,
            title:"Real-Time Code Editor",
        },
        {
            id:1,
            title:"Stream4u - Live Streaming Application"
        },
        {
            id:2,
            title:"Chat Application"
        }
    ];

    const handleScroll = (e)=>{
       console.log(e);
    }

    return (
        <div className="projects">
            <div className="phead">
                <img src={star} alt=""/>
                <div>Featured Projects</div>
            </div>
            <div className="c2">A curated selection of my most interesting projects.</div>
            <div className="sbox">
                {
                    projectsData.map((item,index)=>(
                        <ProjectItem key={item.id} item={item} ref={el=>childRef.current[index]=el}/>
                    ))
                }
            </div>
            <div className="pdot">
                <input onChange={handleScroll} type="radio" name="slider" id="s1" checked="checked"/>
                <input onChange={handleScroll} type="radio" name="slider" id="s2"/>
                <input onChange={handleScroll} type="radio" name="slider" id="s3"/>
            </div>
        </div>
    );
}
export default Projects;