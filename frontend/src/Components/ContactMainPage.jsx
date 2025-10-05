import React from "react";
import { BsGeoAlt, BsChatDots, BsTelephone, BsClock } from "react-icons/bs";
import innercontactimg from '../assets/inner-contact-img.png'

const ContactMainPage = () => {
  return (
    <div className="w-full bg-white">
      <section className="py-[50px] md:py-[66px]">
        <div className="mx-[15px] md:mx-[93px]">
          <div className="flex flex-wrap -mt-4 -mx-2 md:-mt-6 md:-mx-3">
            <div className="shrink-0 max-w-full w-full mt-4 px-2 md:w-3/12 md:mt-6 md:px-3">
              <div className="text-center border border-red-600/10 p-[15px] rounded-2xl md:p-[20px]">
                <div className="text-red-600 text-[25px] flex items-center justify-center w-[55px] border border-red-600/10 mt-auto mb-2.5 mx-auto p-[5px] rounded-lg">
                  <BsGeoAlt />
                </div>
                <h3 className="text-lg font-bold mb-[7px]">Our Address</h3>
                <p className="text-slate-600 text-[13px] leading-[22.75px]">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </p>
              </div>
            </div>
            <div className="shrink-0 max-w-full w-full mt-4 px-2 md:w-3/12 md:mt-6 md:px-3">
              <div className="text-center border border-red-600/10 p-[15px] rounded-2xl md:p-[20px]">
                <div className="text-red-600 text-[25px] flex items-center justify-center w-[55px] border border-red-600/10 mt-auto mb-2.5 mx-auto p-[5px] rounded-lg">
                  <BsChatDots />
                </div>
                <h3 className="text-lg font-bold mb-[7px]">
                  <a
                    href="mailto:info@example.com"
                    className="text-black hover:text-red-600"
                  >
                    info@example.com
                  </a>
                </h3>
                <p className="text-slate-600 text-[13px] leading-[22.75px]">
                  Email us anytime for any kind of query.
                </p>
              </div>
            </div>
            <div className="shrink-0 max-w-full w-full mt-4 px-2 md:w-3/12 md:mt-6 md:px-3">
              <div className="text-center border border-red-600/10 p-[15px] rounded-2xl md:p-[20px]">
                <div className="text-red-600 text-[25px] flex items-center justify-center w-[55px] border border-red-600/10 mt-auto mb-2.5 mx-auto p-[5px] rounded-lg">
                  <BsTelephone />
                </div>
                <h3 className="text-lg font-bold mb-[7px]">
                  <a
                    href="tel:20866601112"
                    className="text-black hover:text-red-600"
                  >
                    Hot: +208-666-01112
                  </a>
                </h3>
                <p className="text-slate-600 text-[13px] leading-[22.75px]">
                  24/7/365 priority Live Chat and ticketing support.
                </p>
              </div>
            </div>
            <div className="shrink-0 max-w-full w-full mt-4 px-2 md:w-3/12 md:mt-6 md:px-3">
              <div className="text-center border border-red-600/10 p-[15px] rounded-2xl md:p-[20px]">
                <div className="text-red-600 text-[25px] flex items-center justify-center w-[55px] border border-red-600/10 mt-auto mb-2.5 mx-auto p-[5px] rounded-lg">
                  <BsClock />
                </div>
                <h3 className="text-lg font-bold mb-[7px]">Opening Hours</h3>
                <p className="text-slate-600 text-[13px] leading-[22.75px]">
                  <span>Sunday–Fri: 9 AM – 6 PM</span>
                  <br />
                  <span>Saturday: 9 AM – 4 PM</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="bg-red-600/10 pt-[50px] md:pt-[67px]">
        <div className="mx-[15px] md:mx-[93px]">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 md:w-6/12">
              <div>
                <h3 className="text-[25px] font-bold leading-[30px] mb-[33px] md:text-[26.88px] md:leading-[32.25px] md:mb-[39px]">
                  Request a Consultation
                </h3>
                <div className="bg-[url('https://influtics.temptics.com/assets/img/inner-contact-img-vector.svg')] bg-no-repeat bg-contain bg-[position:50%_top] pt-[25px] text-center">
                  <img
                    src={innercontactimg}
                    alt="Consultation"
                    className="max-w-full mx-auto"
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-3 md:w-6/12">
              <div className="bg-white mb-[50px] p-[25px] rounded-2xl md:mb-[67px] md:p-[30px] shadow-sm">
                <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                <form>
                  <div className="flex flex-wrap -mt-4 -mx-2 md:-mt-6 md:-mx-3">

                    <div className="w-full mt-4 px-2 md:w-6/12 md:mt-6 md:px-3">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="h-[45px] w-full border border-red-600/10 px-[15px] rounded-lg text-black"
                      />
                    </div>

                    <div className="w-full mt-4 px-2 md:w-6/12 md:mt-6 md:px-3">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="h-[45px] w-full border border-red-600/10 px-[15px] rounded-lg text-black"
                      />
                    </div>

                    <div className="w-full mt-4 px-2 md:w-6/12 md:mt-6 md:px-3">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="h-[45px] w-full border border-red-600/10 px-[15px] rounded-lg text-black"
                      />
                    </div>

                    <div className="w-full mt-4 px-2 md:w-6/12 md:mt-6 md:px-3">
                      <select
                        name="subject"
                        className="h-[45px] w-full border border-red-600/10 px-[15px] rounded-lg text-black"
                      >
                        <option value="">Subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Support</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>

                    <div className="w-full mt-4 px-2 md:mt-6 md:px-3">
                      <textarea
                        placeholder="Messages"
                        className="h-[150px] w-full border border-red-600/10 p-[15px] rounded-lg text-black resize-y"
                      ></textarea>
                    </div>
                  </div>

                  <div className="mb-5 mt-2">
                    <label className="inline-flex items-start gap-2">
                      <input
                        type="checkbox"
                        className="accent-red-600 mt-[5px]"
                      />
                      <span className="text-sm text-gray-700">
                        Collaboratively formulate principle capital.
                        Progressively evolve user.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="text-white font-semibold bg-red-600 h-[45px] w-full rounded-lg hover:bg-black transition-all duration-300"
                  >
                    Submit Now
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMainPage;
