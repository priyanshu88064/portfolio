import collapse from "../assets/collapse.svg";
import profile from "../assets/profile.svg";

function Nav({setSideClass}){
    return (
        <div className="nav">
            <div className="navimg">
                <img src={profile} alt=""/>
                <div>Priyanshu</div>
            </div>
            <div className="line"></div>
            <div className="navcollapse"><img src={collapse} alt="" onClick={()=>{setSideClass("show")}}/></div>
        </div>
    );
}
export default Nav;