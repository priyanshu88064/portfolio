import cross from "../assets/cross.svg";
import linkedin from "../assets/linkedin.svg";
import git from "../assets/git.svg";

const resume = "https://portfolio-psi-five-80.vercel.app/resume.pdf";

function SideBar({sideClass,setSideClass}){

    const handleCollapse = ()=>{
        setSideClass("hide");
    }

    return (
        <div className={`sidebar ${sideClass}`}>
            <div className="shead"><img src={cross} alt="" onClick={handleCollapse}/></div>
            <div className="sp"><a onClick={handleCollapse} href="#projects">SHOWCASE</a></div>
            <div className="sp"><a onClick={handleCollapse} href={resume} target="blank">DOWNLOAD CV</a></div>
            <div>
                <img src={linkedin} alt=""/>
                <img src={git} alt=""/>
            </div>
        </div>
    );
}
export default SideBar;