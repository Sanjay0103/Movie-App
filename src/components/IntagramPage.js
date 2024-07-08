import React from "react";

function IntagramPage() {
  return (
    <div className="mt-20 ">
      <p className=" text-center text-5xl font-bold">Follow Us On Instagram</p>
      <p className="text-center max-w-xl mx-auto mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
        consequuntur dolores aliquam, sapiente magnam ducimus aut harum earum
        rem porro tempora culpa,
      </p>
      <p className="text-xs text-center mt-5 cursor-pointer hover:underline text-orange-400 hover:text-orange-500">
        www.instagram/shopify/eShopping.com
      </p>
      <div className=" w-fit mx-auto mt-16 flex items-center justify-between gap-5">
        <div
          className=" bg-center bg-cover rounded-2xl"
          style={{
            width: "310px",
            height: "510px",
            backgroundImage:
              "url(https://i.pinimg.com/736x/c4/be/39/c4be39394ed068e4ca640654c55229a0.jpg)",
          }}
        ></div>
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
              SUBSCRIBE NOW &nbsp; <i className="bx bxs-paper-plane text-lg"></i>
            </button>
          </p>
        </div>
        <div
          className=" bg-center bg-cover rounded-2xl"
          style={{
            width: "310px",
            height: "510px",
            backgroundImage:
              "url(https://i.pinimg.com/736x/7c/b9/cc/7cb9ccf13232064521c07c30750dd423.jpg)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default IntagramPage;
