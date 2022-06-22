import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#525252]">
        <div className="container mx-auto sm:px-0 px-4 py-4">
          <figure className="md:w-24 w-20">
            <Image
              src="/Logo.png"
              alt="logo"
              width={100}
              height={80}
              className="object-fill"
            />
          </figure>
          <section className="grid sm:grid-cols-3 grid-cols-1 lg:gap-20 md:gap-10 gap-7 py-2">
            {/* 1 */}
            <p className="text-white md:text-left text-justify  lg:text-base text-sm tracking-wider">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
              massa maecenas in amet malesuada amet. Pellentesque aenean aliquet
              rhoncus rutrum purus. Rutrum facilisis quisque pharetra nunc{" "}
            </p>
            {/* 2 */}
            <div className="flex flex-col sm:pl-8 space-y-1 sm:space-y-0.5 lg:space-y-1.5 text-white">
              <Link href="/about">
                <span className="tracking-wider hover:text-[#f1922e] relative sm:text-base text-sm cursor-pointer">
                  About us
                </span>
              </Link>
              <Link href="/privacy">
                <span className="tracking-wider hover:text-[#f1922e] relative sm:text-base text-sm cursor-pointer">
                  Privacy policy
                </span>
              </Link>{" "}
              <Link href="/refer">
                <span className="tracking-wider hover:text-[#f1922e] relative sm:text-base text-sm cursor-pointer">
                  Refer & earn
                </span>
              </Link>{" "}
              <Link href="/cancellation">
                <span className="tracking-wider hover:text-[#f1922e] relative sm:text-base text-sm cursor-pointer">
                  Cancellation policy
                </span>
              </Link>{" "}
              <Link href="/terms">
                <span className="tracking-wider hover:text-[#f1922e] relative sm:text-base text-sm cursor-pointer">
                  Terms and conditions
                </span>
              </Link>
            </div>
            {/* 3 */}
            <div className="flex sm:pl-8 flex-col">
              <h3 className="text-white text-lg tracking-wider font-medium">
                Connect with us
              </h3>
              <span className="flex space-x-3 py-2">
                <figure className="md:w-8 w-7 ">
                  <Image
                    src="/linkedin.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="object-fill"
                  />
                </figure>
                <figure className="md:w-8 w-7">
                  <Image
                    src="/twitter.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="object-fill"
                  />
                </figure>{" "}
                <figure className="md:w-8 w-7">
                  <Image
                    src="/facebook.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="object-fill"
                  />
                </figure>
              </span>
            </div>
          </section>
          {/* main headlin of footer */}
          <div className="flex  py-2 tracking-wider items-center sm:text-base text-sm text-white">
            <span className="font-bold pr-1 text-lg "> &copy;</span> 2022
            SHFT-IN | All rights reserved.{" "}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
