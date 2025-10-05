import { useState } from "react";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Sidebar (Mobile Menu) */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <a href="#">
            <img src={logo} alt="logo" className="w-28" />
          </a>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-gray-700 text-xl"
          >
            ✕
          </button>
        </div>

        <div className="p-4 flex flex-col gap-4">
          <Link
            to="/"
            className="text-gray-800 hover:text-pink-500 font-medium px-3 py-2 rounded-md transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-pink-500 font-medium px-3 py-2 rounded-md transition"
          >
            About Me
          </Link>

          <div className="flex flex-col gap-2">
            <span className="font-semibold text-gray-800">Streaming Videos</span>
            <Link
              to="/streaming-video1"
              className="text-gray-700 hover:text-pink-500 px-3 py-2 rounded-md transition"
            >
              Streaming Videos 1
            </Link>
            <Link
              to="/streaming-video2"
              className="text-gray-700 hover:text-pink-500 px-3 py-2 rounded-md transition"
            >
              Streaming Videos 2
            </Link>
            <Link
              to="/streaming-video3"
              className="text-gray-700 hover:text-pink-500 px-3 py-2 rounded-md transition"
            >
              Streaming Videos 3
            </Link>
            <Link
              to="/streaming-videos-details"
              className="text-gray-700 hover:text-pink-500 px-3 py-2 rounded-md transition"
            >
              Streaming Video Details
            </Link>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <span className="font-semibold text-gray-800">Pages</span>
            <Link
              to="/services"
              className="text-gray-700 hover:text-pink-500 px-3 py-2 rounded-md transition"
            >
              Services
            </Link>
            <Link
              to="/service-details"
              className="text-gray-700 hover:text-pink-500 px-3 py-2 rounded-md transition"
            >
              Service Details
            </Link>
            <Link
              to="/checkout"
              className="text-gray-700 hover:text-pink-500 px-3 py-2 rounded-md transition"
            >
              Checkout
            </Link>
            <Link
              to="/signup"
              className="text-gray-700 hover:text-pink-500 px-3 py-2 rounded-md transition"
            >
              Sign Up
            </Link>
            <Link
              to="/signin"
              className="text-gray-700 hover:text-pink-500 px-3 py-2 rounded-md transition"
            >
              Sign In
            </Link>
            <Link
              to="/pricing"
              className="text-gray-700 hover:text-pink-500 px-3 py-2 rounded-md transition"
            >
              Pricing
            </Link>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <span className="font-semibold text-gray-800">Blog</span>
            <Link
              to="/blogs"
              className="text-gray-700 hover:text-pink-500 px-3 py-2 rounded-md transition"
            >
              Blogs
            </Link>
            <Link
              to="/blog-details"
              className="text-gray-700 hover:text-pink-500 px-3 py-2 rounded-md transition"
            >
              Blog Details
            </Link>
          </div>

          <Link
            to="/contact"
            className="text-gray-800 hover:text-pink-500 font-medium px-3 py-2 rounded-md transition mt-2"
          >
            Contact
          </Link>

          <a
            href="about.html"
            className="bg-gradient-to-r from-yellow-500 to-pink-500 text-white px-4 py-2 rounded-md flex items-center justify-center mt-4"
          >
            Follow Me
          </a>
        </div>
      </div>

      <header className="fixed top-0 left-0 right-0 lg:left-20 lg:right-20 rounded-b-2xl flex justify-between items-center px- md:px-10 py-4 bg-white/30 backdrop-blur-lg  border-gray-200 z-40">
        <a href="#">
          <img src={logo} alt="logo" className="w-32 md:w-40" />
        </a>

        <nav className="hidden lg:flex gap-8 text-gray-800 font-medium items-center">
          <Link to="/" className="hover:text-pink-500 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-pink-500 transition">
            About Me
          </Link>

          <div className="relative group">
            <button className="hover:text-pink-500 flex items-center gap-1 cursor-pointer">
              Streaming Videos
            </button>
            <ul className="absolute left-0 top-full bg-white shadow-lg mt-2 w-56 rounded-md p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li>
                <Link
                  to="/streaming-video1"
                  className="block px-3 py-2 hover:bg-gray-100"
                >
                  Streaming Videos 1
                </Link>
              </li>
              <li>
                <Link
                  to="/streaming-video2"
                  className="block px-3 py-2 hover:bg-gray-100"
                >
                  Streaming Videos 2
                </Link>
              </li>
              <li>
                <Link
                  to="/streaming-video3"
                  className="block px-3 py-2 hover:bg-gray-100"
                >
                  Streaming Videos 3
                </Link>
              </li>
              <li>
                <Link
                  to="/streaming-videos-details"
                  className="block px-3 py-2 hover:bg-gray-100"
                >
                  Streaming Video Details
                </Link>
              </li>
            </ul>
          </div>

          <div className="relative group">
            <button className="hover:text-pink-500 flex items-center gap-1 cursor-pointer">
              Pages
            </button>
            <ul className="absolute left-0 top-full bg-white shadow-lg mt-2 w-56 rounded-md p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li>
                <Link
                  to="/services"
                  className="block px-3 py-2 hover:bg-gray-100"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/service-details"
                  className="block px-3 py-2 hover:bg-gray-100"
                >
                  Service Details
                </Link>
              </li>
              <li>
                <Link
                  to="/checkout"
                  className="block px-3 py-2 hover:bg-gray-100"
                >
                  Checkout
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="block px-3 py-2 hover:bg-gray-100"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to="/signin"
                  className="block px-3 py-2 hover:bg-gray-100"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="block px-3 py-2 hover:bg-gray-100"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div className="relative group">
            <button className="hover:text-pink-500 flex items-center gap-1 cursor-pointer">
              Blog
            </button>
            <ul className="absolute left-0 top-full bg-white shadow-lg mt-2 w-40 rounded-md p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li>
                <Link
                  to="/blogs"
                  className="block px-3 py-2 hover:bg-gray-100"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/blog-details"
                  className="block px-3 py-2 hover:bg-gray-100"
                >
                  Blog Details
                </Link>
              </li>
            </ul>
          </div>

          <Link to="/contact" className="hover:text-pink-500 transition">
            Contact
          </Link>

          <a
            href="about.html"
            className="bg-gradient-to-r from-yellow-500 to-pink-500 text-white px-4 py-2 rounded-md flex items-center"
          >
            Follow Me
          </a>
        </nav>

        <button
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden bg-gradient-to-r from-yellow-500 to-pink-500 text-white px-3 py-2 rounded-md"
        >
          <i className="flaticon-menu"></i>
        </button>
      </header>
    </>
  );
};

export default Navbar;
