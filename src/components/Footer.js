import React from "react";

function Footer() {
  return (
    <div className=" bg-gray-900 mt-16 pt-5 text-slate-400">
      <div className="text-slate-400 text-3xl text-center flex items-center justify-center">
        <i className="bx bxl-shopify text-4xl"></i> Shopify
      </div>
      <p className="text-2xl text-center mt-5">
        <i className="mx-1 bx bxl-facebook-square text-blue-500"></i>
        <i className="mx-1 bx bxl-instagram text-pink-500"></i>
        <i className="mx-1 bx bxl-twitter text-sky-500"></i>
        <i className="mx-1 bx bxl-whatsapp text-green-500"></i>
        <i className="mx-1 bx bxl-telegram text-blue-400"></i>
        <i className="mx-1 bx bxl-linkedin-square text-white"></i>
      </p>
      <p className=" text-center mt-4">
        <span className="hover:underline mx-2 font-light">About</span>
        <span className="hover:underline mx-2 font-light">Help?</span>
        <span className="hover:underline mx-2 font-light">Contact Guide</span>
        <span className="hover:underline mx-2 font-light">e-Store</span>
        <span className="hover:underline mx-2 font-light">Privacy</span>
        <span className="hover:underline mx-2 font-light">Jobs</span>
      </p>
      <p className="mt-5 pb-2 flex items-center justify-center">
        <i className="bx bxs-copyright"></i> &nbsp; Copy Rightes 2019
      </p>
    </div>
  );
}

export default Footer;
