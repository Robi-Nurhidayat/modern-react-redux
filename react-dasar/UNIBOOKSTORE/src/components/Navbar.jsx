import React, { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCarts } from "../assets/app/carts/cartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(fetchCarts());
  }, [dispatch]);

  console.log(carts);
  return (
    <nav className="flex bg-blue-500 px-8 py-4 text-white justify-center items-center gap-10">
      <div className="text-4xl font-bold">
        <span>Logo</span>
      </div>
      <ul className="flex justify-beetwen gap-4 text-2xl font-semibold">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/products"}>Products</Link>
        </li>
      </ul>
      <div className="text-3xl relative">
        <FaShoppingCart />
        <span className="absolute -right-4 -top-3 z-10">
          {carts.carts.length}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
