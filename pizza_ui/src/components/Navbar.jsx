import React, { Fragment, useState } from "react";
import PizzaLogo from "../assets/pizza-logo.png";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Menu, Transition } from "@headlessui/react";
import { logout } from "../features/users/userSlice";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { products } = useSelector((state) => ({ ...state.cart }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <header className="bg-primary w-ful p-3 sticky top-0 left-0 shadow-sm right-0 z-30 md:px-2">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-white lm:text-[15px]">
          {/* image */}
          <div className="sm:hidden">
            <h2 className="bg-white rounded-sm text-primary capitalize p-2">
              order now !
            </h2>
          </div>

          {/* links */}
          <div className="!mr-12">
            <ul className="flex justify-start items-center gap-5 text-lg capitalize lm:text-[15px] lm:gap-2">
              <li>
                <Link to="/" className="!tracking-wider">
                  home
                </Link>
              </li>
              <img
                src={PizzaLogo}
                alt="/"
                width={75}
                height={75}
                className="sm:w-12 sm:h-12 object-cover"
              />
              <li>
                <Link to="/products" className="!tracking-wider">
                  pizza's
                </Link>
              </li>
            </ul>
          </div>

          {/* icons */}
          <div className="relative flex items-center justify-end gap-2">
            {/* <UserIcon
              width={30}
              height={30}
              className="lm:w-[23px] lm:h-[23px] cursor-pointer"
              onClick={() => setShow(!show)}
            /> */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white capitalize bg-opacity-30  px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  {user ? user.name : <UserIcon width={20} />}
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {user ? (
                    <>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "text-black" : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-3 text-sm`}
                            onClick={handleLogout}
                          >
                            Logout
                          </button>
                        )}
                      </Menu.Item>
                    </>
                  ) : (
                    <>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/login">
                            <button
                              className={`${
                                active ? "text-black" : "text-primary"
                              } group flex w-full items-center justify-center rounded-md px-2 py-4 text-lg`}
                              onClick={handleLogout}
                            >
                              Login
                            </button>
                          </Link>
                        )}
                      </Menu.Item>
                    </>
                  )}
                </Menu.Items>
              </Transition>
            </Menu>

            <Link to="/cart">
              <ShoppingCartIcon
                width={30}
                height={30}
                className="lm:w-[23px] lm:h-[23px] cursor-pointer"
              />
            </Link>
            {products && (
              <div className="absolute -right-2 -top-2 w-5 h-5 bg-white rounded-full flex items-center justify-center text-primary">
                {products?.length}
              </div>
            )}
          </div>
        </div>
      </header>
      {/* <CTABox show={show} setShow={setShow} /> */}
    </>
  );
}

export default Navbar;
