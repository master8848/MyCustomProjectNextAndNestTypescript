"use client";
import React from "react";

import { AiFillHome, AiFillPieChart } from "react-icons/ai";
import { SiReadme } from "react-icons/si";
import { BsFillGearFill } from "react-icons/bs";

import { usePathname, useRouter } from "next/navigation";

const navigation = [
  {
    name: "Home",
    href: "/dashboard/home/mytask",
    icon: AiFillHome,
    link: "/dashboard/home/",
  },
  {
    name: "Admistrative",
    href: "/dashboard/admistrative/client",
    link: "/dashboard/admistrative/",
    icon: SiReadme,
  },
  {
    name: "Report",
    href: "/dashboard/report",
    link: "/dashboard/report",
    icon: AiFillPieChart,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    link: "/dashboard/settings",
    icon: BsFillGearFill,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <div className="h-full lg:flex hidden ">
        <div className="flex lg:flex-shrink-0">
          <div className="flex flex-col ">
            <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-900-text.svg"
                    alt="Workflow"
                  />
                </div>
                <nav className="mt-5 flex-1" aria-label="Sidebar">
                  <div className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          pathname.includes(item.link)
                            ? "bg-gray-200 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            pathname.includes(item.link)
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-3 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                <a href="#" className="flex-shrink-0 w-full group block">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="inline-block h-9 w-9 rounded-full"
                        src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                        Whitney Francis
                      </p>
                      <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                        View profile
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div className="flex-1 relative z-0 flex overflow-hidden">
            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
              <div className="absolute inset-0 ">
                <div className="h-full  rounded-lg px-4">{children}</div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <section className="bg-white dark:bg-gray-900 lg:hidden">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          <div className="wf-ull lg:w-1/2">
            <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
              Please use Desktop
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Unsupported device
            </h1>

            <div className="flex items-center mt-6 gap-x-3">
              <button
                onClick={(ev) => {
                  ev.preventDefault();
                  router.back();
                }}
                className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>

                <span>Go back</span>
              </button>
            </div>
          </div>

          <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0"></div>
        </div>
      </section>
    </>
  );
}
