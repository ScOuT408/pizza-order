import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/users/userSlice";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const { error } = useSelector((state) => state.user);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formValues;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email && !password) {
      toast.error("Please Enter Details");
    } else {
      dispatch(login({ formValues, navigate }));
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      localStorage.getItem("user");
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="max-w-2xl mx-auto mb-12">
      <div className="mt-10 p-3">
        <form className="mt-5 p-4 bg-slate-50 shadow-md" onSubmit={handleLogin}>
          <h2 className="text-2xl font-medium mb-3"> Welcome Back Now! </h2>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onInputChange}
            placeholder="Enter email"
            className="my-2 p-2 w-full outline-none border border-primary"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={onInputChange}
            placeholder="Enter password"
            className="my-2 p-2 w-full outline-none border border-primary"
          />

          <div className="sm:flex sm:flex-col">
            <button className="px-6 inline-block mt-3 py-2 bg-primary text-white capitalize">
              login
            </button>
            <Link
              to="/register"
              className="ml-4 hover:text-primary hover:underline duration-200 sm:ml-0 sm:mt-3"
            >
              not registered yet?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
