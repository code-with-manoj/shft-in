import React from "react";
import Image from "next/image";
import { Form, Formik, Field } from "formik";
const Payment = () => {
  return (
    <>
      <section className="container grid md:grid-cols-2 mx-auto sm:px-0 px-4 md:py-5">
        {/* 1 */}
        <div className="relative rounded-br-2xl rounded-tl-2xl  md:my-3 h-[50vh] sm:h-[55vh] md:h-[70vh] overflow-hidden">
          <Image
            src="/banner1.jpg"
            width={100}
            layout="responsive"
            height={100}
            className="object-cover  blur-sm opacity-90"
          />
          <div className="w-full bg-[rgb(0,0,0,0.69)]  space-y-7 inline-flex p-5 md:py-20 sm:py-14 py-10  flex-col  text-white absolute top-0 h-full">
            <figure className="md:w-20 w-16">
              <Image
                src="/Logo.png"
                alt="logo"
                width={100}
                height={80}
                className="object-fill"
              />
            </figure>
            <h3 className="md:tracking-wider tracking-wide lg:text-4xl text-3xl sm:text-4xl md:text-3xl font-bold">
              Make Paying Easier With Card
            </h3>
            <p className="flex items-center lg:text-2xl md:text-xl sm:text-lg   tracking-wider">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="md:px-12 py-5 md:py-1 tracking-wider">
          <h4 className="  text-2xl">Your payment details</h4>
          <p className="text-gray-600 py-2">
            Lorem ipsum dolor sit amet. Non doloribus quisquam
          </p>
          <Formik
            initialValues={{
              name: "",
              atm: "",
              email: "",
              query: "",
            }}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm();
            }}
          >
            <Form className="space-y-3">
              {/* Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="py-1 tracking-wider">
                  Your Name
                </label>
                <Field
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="px-2 py-1 tracking-wider outline-none border-gray-700 focus:border-[#f1922e] border rounded-tl-xl rounded-br-xl"
                />
              </div>
              {/* Phone */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="py-1 tracking-wider">
                  Card number
                </label>
                <Field
                  name="atm"
                  id="phone"
                  maxlength="10"
                  type="number"
                  placeholder="contact no."
                  className="px-2 py-1 tracking-wider outline-none border-gray-700 focus:border-[#f1922e] border rounded-tl-xl rounded-br-xl"
                />
              </div>
              <div className="grid grid-cols-2 items-center gap-x-10">
                {/* Expiration date */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="py-1 tracking-wider">
                    Expiration date
                  </label>
                  <Field
                    name="email"
                    id="email"
                    type="month"
                    className="text-gray-800 focus:border-[#f1922e] outline-none w-full border-b tracking-widest border-gray-500"
                  />
                </div>
                {/* CVV */}
                <div className="flex flex-col">
                  <label htmlFor="query" className="py-1 tracking-wider">
                    CVV
                  </label>
                  <Field
                    name="query"
                    id="query"
                    type="tel"
                    maxlength="3"
                    placeholder="..."
                    className="text-gray-800 focus:border-[#f1922e] outline-none w-full border-b tracking-widest border-gray-500"
                  />
                </div>
              </div>
              <button className=" py-1.5 text-white font-medium rounded-full md:px-7 px-7 lg:px-10 mt-2 md:mt-5 lg:mt-7 tracking-wider text-sm md:text-base lg:text-lg bg-[#f1922e]">
                Payment
              </button>
            </Form>
          </Formik>
        </div>
      </section>
    </>
  );
};

export default Payment;
