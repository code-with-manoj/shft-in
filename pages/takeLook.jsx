import React from "react";
import Head from "next/head";
import Image from "next/image";
import facility from "../local/facility";
import { Form, Formik, Field } from "formik";
import { BsArrowRight } from "react-icons/bs";
import Map from "./map";
const TakeLook = () => {
  return (
    <>
      <Head>
        <title>Take A Look | SHFT-in</title>
      </Head>

      <section className="container grid md:grid-cols-2 mx-auto sm:px-0 px-4 md:py-5">
        {/* 1 */}
        <div className="relative rounded-br-2xl rounded-tl-2xl md:my-3 h-[50vh] sm:h-[55vh] md:h-[75vh] overflow-hidden">
          <Image
            src="/banner1.jpg"
            width={100}
            layout="responsive"
            height={100}
            className="object-cover  blur-sm opacity-90"
          />
          <div className="w-full bg-[rgb(0,0,0,0.69)] space-y-7 inline-flex p-5 md:py-20 sm:py-14 py-10  flex-col  text-white absolute top-0 h-full">
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
              The harvest city, Sec - 62 faridabad
            </h3>
            <p className="absolute bottom-5 flex items-center lg:text-2xl md:text-xl sm:text-lg   tracking-wider">
              View Directions <BsArrowRight />
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="md:px-12 py-5 md:py-1 tracking-wider">
          <h4 className="  text-2xl">Plan to visit</h4>

          <Formik
            initialValues={{
              name: "",
              phone: "",
              email: "",
            }}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm();
            }}
            className=""
          >
            <Form className="bg-white w-full md:w-96 border my-4 shadow-xl px-7 py-5 md:py-10 inline-flex flex-col space-y-3 rounded-lg">
              {/* Name */}
              <div className="flex flex-col items-start">
                <label htmlFor="name" className="text-gray-900 tracking-widest">
                  Name*
                </label>
                <Field
                  placeholder=""
                  name="name"
                  id="name"
                  className="text-gray-800 focus:border-[#f1922e] outline-none w-full border-b tracking-widest border-gray-500"
                />
              </div>
              {/* Email */}
              <div className="flex flex-col items-start">
                <label
                  htmlFor="email"
                  className="text-gray-900 tracking-widest"
                >
                  Email*
                </label>
                <Field
                  placeholder=""
                  name="email"
                  id="email"
                  type="email"
                  className="text-gray-800 focus:border-[#f1922e] outline-none w-full border-b tracking-widest border-gray-500"
                />
              </div>
              {/* Phone no* */}
              <div className="flex  flex-col items-start">
                <label
                  htmlFor="Phone no*"
                  className="text-gray-900 tracking-widest"
                >
                  Phone no*
                </label>
                <Field
                  placeholder=""
                  name="phone"
                  id="Phone no*"
                  type="tel"
                  maxlength="10"
                  className="text-gray-800 w-full focus:border-[#f1922e] outline-none border-b tracking-widest border-gray-500"
                />
              </div>
              {/* Date of visit */}
              <div className="flex mb-5 flex-col items-start">
                <label htmlFor="city" className="text-gray-900 tracking-widest">
                  Date of visit
                </label>
                <Field
                  name="city"
                  id="city"
                  type="date"
                  className="text-gray-800 appearance-none focus:border-[#f1922e] outline-none border-b w-full tracking-widest border-gray-500"
                />
              </div>
              {/*Time schedule*/}
              <div className="flex mb-5 flex-col items-start">
                <label htmlFor="time" className="text-gray-900 tracking-widest">
                  Time schedule
                </label>
                <Field
                  name="city"
                  id="time"
                  type="time"
                  className="text-gray-800 appearance-none focus:border-[#f1922e] outline-none border-b w-full tracking-widest border-gray-500"
                />
              </div>
              <Field
                type="submit"
                value="Submit"
                className="bg-[#f1922e] text-white py-1.5 font-medium cursor-pointer tracking-widest rounded-full my-5"
              />
            </Form>
          </Formik>
        </div>
      </section>

      {/* Services include in rent */}
      <div className="container mx-auto sm:px-0 px-4 py-5">
        <h4 className="text-2xl md:text-3xl xl:text-4xl py-3 tracking-wider font-semibold">
          Rent include amenities
        </h4>
        <main className="grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 my-4 md:gap-y-10 sm:gap-y-8 gap-y-6">
          {facility.slice(0, 8).map((f, o) => {
            return (
              <div key={o} className="flex flex-col py-2 items-center">
                <figure className="w-14 sm:w-16 md:w-20 lg:w-24">
                  <Image src={f.img} width={100} height={100} />
                </figure>
                <span className="text-center tracking-wider font-medium md:text-base text-sm lg:text-lg">
                  {f.title}
                </span>
              </div>
            );
          })}
        </main>
        <div className="flex w-full justify-center">
          <button className="md:py-2 py-1 border border-[#f1922e] hover:text-white  rounded-full md:px-5 px-4 lg:px-7 mt-2 md:mt-3 lg:mt-3 text-[#f1922e] tracking-widest font-semibold text-sm md:text-base lg:text-lg hover:bg-[#f1922e]">
            View All
          </button>
        </div>
      </div>

      {/* Map */}
      <div className="container mx-auto sm:px-0 px-4 py-5">
        <h4 className="text-2xl md:text-3xl xl:text-4xl  tracking-wider font-semibold">
          Where it is ?
        </h4>
      </div>
      <div className="my-1">
        <Map />
      </div>
    </>
  );
};

export default TakeLook;
