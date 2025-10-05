import React from 'react';
import loginbg from '../assets/login-bg.jpg';
import logo from "../assets/img/logo-white.svg";
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center pb-20 px-4 sm:px-6 lg:px-0"
      style={{ background: `url(${loginbg}) center/cover no-repeat` }}
    >
      <div className="w-full sm:w-[80%] md:w-[50%] lg:w-[30vw] bg-white rounded-3xl shadow-xl mt-20">
        <div className='w-full bg-[#FF0000] h-20 sm:h-24 rounded-t-3xl flex items-center justify-center'>
          <h2 className="text-2xl font-bold text-center">
            <img src={logo} alt="logo" className="w-32 sm:w-36 lg:w-40" />
          </h2>
        </div>

        <form className="flex flex-col gap-4 sm:gap-5 p-6 sm:p-10">
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
          />
          <button
            type="submit"
            className="w-full py-3 mt-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition text-sm sm:text-base"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-600 mb-5 text-sm sm:text-base">
          Already have membership?{' '}
          <Link to="/signin" className="text-orange-500 font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
