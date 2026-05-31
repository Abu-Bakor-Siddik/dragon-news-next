"use client";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-xl text-center mb-6">
          Register your account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              {...register("email", { required: "Email field is required" })}
              type="email"
              className="input"
              placeholder="Type here email"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              {...register("password", {
                required: "password field is required",
              })}
              type="password"
              className="input"
              placeholder="Type here password"
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </fieldset>

          <button className="btn w-full bg-slate-800 text-white">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
