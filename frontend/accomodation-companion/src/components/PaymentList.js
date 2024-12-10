import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentService from "../services/PaymentService";
import Payment from "./Payment";

const PaymentList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [payment, setPayment] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await PaymentService.getPayment();
        setPayment(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deletePayment = (e, id) => {
    e.preventDefault();
    PaymentService.deletePayment(id).then((res) => {
      if (payment) {
        setPayment((prevElement) => {
          return prevElement.filter((payment) => payment.id !== id);
        });
      }
    });
  };

  return (
    <div className="container mx-auto my-8 " style={{ marginBottom: "300px" }}>
      <div className="h-12">
        <button
          onClick={() => navigate("/addPayment")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
        >
          Back
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Card Number
              </th>
              {/*              
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th> */}
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {payment.map((payment) => (
                <Payment
                  payment={payment}
                  deletePayment={deletePayment}
                  key={payment.id}
                ></Payment>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default PaymentList;
