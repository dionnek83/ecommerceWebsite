import React from "react";
import { Link } from "react-router-dom";
import * as BsIcon from "react-icons/bs";
import product1 from "../images/Product-1.jpg";

const CartItem = () => {
  return (
    <div className="w-full p-2 lg:p-4 mb-2 grid grid-cols-5 gap-2 bg-gray-100  rounded-sm place-items-center">
      <div>
        <img src={product1} alt="product 1"></img>
      </div>

      <Link to={`/product/${1111}`}>
        <p className="">Body Suit</p>
      </Link>

      <p>N$100.00</p>

      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>

      <button className="px-3 py-4 text-txt-color text-xl bg-gray-100 cursor-pointer">
        <BsIcon.BsTrash />
      </button>
    </div>
  );
};

export default CartItem;
