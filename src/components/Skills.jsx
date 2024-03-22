import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import boot from "../assets/boot.svg";
import node from "../assets/node.svg";
import express from "../assets/express.svg";
import mongo from "../assets/mongo.svg";
import version from "../assets/version.svg";
import docker from "../assets/docker.svg";

function Skills(){

    const skills = [
        {image:react,name:"React.js",bg:"yellow",color:"black"},
        {image:tailwind,name:"Tailwind",bg:"white",color:"black"},
        {image:boot,name:"Bootstrap",bg:"#dc62de",color:"black"},
        {image:node,name:"Node.js",bg:"#8ac6eb",color:"black"},
        {image:express,name:"Express.js",bg:"#edccad",color:"black"},
        {image:mongo,name:"MongoDB",bg:"#3b3b3b",color:"white"},
        {image:version,name:"Git",bg:"#572727",color:"white"},
        {image:docker,name:"Docker",bg:"#165e1d",color:"white"}
    ];

    return (
        <div className="skills">
            <div className="sh">My Skills<div>I'm most familiar with this stack:</div></div>
            <div className="sgrid">
               {
                    skills && skills.map((item,index)=>(
                        <div className="skillsitems" key={index} style={{background:item.bg,color:item.color}}>
                            <img src={item.image} alt=""/>
                            <div>{item.name}</div>
                        </div>
                    ))
               }
            </div>
        </div>
    );
}
export default Skills;