import React from 'react';
import loginbg from '../assets/login-bg.jpg';
import logo from "../assets/img/logo-white.svg";
import { Link } from 'react-router-dom';

const SigninPage = () => {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center pb-20"
      style={{ background: `url(${loginbg}) center/cover no-repeat` }}
    >
      {/* Signup Form Container */}
      <div className="w-[30vw] bg-white rounded-3xl shadow-xl ml-50 mt-20">
        <div className='w-full bg-[#FF0000] h-23 rounded-t-3xl flex items-center justify-center'>
        <h2 className="text-2xl font-bold text-center mt-2">
          <img src={logo} alt="logo" className="w-40" />
        </h2>
        </div>

        <form className="flex flex-col gap-5 p-10">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition"
          >
            Sign in
          </button>
        </form>

        {/* Signin Link */}
        <p className="text-center text-gray-600 mb-5">
          Don't have Membership?{' '}
          <Link to="/signup" className="text-orange-500 font-semibold hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninPage;
