import React from "react";
import Head from "next/head";
import Image from "next/image";
import book from "../local/book";
const about = () => {
  const brands = [
    {
      img: "/dell.png",
    },
    {
      img: "/mc.png",
    },
    {
      img: "/dot.png",
    },
    {
      img: "/canon.png",
    },
    {
      img: "/micro.png",
    },
    {
      img: "/amazon.png",
    },
    {
      img: "/netflix.png",
    },
    {
      img: "/razer.png",
    },
  ];
  const founders = [
    {
      img: "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Tony Stark",
      title: "Founder, shft in ",
      desc: "Ex - Lehman Brothers, The Carlyle Group, Starwood Capital, Deloitte",
    },
    {
      img: "https://images.unsplash.com/photo-1567784177951-6fa58317e16b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Steve Rojers",
      title: "Founder, shft in ",
      desc: "Ex - Lehman Brothers, The Carlyle Group, Starwood Capital, Deloitte",
    },
    {
      img: "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Chris Hamsverth",
      title: "Founder, shft in ",
      desc: "Ex - Lehman Brothers, The Carlyle Group, Starwood Capital, Deloitte",
    },
    {
      img: "https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "Black Widow",
      title: "Founder, shft in ",
      desc: "Ex - Lehman Brothers, The Carlyle Group, Starwood Capital, Deloitte",
    },
  ];

  return (
    <>
      <Head>
        <title>About us | SHFT-in </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      {/* Carousel- Hero */}
      <div className="relative my-1.5 md:my-3 h-[50vh] sm:h-[55vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/about.jpg"
          width={100}
          layout="responsive"
          height={100}
          className="object-cover blur-sm opacity-90"
        />
        <div className="w-full bg-[rgb(0,0,0,0.49)] text-center flex flex-col justify-center items-center text-white absolute top-0 h-full">
          <h3 className="md:tracking-wider tracking-wide lg:text-6xl text-3xl sm:text-4xl md:text-5xl font-bold">
            Loreum ipsum dolor sit amet
          </h3>
          <p className="lg:text-xl md:text-lg sm:text-base text-sm md:py-3 py-2 lg:py-5 tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      {/* Vision and mission  */}
      <section className="container mx-auto sm:px-0 pt-5 px-4">
        <main className="grid md:grid-cols-2 grid-cols-1 md:mt-4   ">
          <div className="md:px-5 ">
            <h4 className="text-2xl md:text-3xl xl:text-4xl py-3 tracking-wider font-semibold">
              Vision and mission
            </h4>
            <p className="text-justify md:text-base text-sm tracking-wider text-gray-700">
              Lorem ipsum dolor sit amet. Et galisum voluptatem qui nulla animi
              ut voluptates esse eos minima error eos quidem accusamus. Lorem
              ipsum dolor sit amet. Et galisum voluptatem qui nulla animi ut
              voluptates esse eos minima error eos quidem accusamus. Lorem ipsum
              dolor sit amet. Et galisum voluptatem qui nulla animi ut
              voluptates esse eos minima error eos quidem accusamus. Lorem ipsum
              dolor sit amet. Et galisum voluptatem qui nulla animi ut
              voluptates esse eos minima error eos quidem accusamus. rror eos
              quidem accusamus. Lorem ipsum dolor sit amet. Et galisum
              voluptatem qui nulla animi ut voluptates esse eos minima error eos
              quidem accusamusrror eos quidem accusamus. Lorem ipsum dolor sit
              amet. Et galisum voluptatem qui nulla animi ut voluptates esse eos
              minima error eos quidem accusamus Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Placeat, quas minus. Aut deleniti
              sit animi, obcaecati excepturi eaque fuga delectus. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Reiciendis ut
              possimus fuga unde velit, nihil sit nisi nobis in, iusto
              cupiditate praesentium iure. Deserunt et corporis minus nesciunt
              architecto est!
            </p>
          </div>
          <figure className="md:h-4/5 px-5 md:flex hidden relative">
            <img src="/about1.png" className="w-full h-full" />
          </figure>
        </main>
      </section>
      {/* Our Partners */}
      <section className="container mx-auto sm:px-0 pb-5 px-4">
        <h4 className="text-2xl md:text-3xl xl:text-4xl py-3 tracking-wider font-semibold">
          Our branding partners
        </h4>
        <main className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-3 my-4 md:gap-y-10 sm:gap-y-8 gap-y-6">
          {brands.map((f, o) => {
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
      </section>
      {/* Founders and Co-founder */}
      <section className="container mx-auto sm:px-0 py-5 px-4">
        <h4 className="text-2xl md:text-3xl xl:text-4xl py-3 tracking-wider font-semibold">
          Founders and Co-founder
        </h4>
        <main className="grid lg:grid-cols-4 md:grid-cols-2  md:gap-12 sm:gap-7 gap-5 lg:gap-10 md:px-10 sm:px-20 px-4 lg:px-4 py-9">
          {founders.map((f, o) => {
            return (
              <div
                key={o}
                className="flex box-shadow  rounded-2xl flex-col py-4 items-center"
              >
                <div className="flex flex-col items-center p-3">
                  <figure className="w-16 h-16 p-0.5 bg-[#f1922e] rounded-full sm:h-20 sm:w-20 md:w-20 md:h-20 ">
                    <Image
                      src={f.img}
                      width={100}
                      height={100}
                      className="object-cover rounded-full"
                    />
                  </figure>
                  <span className="text-center  pt-1 tracking-wider font-medium text-lg  lg:text-xl">
                    {f.name}
                  </span>
                  <span className="text-center py-1 text-blue-500 tracking-wider font-medium md:text-base text-sm lg:text-base">
                    {f.title}
                  </span>
                </div>
                <div className="border-t w-full mt-1 tracking-wide border-gray-700 p-3">
                  {f.desc}
                </div>
              </div>
            );
          })}
        </main>
      </section>
      {/* Why book with us ? */}
      <section className="container mx-auto sm:px-0 py-5 px-4">
        <h4 className="text-2xl md:text-3xl xl:text-4xl py-3 tracking-wider font-semibold">
          Why book with us ?
        </h4>
        <main className="grid lg:grid-cols-2 md:grid-cols-2  md:gap-x-12 sm:gax-7 gap-5 lg:gap-x-10  py-9">
          {book.map((f, o) => {
            return (
              <div key={o} className="flex   ">
                <figure className="w-20 px-2">
                  <Image
                    src="/eye.png"
                    width={100}
                    height={100}
                    className="object-cover rounded-full"
                  />
                </figure>

                <div className="flex flex-col  px-3">
                  <span className="  tracking-wider font-medium text-lg  lg:text-xl">
                    {f.que}
                  </span>
                  <span className=" py-1 text-gray-500 tracking-wider font-medium text-sm lg:text-base">
                    {f.title}
                  </span>
                </div>
              </div>
            );
          })}
        </main>
      </section>
    </>
  );
};

export default about;
