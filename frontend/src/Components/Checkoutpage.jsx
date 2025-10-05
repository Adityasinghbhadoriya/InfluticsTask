import React, { useState } from "react";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    postalCode: "",
    phoneNumber: "",
    paymentMethod: "credit",
    note: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const inputClasses =
    "w-full h-14 px-4 mb-4 rounded-lg bg-white border-none focus:outline-none focus:ring-0";

  const textareaClasses =
    "w-full h-48 px-4 py-3 rounded-lg bg-white border-none resize-none focus:outline-none focus:ring-0";

  return (
    <div className="w-full min-h-screen bg-white pt-20 pb-20">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-red-50 shadow-lg rounded-xl p-8 space-y-8"
      >
        {/* --- Create Account Section --- */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Create an Account</h3>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className={inputClasses}
          />
          <p className="text-sm">
            Already a Member?{" "}
            <a href="/login" className="text-pink-600 hover:underline">
              Sign in
            </a>
          </p>
        </section>

        {/* --- Billing Information --- */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Billing Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className={inputClasses}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className={inputClasses}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className={inputClasses}
          />
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleChange}
              className={inputClasses}
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        </section>

        {/* --- Payment Options --- */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Payment Options</h3>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-gray-50 bg-white">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit"
                  checked={formData.paymentMethod === "credit"}
                  onChange={handleChange}
                />
                <span>Credit Card</span>
              </div>
              <img
                src="https://c.animaapp.com/mgci8hzxjqY2u2/assets/card-img.png"
                alt="Credit Card"
                className="h-6"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-gray-50 bg-white">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === "paypal"}
                  onChange={handleChange}
                />
                <span>PayPal</span>
              </div>
              <img
                src="https://c.animaapp.com/mgci8hzxjqY2u2/assets/paypal-img.png"
                alt="PayPal"
                className="h-6"
              />
            </label>

            <p className="text-sm text-gray-600">
              This card will be saved to your account.
            </p>
          </div>
        </section>

        {/* --- Additional Notes --- */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Payment Information</h3>
          <textarea
            name="note"
            placeholder="Write a note (optional)"
            value={formData.note}
            onChange={handleChange}
            className={textareaClasses}
          />
        </section>
         <div className="pt-4 text-left">
          <h4 className="text-lg font-semibold">Total</h4>
          <span className="text-2xl font-bold text-gray-800">$149.00 USD</span>
        </div>

        {/* --- Agreement Checkbox --- */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
            className="mt-1 accent-pink-500"
          />
          <p className="text-sm text-gray-700">
            Yes, I want emails with visual inspiration, special offers and more – I
            understand I can opt-out at any time from my account.
          </p>
        </div>
        

        {/* --- Submit Button --- */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold py-3 rounded-lg shadow-md hover:opacity-90 transition"
        >
          I Agree & Pay Now
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
