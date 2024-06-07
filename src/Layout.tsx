import React from "react";
import { Outlet } from "react-router";
import Herosection from "./components/Herosection/Herosection";





const Layout:React.FC=()=>{
    return <>
    <div className="flex justify-center">
    <Outlet/>
   <Herosection/>
   </div>
   
    </>
};


export default Layout