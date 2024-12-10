import React, { useRef, useState } from "react";
// import imglogo from "../assets/img/login4.jpg";
import imglogo from "../assets/img/login3.jpg";
import { Link } from "react-router-dom";
import Userservice from "../services/UserService";
// import emailjs from "@emailjs/browser";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_06clsi1",
    //     "template_m4a2sk4",
    //     form.current,
    //     "3-GJ3c9jlTFFwtOen"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       console.log("message sent");
    //       alert("Registration Successful");
    //       // alert("Please verify your email for login ");
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

    console.log("Form data:", formData);

    // You can add form submission logic here
    Userservice.addStudent(formData).then((res) => {
      const f = true;
      if (res.data === f) {
        // alert("Please verify your email for login ");
        alert("Registration Successfull...Please Login");
        // window.location.href="/"
      } else {
        alert("Registration Failed");
        window.location.href="/home/signup"
      }
    });
  };

  return (
    <>
      <section className="bg-gray-100 min-h-screen flex items-center justify-center">
        {/* login container */}
        <div className="bg-gray-50 flex rounded-2xl shadow-lg max-w-3xl p-5">
          {/* form  */}
          <div className="sm:w-1/2 px-16">
            <h2 className="font-bold text-2xl text-violet-900">Sign Up</h2>
            <p className="text-sm mt-4">Create your account with us! </p>
            <form
              className="flex flex-col gap-4"
              ref={form}
              onSubmit={handleSubmit}
            >
              <input
                className="p-2 mt-8 rounded-xl border"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Name"
              />

              <input
                className="p-2 rounded-xl border"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
              />

              <input
                className="p-2 rounded-xl border"
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                placeholder="Contact Number"
              />

              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Password"
              />

              <button
                className="bg-violet-700 rounded-xl text-white py-2 hover:scale-105 duration-300"
                type="submit"
              >
                Sign Up{" "}
              </button>
            </form>
            <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center">OR</p>
              <hr className="border-gray-400" />
            </div>
            <div className="mt-3 text-xs border-b py-1 flex">
              <p className="font-semibold">Already have an account?</p>

              <Link
                className="bg-violet-400 border   px-4 py-1 font-semibold rounded-xl hover:scale-105 duration-300"
                to={`/signin`}
              >
                Log in{" "}
              </Link>
            </div>
          </div>
          {/* image */}
          <div className=" sm:block hidden  w-1/2">
            <img className=" rounded-2xl" src={imglogo} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;

//ankitnagrale2912@gmail.com
//bachhav.darshan@gmail.com
