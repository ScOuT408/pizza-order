import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { SearchIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { getPizzas } from "../features/pizzas/pizzaSlice";

function Products() {
  const [filterType, setFilterType] = useState("");
  const [search, setSearch] = useState("");
  const { pizzas } = useSelector((state) => ({ ...state.pizza }));
  const dispatch = useDispatch();

  console.log(filterType);

  useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch]);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-center my-12">
        <h1 className="text-3xl capitalize">
          <span className="text-primary"> available </span> pizza's
        </h1>
      </div>

      {/* Products */}
      <div className="grid grid-cols-3 gap-3 p-3">
        <div className="border border-red-400 shadow-md h-[300px] sticky top-24 md:col-span-3 md:static md:top-0">
          <div className="p-3 relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full relative border border-slate-300 shadow-sm outline-none p-2 rounded-full"
            />
            <SearchIcon className="bg-red-300 absolute right-5 h-8 p-[6px] rounded-full text-slate-100 cursor-pointer" />
          </div>

          {/* Filter Pizzas */}
          <div className="p-2">
            <h2 className="text-xl text-red-400 text-center">
              Filter Types...
            </h2>
            <select
              className="w-full p-2 mt-3 border-[1px] border-slate-200 shadow-sm focus:outline-none rounded-full"
              name="category"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="" disabled>
                please select category
              </option>
              <option value="all">all</option>
              <option value="veg">veg</option>
              <option value="non-veg">non-veg</option>
            </select>
          </div>
        </div>
        <div className="col-span-2 w-full md:col-span-3">
          <div className="grid grid-cols-3 gap-4 w-full 2xl:grid-cols-2 sm:grid-cols-1">
            {pizzas.length === 0 ? (
              <>
                <h2 className="alert"> No Pizza's Available </h2>
              </>
            ) : (
              <>
                {filterType === "all" ? (
                  <>
                    {pizzas.map((pizza, i) => (
                      <React.Fragment key={i}>
                        <ProductCard key={i} pizza={pizza} />
                      </React.Fragment>
                    ))}
                  </>
                ) : (
                  <>
                    {pizzas
                      .filter((obj) => obj.name.toLowerCase().includes(search))
                      .filter((obj) => obj.category.includes(filterType))
                      .map((pizza, index) => (
                        <React.Fragment key={index}>
                          <ProductCard key={index} pizza={pizza} />
                        </React.Fragment>
                      ))}
                  </>
                )}
              </>
            )}

            {/* {pizzas.length === 0 ? (
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
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
