import React from "react";

function BrandInfo() {
  return (
    <div className="py-20">
      <p className="text-xs tracking-widest text-center font-light block w-fit px-3 py-1 mx-auto border-2 rounded-xl">
        THE BRAND INFORMATION
      </p>
      <div className="text-center mt-5 text-3xl font-semibold flex items-center justify-center w-fit  mx-auto drop-shadow-lg text-gray-500">
        <i className="bx bxl-shopify text-5xl"></i>
        <span className="text-4xl font-extrabold">Shopify</span>
      </div>
      <p className=" max-w-4xl text-center tracking-wider mx-auto text-gray-600 mt-10">
        Shopify Inc. is a Canadian multinational e-commerce company
        headquartered in Ottawa, Ontario. Shopify is the name of its proprietary
        e-commerce platform for online stores and retail point-of-sale systems.
      </p>
      <div className="mt-10 max-w-4xl mx-auto flex justify-around items-center">
        <p>
          {" "}
          <span className="font-bold">Head Quarters :</span>{" "}
          <a
            href="https://www.google.com/search?sca_esv=599133334&rlz=1C1RXQR_enIN1062IN1063&sxsrf=ACQVn0-X9OR1C3DiJIykrKq26OfWzo_zGA:1705501953065&q=Ottawa&si=AKbGX_paaCugDdYkuX2heTJMr0_FGRox2AzKVmiTg2eQr2d-rpcnnpOXVERoe9s7qqFiCp_ARw8fXIxRYryz8yzZlyjVgt-mUrZ-mZhBlltsU7LLZw9GEsbuve6ubQji9-pdwhTG0vOPwmGHFHIxxzhYvCGU3i7HarD-FcuGneHZYxN_iE8z7VzdJbQ3MY66Kl9oFK4qV5Pv&sa=X&ved=2ahUKEwjdx83w0eSDAxVPklYBHZLHDmkQmxMoAXoECFUQAw&biw=1536&bih=730&dpr=1.25"
            target="_blank"
            className="text-gray-400 hover:text-blue-500 hover:underline"
          >
            Ottawa, Canada
          </a>
        </p>
        <p>
          <span className="font-bold">CEO :</span>{" "}
          <a
            href="https://www.linkedin.com/in/tobiaslutke?originalSubdomain=ca"
            target="_blank"
            className="text-gray-400 hover:text-blue-500 hover:underline"
          >
            Tobias Lütke
          </a>
        </p>
        <p>
          <span className="font-bold">Number of employees:</span> 11,600+
        </p>
      </div>
    </div>
  );
}

export default BrandInfo;
