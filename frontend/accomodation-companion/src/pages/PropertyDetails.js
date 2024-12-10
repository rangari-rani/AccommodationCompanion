import React, {useState}from "react";
//import data
import { housesData } from "../data";
//import use params
import { useParams } from "react-router-dom";
//import icons
import { BiWifi, BiDish, BiBed, BiBold } from "react-icons/bi";
import { BsCurrencyRupee } from "react-icons/bs";
//import link
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MessageService from "../services/MessageService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PropertyDetails = () => {

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

  const handleSubmit = (e) => {
    e.preventDefault(); 
  }
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

  const resetForm = (e) => {
    e.preventDefault();
    if (
      message.name ||
      message.email ||
      message.mobile ||
      message.msg
    ) {
      toast.info("Form has been reset!");
    }
    setMessage({
      name: "",
      email: "",
      mobile: "",
      msg: "",
    });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //get the house id
  const { id } = useParams();
  console.log(id);
  //get the house based on the id
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  console.log(house);
  return (
    <>
         <ToastContainer />
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{house.name}</h2>
            <h3 className="text-lg mb-4">{house.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-green-500 text-white px-3 rounded-full">
              {house.type}
            </div>
            <div className="bg-violet-500 text-white px-3 rounded-full">
              {house.country}
            </div>
          </div>
          <div className="text-3xl font-semibold text-violet-600">
            {" "}
            {house.price}
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img src={house.imageLg} alt="" />
            </div>
            <div className="flex gap-x-6 text-violet-700 mb-6">
              <div className="flex gap-x-2 items-center">
                <BiWifi className="text-2xl" />
                <div>{house.wifi}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiDish className="text-2xl" />
                <div>{house.food}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-2xl" />
                <div>{house.bed}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BsCurrencyRupee className="text-2xl" />
                <div>{house.price}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8 ">
            <div className="flex items-center gap-x-4 mb-8">
              <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                <img src={house.agent.image} alt="" srcset="" />
              </div>
              <div>
                <div className="font-bold text-lg">{house.agent.name}</div>
                <Link to="" className="text-violet-700 text-sm">
                  House Owner
                </Link>
              </div>
            </div>
            {/* form  */}
            <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
              <input
              required
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm "
                type="text"
                name="name"
                value={message.name}
                onChange={(e)=>handleChange(e)}
                placeholder="Name"
              />
              <input
              required
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm "
                type="text"
                name="email"
                value={message.email}
                onChange={(e)=>handleChange(e)}
                placeholder="Email"
                
              />
              <input
              required
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm "
                type="number"
                name="mobile"
                value={message.mobile}
                onChange={(e)=>handleChange(e)}
                placeholder="Contact Number"
                
              />
              <textarea
              required
                className="border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400 "
                name="msg"
                value={message.msg}
                onChange={handleChange}
                placeholder="Message*"
             
              ></textarea>

              <div className="flex gap-x-2">
                
              <button onClick={(e) => {
                e.preventDefault();
                toast.warn("Login to send message", {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }}
    
      
      className="border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition"
   >
      Send Message
   </button>

   {/* Clear Button */}
   <button
type="button" // Use type="button" to prevent form submission
onClick={resetForm}
      className="border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition"
   >
      Clear
   </button>
            
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default PropertyDetails;
