"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = (data) => {
    console.log(data);
  };
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-xl text-center mb-6">
          Login your account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
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

          <button className="btn w-full bg-slate-800 text-white">Login</button>
        </form>
        <p>
          Don&apos;t have an account?{" "}
          <Link href={"/register"} className="text-red-600">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
