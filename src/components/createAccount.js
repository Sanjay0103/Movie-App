import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authInfo, storage } from "../FireBase/config";
import { createUserWithEmailAndPassword  } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import AuthPageFooter from "./AuthPageFooter";


function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
 
  function createNewShopifyUser() {
    try {
      setLoading(true);
      const TempUserName = email;
      const RemoveBrandName = TempUserName.slice(0, TempUserName.indexOf("@"));
      createUserWithEmailAndPassword(authInfo, email, password).then(
        async (credit) => {
          var ref = doc(storage, "Shopify Users", credit.user.uid);
          await setDoc(ref, {
            a_FirstName: RemoveBrandName,
            b_LastName: "",
            c_Age: "",
            d_Address: [],
            e_country: "",
            f_phone_number: Number(""),
            g_card_info: false,
            h_Email_ID: email,
            i_Password: password,
            j_Person_cart: [],
            k_Order_history: [],
            l_Favorite_products: [],
          });
        }
      );
      navigate("/Login");
    } catch (error) {
      console.error("Oops! Something is Wrong", error);
      alert("Oops! Something is Wrong");
    } finally {
      setLoading(false);
    }
  }

  function RemoveAccount() {
    const userAccount = localStorage.getItem("ShopifyUser");
    if (userAccount) {
      localStorage.removeItem("ShopifyUser");
    }
  }

  return (
    <div className="w-full h-screen bg-white">
      <nav className="flex items-center justify-center w-full text-orange-500">
        <i className="bx bxl-shopify text-5xl"></i>
        <span className="text-3xl font-bold">Shopify</span>
      </nav>
      <Link
        onClick={() => RemoveAccount()}
        to="/"
        className=" opacity-20 hover:opacity-100 hover:duration-500 duration-800 scale-75 flex items-center justify-center absolute top-10 right-5 text-md bg-black text-white px-3 py-1 rounded-md"
      >
        Back to Home <i className="bx bx-log-out ml-2 text-2xl "></i>
      </Link>
      <div className="mt-20 flex max-w-screen-lg mx-auto items-center justify-center -translate-x-14">
        <div className="w-7/12 mr-10">
          <img
            src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg"
            alt=""
            width={"100%"}
            className="border-none"
          />
        </div>{" "}
        <div className="w-4/12 mr-10">
          <form action="" className="shadow-xl rounded-xl border-t pb-5 ">
            <p className="text-4xl font-medium mt-8 ml-8 text-gray-500 drop-shadow-md">
              Hello <br />
              Welcome Back.
            </p>{" "}
            <br />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block hover:shadow-xl duration-200 hover:duration-700 border rounded-md px-3 py-1 w-10/12 mx-auto mt-5"
              type="text"
              placeholder="Email"
              autoComplete="off"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block hover:shadow-xl duration-200 hover:duration-700  border rounded-md px-3 py-1 w-10/12 mx-auto mt-5"
              type="password"
              placeholder="Password"
              autoComplete="off"
            />
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block hover:shadow-xl duration-200 hover:duration-700  border rounded-md px-3 py-1 w-10/12 mx-auto mt-5"
              type="password"
              placeholder="Confirm Password"
              autoComplete="off"
            />
            {loading ? (
              <button className="justify-center items-center shadow-xl flex rounded-md duration-200 hover:duration-700  px-3 py-1 w-10/12 mx-auto mt-5 cursor-pointer bg-orange-400 hover:bg-orange-500 text-white">
                <i className="bx bx-loader-alt bx-spin"></i> &nbsp; Account Creating
              </button>
            ) : (
              <button
                onClick={() => createNewShopifyUser()}
                className=" justify-center shadow-xl flex items-center rounded-md duration-200 hover:duration-700  px-3 py-1 w-10/12 mx-auto mt-5 cursor-pointer bg-orange-400 hover:bg-orange-500 text-white"
              >
                Create Account
              </button>
            )}
            <Link
              to="/Login"
              className="text-center block text-sm mt-10 text-gray-600"
            >
              I Already Have an Account?{" "}
              <span className="text-orange-500 hover:underline">
                Let's Login
              </span>{" "}
            </Link>
          </form>
        </div>
      </div>
      <AuthPageFooter />
    </div>
  );
}

export default CreateAccount;

// https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg create account
// https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg cart order page
