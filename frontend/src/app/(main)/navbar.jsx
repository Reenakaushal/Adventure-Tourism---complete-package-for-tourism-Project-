'use client'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="fixed z-10 w-full bg-white dark:bg-transparent md:absolute md:bg-transparent">
      <div className="container m-auto px-2 md:px-12 lg:px-7">
        <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
          <input
            type="checkbox"
            name="toggle_nav"
            id="toggle_nav"
            className="peer hidden"
          />
          <div className="w-full px-6 flex justify-between lg:w-max md:px-0 z-30">
            <a href="#" aria-label="logo" className="flex space-x-2 items-center">
             
              <span className="text-2xl font-bold text-yellow-900 dark:text-white">
                ADVANTURE{" "}
                <span className="text-yellow-700 dark:text-yellow-300">
                  PACKAGES
                </span>
              </span>
            </a>
            <div className="flex items-center lg:hidden max-h-10">
              <label
                role="button"
                htmlFor="toggle_nav"
                aria-label="humburger"
                id="hamburger"
                className="relative w-10 h-auto p-2"
              >
                <div
                  id="line"
                  className="m-auto h-0.5 w-6 rounded bg-yellow-900 dark:bg-white transition duration-300"
                />
                <div
                  id="line2"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-yellow-900 dark:bg-white transition duration-300"
                ></div>
              </label>
            </div>
          </div>
          <label
            role="button"
            htmlFor="toggle_nav"
            className="hidden peer-checked:block fixed w-full h-full left-0 top-0 z-10 bg-yellow-200 dark:bg-black dark:bg-opacity-80 bg-opacity-30 backdrop-blur backdrop-filter"
          />
          <div className="hidden peer-checked:flex w-full flex-col lg:flex lg:flex-row justify-end z-30 items-center gap-y-6 p-6 rounded-xl bg-white dark:bg-gray-900 lg:gap-y-0 lg:p-0 md:flex-nowrap lg:bg-transparent lg:w-7/12">
            <div className="text-gray-600 lg:pr-4 w-full">
              <ul
                className="tracking-wide font-medium  text-sm 
                    flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row w-full"
              >
                 <li>
                  <a
                    href="/Home"
                    className="block md:px-4 transition dark:text-gray-300 dark:hover:text-yellow-300 hover:text-yellow-700"
                  >
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/Destination"
                    className="block md:px-4 transition dark:text-gray-300 dark:hover:text-yellow-300 hover:text-yellow-700"
                  >
                    <span>Destination</span>
                    


                  </a>
                </li>
                <li>
                  <a
                    href="Hotel"
                    className="block md:px-4 transition dark:text-gray-300 dark:hover:text-yellow-300 hover:text-yellow-700"
                  >
                    <span>HOTELS </span>
                  </a>
                </li>
                <li>
                  <a
                    href="thinktodo"
                    className="block md:px-4 transition dark:text-gray-300 dark:hover:text-yellow-300 hover:text-yellow-700"
                  >
                    <span>THINK TO DO</span>
                  </a>
                </li>
                <li>
                  <a
                    href="packages"
                    className="block md:px-4 transition dark:text-gray-300 dark:hover:text-yellow-300 hover:text-yellow-700"
                  >
                    <span>PACKAGES</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div
              className="w-full min-w-max space-y-2 
                border-yellow-200 lg:space-y-0 sm:w-max lg:border-l dark:lg:border-gray-700"
            >
            <button
                type="button"
                title="Start buying"
                className="w-full py-3 px-6 text-center rounded-full transition active:bg-yellow-200 dark:active:bg-gray-700 dark:focus:bg-gray-800 focus:bg-yellow-100 sm:w-max"
              >
                <span className="block text-yellow-800 dark:text-white font-semibold text-sm">
                  Sign up
                </span>
              </button>
            
              <button
                type="button"
                title="Start buying"
                className="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
              >
                <span className="block text-yellow-900 font-semibold text-sm">
                  Login
                </span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </nav>
    <div className="relative bg-yellow-50 dark:bg-gray-900">
      <div className="container m-auto px-6 pt-32 m:px-12 lg:pt-[4.8rem] lg:px-7">
        <div className="flex items-center flex-wrap px-2 ms:px-0">
        <div className="ml-auto -mb-14 lg:-mx-2 lg:w-4/12">
            <img
              src="ad.png"
              className="relative w-full h-auto"
              alt="food illustration"
              loading="lazy"
              tyle = {{margin:125, height:200,}}
            />
          </div>
          <div className="relative lg:w-6/12 lg:-mx-2 gap-y-4 lg:py-24 xl:py-32" style = {{margin:125}} >
            
            <h1 className="font-bold text-4xl text-yellow-900 dark:text-yellow-50 md:text-5xl  lg:w-10/12">
            Adventure Tourism Complete Package For Tourism
            </h1>
            <form action="" className="w-full mt-12">
              <div className="relative flex p-1 rounded-full bg-white dark:bg-gray-800 dark:border-gray-600 border border-yellow-200 shadow-md md:p-2">
                <div
                  id="categories"
                  className="hidden p-3 rounded-full bg-transparent w-80 relative md:p-4 md:flex justify-between items-center select-none"
                >
                  <input
                    type="text"
                    name="catName"
                    id="catName"
                    defaultValue="Places"
                    className="pl-3 w-full bg-white text-base font-medium cursor-pointer dark:bg-transparent dark:text-gray-50"
                    readOnly=""
                  />
                  <input
                    type="checkbox"
                    name="toggleLstCat"
                    id="toggleLstCat"
                    className="peer hidden outline-none"
                  />
                  <label
                    role="button"
                    htmlFor="toggleLstCat"
                    className="absolute top-0 left-0 w-full h-full"
                  />
                  <span className="min-w-max">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-gray-700 dark:fill-gray-200"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div
                    id="categorieLst"
                    className="absolute transition-all duration-500 ease-in-out translate-y-10 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-y-1 top-full left-0 w-full bg-white border border-yellow-200 shadow-md rounded-lg py-2"
                  >
                    <ul className="flex flex-col w-full">
                      <li className="cursor-pointer transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">
                        Delhi
                      </li>
                      <li className="cursor-pointer transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">
                        Ladakh
                      </li>
                      <li className="cursor-pointer transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">
                        Manali
                      </li>
                      <li className="cursor-pointer transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">
                        Pune
                      </li>
                      <li className="cursor-pointer transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">
                        Jaiypur
                      </li>
                    </ul>
                  </div>
                </div>
                <input
                  placeholder="Enter your place"
                  className="w-full p-4 rounded-full outline-none bg-transparent dark:text-white dark:placeholder-gray-300"
                  type="text"
                />
                <button
                  type="button"
                  title="Start buying"
                  className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12"
                >
                  <span className="hidden text-yellow-900 font-semibold md:block">
                    Search
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 mx-auto text-yellow-900 md:hidden"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </div>
            </form>
            <p className="mt-8 text-gray-700 dark:text-gray-200 lg:w-10/12">
              Sit amet consectetur adipisicing elit.{" "}
              <a href="#" className="text-yellow-700 dark:text-yellow-300">
                connection
              </a>{" "}
              It's no secret that travel blogging is one of the most popular types of digital content. So if you're starting a new blog, or are looking for fresh ideas to refresh your current ones.
            </p>
          </div>
        
        </div>
      </div>
    </div>
  </>
  )  
}

export default Navbar