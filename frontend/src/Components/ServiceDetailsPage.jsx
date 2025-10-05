import React, { useState } from "react";
import sidebarimage from "../assets/service-details-sidebar.jpg";
import { BsTelephoneOutbound } from "react-icons/bs";
import servicemainimg from "../assets/service-details-img.jpg";
import serviceimg1 from "../assets/service-details-img-1.jpg";
import serviceimg2 from "../assets/service-details-img-2.jpg";
import { FaTag } from "react-icons/fa";

const ServiceDetailsPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const buttons = [
    "Dance Your Way Brand Awareness",
    "Social Media Strategy",
    "Content Creation",
    "Influencer Marketing",
    "Brand Partnerships",
    "Creative Campaigns",
  ];

  const services = [
    {
      imageUrl: "https://c.animaapp.com/mgcizh9sa7oWOK/assets/jo-article-1.jpg",
      title: "High-Quality Product Photography",
      description:
        "The perfect set of skills for your next project. Work with the world's best freelancing talent.",
      serviceUrl: "#",
    },
    {
      imageUrl: "https://c.animaapp.com/mgcizh9sa7oWOK/assets/jo-article-2.jpg",
      title: "Stunning Visuals for Your Products",
      description:
        "The perfect set of skills for your next project. Work with the world's best freelancing talent.",
      serviceUrl: "#",
    },
    {
      imageUrl: "https://c.animaapp.com/mgcizh9sa7oWOK/assets/jo-article-3.jpg",
      title: "Dance Your Way to Brand Awareness",
      description:
        "The perfect set of skills for your next project. Work with the world's best freelancing talent.",
      serviceUrl: "#",
    },
  ];

  const ServiceCard = ({ imageUrl, title, description, serviceUrl }) => (
    <div className="bg-rose-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-56 object-cover rounded-t-2xl"
      />
      <div className="p-5">
        <h4 className="text-lg font-bold mb-2 hover:text-red-600">
          <a href={serviceUrl}>{title}</a>
        </h4>
        <p className="text-sm mb-4">{description}</p>
        <a
          href={serviceUrl}
          className="inline-block px-5 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-md hover:opacity-90 transition"
        >
          View Details
        </a>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white px-4 md:px-10 lg:px-40 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/4 flex-shrink-0 flex flex-col gap-5 order-1 bg-red-50 h-[50vw] p-5 rounded-2xl">
          {buttons.map((text, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-full h-12 border-2 font-semibold rounded-lg transition duration-300 ${
                activeIndex === index
                  ? "bg-gradient-to-r from-red-500 to-orange-400 text-white border-transparent"
                  : "border-red-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-400 hover:text-white"
              }`}
            >
              {text}
            </button>
          ))}

          <div className="relative w-full mt-3 rounded-2xl overflow-hidden">
            <img
              src={sidebarimage}
              alt="Sidebar"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-end pb-6 text-center">
              <BsTelephoneOutbound size={40} className="text-white mb-2" />
              <h1 className="text-white text-lg font-semibold">
                Contact with me
              </h1>
              <h1 className="text-white text-base">+91 0321 456 8520</h1>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6 order-2">
          <img
            src={servicemainimg}
            alt=""
            className="rounded-xl w-full object-cover"
          />

          <div className="flex items-center gap-2">
            <FaTag className="text-red-500 rotate-90" />
            <span className="text-gray-700 font-medium">brand awareness</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Dance Your Way to Brand Awareness
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt...
            </p>
            <p className="text-gray-600 leading-relaxed">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit...
            </p>
            <h2 className="text-xl font-semibold text-gray-900">
              Why do we use it?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available...
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <img
              src={serviceimg1}
              alt=""
              className="rounded-xl w-full sm:w-1/2 object-cover"
            />
            <img
              src={serviceimg2}
              alt=""
              className="rounded-xl w-full sm:w-1/2 object-cover"
            />
          </div>

          <p className="text-gray-600 leading-relaxed">
            Making this the first true generator on the Internet...
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-6">Related Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
