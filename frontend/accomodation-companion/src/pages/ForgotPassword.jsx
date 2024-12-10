import React from "react";
import imglogo from "../assets/img/login3.jpg"
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <section className="bg-gray-100 min-h-screen flex items-center justify-center">
        {/* login container */}
        <div className="bg-gray-50 flex rounded-2xl shadow-lg max-w-3xl p-5">
          {/* form  */}
          <div className="sm:w-1/2 px-16">
              <h2 className="font-bold text-2xl text-violet-900">Forgot Password</h2>
              <p className="text-sm mt-4">Enter your email and we'll send you instructions to reset your password </p>
              <form className="flex flex-col gap-4">
                <input className="p-2 mt-8 rounded-xl border" type="text" name="email" placeholder="Email" />
             
                <button className="bg-violet-700 rounded-xl text-white py-2 hover:scale-105 duration-300">Send Link Notification </button>
              </form>
              <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
                <hr className="border-gray-400"/>
                <p className="text-center">OR</p>
                <hr className="border-gray-400"/>
              </div>

         
          
              <Link className="hover:text-violet-900  transition p-2 justify-center  font-semibold px-12   rounded-xl" to={`/signin`}>
            Back to Login... {" "}
          </Link>
         
              

          </div>
          {/* image */}
          <div className=" sm:block hidden  w-1/2">
            <img className=" rounded-2xl" src={imglogo} alt=""/>
            
          </div>
        </div>

      </section>
    </>
  );
};

export default ForgotPassword;
