'use client'
import React from 'react';

function Card1() {
  const handleSubmit = (event:any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };
    console.log(data);
  };

  return (
    <div className="relative mt-20 ml-10 flex flex-col items-center pb-20">
      {/* Main Form Container */}
      <div className="bg-gradient-to-b from-[#11112B] via-[#11112B] to-[#11112B] w-full h-auto flex items-center justify-center flex-shrink-0 p-8">
        <div className="w-full md:w-[700px] h-auto flex flex-col rounded-2xl p-8 shadow-xl transform transition-all duration-500 hover:scale-105">
          <h1 className="text-white font-space-grotesk font-bold text-2xl md:text-3xl tracking-wide text-center md:text-left">
            Send Us a Message
          </h1>
          <p className="text-white font-poppins text-lg font-normal leading-6 mt-4 text-center md:text-left">
            Have any questions regarding our services? Send us your message.
          </p>

          {/* Form */}
          <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
            {/* Name and Email Fields */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col w-full">
                <label className="text-white font-poppins text-lg font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name ..."
                  className="h-[50px] px-4 shadow-md border-2 rounded-xl w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#92DEED] mt-2 transition duration-300"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-white font-poppins text-lg font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address ..."
                  className="h-[50px] px-4 shadow-md border-2 rounded-xl w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#92DEED] mt-2 transition duration-300"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="flex flex-col mt-6">
              <label className="text-white font-poppins text-lg font-semibold">Message</label>
              <textarea
                name="message"
                placeholder="Enter Your Message ..."
                className="h-[130px] shadow-md border-2 rounded-xl w-full px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#92DEED] mt-2 transition duration-300"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center justify-between mt-5">
              <button
                type="submit"
                className="bg-[#92DEED] text-[#11112B] font-poppins text-lg font-bold px-8 py-4 rounded-xl transition duration-300 transform hover:scale-105 hover:bg-[#8ccf86] hover:text-white"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Card1;
