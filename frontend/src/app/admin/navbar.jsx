'use client'
import React from 'react'

const AdminNavbar = () => {
  return (
    <div>
      <>
  {/* ========== HEADER ========== */}
  <header className="flex flex-wrap sm:justify-start sm:flex-col z-50 w-full bg-white border-b border-gray-200 text-sm pb-2 sm:pb-0 dark:bg-gray-800 dark:border-gray-700">
    {/* Topbar */}
    <div className="max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-end gap-x-5 w-full py-2 sm:pt-2 sm:pb-0">
        <a
          className="inline-flex justify-center items-center gap-2 font-medium text-slate-600 hover:text-slate-500 text-sm dark:text-slate-400 dark:hover:text-slate-300"
          href="#"
        >
          <svg
            className="flex-shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
            <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17" />
            <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
            <circle cx={12} cy={12} r={10} />
          </svg>
          English (US)
        </a>
        <a
          className="inline-flex justify-center items-center gap-2 font-medium text-slate-600 hover:text-slate-500 text-sm dark:text-slate-400 dark:hover:text-slate-300"
          href="/signup"
        >
          Sign In
        </a>
        <a
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          Get started
        </a>
      </div>
    </div>
    {/* End Topbar */}
    <nav
      className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex items-center justify-between">
        <a
          className="flex-none text-xl font-semibold dark:text-white"
          href="#"
          aria-label="Brand"
        >
          Brand
        </a>
        <div className="sm:hidden">
          <button
            type="button"
            className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            data-hs-collapse="#navbar-collapse-with-animation"
            aria-controls="navbar-collapse-with-animation"
            aria-label="Toggle navigation"
          >
            <svg
              className="hs-collapse-open:hidden flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1={3} x2={21} y1={6} y2={6} />
              <line x1={3} x2={21} y1={12} y2={12} />
              <line x1={3} x2={21} y1={18} y2={18} />
            </svg>
            <svg
              className="hs-collapse-open:block hidden flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="navbar-collapse-with-animation"
        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
      >
        <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
          <a
            className="font-medium sm:py-6 text-blue-600"
            href="#"
            aria-current="page"
          >
            Landing
          </a>
          <a
            className="font-medium text-gray-800 hover:text-gray-500 sm:py-6 dark:text-gray-200 dark:hover:text-gray-400"
            href="#"
          >
            Account
          </a>
          <a
            className="font-medium text-gray-800 hover:text-gray-500 sm:py-6 dark:text-gray-200 dark:hover:text-gray-400"
            href="#"
          >
            Work
          </a>
          <a
            className="font-medium text-gray-800 hover:text-gray-500 sm:py-6 dark:text-gray-200 dark:hover:text-gray-400"
            href="#"
          >
            Blog
          </a>
          <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
            <button
              type="button"
              className="flex items-center w-full text-gray-800 hover:text-gray-500 font-medium dark:text-gray-200 dark:hover:text-gray-400"
            >
              Dropdown
              <svg
                className="flex-shrink-0 ms-2 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="About"
              >
                About
              </a>
              <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                <button
                  type="button"
                  className="w-full flex justify-between items-center text-sm text-gray-800 rounded-lg py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Sub Menu
                  <svg
                    className="sm:-rotate-90 flex-shrink-0 ms-2 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-end-5 before:top-0 before:h-full before:w-5 top-0 end-full !mx-[10px]">
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/about"
                  >
                    About
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Downloads
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Team Account
                  </a>
                </div>
              </div>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Downloads
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Team Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  {/* ========== END HEADER ========== */}
</>


    </div>
  )
}

export default AdminNavbar;