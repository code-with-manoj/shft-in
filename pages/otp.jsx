import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";
const Otp = () => {
  const router = useRouter();
  return (
    <>
      <section className="absolute h-screen z-50 flex justify-center items-center w-full top-0 bottom-0 bg-white">
        <div className="bg-white container mx-auto flex items-center rounded-md py-5 sm:px-0 px-4 ">
          <figure className="w-1/2 hidden md:flex pr-8">
            <img src="/Logo.png" alt="-Signup-form" className="w-full" />
          </figure>
          {/* Content */}
          <div className="md:w-1/2 w-full lg:flex flex-col ">
            <p className="text-2xl pr-5  text-gray-900 font-semibold  tracking-wider">
              Enter the OTP code from the phone we just sent you!
            </p>

            {/* Form to login */}
            <Formik
              initialValues={{
                first: "",
                second: "",
                third: "",
                fourth: "",
              }}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm();
                router.push("/");
              }}
            >
              <Form className="mb-5">
                <div className="py-7 flex space-x-5">
                  <Field
                    name="first"
                    type="tel"
                    placeholder="0"
                    maxlength="1"
                    className="tracking-wider  text-xl pl-4 flex justify-center items-center  border-2 w-12 h-12 rounded-full border-blue-600 outline-none "
                  />
                  <Field
                    name="second"
                    type="tel"
                    placeholder="0"
                    maxlength="1"
                    className="tracking-wider  text-xl pl-4 flex justify-center items-center  border-2 w-12 h-12 rounded-full border-blue-600 outline-none "
                  />{" "}
                  <Field
                    name="third"
                    type="tel"
                    placeholder="0"
                    maxlength="1"
                    className="tracking-wider  text-xl pl-4 flex justify-center items-center  border-2 w-12 h-12 rounded-full border-blue-600 outline-none "
                  />{" "}
                  <Field
                    name="fourth"
                    type="tel"
                    placeholder="0"
                    maxlength="1"
                    className="tracking-wider  text-xl pl-4 flex justify-center items-center  border-2 w-12 h-12 rounded-full border-blue-600 outline-none "
                  />{" "}
                </div>
                <button className="md:py-2 mx-auto sm:col-span-2  py-1 rounded-full md:px-20   font-semibold px-20 lg:px-24 tracking-widest text-white text-lg bg-[#f1922e]">
                  Submit
                </button>
              </Form>
            </Formik>

            {/* Signup link */}
            <span className="tracking-wider text-gray-500 ">
              Don’t have an account?{" "}
              <span className="text-blue-600 font-semibold cursor-pointer">
                Resend
              </span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Otp;
