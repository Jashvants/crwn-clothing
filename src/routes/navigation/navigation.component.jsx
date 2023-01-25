import { Outlet } from "react-router-dom";
import { Fragment } from "react";

const Navigation = ()=>{
    return (
      <div>
        <div>
          <h1>I am navigation bar</h1>
        </div>
        <Outlet/>
  
      </div>
    )
  }

export default Navigation;