import React, { useState } from "react";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineSearch,
} from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Navbar = () => {
  const location = [
    {
      name: "New Delhi",
    },
    {
      name: "Noida",
    },
    {
      name: "Gurgaon",
    },
    {
      name: "Old Delhi",
    },
    {
      name: "Faridabad",
    },
  ];
  const token = null;

  const [hamb, setHamb] = useState();
  const [loc, setLoc] = useState();
  const menu = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About us",
    },
    {
      path: "/offers",
      name: "Our offers",
    },
    {
      path: "/support",
      name: "Need support?",
    },
  ];
  return (
    <div className="sticky  top-0 z-30 shadow-sm bg-white">
      {/* Main header */}
      <header className="bg-[#F2F2F2]">
        <div className="container mx-auto flex justify-between items-center py-2 sm:px-0 px-5">
          {/* Logo */}
          <Link href="/">
            <figure className="md:w-20 w-16 ">
              <Image
                src="/Logo.png"
                alt="logo"
                width={100}
                height={80}
                className="object-fill"
              />
            </figure>
          </Link>

          {/* Search Box */}
          <section className="border md:flex hidden items-center px-3 h-10 my-auto rounded-md bg-white">
            <div className="tracking-wider relative flex space-x-1 items-center">
              <span onClick={() => setLoc(!loc)} className="cursor-pointer">
                Top locations
              </span>
              {loc ? (
                <AiFillCaretUp className="text-xs cursor-pointer" />
              ) : (
                <AiFillCaretDown className="text-xs cursor-pointer" />
              )}

              <div
                className={
                  loc
                    ? "absolute z-10 top-7 w-44 tracking-wider bg-white left-0 border rounded-sm p-4"
                    : "hidden"
                }
              >
                <h3 className="text-lg pb-2">Top Location</h3>
                {location?.map((loc, i) => {
                  return (
                    <div key={i} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={loc.name}
                        name="location"
                        value={loc.name}
                      />
                      <label
                        htmlFor={loc.name}
                        className="tracking-wider text-gray-600"
                      >
                        {loc.name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex  items-center px-2">
              <input
                type="search"
                placeholder="Explore by location"
                className="tracking-wider lg:w-60 md:w-48 pl-3 outline-none"
              />
              <AiOutlineSearch className="text-xl text-gray-500 cursor-pointer" />
            </div>
          </section>
          {/* About Profile */}
          {token === null ? (
            <div className="md:flex hidden items-center space-x-2 sm:flex-row flex-col">
              <Link href="/login">
                <span className="tracking-wider hover:text-[#f1922e] cursor-pointer font-semibold pr-3 lg:pr-4">
                  Login
                </span>
              </Link>
              <Link href="/signup">
                <span className="tracking-wider hover:text-[#f1922e] cursor-pointer font-semibold pr-3 lg:pr-4">
                  Signup
                </span>
              </Link>
              {/* <figure className="sm:w-12 w-10 h-10 sm:h-12 rounded-full bg- bg-orange-500 p-0.5">
              <Image
                src="/profile.jpg"
                alt="user"
                width={100}
                height={100}
                className="w-full h-full rounded-full object-cover"
              />
            </figure> */}
              {/* <span className="tracking-wider sm:text-base text-sm">
              Manoj Kushwah
            </span> */}
            </div>
          ) : (
            <div className="flex   sm:flex-row flex-col">
              <div className="flex items-center flex-col">
                <figure className=" w-20 h-20 rounded-full bg- bg-gray-100 p-0.5">
                  <Image
                    src="/profile.jpg"
                    alt="user"
                    width={100}
                    height={100}
                    className="w-full h-full rounded-full border object-cover"
                  />
                </figure>
                <span className="tracking-widest text-white font-semibold text-xl">
                  Manoj Kushwah
                </span>
              </div>
            </div>
          )}

          <FiMenu
            onClick={() => setHamb(!hamb)}
            className="md:hidden text-xl font-bold"
          />
          {/* Sidebar */}
          <div
            className={
              hamb
                ? "absolute top-0 p-5 md:hidden h-screen  bg-[rgb(241,146,46,0.99)] sm:w-3/4 w-40 transition-all duration-150  left-0 z-10"
                : "absolute md:hidden top-0 p-5 h-screen  bg-[rgb(241,146,46,0.99)] sm:w-3/4 w-40 transition-all duration-150  -left-full z-10"
            }
          >
            {/* About Profile */}
          </div>
        </div>
      </header>
      {/* Nav-menu */}
      <nav className="container  mx-auto py-2 sm:px-0 px-5 space-x-4 sm:space-x-7">
        {menu.map((menu, i) => {
          return (
            <Link key={i} href={menu.path}>
              <span className="tracking-wider relative py-1.5  menu sm:text-base text-sm cursor-pointer">
                {menu.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
