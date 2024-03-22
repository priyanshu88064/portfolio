import cross from "../assets/cross.svg";
import linkedin from "../assets/linkedin.svg";
import git from "../assets/git.svg";

function SideBar({sideClass,setSideClass}){

    const handleCollapse = ()=>{
        setSideClass("hide");
    }

    return (
        <div className={`sidebar ${sideClass}`}>
            <div className="shead"><img src={cross} alt="" onClick={handleCollapse}/></div>
            <div>SHOWCASE</div>
            <div>DOWNLOAD CV</div>
            <div>
                <img src={linkedin} alt=""/>
                <img src={git} alt=""/>
            </div>
        </div>
    );
}
export default SideBar;