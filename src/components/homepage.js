import React from "react";
import HeroImage from "../images/hero-image.png";
import lookBookImage1 from "../images/LookbookImage-1.jpg";
import lookBookImage2 from "../images/LookbookImage-2.jpg";
import lookBookImage3 from "../images/LookbookImage-3.jpg";

import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import * as FaIcons from "react-icons/fa";

const FeaturedProduct = (props) => {
  return (
    <div className="shadow-2xl relative container">
      <p className="px-5 py-1 border-2 bg-gray-900 border-gray-900 absolute top-0 left-0 text-white">
        Sale
      </p>
      <Link to={"/" + props.product._id}>
        <img
          src={props.product.imageUrl}
          alt={props.product.name}
          class="cursor-pointer"
        ></img>
      </Link>
      <div className="text-center pt-2 pb-3 ">
        <h3 className="text-xl font-bold cursor-pointer">
          {props.product.name}
        </h3>
        <p className="text-txt-color ">N${props.product.price}</p>

        <button
          className=" mt-5 px-3 py-2 border-2 border-gray-900 text-white
 bg-gray-900  hover:bg-gray-800 "
        >
          Add to Cart
        </button>
      </div>{" "}
    </div>
  );
};

const NewProduct = (props) => {
  return (
    <div className="shadow-2xl relative container">
      <Link to={"/" + props.product._id}>
        <img src={props.product.imageUrl} alt={props.product.name}></img>
      </Link>
      <div className="text-center pt-2 pb-3 ">
        <h3 className="text-xl font-bold">{props.product.name}</h3>
        <p className="text-txt-color ">N$ {props.product.price}</p>

        <button
          className=" mt-5 px-3 py-2 border-2 border-gray-900 text-white
 bg-gray-900  hover:bg-gray-800 "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const featuredProductsList = () => {
    const size = 4;
    return products.slice(0, size).map((product) => {
      return <FeaturedProduct product={product} key={product._id} />;
    });
  };

  const newProductsList = () => {
    const size = 12;
    return products.slice(4, size).map((product) => {
      return <NewProduct product={product} key={product._id} />;
    });
  };

  return (
    <>
      <section className="overflow-hidden bg-primary-1 pt-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 relative h-screen md:static md:h-auto">
          <div className="text-center md:mt-20">
            <span className="block mb-2">Women</span>
            <h1 className="text-4xl  font-bold mb-8 ">
              SUMMER <br /> COLLECTION
            </h1>
            <button className="px-5 py-2 border-2 border-gray-900  hover:bg-gray-900 hover:text-white">
              <Link to="/products">Shop Now</Link>
            </button>
          </div>

          <img
            src={HeroImage}
            className="absolute right-0 bottom-0 md:static "
            alt="hero"
          ></img>
        </div>
      </section>

      <section className="pt-20 px-20 pb-3 grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-16 ">
        <img src={lookBookImage1} alt="lookbook 1"></img>
        <img src={lookBookImage2} alt="lookbook 2"></img>
        <img src={lookBookImage3} alt="lookbook 3"></img>
      </section>

      <section className="pt-20 px-28 pb-20">
        <h1 className="section-title">Featured Products</h1>
        <div className="grid grid-cols-1 gap-20 pt-10 md:grid-cols-4 md:gap-16">
          {featuredProductsList()}
        </div>
      </section>

      <section className="pt-20 px-28 pb-28">
        <h1 class="section-title">New Arrivals</h1>
        <div className="grid grid-cols-1 gap-20 pt-10 md:grid-cols-4 md:gap-16">
          {newProductsList()}
        </div>
      </section>

      <section className="pt-20 px-20 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10">
          <div className="text-center">
            <div className="text-6xl inline-block mx-auto">
              <FaIcons.FaTruck />
            </div>
            <h2 className="text-2xl font-bold leading-8">
              Shipping and Delivery
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              vero ex expedita, nihil, Quos excepturi dolor molestias eos unde
            </p>
            <button
              className=" mt-5 px-3 py-2 border-2 border-gray-900 text-white
 bg-gray-900  hover:bg-gray-800 "
            >
              Read More
            </button>
          </div>

          <div className="text-center">
            <div className="text-6xl inline-block mx-auto">
              <FaIcons.FaCreditCard />
            </div>
            <h2 className="text-2xl font-bold leading-8">Payment Methods</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              vero ex expedita, nihil, Quos excepturi dolor molestias eos unde
            </p>
            <button
              className=" mt-5 px-3 py-2 border-2 border-gray-900 text-white
 bg-gray-900  hover:bg-gray-800 "
            >
              Read More
            </button>
          </div>

          <div className="text-center">
            <div className="text-6xl inline-block mx-auto ">
              <FaIcons.FaEnvelope />
            </div>
            <h2 className="text-2xl font-bold leading-8">Newsletter</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              vero ex expedita, nihil, Quos excepturi dolor molestias eos unde
            </p>
            <input
              className="inline border-gray-900 border-2 px-2 py-2"
              placeholder="Enter your email"
            ></input>
            <button
              className="inline mt-5 px-3 py-2 border-2 border-gray-900 text-white
 bg-gray-900  hover:bg-gray-800 "
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
//23:11
