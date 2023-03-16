import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getPizzas } from "../features/pizzas/pizzaSlice";

function FeaturedProducts() {
  const { pizzas } = useSelector((state) => ({ ...state.pizza }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch]);

  return (
    <div className="max-w-6xl mx-auto mt-16">
      <div className="relative mb-14">
        <div className="bg-red-300 h-12 w-12 rounded-full absolute -z-10 -top-1 -left-2 lg:hidden"></div>
        <h2 className="text-3xl uppercase font-medium z-20 lg:text-center sm:!text-3xl">
          <span className="!text-5xl sm:!text-3xl"> f</span>eatured products
        </h2>
      </div>

      <div className="grid grid-cols-4 place-items-center gap-4 mt-12 px-3 lg:grid-cols-2 sm:grid-cols-1">
        {pizzas.length === 0 ? (
          <>
            <h2> No Pizza's Available Now </h2>
          </>
        ) : (
          <>
            {pizzas.map((pizza) => (
              <React.Fragment key={pizza._id}>
                <ProductCard pizza={pizza} />
              </React.Fragment>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default FeaturedProducts;
