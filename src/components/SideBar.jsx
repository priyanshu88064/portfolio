import cross from "../assets/cross.svg";

function SideBar({sideClass,setSideClass}){

    const handleCollapse = ()=>{
        setSideClass("hide");
    }

    return (
        <div className={`sidebar ${sideClass}`}>
            <div className="shead"><img src={cross} alt="" onClick={handleCollapse}/></div>
        </div>
    );
}
export default SideBar;