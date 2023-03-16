import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPizza } from "../features/cartSlice";

function ProductView() {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchPizza = async () => {
      const result = await axios.get(`https://api-pizza-five.vercel.app/api/pizzas/${id}`);
      // console.log(result.data);
      setProduct(result.data);
    };

    fetchPizza();
  }, [id]);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addPizza({ ...product, quantity }));
  };

  return (
    <div className="max-w-6xl mx-auto mt-12">
      <div>
        <h1 className="text-center capitalize text-3xl">
          <span className="text-primary"> pizza name </span> details
        </h1>
      </div>

      {/* Pizza Detail */}
      <div className="mt-11 mb-10">
        <div className="flex items-start p-2 md:!flex-col md:gap-3">
          <div className="flex-1 border-2 border-red-400 md:w-full">
            <div className="h-[400px] flex items-center justify-center sm:h-[280px]">
              <img
                src={product.image}
                alt="/"
                className="h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 border-2 border-red-400">
            <div className="p-2">
              <h1 className="text-4xl text-primary font-medium sm:text-2xl">
                {product.name}
              </h1>
              <h2 className="mt-[30px] text-3xl text-primary font-medium sm:text-2xl">
                Category: {product.category}
              </h2>
              <h2 className="mt-[30px] text-3xl text-primary font-medium sm:text-2xl">
                ${product.price}.00
              </h2>
              <div className="mt-6 text-base text-primary sm:text-base">
                {product.description}
              </div>

              <div className="mt-7 flex items-center w-full sm:flex-col sm:gap-2">
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="p-2 border-2 border-red-400 outline-none mr-3 sm:w-full sm:ml-3"
                />
                <button
                  className="w-full bg-red-400 text-white p-[10px] capitalize"
                  onClick={() => addToCart()}
                >
                  add to cart
                </button>
              </div>

              <div className="mt-2 invisible lg:mt-0">jfidf</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
