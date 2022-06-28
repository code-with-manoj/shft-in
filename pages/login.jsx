import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Formik, Form, Field } from "formik";
import Router from "next/router";
import Baseurl from "./Baseurl";
import axios from "axios";
const Login = () => {
  // const router = useRouter();
  // Sign-in
  const signin = (data) => {
    let url = `${Baseurl()}`;
    axios
      .post(url, data)
      .then((res) => {
        // console.log(res.data.Token);
        localStorage.setItem("shft-in", res.data.Token);
        Router.push("/", { state: res });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <section className="absolute h-screen z-50 flex justify-center items-center w-full top-0 bottom-0 bg-white">
        <div className="bg-white container mx-auto flex items-center rounded-md py-5 sm:px-0 px-4 ">
          <figure className="w-1/2 hidden md:flex pr-8">
            <img src="/Logo.png" alt="-Signup-form" className="w-full" />
          </figure>
          {/* Content */}
          <div className="md:w-1/2 w-full lg:flex flex-col ">
            <div className=" py-3 text-left text-3xl lg:text-5xl font-bold tracking-wider  form-head">
              Welcome Back!
            </div>
            <p className="lg:text-lg text-base text-gray-500  tracking-wider">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
            <span className="py-4 tracking-wider text-gray-700 ">
              Signin with Email
            </span>
            {/* Form to login */}
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(values, { resetForm }) => {
                // console.log(values);
                signin(values);
                resetForm();
              }}
            >
              <Form>
                <div className="flex flex-col space-y-1 my-5 ">
                  <label
                    htmlFor="email"
                    className="tracking-wider capitalize text-gray-600 font-medium"
                  >
                    Email
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="abc@gmail.com"
                    className="tracking-wider p-1 px-2 border-2 max-w-sm border-gray-300 outline-none rounded-md"
                  />{" "}
                </div>
                <div className="flex flex-col space-y-1 my-5 ">
                  <label
                    htmlFor="password"
                    className="tracking-wider capitalize text-gray-600 font-medium"
                  >
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="password"
                    className="tracking-wider p-1 px-2 border-2 max-w-sm border-gray-300 outline-none rounded-md"
                  />{" "}
                </div>
                <Field
                  type="submit"
                  value="SignIn"
                  className="md:py-2 mx-auto sm:col-span-2  py-1 rounded-full md:px-20   font-semibold px-20 lg:px-24 tracking-widest text-white text-lg bg-[#f1922e]"
                />
              </Form>
            </Formik>
            <p className="tracking-wider text-gray-700 font-medium py-5 pl-16">
              Or continue with
            </p>

            {/* Social icons */}
            <div className="flex pl-14">
              <span className="mx-2">
                <Image src="/google.png" width="35" height="35" />
              </span>
              <span className="mx-2">
                <Image src="/fb.png" width="35" height="35" />
              </span>
              <span className="mx-2">
                <Image src="/tw.png" width="35" height="35" />
              </span>
            </div>
            {/* Signup link */}
            <span className="tracking-wider py-2 text-gray-500 pl-5">
              Don’t have an account?{" "}
              <Link href="signup">
                <span className="text-blue-600 font-semibold cursor-pointer">
                  {" "}
                  Sign Up
                </span>
              </Link>
            </span>
            <p className=" py-3 md:text-base text-sm  text-gray-500 tracking-wider">
              By signing up you have agreed to our{" "}
              <Link href="/">
                <span className="text-[#f1922e] cursor-pointer px-1">
                  TERMS OF USE
                </span>
              </Link>
              &
              <Link href="/privacy">
                <span className="text-[#f1922e] cursor-pointer px-1">
                  PRIVACY POLICY
                </span>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
