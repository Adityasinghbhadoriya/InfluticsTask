import React from "react";

const Blogs_page = () => {
  const blogPosts = [
    {
      imageUrl: "https://c.animaapp.com/mgdgc9pm6Dmy2p/assets/jo-article-1.jpg",
      author: "John Doe",
      date: "March 15, 2024",
      title: "Exploring the Future of Influencer Marketing",
      description:
        "Discover the trends shaping influencer marketing in 2024 and how creators can adapt to stay ahead of the curve.",
      blogUrl: "#",
    },
    {
      imageUrl: "https://c.animaapp.com/mgdgc9pm6Dmy2p/assets/jo-article-2.jpg",
      author: "Jane Smith",
      date: "March 20, 2024",
      title: "How to Grow Your Online Audience Organically",
      description:
        "Learn proven techniques for expanding your digital reach without paid ads, using authentic engagement strategies.",
      blogUrl: "#",
    },
    {
      imageUrl: "https://c.animaapp.com/mgdgc9pm6Dmy2p/assets/jo-article-3.jpg",
      author: "Michael Brown",
      date: "April 1, 2024",
      title: "10 Video Ideas That Go Viral Instantly",
      description:
        "Here are 10 creative video ideas that grab attention and help you grow your social media audience faster.",
      blogUrl: "#",
    },
  ];

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
    <div className="w-full min-h-screen bg-white pt-24 px-10 md:px-20 flex flex-col md:flex-row gap-10 pb-20">
     
      <div className="flex-1">
        {blogPosts.map((post, i) => (
          <div
            key={i}
            className="border mb-5 p-4 md:p-5 rounded-2xl border-black/20"
          >
            
            <div className="overflow-hidden mb-5 rounded-2xl">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="aspect-[869/470] max-w-full object-cover w-full rounded-2xl"
              />
            </div>

  
            <div className="text-sm flex flex-wrap gap-x-4 gap-y-1 mb-3">
              <div className="text-red-600 font-medium">
                Written by:{" "}
                <span className="text-zinc-500 font-normal">{post.author}</span>
              </div>
              <div className="relative text-black pl-6 before:content-[''] before:bg-red-600 before:block before:w-2 before:h-2 before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">
                {post.date}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2.5">
              <a
                href={post.blogUrl}
                className="text-black hover:text-red-600 transition-colors duration-200"
              >
                {post.title}
              </a>
            </h3>

            <p className="text-zinc-500 text-sm leading-relaxed mb-5">
              {post.description}
            </p>

    
            <div className="flex justify-between items-center flex-wrap gap-2.5">
              <a
                href={post.blogUrl}
                className="text-red-600 text-lg bg-red-600/10 flex h-9 w-9 justify-center items-center rounded-lg hover:text-white hover:bg-red-600 transition"
              >
                <i className="flaticon-jio___influencer"></i>
              </a>
              <button className="text-black text-sm flex items-center gap-2 border border-red-600/10 px-3 h-9 rounded-lg hover:text-white hover:bg-red-600 transition">
                Share <i className="flaticon-jio___influencer text-red-600"></i>
              </button>
            </div>
          </div>
        ))}

        <div className="flex items-center gap-3 mt-10">
          {[1, 2, 3, 4, 5].map((num, i) => (
            <a
              key={i}
              href="#"
              className={`font-bold flex justify-center items-center w-8 h-8 md:w-10 md:h-10 rounded-full ${
                num === 1
                  ? "bg-red-600 text-white"
                  : "bg-neutral-400/10 text-black hover:bg-red-600 hover:text-white transition"
              }`}
            >
              {num}
            </a>
          ))}
        </div>
      </div>

 
      <aside className="w-full md:w-1/3 lg:w-1/4">
     
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

        {/* Categories */}
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

        {/* Popular Posts */}
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

        {/* Tags */}
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
  );
};

export default Blogs_page;
