import React from 'react';
import Search from "../components/Search"
//import image
import Image from "../assets/img/House1.jpeg"

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row '>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-violet-700'>Book</span> Your Accomodation With Us
          </h1>
          <p className='max-w-[480px] mb-8'>
          Accommodation Companion has both visitors and tenants, of whom you can be either or both.It is budget friendly and offers spacious and well- appointed rooms with modern amenities like Wi-Fi, flat screen TVs and luxurious bedding.
          </p>
        </div>
        {/* image  */}
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt=''/>
        </div>
      </div>
      <Search/>
    </section>
  );
};

export default Banner;
