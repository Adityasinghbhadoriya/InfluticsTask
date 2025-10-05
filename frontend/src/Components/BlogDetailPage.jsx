import React from "react";

const BlogDetailPage = () => {
    const categories = [
    ["Product Presentation", 8],
    ["Dedicated Video Call", 11],
    ["Trending Challenge", 18],
    ["Dance Awareness", 11],
    ["Photography", 7],
  ];

  const popularPosts = [
    {
      img: "https://c.animaapp.com/mgdgc9pm6Dmy2p/assets/jo-article-2.jpg",
      date: "14/03/2024",
      title: "How to get the first 100 customers for your business",
    },
    {
      img: "https://c.animaapp.com/mgdgc9pm6Dmy2p/assets/jo-article-1.jpg",
      date: "14/03/2024",
      title: "Top 10 Social Media Strategies for 2024",
    },
    {
      img: "https://c.animaapp.com/mgdgc9pm6Dmy2p/assets/jo-article-3.jpg",
      date: "14/03/2024",
      title: "How AI is Revolutionizing Content Creation",
    },
  ];

  const tags = [
    "Marketing",
    "Agency",
    "Search Engine",
    "Tech",
    "Influencer",
    "Advertising",
    "Branding",
  ];
  return (
    <div className="w-full bg-white py-[60px] md:py-[67.2px]">
      <div className="mx-[15px] md:mx-[93.1968px]">
        <div className="flex flex-wrap -mt-6 -mx-3">
          {/* Left Section */}
          <div className="shrink-0 max-w-full w-full mt-6 px-3 md:w-[66.6667%]">
            <div className="overflow-hidden mb-[18px] rounded-[20px]">
              <img
                src="https://c.animaapp.com/mgdh5xbbIdGWBz/assets/blog-1.jpg"
                alt=""
                className="aspect-[869/470] max-w-full object-cover w-full"
              />
            </div>

            {/* Blog Meta */}
            <div className="flex flex-wrap gap-x-[15px] gap-y-1 mb-[11px] text-sm leading-[21px] md:gap-x-[20.224px]">
              <div className="text-red-600 font-medium">
                Written by:{" "}
                <span className="text-zinc-500 font-normal">Marry Biden</span>
              </div>
              <div className="relative text-black pl-[22px] md:pl-[24.832px] before:block before:w-[7px] before:h-[7px] before:bg-red-600 before:rounded-full before:absolute before:left-0 before:top-2/4 before:-translate-y-1/2">
                14/03/2024
              </div>
            </div>

            {/* Blog Title */}
            <h3 className="text-xl font-bold mb-2.5 md:mb-[10.112px]">
              <a
                href="#"
                className="text-black hover:text-red-600 hover:border-red-600"
              >
                Life won&#39;s one Beast air Over above all
              </a>
            </h3>

            {/* Blog Content */}
            <p className="text-zinc-500 text-[15px] leading-[26.25px] mb-[18px]">
              Consectetur adipisicing elit, sed do eiusmod tempor is incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, made of
              owl the quis nostrud exercitation ullamco laboris nisi.
              <br />
              <br />
              Vivamus condimentum a sem nec vehicula. In congue feugiat
              molestie. Aliquam nec nulla neque. Donec ac ipsum in neque
              efficitur pulvinar vitae sagittis tortor. Mauris ut fringilla
              quam, sit amet tempus lacus.
            </p>

            <ul className="text-black text-[13px] font-medium leading-[19.5px] mt-5 mb-[30px] list-none pl-0">
              {[
                "Technology Support Allows Erie non-profit to Serve.",
                "Web design done Delightful Visualization",
                "Software Makes Your Profit Double if You Scale Properly.",
              ].map((text, index) => (
                <li
                  key={index}
                  className="relative mb-[15px] pl-[26px] before:block before:w-[8px] before:h-[8px] before:bg-red-600 before:rounded-full before:absolute before:left-0 before:top-2/4 before:-translate-y-1/2"
                >
                  {text}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] md:gap-[20.224px] mb-[15px]">
              <img
                src="https://c.animaapp.com/mgdh5xbbIdGWBz/assets/blog-3.jpg"
                alt="Inner Image"
                className="rounded-[15px] w-full"
              />
              <img
                src="https://c.animaapp.com/mgdh5xbbIdGWBz/assets/blog-2.jpg"
                alt="Inner Image"
                className="rounded-[15px] w-full"
              />
            </div>

            <blockquote className="relative italic font-medium bg-red-600/10 border-l-4 border-l-red-600 pl-5 pr-20 py-[30px] mb-4 rounded-md">
              Pellentesque sollicitudin congue dolor non aliquam. Morbi
              volutpat, nisi vel ultricies urna condimentum, sapien neque
              lobortis tortor.
              <img
                src="https://c.animaapp.com/mgdh5xbbIdGWBz/assets/quotation-icon-2.svg"
                alt="quotation icon"
                className="absolute right-[30px] bottom-[30px] w-6"
              />
            </blockquote>

            {/* Tags + Share */}
            <div className="flex flex-wrap justify-between py-5 border-y border-violet-200">
              <div className="flex items-center gap-x-[15px] flex-wrap gap-y-[15px]">
                <h4 className="font-semibold">Tags:</h4>
                <div className="flex gap-x-2.5 flex-wrap gap-y-2.5">
                  {["Reseller", "Hosting", "WP Hosting"].map((tag) => (
                    <a
                      key={tag}
                      href="#"
                      className="text-black text-sm bg-stone-50 flex items-center justify-center h-[34px] px-4 hover:text-white hover:bg-red-600 rounded-md"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-x-[15px] flex-wrap gap-y-[15px]">
                <h4 className="font-semibold">Share:</h4>
                <div className="flex items-center gap-x-5 text-lg text-slate-600">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <a
                        key={i}
                        href="#"
                        className="hover:text-red-600 transition"
                      >
                        <i className="fa-brands fa-share-nodes"></i>
                      </a>
                    ))}
                </div>
              </div>
            </div>
            <div className="mt-[40px]">
              <h4 className="text-xl font-semibold mb-7">02 Comments</h4>
              {[1, 2].map((_, i) => (
                <div
                  key={i}
                  className={`flex gap-5 mb-[25px] pb-[25px] ${i === 0 ? "border-b border-violet-200" : ""
                    }`}
                >
                  <img
                    src={`https://c.animaapp.com/mgdh5xbbIdGWBz/assets/user-${i + 5
                      }.png`}
                    alt="commenter"
                    className="w-50 h-30 md:w-[120px] md:h-[120px] rounded-full"
                  />
                  <div className="pt-5">
                    <h5 className="text-[17px] font-medium mb-2">
                      Ralph Edwards
                    </h5>
                    <span className="text-slate-600 text-[13px]">
                      March 20, 2023 at 2:37 pm
                    </span>
                    <p className="text-slate-600 leading-7 mb-4 mt-3">
                      Neque porro est qui dolorem ipsum quia quaed inventore
                      veritatis et quasi architecto. Lorem Ipsum is simply dummy.
                    </p>
                    <button className="text-red-600 text-sm bg-red-600/10 h-[30px] px-4 rounded-full hover:text-white hover:bg-red-600 transition">
                      Reply
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-[40px] border-t border-red-600/10 pt-[30px]">
              <h3 className="text-[21px] font-semibold mb-[25px]">
                Leave a Comment
              </h3>
              <form>
                <div className="flex flex-wrap -mt-6 -mx-3">
                  <div className="shrink-0 max-w-full w-full mt-6 px-3 md:w-6/12">
                    <label className="font-medium block mb-2.5">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="h-[55px] w-full border border-red-600/10 px-[15px] rounded-md"
                    />
                  </div>
                  <div className="shrink-0 max-w-full w-full mt-6 px-3 md:w-6/12">
                    <label className="font-medium block mb-2.5">
                      Your Email*
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="h-[55px] w-full border border-red-600/10 px-[15px] rounded-md"
                    />
                  </div>
                  <div className="w-full mt-6 px-3">
                    <label className="font-medium block mb-2.5">
                      Write Comment*
                    </label>
                    <textarea
                      placeholder="Write Comment"
                      className="h-[200px] w-full border border-red-600/10 p-[15px] rounded-md resize-y"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white bg-red-600 flex items-center justify-center h-[45px] px-[18px] mt-[20px] rounded-md hover:bg-red-700 transition"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </div>
          <aside className="w-full md:w-1/3 lg:w-1/4 mt-6">

            <div className="bg-red-600/10 mb-4 p-5 rounded-xl">
              <h2 className="text-black text-lg font-bold mb-4 pb-1 relative before:content-[''] before:block before:w-[35px] before:h-0.5 before:bg-red-600 before:absolute before:bottom-0">
                Search
              </h2>
              <form className="flex items-center bg-white h-[45px] px-3 rounded-lg">
                <input
                  type="search"
                  placeholder="Search Here"
                  className="w-full bg-transparent outline-none text-black"
                />
                <button type="submit" className="text-red-600 text-xl">
                  <i className="flaticon-jio___influencer"></i>
                </button>
              </form>
            </div>
            <div className="bg-red-600/10 mb-4 p-5 rounded-xl">
              <h2 className="text-black text-lg font-bold mb-4 pb-1 relative before:content-[''] before:block before:w-[35px] before:h-0.5 before:bg-red-600 before:absolute before:bottom-0">
                Categories
              </h2>
              <div>
                {categories.map(([title, count]) => (
                  <a
                    key={title}
                    href="blog.html"
                    className="text-black text-sm flex justify-between items-center bg-white h-[46px] mb-2 px-4 rounded-lg hover:bg-red-600 hover:text-white transition"
                  >
                    {title} <span>({count})</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="bg-red-600/10 mb-4 p-5 rounded-xl">
              <h2 className="text-black text-lg font-bold mb-4 pb-1 relative before:content-[''] before:block before:w-[35px] before:h-0.5 before:bg-red-600 before:absolute before:bottom-0">
                Popular Posts
              </h2>
              <div className="space-y-3">
                {popularPosts.map((post, i) => (
                  <div
                    key={i}
                    className="flex gap-3 pb-3 border-b border-black/10 last:border-none"
                  >
                    <img
                      src={post.img}
                      alt="Post"
                      className="w-[78px] h-[78px] object-cover rounded-lg"
                    />
                    <div>
                      <span className="text-red-600 text-xs flex items-center gap-2 mb-1">
                        <i className="flaticon-jio___influencer text-base"></i>
                        {post.date}
                      </span>
                      <a
                        href="blog-details.html"
                        className="text-black text-sm font-semibold hover:text-red-600 transition"
                      >
                        {post.title}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-red-600/10 mb-4 p-5 rounded-xl">
              <h2 className="text-black text-lg font-bold mb-4 pb-1 relative before:content-[''] before:block before:w-[35px] before:h-0.5 before:bg-red-600 before:absolute before:bottom-0">
                Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <a
                    key={tag}
                    href="blog.html"
                    className="text-black text-sm bg-white px-3 h-7 flex items-center justify-center rounded-md hover:bg-red-600 hover:text-white transition"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
