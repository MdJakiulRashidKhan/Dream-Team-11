import React from "react";
import BGShadow from "../../public/images/bg-shadow.png";
import LogoFooter from "../../public/images/logo-footer.png";

const Footer = () => {
  return (
    <div className="relative bg-neutral text-neutral-content pt-28 pb-8">
      <img src={LogoFooter} className="w-40 mx-auto pb-10" alt="" />
      <div className="footer container mx-auto px-4 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
        <nav>
          <h6 className="footer-title text-white text-xl font-semibold">
            About Us
          </h6>
          <p className="w-full md:w-8/12 mt-4 text-[rgba(255,255,255,0.8)]">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </nav>

        <nav>
          <h6 className="footer-title text-white text-xl font-semibold">
            Quick Links
          </h6>
          <ul className="mt-4 space-y-2 text-[rgba(255,255,255,0.8)]">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>

        <form>
          <h6 className="footer-title text-white text-xl font-semibold">
            Subscribe
          </h6>
          <p className="text-[rgba(255,255,255,0.6)] mt-2">
            Subscribe to our newsletter for the latest updates.
          </p>
          <fieldset className="form-control mt-4 w-full max-w-sm">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered text-black w-full pr-16"
              />
              <button
                type="submit"
                className="btn bg-gradient-to-r from-yellow-400 to-pink-300 text-white absolute right-0 top-0 bottom-0 px-4"
              >
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="text-center mt-12 py-4 text-[rgba(255,255,255,0.6)]">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
      <div
        className="absolute h-80 bg-cover bg-center bg-no-repeat rounded-2xl mt-8 overflow-hidden flex items-center justify-center bg-white container -top-60 left-0 right-0 mx-auto"
        style={{
          backgroundImage: `url(${BGShadow})`,
        }}
      >
        <form>
          <p className="text-black mt-2 text-2xl">
            Subscribe to our Newsletter
          </p>
          <p className="text-gray-900">
            Get the latest updates and news right in your inbox!
          </p>
          <fieldset className="form-control mt-4 w-full max-w-sm">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered text-black w-full pr-16"
              />
              <button
                type="submit"
                className="btn bg-gradient-to-r from-yellow-400 to-pink-300 text-white absolute right-0 top-0 bottom-0 px-4"
              >
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Footer;
