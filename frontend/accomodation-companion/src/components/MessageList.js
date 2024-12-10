import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MessageService from "../services/MessageService";
import Message from "./Message";

const MessageList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await MessageService.getMessage();
        setMessage(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteMessage = (e, id) => {
    e.preventDefault();
    MessageService.deleteMessage(id).then((res) => {
      if (message) {
        setMessage((prevElement) => {
          return prevElement.filter((message) => message.id !== id);
        });
      }
    });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        
        <button
          onClick={() => navigate("/addMessage")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
          Add Message 
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
                Email
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Mobile
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Message 
              </th>
            
               <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th> 
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {message.map((message) => (
                <Message
                  message={message}
                  deleteMessage={deleteMessage}
                  key={message.id}></Message>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default MessageList;