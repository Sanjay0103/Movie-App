import React, { useEffect, useState } from "react";
import Header from "./Header";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { storage } from "../FireBase/config";
import { Link } from "react-router-dom";

function CartPage() {
  const sessionStorageAccess =
    JSON.parse(sessionStorage.getItem("MyShopifyAccount")) || {};
  const [cartItems, setCartItems] = useState([]);

  const [allTotalPrice, setAllTotalPrice] = useState(0);
  const [loadon, setLoadon] = useState(false);

  useEffect(() => {
    async function ReadCart() {
      const ll = doc(storage, "Shopify Users", sessionStorageAccess.id);
      const vv = await getDoc(ll);
      const cartItemsData = vv.data().j_Person_cart;
      setCartItems(cartItemsData);

      const totalamountMapping = cartItemsData.map((target) => target.b_Product_Price);
      const totalgrandprice = totalamountMapping.reduce((a, b) => a + b, 0);
      setAllTotalPrice(totalgrandprice);
    }
    ReadCart();
  }, []);

  function PriceCalc() {
    const totalamountMapping = cartItems.map(
      (target) => target.b_Product_Price
    );
    const totalgrandprice = totalamountMapping.reduce((a, b) => {
      return a + b;
    }, 0);
    setAllTotalPrice(totalgrandprice);
  }

  useEffect(() => {
    PriceCalc();
  }, []);

  async function RemoveProduct(product_id) {
    const selectedProduct = doc(
      storage,
      "Shopify Users",
      sessionStorageAccess.id
    );
    const DelSelectedProduct = await getDoc(selectedProduct);
    const UserCart = DelSelectedProduct.data().j_Person_cart;
    const UpdatedCart = UserCart.filter((target) => target.id !== product_id);
    await setDoc(
      selectedProduct,
      { j_Person_cart: UpdatedCart },
      { merge: true }
    );
    setCartItems(UpdatedCart);

    const totalamountMapping = UpdatedCart.map(target => target.b_Product_Price);
    const totalgrandprice = totalamountMapping.reduce((a, b) => a + b, 0);
    setAllTotalPrice(totalgrandprice);
  }

  async function IncreaseQuntity(product_id){
    const IQ_selectedProduct = doc(storage,"Shopify Users",sessionStorageAccess.id);
    const IQ_selectedProductRef = await getDoc(IQ_selectedProduct);
    const UserCart = IQ_selectedProductRef.data().j_Person_cart;

    const productIndex = UserCart.findIndex((item) => item.id === product_id);

    UserCart[productIndex].e_Quantity += 1;
    UserCart[productIndex].f_QuantityWithPrice = UserCart[productIndex].b_Product_Price * UserCart[productIndex].e_Quantity;
    await setDoc(IQ_selectedProduct,{j_Person_cart : UserCart,}, {merge : true});
    setCartItems([...UserCart]);

    const spanTag = document.getElementById(product_id);
    spanTag.innerHTML = UserCart[productIndex].e_Quantity;

    const totalamountMapping = UserCart.map((target) => target.b_Product_Price  * target.e_Quantity);
    const totalgrandprice = totalamountMapping.reduce((a, b) => a + b, 0);
    setAllTotalPrice(totalgrandprice);
  }

  async function DecreaseQuntity(product_id){
    const IQ_selectedProduct = doc(storage,"Shopify Users",sessionStorageAccess.id);
    const IQ_selectedProductRef = await getDoc(IQ_selectedProduct);
    const UserCart = IQ_selectedProductRef.data().j_Person_cart;

    const productIndex = UserCart.findIndex((item) => item.id === product_id);

    if(UserCart[productIndex].e_Quantity === 1){
      RemoveProduct(product_id);
    }else{
      UserCart[productIndex].e_Quantity -= 1;
      UserCart[productIndex].f_QuantityWithPrice = UserCart[productIndex].b_Product_Price * UserCart[productIndex].e_Quantity;
    }

    await setDoc(IQ_selectedProduct,{j_Person_cart : UserCart}, {merge : true});
    setCartItems([...UserCart]);

    const spanTag = document.getElementById(product_id);
    spanTag.innerHTML = UserCart[productIndex].e_Quantity;
    const totalamountMapping = UserCart.map((target) => target.b_Product_Price  * target.e_Quantity);
    const totalgrandprice = totalamountMapping.reduce((a, b) => a + b, 0);
    setAllTotalPrice(totalgrandprice);
  }
  return (
    <div>
      <Header />
      <div style={{display: loadon ? "block" : "none" }} className="flex items-center justify-center fixed w-full h-full bg-opacity-50 backdrop-blur bg-gray-100 px-3 py-1 rounded z-10 text-orange-500"><i class='bx bx-loader bx-spin mr-1' ></i> Loading...</div>
      {cartItems.length === 0 ? (
        <div className="text-center h-screen w-full bg-white ">
          <br />
          <br />
          <img
            src="https://limasy.com/img/empty-animation1.gif"
            alt=""
            className=" block mx-auto"
          />
          <p className="mt-5">The Cart Is Empty</p> <br />
          <p>
            <Link
              to="/Products"
              className="px-3 py-1 rounded-md shadow-xl bg-black text-white"
            >
              Go to Shop
            </Link>
          </p>
        </div>
        // "Loading..."
      ) : (
        <>
          <div className="mt-5 text-center font-medium text-xl flex items-center justify-center">
            Cart Product <i className="bx bxs-cart-alt text-2xl ml-1"></i>
          </div>
          <div className="mt-5 max-w-7xl mx-auto flex justify-between gap-5 font-light ">
            <div
              className=" w-6/12 overflow-y-scroll px-3 pb-5 modified-scroll-bar"
              style={{ height: "90vh" }}
            >
              <div className="mt-5 ">
                {cartItems.map((target) => (
                  <div
                    key={target.id}
                    id={`${target.id}_div`}
                    className="p-3 rounded-lg border-2 mt-5 flex justify-around hover:shadow-md "
                  >
                    <div
                      className=" bg-center bg-cover bg-slate-300 rounded-lg"
                      style={{
                        width: "200px",
                        height: "130px",
                        backgroundImage: `url(${target.d_Product_Img_src})`,
                      }}
                    ></div>
                    <div className="w-7/12 relative">
                      <Link to={`/ProductPage/${target.id}`}>{target.a_Product_Name}</Link>
                      <p className="w-fit px-3 py-1 rounded-md bg-gray-300 text-sm mt-2">
                        ₹ {target.f_QuantityWithPrice}
                      </p>
                      <p className=" absolute bottom-3 left-1">
                        Quantity :{" "}
                        <button className="mx-2 px-3 bg-gray-100 rounded hover:bg-orange-500 hover:text-white" onClick={()=> DecreaseQuntity(target.id)}>
                          -
                        </button>
                        <span id={target.id}>{target.e_Quantity}</span>
                        <button className="mx-2 px-3 bg-gray-100 rounded hover:bg-orange-500 hover:text-white" onClick={()=> IncreaseQuntity(target.id)}>
                          +
                        </button>
                        <button
                          className="mt-1 px-3 py-1 bg-red-500 text-white text-xs rounded"
                          onClick={() => RemoveProduct(target.id)}
                        >
                          Remove
                        </button>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="text-left border-2 p-5 rounded-md relative"
              style={{ width: "500px", height: "500px" }}
            >
              <p className="font-bold text-2xl border-b-2  pb-1">
                Cart Products Bill
              </p>
              <p className="text-end my-3 mr-7"> Shipping Charge : ₹ 0.00 </p>
              <p className="text-end my-3 mr-7"> Tax Amount : ₹ 0.00</p>
              <p className="text-end my-3 mr-7"> Estimation of All Products Bill Amount : ₹ {allTotalPrice} </p>
              <p className="mt-4 font-medium w-11/12 bottom-4 absolute px-3 py-2 rounded text-end flex justify-end">
                <Link to='/Products' className="font-light rounded mr-5 flex items-center hover:font-normal w-fit"><i class='bx bx-chevron-left'></i> Go to Shop</Link>
                <button className=" px-3 py-1 rounded-md bg-green-500 hover:bg-green-600 drop-shadow-md shadow-md text-white font-light">
                  Pay ₹ {allTotalPrice}
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;

// https://limasy.com/img/empty-animation1.gif
