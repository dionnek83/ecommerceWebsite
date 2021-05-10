import React from "react";
import CartItem from "./cartItem";

const Cart = () => {
  return (
    <section className="pt-20 px-2 lg:px-28 pb-20 bg-gray-200 grid grid-cols-1 gap-5 md:grid-cols-2">
      <div className="mr-4">
        <h1 className="text-3xl font-bold my-5">Shopping Cart</h1>
        <CartItem />
        <CartItem />
      </div>
      <div>
        <div className="mt-14 shadow bg-gray-100 w-80">
          <p className="text-xl p-2 font-bold">Subtotal (0) item/s</p>
          <p className="p-2 ">N$100.00</p>
          <button
            className=" mt-5 w-full border-2 border-gray-900 text-white
 bg-gray-900  hover:bg-gray-800 "
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
