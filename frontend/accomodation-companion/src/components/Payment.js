import React from "react";
import { useNavigate } from "react-router-dom";


const Payment = ({ payment, deletePayment }) => {
  const navigate = useNavigate();
  const editPayment = (e, id) => {
    e.preventDefault();
    navigate(`/editPayment/${id}`);
  };

  return (
    
    <tr key={payment.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{payment.name}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{payment.cardNumber}</div>
      </td>
 
       <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e, id) => editPayment(e, payment.id)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
          Edit
        </a>
        <a
          onClick={(e, id) => deletePayment(e, payment.id)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
          Delete
        </a>
      </td>  
    </tr>
  );
};

export default Payment;

