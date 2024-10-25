"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo1.png";
import { inter } from "@/assets/styles/fonts";
import { useState } from "react";
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <div>
            {/* <nav class="bg-primary border-gray-200 dark:bg-gray-900 text-white  "> */}
            <nav className=" text-white  bg-primary px-4 lg:px-0 flex flex-wrap  items-center justify-between max-w-[1080px] mx-auto py-4 relative before:content-[''] before:bg-primary  before:absolute before:h-full before:w-[200vw] before:left-[-100vw] before:z-[-1]">
                <Link
                    href="/"
                    className="flex flex-1 items-center space-x-3 rtl:space-x-reverse"
                >
                    <Image
                        className=""
                        src={logo}
                        width={40}
                        alt="Picture of the author"
                    />
                    <span
                        className={`self-center text-2xl font-semibold whitespace-nowrap dark:text-white ${inter.className}`}
                    >
                        Bamboo Holistic
                    </span>
                </Link>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                {/* Desktop Menu */}
                <div
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link
                                href="/"
                                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white "
                                aria-current="page"
                            >
                                Trang chủ
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/service"
                                class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Dịch vụ
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Giới thiệu
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Liên hệ
                            </Link>
                        </li>
                    </ul>
                </div>

                {isMobileMenuOpen && (
                    <div
                        className="w-full md:block md:w-auto "
                        id="navbar-default"
                    >
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a
                                    href="/"
                                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white "
                                    aria-current="page"
                                >
                                    Trang chủ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/service"
                                    class="block py-2 px-3  rounded  md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Dịch vụ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    class="block py-2 px-3  rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Giới thiệu
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="block py-2 px-3  rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Liên hệ
                                </a>
                            </li>
                        </ul>
                    </div>
                )}

                <div className="border-2 p-2 border-white ml-8  font-bold  hidden lg:block">
                    <a href="tel:0969856512">ĐT: 096 985 6512</a>
                </div>
            </nav>
            {/* </nav> */}
        </div>
    );
};
export default Navbar;
