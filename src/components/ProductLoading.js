import React from "react";

function ProductLoading() {
  return (
    <div className="">
        <img
          src="https://cdn.dribbble.com/users/1641/screenshots/1632371/loading.gif"
          alt=""
          className="absolute"
          width={"500px"}
          style={{left:"50%",transform:"translateX(-50%"}}
        />
    </div>
  );
}

export default ProductLoading;
