import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../carts/cartSlice";
import { getAllProducts } from "./productsSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  console.log(products);
  return (
    <div
      className="flex justify-around mx-auto p-5 bg-gray-100"
      style={{ maxWidth: "70%" }}
    >
      {products.products.length &&
        products.products.map((product) => (
          <div
            key={product.id}
            className="card border px-8 py-4 flex flex-col gap-2"
          >
            <h5 className="text-2xl font-semibold">{product.name}</h5>
            <p>Rp. {product.price}</p>
            <div className="flex gap-1">
              <button className="bg-red-500 py-1 px-2.5 rounded text-white">
                View
              </button>
              <button
                onClick={() => dispatch(addCart(product))}
                className="bg-blue-500 py-1 px-2.5 rounded text-white"
              >
                Add Cart
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
