import React, { useState } from "react";
import { storage } from "../FireBase/config";
import { addDoc, collection } from "firebase/firestore";

function AddProduct() {
  const [img, setImg] = useState(
    "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
  );
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("default");

  async function IncludeProduct() {
    try {
      await addDoc(collection(storage, "Shopify Products"), {
        a_Product_Name: productName,
        b_Product_Price: Number(productPrice),
        c_Product_Category: productCategory,
        d_Product_Img_src: img,
        e_Quantity: 1,
        f_QuantityWithPrice: Number(productPrice),
        
      });
      alert("product added Successfully");
      setImg(
        "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
      );
      setProductName("");
      setProductPrice("");
      setProductCategory("");
    } catch (error) {
      alert("oops! Something is Wrong", error);
    }
  }

  return (
    <>
      <nav className="flex items-center justify-center w-full text-orange-500">
        <i className="bx bxl-shopify text-5xl"></i>
        <span className="text-3xl font-bold">Shopify</span>
      </nav>
      <div className=" shadow-xl w-fit p-10 mx-auto rounded-2xl mt-5 border-t">
        <div
          className="flex items-center justify-center bg-center bg-cover text-gray-400 mx-auto rounded-lg"
          style={{
            width: "350px",
            height: "200px",
            backgroundImage: `url(${img})`,
          }}
        ></div>
        <input
          value={img}
          onChange={(e) => setImg(e.target.value)}
          className="block w-11/12 mx-auto px-3 py-2 rounded-md mt-5"
          type="text"
          placeholder=" Product Image Source"
        />
        <input
          value={productName}
          className="block w-11/12 mx-auto px-3 py-2 rounded-md mt-5"
          type="text"
          placeholder=" Product Name"
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          value={productPrice}
          className="block w-11/12 mx-auto px-3 py-2 rounded-md mt-5"
          type="text"
          placeholder=" Price "
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <select
          className="block w-11/12 mx-auto px-3 py-2 rounded-md mt-5"
          name=""
          id=""
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
        >
          <option value="default">Category</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
          <option value="Applinces">Applinces</option>
          <option value="Games">Games</option>
          <option value="Mobiles">Mobiles</option>
          <option value="MobilesAcessories">Mobiles Acessories</option>
          <option value="Laptop">Laptop</option>
          <option value="Furniture">Furniture</option>
          <option value="FoodProduct">Food Product</option>
          <option value="BeautyProducts">Beauty Products</option>
          <option value="Others">Others</option>
        </select>
        <input
          className="block bg-orange-500 text-white cursor-pointer w-11/12 mx-auto px-3 py-2 rounded-md mt-5"
          type="button"
          value={"Add Product"}
          onClick={() => IncludeProduct()}
        />
      </div>
    </>
  );
}

export default AddProduct;
