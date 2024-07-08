import React, { useEffect, useState } from "react";
import Header from "./Header";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { storage } from "../FireBase/config";
import ProductLoading from "./ProductLoading";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Products() {
  const [shopifyProducts, setShopifyProducts] = useState([]);
  const [userCart, setUserCart] = useState([]);
  const sessionStorageAccess = JSON.parse(sessionStorage.getItem("MyShopifyAccount")) || {};
  const navigate = useNavigate();

  useEffect(() => {
    const GetData = async () => {
      const datum = await getDocs(collection(storage, "Shopify Products"));
      const data = datum.docs.map((target) => ({
        id: target.id,
        ...target.data(),
      }));
      setShopifyProducts(data);

      if (sessionStorageAccess.id) {
        const MyBasketRef = doc(
          storage,
          "Shopify Users",
          sessionStorageAccess.id
        );
        const MyBasketDoc = await getDoc(MyBasketRef);

        if (MyBasketDoc.exists()) {
          const MyBasketData = MyBasketDoc.data();
          const userCartData = MyBasketData.j_Person_cart || [];
          setUserCart(userCartData);
        }
      }
    };
    GetData();
  }, []);

  async function ttt(product_id) {
    const MyBasketRef = doc(storage, "Shopify Users", sessionStorageAccess.id);
    const updatedUserCart = userCart.filter(
      (target) => target.id !== product_id
    );
    await setDoc(
      MyBasketRef,
      { j_Person_cart: updatedUserCart }, 
      { merge: true }
    );
    setUserCart(updatedUserCart);
  }
  const [showoff, setShowOff] = useState(false);

   async function addToMyCart(product_id) {
    if (sessionStorageAccess.id) {
      setShowOff(true);
      const ExactProduct = shopifyProducts.find( (target) => target.id === product_id );
      const selectBYID = document.getElementById("product_add_notify");
      selectBYID.innerHTML = `${ExactProduct.a_Product_Name} Added Successfully`;

      const MyBasketRef = doc( storage, "Shopify Users", sessionStorageAccess.id );
      const MyBasketDoc = await getDoc(MyBasketRef);

      if (MyBasketDoc.exists()) {
        const MyBasketData = MyBasketDoc.data();
        const user_Cart = MyBasketData.j_Person_cart || [];
        const isProductInCart = user_Cart.some((target) => target.id === ExactProduct.id);
        if (isProductInCart) {
          let theIcon = document.getElementById(`${product_id}`);
          theIcon.className = "bx bx-cart-alt cursor-pointer text-orange-500";
          ttt(product_id);
        } else {
          userCart.push(ExactProduct);
          await setDoc( MyBasketRef, { j_Person_cart: userCart }, { merge: true }
          );
          let theIcon = document.getElementById(`${product_id}`);
          theIcon.className = "bx bxs-cart-alt cursor-pointer bg-red-400 text-white p-1 rounded-full";
        }
      }
    } else {
      alert("Login to continue");
      navigate("/Login");
    }
    setTimeout(() => { setShowOff(false);
    }, 4000);
  }

  return (
    <div>
      <Header />
      <p style={{ display: showoff ? "block" : "none" }}
        className="anime px-4 py-2 top-10 left-10 z-10 rounded bg-gray-900 bg-opacity-80 text-white fixed shadow-inner flex items-center"
      >
        <i className="bx bxs-check-circle text-green-500"></i> &nbsp;{" "}
        <span id="product_add_notify"></span>
      </p>
      <div className="text-center mt-5">
        <span className="px-3 py-1 hover:shadow-xl rounded-md bg-gray-300 hover:bg-gray-700 text-gray-400 hover:text-white mx-2">
          Men's Fashion
        </span>
        <span className="px-3 py-1 hover:shadow-xl rounded-md bg-gray-300 hover:bg-gray-700 text-gray-400 hover:text-white mx-2">
          Women's Fashion
        </span>
        <span className="px-3 py-1 hover:shadow-xl rounded-md bg-gray-300 hover:bg-gray-700 text-gray-400 hover:text-white mx-2">
          Kid's Fashion
        </span>
        <span className="px-3 py-1 hover:shadow-xl rounded-md bg-gray-300 hover:bg-gray-700 text-gray-400 hover:text-white mx-2">
          Mobiles
        </span>
        <span className="px-3 py-1 hover:shadow-xl rounded-md bg-gray-300 hover:bg-gray-700 text-gray-400 hover:text-white mx-2">
          Laptops
        </span>
        <span className="px-3 py-1 hover:shadow-xl rounded-md bg-gray-300 hover:bg-gray-700 text-gray-400 hover:text-white mx-2">
          Furnitures
        </span>
      </div>
      <div className=" max-w-screen-2xl flex items-center justify-center flex-wrap gap-10  mt-10 mx-auto">
        {shopifyProducts.length === 0 ? (
          <ProductLoading />
        ) : (
          shopifyProducts.map((target) => (
            <div 
              key={target.id}
              className=" p-3 rounded-lg shadow-sm hover:shadow-lg duration-200 border border-s-slate-300 relative product-card"
            >
              <div
                className=" bg-center bg-cover rounded-md"
                style={{
                  backgroundImage: `url(${target.d_Product_Img_src})`,
                  width: "280px",
                  height: "155px",
                }}
              ></div>
              <div className="mt-2">
                <Link to={`/ProductPage/${target.id}`} className="font-normal product-title">
                  {target.a_Product_Name.split(" ").slice(0, 5).join(" ")}
                </Link>{" "}
              </div>
              <div className=" mt-2 flex justify-between">
                <span className=" px-3 py-1 bg-red-200 text-sm text-red-500 rounded-md">
                  ₹ {target.b_Product_Price}
                </span>{" "}
                {sessionStorageAccess ? (
                  <span className="text-xl">
                    <i
                      className={
                        userCart.some((item) => item.id === target.id)
                          ? "bx bxs-cart-alt cursor-pointer bg-red-400 text-white p-1 rounded-full"
                          : "bx bx-cart-alt cursor-pointer text-orange-500"
                      }
                      onClick={() => addToMyCart(target.id)}
                      id={target.id}
                    ></i>
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))
        )}
      </div>
      <div className=" w-fit mx-auto mt-16 flex items-center justify-between gap-5">
        <div className="mx-16">
          <p className="text-gray-800 text-center text-3xl font-extrabold w-fit mx-auto px-3 py-1 rounded-xl">
            Subscribe To Our Newsletter
          </p>
          <p className=" max-w-lg text-slate-800 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            ipsam amet, minima, aut vitae dignissimos ad voluptas suscipit velit
            corrupti
          </p>
          <p className="shadow-xl w-9/12 mt-10 mx-auto">
            <input
              type="text"
              placeholder="a_arockiya@gmail.com"
              className="bg-gray-200 text-gray-500 w-full px-3 py-2 rounded-md shadow-inner"
              name="Subscribe"
            />
          </p>
          <p className="flex justify-center mt-10">
            <button className="text-sm font-light flex items-center justify-center px-3 py-1 rounded-md text-white bg-black hover:shadow-xl">
              SUBSCRIBE NOW &nbsp;{" "}
              <i className="bx bxs-paper-plane text-lg"></i>
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;