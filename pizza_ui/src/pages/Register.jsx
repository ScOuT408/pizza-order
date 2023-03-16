import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../features/users/userSlice";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const { name, email, password, cpassword } = formValues;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((!name, !email, !password, !cpassword)) {
      toast.error("All Fields are required");
    } else if (password !== cpassword) {
      toast.error("Password didn't match");
    } else {
      dispatch(register({ formValues, toast }));
      navigate("/login");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mb-12">
      <div className="mt-10 p-3">
        <form
          className="mt-5 p-4 bg-slate-50 shadow-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-medium mb-3"> Register Now! </h2>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onInputChange}
            placeholder="Enter name"
            className="my-2 p-2 w-full outline-none border border-primary"
          />
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
          <input
            type="password"
            name="cpassword"
            value={cpassword}
            onChange={onInputChange}
            placeholder="Confim Passowrd"
            className="my-2 p-2 w-full outline-none border border-primary"
          />

          <div className="sm:flex sm:flex-col">
            <button className="px-6 inline-block mt-3 py-2 bg-primary text-white capitalize">
              register
            </button>
            <Link
              to="/login"
              className="ml-4 hover:text-primary hover:underline duration-200 sm:ml-0 sm:mt-3"
            >
              already registered?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
