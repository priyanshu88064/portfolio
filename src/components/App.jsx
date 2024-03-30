import { useState } from "react";
import Home from "./Home";
import Nav from "./Nav";
import SideBar from "./SideBar";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";

function App(){

  const [sideClass,setSideClass] = useState("");

  return (
    <div className="app">
      <div className="appop" style={{background:sideClass==="show"?"rgba(0, 0, 0, 0.5)":"transparent"}}></div>
      <SideBar sideClass={sideClass} setSideClass={setSideClass}/>
      <Nav setSideClass={setSideClass}/>
      <Home/>
      <Skills/>
      <Projects/>
      <Experience/>
      {/* <Home/>
      <Home/> */}
    </div>
  );
}
export default App;