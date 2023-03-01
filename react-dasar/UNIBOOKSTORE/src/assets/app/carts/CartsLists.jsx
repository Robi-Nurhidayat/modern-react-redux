import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, fetchCarts } from "./cartSlice";

const CartsLists = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(fetchCarts());
  }, [dispatch]);
  return (
    <div style={{ maxWidth: "50%" }} className="mx-auto">
      <h2 className="text-2xl font-bold mb-3">Daftar Belanjaan Anda</h2>
      {carts.carts.length > 0
        ? carts.carts.map((cart) => {
            return (
              <div className="p-3 border mt-2 flex justify-between items-center">
                <div>
                  <h5>{cart.name}</h5>
                  <p>{cart.price}</p>
                </div>
                <div className="flex gap-3">
                  <button className="bg-green-500 px-2 py-1 text-white font-normal rounded">
                    Checkout
                  </button>
                  <button
                    onClick={() => dispatch(deleteCart(cart.id))}
                    className="bg-red-500 px-2 py-1 text-white font-normal rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        : "Oopps,, Yuk segera belanja"}
    </div>
  );
};

export default CartsLists;
