import React from 'react';
//import { useLocation } from 'react-router-dom';
import Image from "../assets/img/House1.jpeg"
import Header from '../components/Header';
import Footer from '../components/Footer';
const About = () => {
  return (
    <>
    <Header/>
    <div className='flex flex-col lg:flex-row '>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-2'>
            <span className='text-violet-700'>About Us</span> 
          </h1>
          <p className='max-w-[480px] mb-8'>
          Welcome to Accomodation Companion, where your journey begins to find the perfect accommodation for your next adventure. We understand that where you stay plays a pivotal role in shaping your travel experience, and that's why we're here to make your accommodation booking process seamless and enjoyable.</p>

<h1 className='text-4xl lg:text-[40px] font-semibold leading-none mb-6'>Our Commitment</h1>
<p className='mb-6'>
At Accomodation Companion, we are committed to providing you with a hassle-free and convenient platform to discover, compare, and book accommodations that suit your preferences and budget. Whether you're a globetrotting explorer or a student seeking a comfortable place to stay, we have you covered.
          </p>
          <p><span className='font-semibold leading-none mb-6'>User-Friendly Interface:</span> Our user-centric design ensures that navigating through our platform is intuitive and enjoyable. Finding your ideal accommodation has never been easier.</p>
          <p><span className='font-semibold leading-none mb-6'>Special Services:</span>  Beyond just booking a room, we offer automated services such as laundry, ironing, and WI-FI, adding an extra layer of convenience to your stay.</p>
          <p><span className='font-semibold leading-none mb-6'>Secure Booking:</span>  Your security is paramount. Our secure payment gateways ensure that your transactions are protected, giving you peace of mind</p>

        
        </div>
        {/* image  */}
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt=''/>
        </div>
      </div>
      <Footer/>
      </>
  );
}
export default About;
