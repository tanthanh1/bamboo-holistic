"use client";
import { useState } from "react";
import Image from "next/image";
import tel from "@/assets/images/tel.png";
import email from "@/assets/images/email.png";
import address from "@/assets/images/address.png";
import map from "@/assets/images/map.jpg";

const ContactPage = () => {
    return (
        <div className="bg-secondary py-10">
            <div className="bg-white flex flex-col lg:flex-row max-w-[1080px] mx-auto gap-16 p-6 ">
                <div className="flex-1 ">
                    <form
                        action="/api"
                        method="POST"
                        encType="multipart/form-data"
                        className=""
                    >
                        <div class="mb-5">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Họ tên"
                                required
                            />
                        </div>

                        <div class="mb-5">
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Số điện thoại"
                                required
                            />
                        </div>
                        <div class="mb-5">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div class="mb-5">
                            <textarea
                                id="content"
                                name="content"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Vấn đề thắc mắc"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Gửi tin nhắn
                        </button>
                    </form>
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl font-bold">
                        Cần giải đáp thắc mắc?
                    </h2>
                    <p className="mt-2">
                        Bạn đang quan tâm đến việc cải thiện sức khỏe xương
                        khớp, hoặc bạn có vấn đề cần được tư vấn cho bản thân
                        (người thân/bạn bè)? Hãy gọi ngay cho chúng tôi hoặc để
                        lại tin nhắn(email)!
                    </p>

                    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                    <div className="flex gap-2">
                        <Image className="" src={tel} alt="tel" width={50} />
                        <p className="content-center text-base">096 985 6512</p>
                    </div>
                    <div className="flex gap-2">
                        <Image className="" src={email} alt="tel" width={50} />
                        <p className="content-center text-base">
                            holisticbamboo@gmail.com
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Image
                            className=""
                            src={address}
                            alt="tel"
                            width={50}
                        />
                        <p className="content-center text-base">
                            541/46A Huỳnh Văn Bánh, P13, Q. Phú Nhuận, TP.HCM
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white max-w-[1080px] mx-auto mt-6 p-4">
                <Image className="" src={map} alt="tel" />
            </div>
        </div>
    );
};
export default ContactPage;
