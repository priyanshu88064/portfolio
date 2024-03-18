import { useState } from "react";
import Home from "./Home";
import Nav from "./Nav";
import SideBar from "./SideBar";

function App(){

  const [sideClass,setSideClass] = useState("");

  return (
    <div className="app">
      <SideBar sideClass={sideClass} setSideClass={setSideClass}/>
      <Nav setSideClass={setSideClass}/>
      <Home/>
      <Home/>
      <Home/>
      <Home/>
    </div>
  );
}
export default App;