import React, { useState, useEffect } from "react";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
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
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("shft-in");
    setToken(token);
  }, []);

  const logout = () => {
    localStorage.removeItem("shft-in");
  };

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
            <div className="flex  items-center space-x-2 sm:flex-row flex-col">
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
            <div className="flex items-start flex-col">
              <div className="flex relative items-center flex-col md:flex-row ">
                <figure className="p-0.5 bg-orange-400 w-8 h-8 md:w-10 md:h-10 flex items-center shadow-xl rounded-full mr-2 justify-center  ">
                  <img
                    src="/profile.jpg"
                    alt="user"
                    onClick={() => setHamb(!hamb)}
                    className="rounded-full w-full h-full cursor-pointer  border object-cover"
                  />
                </figure>
                {/* Pop */}
                <div
                  className={
                    hamb
                      ? "bg-white z-10 rounded-tl-lg rounded-b-sm shadow-xl absolute w-36 border-orange-400  top-10 right-8"
                      : "hidden"
                  }
                >
                  <div className="py-1 rounded-tl-lg text-sm bg-orange-400  text-center tracking-widest capitalize">
                    Manoj Kushwah
                  </div>
                  <div
                    onClick={() => {
                      logout();
                      setHamb(!hamb);
                      window.location.reload();
                    }}
                    className="p-3 py-2 flex text-sm items-center cursor-pointer font-semibold bg-white rounded-b-sm"
                  >
                    Log Out <BiLogOut className="text-xl ml-2" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* <FiMenu
            onClick={() => setHamb(!hamb)}
            className="md:hidden text-xl font-bold"
          /> */}
          {/* Sidebar */}
          {/* <div
            className={
              hamb
                ? "absolute top-0 p-5 md:hidden h-screen  bg-[rgb(241,146,46,0.99)] sm:w-3/4 w-40 transition-all duration-150  left-0 z-10"
                : "absolute md:hidden top-0 p-5 h-screen  bg-[rgb(241,146,46,0.99)] sm:w-3/4 w-40 transition-all duration-150  -left-full z-10"
            }
          >
          </div> */}
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
