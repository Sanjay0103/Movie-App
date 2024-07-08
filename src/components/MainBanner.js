import React from "react";
import Header from "./Header";
import BrandInfo from "./BrandInfo";
import IntagramPage from "./IntagramPage";
import Footer from "./Footer";
import { Link } from "react-router-dom";


function MainBanner() {


  return (
    <>
      <Header />
      <div className=" w-fit mx-auto mt-16 flex justify-between gap-10">
        <div
          className=" bg-center bg-cover rounded-2xl"
          style={{
            width: "310px",
            height: "510px",
            backgroundImage:
              "url(https://i.pinimg.com/736x/dd/e8/2e/dde82e3449c48abab36bed99398c91ce.jpg)",
          }}
        ></div>
        <div className="mx-16">
          <div className="text-center text-7xl font-extrabold w-fit mx-auto px-3 py-1 rounded-xl border-2 border-gray-300">
            ULTIMATE
          </div>
          <div className="box-text text-center -translate-y-7 uppercase cursor-default">
            sale
            <div className="text-base text-black tracking-widest font-light">
              NEW COLLECTIONS
              <div className="text-center w-fit mx-auto border-2 border-gray-300 hover:border-gray-400 p-1 rounded-md mt-2">
                <button className="tracking-widest px-3 py-1 rounded-md bg-black text-white shadow-buttonshadow">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
          <div className="w-fit mx-auto uppercase text-center">
            Top Brands <span className="font-bold">Available</span>
          </div>
        </div>
        <div
          className=" bg-center bg-cover rounded-2xl"
          style={{
            width: "310px",
            height: "510px",
            backgroundImage:
              "url(https://i.pinimg.com/736x/7a/f7/69/7af769ab37cb9a46d2304deac4d806ea.jpg)",
          }}
        ></div>
      </div>
      <BrandInfo />
      <div className=" tracking-widest text-3xl font-thin text-center">
        {" "}
        [ <span className="text-3xl font-medium">NEW ARRIVALS</span> ]
      </div>
      <div className="text-center mx-auto text-zinc-500 tracking-wider font-light mt-10 max-w-3xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        perferendis cumque fugit fuga laboriosam maxime? Minus harum aliquam ut
        totam quos aspernatur numquam commodi aut autem magnam! Eum voluptate
        molestias dolore aliquid dolor amet porro?
      </div>
      
      <div
        className="top-trending mt-10"
        style={{ padding: "20px", columns: "4 250px", gap: "20px" }}
      >
        <img
          src="https://www.meaningfulwomen.com/wp-content/uploads/Tips-For-Jewelry-Photography-678x381.jpg"
          alt=""
          className="rounded-md w-full mb-5"
        />
        <img
          src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww"
          alt=""
          className="rounded-md w-full mb-5"
        />
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/ad5c7e77765075.5c913c90093ec.jpg"
          alt=""
          className="rounded-md w-full mb-5"
        />
        <img
          src="https://i.pinimg.com/736x/55/30/59/553059b4b8be126d215de14628cf84c6.jpg"
          alt=""
          className="rounded-md w-full mb-5"
        />
        <img
          src="https://i0.wp.com/photofocus.com/wp-content/uploads/2021/09/Julie-Powell-Product-Photography-1.jpg?fit=2560%2C1440&ssl=1"
          alt=""
          className="rounded-md w-full mb-5"
        />
        <img
          src="https://i.pinimg.com/1200x/ee/68/58/ee68581b8a16ee4e9f681e3be485d60b.jpg"
          alt=""
          className="rounded-md w-full mb-5"
        />
        <img
          src="https://i.pinimg.com/1200x/21/de/7c/21de7c3ddb46e65a8539037b8f3e7681.jpg"
          alt=""
          className="rounded-md w-full mb-5"
        />
        <img
          src="https://i.pinimg.com/736x/be/8b/b7/be8bb7921bfaba2bfb5c0dca0cf3ef9d.jpg"
          alt=""
          className="rounded-md w-full mb-5"
        />
        <img
          src="https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?cs=srgb&dl=pexels-alex-azabache-3766111.jpg&fm=jpg"
          alt=""
          className="rounded-md w-full mb-5"
        />
        <img
          src="https://cloudfront.omsphoto.com/wp-content/uploads/2019/11/oms-photo-sarah-hone-product-photography004-1.jpg"
          alt=""
          className="rounded-md w-full mb-5"
        />
      </div>
      <div className="text-center">
        <Link to='/Products' className="px-3 py-1 bg-black text-white rounded-md shadow-xl mt-5">Shop Now</Link>
      </div>
      <IntagramPage />
      <Footer />
    </>
  );
}

export default MainBanner;
