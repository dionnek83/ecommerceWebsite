import React from "react";
import * as BiIcons from "react-icons/bi";
import { Link } from "react-router-dom";
import "../index.css";

const Header = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <header className="w-full fixed  z-50 py-6 bg-primary-2 px-8">
        <nav className=" flex flex-row justify-between">
          <div
            className="cursor-pointer text-xl lg:hidden"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <BiIcons.BiMenuAltLeft />
          </div>

          <h1 className=" text-2xl cursor-pointer">
            <Link to="/">Shop</Link>
          </h1>

          <div
            className={
              "lg:flex list-none h-auto p-0 flex-row" +
              (navbarOpen
                ? " absolute top-11 h-screen w-2/4 bg-primary-2 flex justify-center left-0"
                : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="lg:list-none lg:flex lg:flex-row">
              <li className="mb-8 lg:mb-0 px-20 lg:px-5 py-10 lg:py-0 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="mb-8 lg:mb-0 px-20 py-10 lg:px-5 lg:py-0 cursor-pointer">
                Featured
              </li>
              <li className="mb-8 lg:mb-0 px-20 py-10 lg:px-5 lg:py-0 cursor-pointer">
                Women
              </li>
              <li className="mb-8 lg:mb-0 px-20 py-10 lg:px-5 lg:py-0 cursor-pointer">
                <Link to="/products"> Products</Link>
              </li>
            </ul>
          </div>
          <div className="text-2xl cursor-pointer relative">
            <Link to="/cart">
              {" "}
              <BiIcons.BiShoppingBag />
              <span className="text-white bg-red-800 rounded-full px-2 py-1 text-xs absolute -right-4 -top-4">
                0
              </span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
