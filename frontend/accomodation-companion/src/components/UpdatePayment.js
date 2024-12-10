import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PaymentService from "../services/PaymentService";

const UpdatePayment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [payment, setPayment] = useState({
    id: id,
    name: "",
    cardNumber: "",
   
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setPayment({ ...payment, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PaymentService.getPaymentById(payment.id);
        setPayment(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const UpdatePayment = (e) => {
    e.preventDefault();
    console.log(payment);
    PaymentService.updatePayment(payment, id)
      .then((response) => {
        navigate("/paymentList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Payment</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
             Name
          </label>
          <input
            type="text"
            name="name"
            value={payment.name}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
             Card Number 
          </label>
          <input
            type="number"
            name="cardNumber"
            value={payment.cardNumber}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={UpdatePayment}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
          >
            Update
          </button>
          <button
            onClick={() => navigate("/paymentList")}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePayment;
