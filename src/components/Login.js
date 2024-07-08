import React, { useState } from "react";
import LoginImage from "../img/LoginCoverImage.jpg";
import { Link, useNavigate } from "react-router-dom";
import { authInfo, storage } from "../FireBase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import AuthPageFooter from "./AuthPageFooter";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function GetUserAccount() {
    try {
      setLoading(true);
      signInWithEmailAndPassword(authInfo, email, password).then(
        async (credit) => {
          const myRef = doc(storage, "Shopify Users", credit.user.uid);
          const getMyRef = await getDoc(myRef);

          if (getMyRef.exists()) {
            sessionStorage.setItem(
              "MyShopifyAccount",
              JSON.stringify({
                id: getMyRef.id,
                a_FirstName: getMyRef.data().a_FirstName,
                b_LastName: getMyRef.data().b_LastName,
                c_Age: getMyRef.data().c_Age,
                d_Address: getMyRef.data().d_Address,
                e_country: getMyRef.data().e_country,
                f_phone_number: getMyRef.data().f_phone_number,
                g_card_info: getMyRef.data().g_card_info,
                h_Email_ID: getMyRef.data().h_Email_ID,
                i_Password: getMyRef.data().i_Password,
                j_Person_cart: getMyRef.data().k_Person_cart,
                k_Order_history: getMyRef.data().l_Order_history,
                l_Favorite_products: getMyRef.data().m_Favorite_products,
              })
            );
            sessionStorage.setItem(
              "shopifyAccountCRED",
              JSON.stringify(credit.user)
            );
            navigate("/");
          }
        }
      );
    } catch (error) {
      alert("Oops! Something is wrong", error);
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
          <img src={LoginImage} alt="" width={"100%"} className="border-none" />
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
              onDoubleClick={() => setEmail("arockiyaraja88@gmail.com")}
              onChange={(e) => setEmail(e.target.value)}
              className="block hover:shadow-xl duration-200 hover:duration-700 border rounded-md px-3 py-1 w-10/12 mx-auto mt-5"
              type="text"
              placeholder="Email"
            />
            <input
              value={password}
              onDoubleClick={() => setPassword(7894561230)}
              onChange={(e) => setPassword(e.target.value)}
              className="block hover:shadow-xl duration-200 hover:duration-700  border rounded-md px-3 py-1    w-10/12 mx-auto mt-5"
              type="password"
              placeholder="Password"
              autoComplete="off"
            />
            <button
              type="button"
              onClick={() => GetUserAccount()}
              className="block shadow-xl rounded-md duration-200 hover:duration-700  px-3 py-2 w-10/12 mx-auto mt-5 cursor-pointer bg-orange-400 hover:bg-orange-500 text-white"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <i class="bx bx-loader bx-spin text-xl mr-2"></i> Logging In
                </span>
              ) : (
                "Login"
              )}
            </button>
            <Link
              to="/CreateAccount"
              className="text-center block text-sm mt-10 text-gray-600"
            >
              I don't Have any Account?{" "}
              <span className="text-orange-500 hover:underline cursor-pointer">
                Create Account
              </span>{" "}
            </Link>
          </form>
        </div>
      </div>
      <AuthPageFooter />
    </div>
  );
}

export default Login;

// https://static.vecteezy.com/system/resources/previews/002/788/700/original/woman-shopping-online-on-laptop-illustration-online-store-payment-bank-credit-cards-digital-pay-technology-e-paying-flat-style-modern-illustration-vector.jpg

// https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg

// https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg

//
