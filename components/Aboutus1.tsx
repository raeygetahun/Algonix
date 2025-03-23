import React from "react";

const Aboutus1 = () => {
  return (
    <div className="bg-[#11112B] mt-14 text-white">
      {/* Breadcrumb Navigation */}
      <div className="flex gap-x-3 pt-10 px-6 md:px-12">
        <span className="font-Poppins text-lg font-light">Home {'>  '}</span>
        <span className="font-Poppins text-lg font-semibold">About</span>
      </div>

      {/* Heading Section */}
      <div className="text-[10vw] md:text-[6vw] lg:text-[4vw] font-bold leading-tight mt-10 md:mt-14 text-center px-6">
        About Us
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center text-white py-12 px-6 md:px-12 lg:px-20">
        {/* Left Column - Heading */}
        <h5 className="text-[6vw] md:text-[4vw] lg:text-[2.5vw] xl:text-[2vw] font-bold leading-normal text-center md:text-left mb-6 md:mb-0 md:w-1/2">
          We believe that technology can change the world.
        </h5>

        {/* Right Column - Paragraphs */}
        <div className="flex flex-col gap-5 opacity-75 text-[4vw] md:text-[2vw] lg:text-[1.2vw] leading-snug md:w-1/2">
          <p>
            That's why we're committed to delivering innovative IT solutions to
            businesses of all sizes. Our team of experienced professionals is
            dedicated to helping you achieve your goals and thrive in a rapidly
            evolving digital landscape.
          </p>

          <p>
            We are an IT company that offers a wide range of services to help
            businesses succeed in the digital world. Our expertise includes web
            development, mobile development, cloud computing, cybersecurity,
            and digital marketing. We provide customized solutions to meet the
            unique needs of each of our clients, regardless of their size or
            location.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus1;
