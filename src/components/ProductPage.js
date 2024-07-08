import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { storage } from "../FireBase/config";
import { Link } from "react-router-dom";

function ProductPage() {
  window.scroll(0,0);
  const [productTemp, setProductTemp] = useState([]);
  const { Product_Id } = useParams();
  const [targetProduct, setTargetProduct] = useState({});
  const sessionStorageAccess = JSON.parse(sessionStorage.getItem("MyShopifyAccount")) || {}

  const [myRealTimeCart, setMyRealTimeCart] = useState([]);
  useEffect(() => {
    const GetData = async () => {
      try {
        const datum = await getDocs(collection(storage, "Shopify Products"));
        const data = datum.docs.map((target) => ({ id: target.id, ...target.data(), }));
        setProductTemp(data);
        if (data.find((target) => target.id === Product_Id)) {
          const wantedProduct = data.find((target) => target.id === Product_Id);
          setTargetProduct(wantedProduct);
        }
        if (sessionStorageAccess.id) {
            const MyBasketRef = doc( storage, "Shopify Users", sessionStorageAccess.id
            );
            const MyBasketDoc = await getDoc(MyBasketRef);
    
            if (MyBasketDoc.exists()) {
              const MyBasketData = MyBasketDoc.data();
              const userCartData = MyBasketData.j_Person_cart || [];
              setMyRealTimeCart(userCartData);
            }
          }

      } catch (error) {
        alert("something is wrong", error);
        console.log("something is wrong", error);
      }
    };
    GetData();
  }, [Product_Id]);

  const navigate = useNavigate();   

async function Add_to_cart(Product_Id) {
    if (sessionStorageAccess.id) {
      const UserDB = doc(storage, "Shopify Users", sessionStorageAccess.id);
      const Ref = await getDoc(UserDB);
      const RefData = Ref.data();
      const CartRef = RefData.j_Person_cart || [];
  
      if (CartRef.some((target) => target.id === Product_Id)) {
        const new_cart_array = myRealTimeCart.filter((target) => target.id !== Product_Id);
        await setDoc(UserDB, { j_Person_cart: new_cart_array }, { merge: true });
        setMyRealTimeCart(new_cart_array);
        const cartSymUpdates = document.getElementById(`${Product_Id}`);
        if (cartSymUpdates) {
          cartSymUpdates.className = "bx bxs-cart-alt text-3xl absolute top-5 right-5 rounded-full text-white px-1 cursor-pointer";
        }
        // alert("removed")
      } else {
        const ProductCollection = await getDocs(collection(storage, "Shopify Products"));
        const Copy_Product_Collection = ProductCollection.docs.map((target) => ({ id: target.id, ...target.data() }));
        const Single_one = Copy_Product_Collection.find((target) => target.id == Product_Id);
        CartRef.push(Single_one);
        await setDoc(UserDB, { j_Person_cart: CartRef }, { merge: true });
        setMyRealTimeCart(CartRef);
        const cartSymUpdates = document.getElementById(`${Product_Id}`);
        if (cartSymUpdates) {
          cartSymUpdates.className = "bx bxs-cart-alt text-3xl absolute top-5 right-5 rounded-full bg-orange-500 text-white px-1 cursor-pointer";
        }
        // alert("added")
      }
    } else {
      alert("Login to continue");
      navigate("/Login");
    }
  }
  


  return (
    <div>
      <Header />
      <div
        className="modified-scroll-bar-  p-5 mt-5 mx-auto rounded-2xl "
        style={{ width: "1000px", height: "530px" }}
      >
        <div
          className="w-full h-full rounded-xl bg-center bg-cover relative border-2"
          style={{
            backgroundImage: `linear-gradient(to top,rgb(0,0,0,0.450),rgb(0,0,0,0)),url(${targetProduct.d_Product_Img_src})`,
          }}
        >
        <i className={ 
            myRealTimeCart.some((target)=> target.id === Product_Id) ? "bx bxs-cart-alt text-3xl absolute top-5 right-5 rounded-full bg-orange-500 text-white px-1 cursor-pointer" : 
            "bx bxs-cart-alt text-3xl absolute top-5 right-5 rounded-full text-white px-1 cursor-pointer" } onClick={()=> Add_to_cart(Product_Id)} id={Product_Id}>
        </i>
          <div className="text-center text-white absolute bottom-5 left-2/4 -translate-x-2/4 ">
            <button
              className="bg-orange-500 text-white px-4 py-1 mb-3"
              style={{ borderRadius: "20px" }}
            >
              Buy Now
            </button>
          </div>
        </div>
        <div className="font-bold text-xl mt-10 flex items-center justify-between">
          <div className="bg-slate-300 text-gray-700 w-fit pl-5 pr-2 py-2 rounded-3xl">
          {targetProduct.a_Product_Name}{" "}
          {targetProduct.h_stockAvailable ? (
            <span className="font-normal text-green-600 border border-green-600 px-4 py-1 bg-green-200 ml-10 rounded-2xl">
              In Stock
            </span>
          ) : (
            <span className="font-normal text-red-600 border border-red-600 px-4 py-1 bg-red-200 ml-10 rounded-2xl">Sold Out</span>
          )}
          </div>
          <Link className="text-base font-normal text-gray-400 flex items-center hover:text-gray-600" to='/Products'>Back to Shop &nbsp; 
          <i className='bx bxs-shopping-bag bx-flashing text-lg'></i></Link>
        </div>
        <p className="mt-5 text-xl font-normal"> Price: ₹ {targetProduct.b_Product_Price}</p>
        <p className="mt-5 text-base font-normal"> Category: {targetProduct.c_Product_Category}</p>
        <div className="">
          <p className="mt-5 font-medium underline">Product Description:</p>
          <p className="mt-3 tracking-wide leading-7">{targetProduct.g_description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
