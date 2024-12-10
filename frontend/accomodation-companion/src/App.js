import { React, useState } from "react";

import { Route, Routes } from "react-router-dom";
import StudentRoutes from "./Routers/StudentRoutes";
import Admin from "./Admin/Admin";
import About from "./pages/About";
import Pay from "./pages/Pay";



const App = () => {
  return (
    
    <div className="max-w-[1440px] mx-auto bg-white">
  
  <Routes>
    <Route path="/*" element={<StudentRoutes/>}></Route>
    <Route path="/admin/*" element={<Admin/>}></Route>
    <Route path="/aboutus" element={<About/>}></Route>
    <Route path="/pay" element={<Pay/>}></Route>
    
    {/* <Route path="/payment" element={<Payment/>}></Route> */}
    
    
  </Routes>
    </div>
  );
};

export default App;


//pune //range 12000-13000