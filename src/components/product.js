import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
          className="cursor-pointer"
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

const Product = () => {
  let { id } = useParams();

  const [product, setProduct] = useState([]);

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

  useEffect(() => {
    axios
      .get("http://localhost:5000/products/" + id)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const [qty, setQty] = useState();
  return (
    <>
      <h1>Product</h1>
      <div className="px-24 pt-36 pb-60">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:px-28">
          <div className="">
            <div className="">
              <img
                src={product.imageUrl}
                alt={product.name}
                class=" h-96"
              ></img>
            </div>

            <div className="grid grid-cols-4 w-60">
              <img
                src={product.imageUrl}
                alt={product.name}
                class="cursor-pointer"
              ></img>
              <img
                src={product.imageUrl}
                alt={product.name}
                class="cursor-pointer"
              ></img>
              <img
                src={product.imageUrl}
                alt={product.name}
                class="cursor-pointer"
              ></img>
              <img
                src={product.imageUrl}
                alt={product.name}
                class="cursor-pointer"
              ></img>
            </div>
          </div>

          <div className="">
            <h1 className="text-4xl font-bold leading-8">{product.name}</h1>
            <p className="text-txt-color font-bold my-3">
              Price: <span>N${product.price}</span>
            </p>

            <select className=" px-10 py-2">
              {/* sm:self-center sm:w-40 sm:mx-auto sm:inline-block  */}
              <option value="">Select Size</option>
              <option value="">XXL</option>
              <option value="">XL</option>
              <option value="">Large</option>
              <option value="">Medium</option>
              <option value="">Small</option>
            </select>

            <p className="my-5">
              Qty
              <select value={qty} onchange={(e) => setQty(e.target.value)}>
                {[...Array(product.inStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </p>

            <p>
              Status:{" "}
              <span>{product.inStock > 0 ? "In Stock" : "Out of Stock"}</span>
            </p>

            <button
              className=" mt-5 px-3 py-2 border-2 border-gray-900 text-white
     bg-gray-900  hover:bg-gray-800 block"
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="pt-20 px-5 lg:px-28 pb-20">
          <h3 className="text-xl font-bold">Recommended</h3>

          <div className="grid grid-cols-1 gap-20 pt-10 md:grid-cols-4 md:gap-16">
            {featuredProductsList()}
          </div>
          <button
            className="mt-10 px-3 py-2 border-2 border-gray-900
              text-white bg-gray-900 hover:bg-gray-800 float-right"
          >
            View More
          </button>
        </div>
      </div>
    </>
  );
};
export default Product;
