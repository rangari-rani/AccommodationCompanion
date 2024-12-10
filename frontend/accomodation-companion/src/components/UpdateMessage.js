import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MessageService from "../services/MessageService";

const UpdateMessage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState({
    id: id,
    name: "",
    email: "",
    mobile: "",
    msg: "",
    
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setMessage({ ...message, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MessageService.getMessageById(message.id);
        setMessage(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateMessage = (e) => {
    e.preventDefault();
    console.log(message);
    MessageService.updateMessage(message, id)
      .then((response) => {
        navigate("/messageList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Message</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
             Name
          </label>
          <input
            type="text"
            name="name"
            value={message.name}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
             Email
          </label>
          <input
            type="text"
            name="email"
            value={message.email}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Mobile
          </label>
          <input
            type="number"
            name="mobile"
            value={message.mobile}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Message 
          </label>
          <input
            type="text"
            name="msg"
            value={message.msg}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={updateMessage}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
          >
            Update
          </button>
          <button
            onClick={() => navigate("/messageList")}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateMessage;
