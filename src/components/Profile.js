import React, { useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function Profile() {
  const localSpace = JSON.parse(sessionStorage.getItem("MyShopifyAccount"))
  const navigate = useNavigate();

  useEffect(() => {
    const GetStorageInfo = sessionStorage.getItem("MyShopifyAccount");
    if (!GetStorageInfo) {
      navigate("/Login");
    }
  }, [navigate]);

  function RemoveAccount() {
    sessionStorage.removeItem("MyShopifyAccount");
    sessionStorage.removeItem("shopifyAccountCRED")
    navigate("/Login");
  }
  return (
    <div>
      <Header />
      <div className="">
        <button
          className="absolute bottom-4 left-1/2 -translate-x-2/4 bg-red-500 text-white px-3 py-1 rounded"
          onClick={() => RemoveAccount()}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Profile;
