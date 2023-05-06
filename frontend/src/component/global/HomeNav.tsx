"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Tasks", href: "/dashboard/home/task" },
  { name: "My Task", href: "/dashboard/home/mytask" },
  { name: "Weekly Timesheet", href: "/dashboard/home/weeklyTimesheet" },
  { name: "Daily Timesheet", href: "/dashboard/home/dailyTimesheet" },
  { name: "Approval", href: "/dashboard/home/approval" },
  { name: "Task status", href: "/dashboard/home/taskStatus" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HomeNav({ children }) {
  const pathname = usePathname();
  return (
    <>
      <div className="min-h-full">
        <div className=" mx-auto ">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className=" sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.href == pathname
                        ? "border-indigo-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    )}
                    aria-current={item.href == pathname ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <main>
            <div className=" mx-auto ">
              <div className="rounded-lg pt-6">{children}</div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
