import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  PaymentService from "../services/PaymentService";
import imglogo from "../assets/img/transaction.jpeg"

const AddPayment = () => {
  const [payment, setPayment] = useState({
    id: "",
    name: "",
    cardNumber: "",
    // expiryDate: "",
    // cvv: ""
  });

  const navigaye = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setPayment({ ...payment, [e.target.name]: value });
  };

  const savePayment = (e) => {
    e.preventDefault();
    PaymentService.savePayment(payment)
      .then((response) => {
        console.log(response);
        // navigaye("/paymentList");
        alert("Payment done Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setPayment({
      id: "",
      name: "",
      cardNumber: "",
      // expiryDate: "",
      // cvv: ""
    });
  };

  return (
    <>
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
    {/* login container */}
    <div className="bg-gray-50 flex rounded-2xl shadow-lg max-w-3xl p-5">
      {/* form  */}
      <div className="sm:w-1/2 px-16">
          <h2 className="font-bold text-2xl text-violet-900">Make A Payment</h2>
          {/* <p className="text-sm mt-4"> </p> */}
          <form className="flex flex-col gap-4">
          <input className="p-2 mt-4 rounded-xl border" type="text" 
          name="name" 
          value={payment.name}
          onChange={(e)=>handleChange(e)}
          placeholder="Name of Cardholder" />


            <input className="p-2 mt-4 rounded-xl border" type="number" 
            name="cardNumber"
            value={payment.cardNumber}
            onChange={(e)=>handleChange(e)}
            placeholder="Card Number" 
            />
            <input className="p-2 mt-4 rounded-xl border" type="month" 
            // name="cardNumber"
            // value={payment.cardNumber}
            onChange={(e)=>handleChange(e)}
            placeholder="Expiry Date" 
            />
            <input className="p-2 mt-4 rounded-xl border" type="password" 
            // name="cardNumber"
            // value={payment.cardNumber}
            onChange={(e)=>handleChange(e)}
            placeholder="cvv" 
            />
        
          
            <button className="bg-violet-700 rounded-xl text-white py-2 hover:scale-105 duration-300"
            onClick={savePayment}>Submit </button>
            

            <button className="bg-violet-700 rounded-xl text-white py-2 hover:scale-105 duration-300"
            onClick={reset}>Clear </button>
          </form>
       
          

      </div>
      {/* image */}
      <div className=" sm:block hidden  w-1/2">
        <img className=" rounded-2xl" src={imglogo} alt="transaction-image"/>
      </div>
    </div>

  </section>
</>
  );
};

export default AddPayment;
