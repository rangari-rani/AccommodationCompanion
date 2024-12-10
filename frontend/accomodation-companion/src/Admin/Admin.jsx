import React from "react";
import { Route, Routes } from "react-router-dom";
import UpdateStudent from './../components/UpdateStudent';
import AddStudent from './../components/AddStudent';
import StudentList from './../components/StudentList';
import Navbar from './../components/Navbar';
import OwnerList from './../components/OwnerList';
import AddOwner from './../components/AddOwner';
import UpdateOwner from './../components/UpdateOwner';
import AddMessage from './../components/AddMessage';
import UpdateMessage from './../components/UpdateMessage';
import MessageList from './../components/MessageList';
import AddPayment from './../components/AddPayment';
import UpdatePayment from './../components/UpdatePayment';
import PaymentList from './../components/PaymentList';
import Footer from "./../components/Footer";
import About from "../pages/About";
const Admin = () => {
  return (
    <div>
     <Navbar />
        <Routes>
          <Route index element={<StudentList />} />
          <Route path="/" element={<StudentList />}></Route>
          <Route path="/studentList" element={<StudentList />} />
          <Route path="/addStudent" element={<AddStudent />} />
          <Route path="/editStudent/:id" element={<UpdateStudent />} />

         
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
               <Footer/> 
    </div>
  );
};

export default Admin;
