import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Form, Formik, Field } from "formik";
import { BsArrowRight } from "react-icons/bs";
import facility from "../local/facility";
import book from "../local/book";
import { useRouter } from "next/router";
import Map from "./map";
const BookNow = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Take A Look | SHFT-in</title>
        <link rel="icon" href="/Logo.png" />
      </Head>

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
              The harvest city, Sec - 62 faridabad
            </h3>
            <p className="absolute bottom-5 flex items-center lg:text-2xl md:text-xl sm:text-lg   tracking-wider">
              View Directions <BsArrowRight />
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="md:px-12 py-5 md:py-1 tracking-wider">
          <h4 className="  text-2xl">When you’re planning to shift</h4>
          <p className="text-gray-600 py-2">
            Select your date and find out best possible homes{" "}
          </p>
          <Formik
            initialValues={{
              name: "",
              phone: "",
              email: "",
            }}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm();
              router.push("/payment");
            }}
            className=""
          >
            <Form className="bg-white w-full md:w-96 border my-4 shadow-md px-7 py-5 md:py-10 inline-flex flex-col space-y-3 rounded-lg">
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
              {/* City */}
              <div className="flex mb-5 flex-col items-start">
                <label htmlFor="city" className="text-gray-900 tracking-widest">
                  Select your date
                </label>
                <Field
                  name="city"
                  id="city"
                  type="date"
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

      <div className="container mx-auto sm:px-0 px-4">
        {/* About property */}
        <div className=" space-y-2.5 sm:py-5 py-4 pt-0 md:py-7">
          <h3 className="text-2xl md:text-3xl xl:text-4xl tracking-wider font-semibold">
            About the property
          </h3>
          <p className="text-gray-700 text-justify tracking-wider md:text-base text-sm">
            Lorem ipsum dolor sit amet. Ut iusto dicta eum dolor ullam ut
            tenetur Quis sed repellendus velit ab nesciunt magni hic quia odio
            quo veritatis autem. Quo tempora sunt ut veritatis minima et nulla
            aliquam ut maxime sint hic quia voluptatem vel magnam debitis. Ut
            asperiores eveniet in nihil enim rem accusamus ipsum et porro
            dolore. Lorem ipsum dolor sit amet. Ut iusto dicta eum dolor ullam
            ut tenetur Quis sed repellendus velit ab nesciunt magni hic quia
            odio quo veritatis autem. Quo tempora sunt ut veritatis minima et
            nulla aliquam ut maxime sint hic quia voluptatem vel magnam debitis.
            Ut asperiores eveniet in nihil enim rem accusamus ipsum et porro
            dolore. Lorem ipsum dolor sit amet. Ut iusto dicta eum dolor ullam
            ut tenetur Quis sed repellendus velit ab nesciunt magni hic quia
            odio quo veritatis autem. Quo tempora sunt ut veritatis minima et
            nulla aliquam ut maxime sint hic quia voluptatem vel magnam debitis.
            Ut asperiores eveniet in nihil enim rem accusamus ipsum et porro
            dolore.{" "}
          </p>
        </div>
        {/* Address */}
        <div className=" space-y-2.5 sm:py-5 py-4 pt-0 md:py-7">
          <h3 className="text-2xl md:text-3xl xl:text-4xl tracking-wider font-semibold">
            Address
          </h3>
          <p className="text-gray-700 text-justify tracking-wider md:text-base text-sm">
            Lorem ipsum dolor sit amet. , 302100
          </p>
        </div>
        <h3 className="text-2xl py-5 md:text-3xl xl:text-4xl tracking-wider font-semibold">
          Benefits with shft-in properties
        </h3>
      </div>
      <div className="bg-[#fbe86a]">
        <div className="container mx-auto sm:px-0 px-4 py-5">
          <main className="grid lg:grid-cols-4 gap-5 md:grid-cols-3 py-4">
            {book.slice(0, 6).map((f, o) => {
              return (
                <div key={o} className="flex   ">
                  <figure className="w-20 px-2">
                    <Image
                      src="/location.png"
                      width={100}
                      height={100}
                      className="object-cover rounded-full"
                    />
                  </figure>

                  <div className="flex flex-col  px-3">
                    <span className="  tracking-wider font-medium text-lg  lg:text-xl">
                      300m
                    </span>
                    <span className=" py-1 text-gray-800 tracking-wider font-medium text-sm lg:text-base">
                      away from dominos
                    </span>
                  </div>
                </div>
              );
            })}
          </main>
        </div>
      </div>
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

export default BookNow;
