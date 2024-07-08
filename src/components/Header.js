import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { storage } from "../FireBase/config";

function Header() {
  const getUser =
    JSON.parse(sessionStorage.getItem("MyShopifyAccount")) || null;
  const [counts, setCounts] = useState(0);

  // const getUserCRED = JSON.parse(sessionStorage.getItem("shopifyAccountCRED"));

  useEffect(()=>{
    async function vv() {
      if(getUser){
        const a = doc(storage, "Shopify Users", getUser.id);
      const b = await getDoc(a);
      const c = b.data();
      setCounts(c.j_Person_cart.length)
      }
    }
    vv()
  },[])
  
  return (
    <>
      <div className="bg-gray-200 sticky w-full top-0 z-10 shadow-md">
        <nav className="flex items-center gap-10  justify-center text-sm max-w-screen-2xl mx-auto py-1 px-5 bg-gray-200">
          <div className="flex items-center justify-between">
            <div
              className="w-fit flex items-center justify-between"
              style={{ scale: "0.9" }}
            >
              <i className="bx bxl-shopify text-5xl"></i>
              <span className="text-2xl font-normal"></span>
            </div>
            <Link
              to="/"
              className="mx-3 flex items-center gap-1 hover:text-orange-500 "
            >
              Home
            </Link>
            {/* <Link
              to="/OnProcessing"
              className="mx-3 flex items-center gap-1 hover:text-orange-500 "
            >
              Offers
            </Link> */}
            <Link
              to="/Products"
              className="mx-3 flex items-center gap-1 hover:text-orange-500 cursor-pointer"
            >
              Products
            </Link>
            {/* <Link
              to="/OnProcessing"
              className="mx-3 flex items-center gap-1 hover:text-orange-500 "
            >
              Big Sales
            </Link> */}
            <Link
              to="/AddProduct"
              className="mx-3 flex items-center gap-1 hover:text-orange-500 "
            >
              Add Product
            </Link>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center  mr-5">
              <i className="bx bx-search text-gray-400 text-2xl mr-2"></i>
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-1 rounded-md w-64 bg-gray-300"
                autoFocus
                name="search-engine"
              />
            </div>
            {getUser ? (
              <Link
                to="/CartPage"
                className="mx-3 flex items-center relative cursor-pointer"
              >
                <i className="bx bxs-cart-alt text-2xl"></i>
                <span className=" w-fit h-fit rounded-full px-2 -scale-75 rotate-180 absolute -top-1 -right-3 bg-red-500 text-white">
                  {counts}
                </span>
              </Link>
            ) : (
              " "
            )}
            {getUser ? (
              <Link
                to="/Profile"
                className="mx-3 flex items-center bg-orange-500 text-white px-3 py-0 rounded-full gap-1 cursor-pointer text-sm"
              >
                {getUser.a_FirstName}
                <i className="bx bxs-user-circle text-lg"></i>
              </Link>
            ) : (
              <Link
                to="/Login"
                className="mx-3 flex items-center bg-orange-500 text-white px-3 py-1 rounded-md gap-1 cursor-pointer"
              >
                Login <i className="bx bxs-log-in"></i>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
