import React from "react";
import fbIcon from "../assets/img/social-icon-1.png";
import thumb1 from "../assets/reelimage1.jpg";
import thumb2 from "../assets/reelimage2.jpg";
import thumb3 from "../assets/reelimage3.jpg";
import thumb4 from "../assets/reelimage4.jpg";
import thumb5 from "../assets/reelimage5.jpg";

const VideoShopPage = () => {
  const SearchForm = () => (
    <div className="mb-5 md:mb-6">
      <h3 className="text-black text-sm font-semibold mb-3">Video Search</h3>
      <form className="flex items-center bg-white h-15 rounded-lg">
        <input
          type="text"
          placeholder="Search Videos"
          className="bg-transparent w-full h-full p-3 text-black"
        />
        <button className="text-red-600 text-xl px-3">
          <i className="italic before:font-flaticon_jio___influencer"></i>
        </button>
      </form>
    </div>
  );

  const PriceFilter = () => (
    <div className="mb-5 md:mb-6">
      <h3 className="text-black text-sm font-semibold mb-3">Filter by price</h3>
      <form className="bg-white p-4 rounded-lg">
        <div className="relative bg-zinc-50 shadow-inner h-1.5 rounded-lg border border-red-600">
          <div className="relative h-full w-full z-0 overflow-hidden rounded-sm">
            <div className="absolute bg-red-600 h-full w-full scale-x-60 origin-left"></div>
          </div>
          <div
            role="slider"
            className="absolute right-[-0.875rem] top-[-0.4375rem] w-4 h-4 border-4 border-red-600 rounded-full bg-white"
          ></div>
          <div
            role="slider"
            className="absolute right-[-0.875rem] top-[-0.4375rem] w-4 h-4 border-4 border-red-600 rounded-full bg-white"
          ></div>
        </div>
        <span className="block text-xs font-medium mt-2.5 text-black">
          $19 - $69
        </span>
      </form>
    </div>
  );

  const CategoryList = () => (
    <div className="mb-5 md:mb-6">
      <h3 className="text-black text-sm font-semibold mb-3">Video Categories</h3>
      <div className="bg-white px-4 py-6 rounded-lg">
        {[
          { name: "Lifestyle", count: 20 },
          { name: "Beauty & Fashion", count: 15 },
          { name: "Fitness & Health", count: 20 },
          { name: "Food & Cooking", count: 20 },
          { name: "Tech & Gadgets", count: 20 },
          { name: "Entertainment", count: 20 },
        ].map((cat, idx) => (
          <a
            href="#"
            key={idx}
            className="flex justify-between mb-3 hover:text-red-600"
          >
            <span>{cat.name}</span>
            <span>{cat.count}</span>
          </a>
        ))}
      </div>
    </div>
  );

  const Sidebar = () => (
    <div className="w-full md:w-3/12 px-3">
      <SearchForm />
      <PriceFilter />
      <CategoryList />
    </div>
  );

  const VideoCard = ({ imageUrl, title, price, detailsUrl }) => (
    <div className="w-full sm:w-1/2 md:w-1/3 px-2 mt-5">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h4 className="text-sm font-bold mb-2">{title}</h4>
          <p className="text-red-600 font-semibold mb-2">{price}</p>
          <a
            href={detailsUrl}
            className="text-white bg-red-600 px-3 py-1 rounded-md inline-block hover:opacity-90 transition"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );

  const VideoGrid = () => {
    const videos = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb1, thumb2, thumb3, thumb4];
    return (
      <div className="w-full md:w-9/12 px-3">
        <div className="flex flex-wrap -mx-2 -mt-5">
          {videos.map((img, idx) => (
            <VideoCard
              key={idx}
              imageUrl={img}
              title="Smiley woman pop party studio medium shot"
              price="$69"
              detailsUrl="#"
            />
          ))}
        </div>
        <div className="flex justify-center items-center gap-3 mt-12">
          <button className="text-red-600">
            <i className="italic before:font-flaticon_jio___influencer"></i>
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <a
              key={page}
              href="#"
              className={`w-8 h-8 flex justify-center items-center rounded-full font-bold ${
                page === 1
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-black hover:bg-red-600 hover:text-white"
              }`}
            >
              {page}
            </a>
          ))}
          <button className="text-red-600">
            <i className="italic before:font-flaticon_jio___influencer"></i>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="py-8 md:py-16 md:pl-30 bg-white">
      <div className="max-w-7xl px-4 md:px-8 flex flex-wrap -mx-3">
        <Sidebar />
        <VideoGrid />
      </div>
    </div>
  );
};

export default VideoShopPage;
