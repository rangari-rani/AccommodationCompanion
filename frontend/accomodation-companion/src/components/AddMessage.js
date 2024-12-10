import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MessageService from "../services/MessageService";
import { Link } from "react-router-dom";
import { housesData } from "../data";
import { useParams } from "react-router-dom";
const AddMessage = () => {

  const [message, setMessage] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    msg: "",
  });


  const navigaye = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setMessage({ ...message, [e.target.name]: value });
  };

  const saveMessage = (e) => {
    e.preventDefault();
    MessageService.saveMessage(message)
      .then((response) => {
        console.log(response);
        // navigaye("/messageList");
        alert("Message Sent Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setMessage({
      id: "",
      name: "",
      email: "",
      mobile: "",
      msg: "",
    });
  };


   
  return (
    <div className="container mx-auto min-h-[800px] mb-14">
              <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8 ">
            <div className="flex items-center gap-x-2 mb-4">
             
                <Link to="" className="text-violet-700 text-sm">
                  Send message 
                </Link>
              </div>
            </div>
            {/* form  */}
            <form className="flex flex-col gap-y-4">
              <input
              required
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm "
                type="text"
                name="name"
                value={message.name}
                onChange={(e)=>handleChange(e)}
                placeholder="Name*"
              />
              <input
              required
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm "
                type="text"
                name="email"
                value={message.email}
                onChange={(e)=>handleChange(e)}
                placeholder="Email*"
              />
              <input
              required
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm "
                type="number"
                name="mobile"
                value={message.mobile}
                onChange={(e)=>handleChange(e)}
                placeholder="Contact Number*"
              />
              <textarea
              required
                className="border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400 "
                name="msg"
                value={message.msg}
                onChange={(e)=>handleChange(e)}
                placeholder="Message*"
                defaultValue="Hello, I am interested to book this accommodation "
              ></textarea>

              <div className="flex gap-x-2">
                {/* <Link to="/addMessage"> */}
                <button
                  onClick={saveMessage}
                  className="border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition"
                >
                  Save
                </button>
                {/* </Link> */}
                <button
                  onClick={reset}
                  className="border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition"
                >
                  Clear 
                </button>
                </div>
                </form>
                </div>
                


  );
};

export default AddMessage;
