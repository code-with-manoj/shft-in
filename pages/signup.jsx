import { Formik, Form, Field } from "formik";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Baseurl from "./Baseurl";
import axios from "axios";

const Signup = () => {
  const router = useRouter();
  // Sign-up
  const signup = (data) => {
    let url = `${Baseurl()}sign-up`;
    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
        router.push("/");
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
            <img src="/Logo.png" alt="Signup-form" className="w-full" />
          </figure>
          {/* Content */}
          <div className="md:w-1/2 w-full lg:flex flex-col ">
            <div className=" py-3 text-left text-3xl lg:text-5xl font-bold tracking-wider  form-head">
              Welcome Back!
            </div>
            <p className="lg:text-lg text-base text-gray-500 tracking-wider">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
            {/* Form */}
            <Formik
              initialValues={{
                username: "",
                phone: "",
                email: "",
                password: "",
              }}
              onSubmit={(values, { resetForm }) => {
                signup(values);
                resetForm();
              }}
            >
              <Form className="grid sm:grid-cols-2 gap-x-8 gap-y-4 py-8">
                {/*name */}
                <div className="flex flex-col space-y-1 ">
                  <label
                    htmlFor="username"
                    className="tracking-wider capitalize text-gray-600 font-medium"
                  >
                    Name
                  </label>
                  <Field
                    id="username"
                    name="username"
                    type="text"
                    placeholder="username"
                    className="tracking-wider p-1 px-2 border-2 border-gray-300 outline-none rounded-md"
                  />
                </div>
                {/* Phone */}
                <div className="flex flex-col space-y-1 ">
                  <label
                    htmlFor="phone"
                    className="tracking-wider capitalize text-gray-600 font-medium"
                  >
                    Phone
                  </label>
                  <Field
                    id="phone"
                    name="phone"
                    type="tel"
                    maxLength={10}
                    placeholder="Phone"
                    className="tracking-wider p-1 px-2 border-2 border-gray-300 outline-none rounded-md"
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col space-y-1 ">
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
                    className="tracking-wider p-1 px-2 border-2 border-gray-300 outline-none rounded-md"
                  />
                </div>
                {/* password */}
                <div className="flex flex-col space-y-1 ">
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
                    className="tracking-wider p-1 px-2 border-2 border-gray-300 outline-none rounded-md"
                  />
                </div>
                <button className="md:py-2 sm:col-span-2 mx-auto py-1 rounded-full md:px-20 px-20 lg:px-24 mt-2 font-semibold md:mt-3 lg:mt-3 tracking-widest text-white text-lg bg-[#f1922e]">
                  Create
                </button>
              </Form>
            </Formik>
            <p className="md:px-4 py-5 md:text-base text-sm text-center text-gray-500 tracking-wider">
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

export default Signup;
