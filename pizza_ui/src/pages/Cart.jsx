import React, { useEffect } from "react";
import { XCircleIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeCart,
} from "../features/cartSlice";
import { toast } from "react-hot-toast";

function Cart() {
  const { products } = useSelector((state) => ({ ...state.cart }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function total() {
    let x = 0;
    // eslint-disable-next-line
    products.map((totalP) => {
      x += totalP.price * totalP.quantity;
    });
    return x;
  }

  const increase = (id) => {
    dispatch(increaseQuantity(id));
  };

  const decrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const removeCartItem = (id) => {
    dispatch(removeCart(id));
  };

  const orderPlaced = () => {
    dispatch(clearCart());
    toast.success("Order Placed, Thank You !!");
    navigate("/");
  };

  return (
    <div className="max-w-6xl mx-auto mb-12">
      <div className="text-center mt-12">
        <h1 className="text-3xl">
          <span className="text-primary"> Your </span> Cart
        </h1>
      </div>

      {/* Cart Table */}
      <div className="flex items-start gap-3 mt-10 p-3 md:flex-col">
        <div className="flex-[0.7] md:flex-[1] md:w-full">
          <table className="w-full border-spacing-[20px]">
            <thead>
              <tr className="bg-red-300">
                <th>Product</th>
                <th>Name</th>
                <th className="sm:hidden">Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td>
                    <h2 className="mt-5 text-xl font-medium">
                      Cart is Empty Now
                    </h2>
                  </td>
                </tr>
              ) : (
                <>
                  {products.map((product) => (
                    <React.Fragment key={product._id}>
                      <tr className="!w-full text-center mb-3">
                        <td className="flex justify-center items-center mt-4">
                          <div className="h-20 w-20 sm:h-12 sm:w-12">
                            <img
                              src={product.image}
                              alt="/"
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </td>
                        <td className="text-sm max-w-[100px]">
                          <div className="w-full sm:text-[12px]">
                            {product.name}
                          </div>
                        </td>
                        <td className="sm:hidden">
                          <div>${product.price}.00</div>
                        </td>
                        <td className="">
                          <div className="flex justify-center gap-4">
                            <span
                              className="cursor-pointer"
                              onClick={() => decrease(product._id)}
                            >
                              -
                            </span>
                            <h3>{product.quantity}</h3>
                            <span
                              className="cursor-pointer"
                              onClick={() => increase(product._id)}
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center">
                            <XCircleIcon
                              width={30}
                              height={30}
                              className="cursor-pointer text-primary"
                              onClick={() => removeCartItem(product._id)}
                            />
                          </div>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </>
              )}
            </tbody>
          </table>

          <div className="mt-6">
            {products.length === 0 ? (
              <>
                <Link to="/products">
                  <button className="border-2 border-red-400 text-primary capitalize font-medium p-2 cursor-pointer">
                    add pizza
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/products">
                  <button className="border-2 border-red-400 text-primary capitalize font-medium p-2 cursor-pointer">
                    add more pizza
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
        {products.length > 0 && (
          <>
            <div className="flex-[0.3] bg-slate-100 md:flex-[1] md:w-full">
              <div className="bg-red-300">
                <h1 className="text-center text-2xl text-white">Cart Totals</h1>
              </div>

              <div className="mt-6 flex justify-between items-center px-2">
                <h2>Sub Total:</h2>
                <h2>${total().toLocaleString()}.00</h2>
              </div>

              <div className="mt-2 flex justify-between items-center px-2">
                <h2>Shipping:</h2>
                <h2>Free</h2>
              </div>

              <div className="mt-2 flex justify-between items-center px-2">
                <h2 className="text-xl">Total:</h2>
                <h2>${total().toLocaleString()}.00</h2>
              </div>

              <div className="mt-6">
                <button
                  className="w-full p-2 bg-black text-white capitalize"
                  onClick={orderPlaced}
                >
                  place order
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
