import React from "react";
import Navbar from "../components/Navbar";
import Footer from "./../components/Footer";
import AddOwner from "./../components/AddOwner";
import UpdateOwner from "../components/UpdateOwner";
import OwnerList from "../components/OwnerList";
// import { Routes, Route } from "react-router-dom";

const OwnerPage = () => {
  return (
    <div>
      <Navbar />
      <AddOwner/>
      <UpdateOwner/>
      <OwnerList/>
      {/* <Routes>
        <Route path="/addOwner" element={<AddOwner />} />
        <Route path="/editOwner/:id" element={<UpdateOwner />} />
        <Route path="/ownerList" element={<OwnerList />} />
      </Routes> */}
      <Footer />
    </div>
  );
};

export default OwnerPage;
