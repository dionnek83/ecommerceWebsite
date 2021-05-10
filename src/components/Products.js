import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Product = (props) => {
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

const Products = () => {
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

  const allProducts = () => {
    return products.map((product) => {
      return <Product product={product} key={product._id} />;
    });
  };

  return (
    <section className="pt-20 px-28 pb-28">
      <h1 class="section-title">All Products</h1>
      <div className="grid grid-cols-1 gap-20 pt-10 md:grid-cols-4 md:gap-16">
        {allProducts()}
      </div>
    </section>
  );
};

export default Products;
