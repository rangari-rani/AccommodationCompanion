import React from "react";
//import routes and route
import { Routes, Route } from "react-router-dom";
import AddPayment from "./../components/AddPayment";
import UpdatePayment from "./../components/UpdatePayment";
import PaymentList from "./../components/PaymentList";

import ForgotPassword from "./../pages/ForgotPassword";
import Signup from "./../pages/Signup";
import Signin from "./../pages/Signin";
import PropertyDetails from "./../pages/PropertyDetails";
import Home from "./../pages/Home";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
// import Payment from "./../pages/Payment";
import AddOwner from "./../components/AddOwner";
import UpdateOwner from "../components/UpdateOwner";
import OwnerList from "../components/OwnerList";

import AddMessage from "./../components/AddMessage";
import UpdateMessage from "./../components/UpdateMessage";
import MessageList from "./../components/MessageList";

import About from "../pages/About";
const StudentRoutes = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* <Route path="/payment" element={<Payment />}></Route>  */}

          <Route path="/addOwner" element={<AddOwner />} />
          <Route path="/editOwner/:id" element={<UpdateOwner />} />
          <Route path="/ownerList" element={<OwnerList />} />

          <Route path="/addMessage" element={<AddMessage />} />
          <Route path="/editMessage/:id" element={<UpdateMessage />} />
          <Route path="/messageList" element={<MessageList />} />

          <Route path="/addPayment" element={<AddPayment />} />
          <Route path="/editPayment/:id" element={<UpdatePayment />} />
          <Route path="/paymentList" element={<PaymentList />} />

          <Route path="/aboutus" element={<About/>}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default StudentRoutes;
