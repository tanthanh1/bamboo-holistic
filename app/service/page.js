import Image from "next/image";
import image1 from "@/assets/images/daucovaigay.jpg";
import image2 from "@/assets/images/thoaihoacotsong.jpg";
import image3 from "@/assets/images/dauthankinhtoa.jpg";
import image4 from "@/assets/images/thoatvidiadem.jpg";
import image5 from "@/assets/images/chanthuongthethao.jpg";
import image6 from "@/assets/images/viemdaucackhop.jpg";
import Link from "next/link";
const page = () => {
    return (
        <div>
            <div className="bg-primary text-white  mx-auto pt-8 pb-10 relative before:content-[''] before:bg-primary  before:absolute before:h-full before:w-[200vw] before:left-[-100vw] before:z-[-1] before:top-0">
                <h1 className="text-center text-2xl font-bold">
                    Danh mục trị liệu
                </h1>
            </div>
            <div className="bg-secondary relative before:content-[''] before:bg-secondary  before:absolute before:h-full before:w-[200vw] before:left-[-100vw] before:z-[-1] ">
                <div className="max-w-[1080px]  mx-auto py-8 ">
                    <h2 className="text-xl font-bold text-center">
                        Điều trị tận gốc các vấn đề xương khớp
                    </h2>
                    <p className="text-center mt-2 mb-8">
                        Với niềm đam mê trong việc mang lại sức khoẻ cho mọi
                        người, Bamboo Holistic luôn tối ưu hoá việc trị liệu
                        bằng cách tìm ra nguồn gốc vấn đề, ưu tiên áp dụng các
                        phương pháp trị liệu tự nhiên an toàn, hiệu quả nhất.
                    </p>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-20 ">
                        <div className="flex flex-col border-b-2 pb-8 lg:border-b-0 lg:pb-0">
                            <div>
                                <Image
                                    className="mx-auto lg:mx-0"
                                    src={image1}
                                    alt="Dau co vai gay"
                                />
                            </div>
                            <div className="flex-grow">
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <p className="text-center p-2 font-bold">
                                            Đau cổ vai gáy
                                        </p>
                                        <p>
                                            Đau vai gáy là tình trạng cơ vùng
                                            vai gáy co cứng, gây đau đớn và hạn
                                            chế vận động khi quay cổ hay quay
                                            đầu. Bệnh làm giảm khả năng chuyển
                                            động khớp cổ ảnh hưởng tới chất
                                            lượng cuộc sống và năng suất làm
                                            việc.
                                        </p>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <Link
                                            href="/service/673bfb9fab145ab4293ad1ab"
                                            className="bg-primary text-white font-semibold  px-8 py-2 rounded-md"
                                        >
                                            Xem Tiếp
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col border-b-2 pb-8 lg:border-b-0 lg:pb-0">
                            <div>
                                <Image
                                    className="mx-auto lg:mx-0"
                                    src={image2}
                                    alt="Thoai hoa cot song"
                                />
                            </div>
                            <div className="flex-grow">
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <p className="text-center p-2 font-bold">
                                            Thoái hóa cột sống
                                        </p>
                                        <p>
                                            Thoái hóa cột sống là thuật ngữ y
                                            khoa được sử dụng để mô tả tình
                                            trạng lão hóa cột sống tự nhiên gây
                                            nên tổn thương sụn khớp, bào mòn và
                                            mất nước dẫn đến thay đổi cấu trúc
                                            đĩa đệm, mỏm gai xương. Đây là một
                                            căn bệnh mãn tính, có thể xảy ra ở
                                            cột sống cổ, cột sống ngực (trên và
                                            giữa lưng) hoặc cột sống thắt lưng
                                            (phần lưng dưới).
                                        </p>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <Link
                                            href="/service/673bfeb96781b9d0b1d73ef6"
                                            className="bg-primary text-white font-semibold  px-8 py-2 rounded-md"
                                        >
                                            Xem Tiếp
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col border-b-2 pb-8 lg:border-b-0 lg:pb-0">
                            <div>
                                <Image
                                    className="mx-auto lg:mx-0"
                                    src={image3}
                                    alt="Dau than kinh toa"
                                />
                            </div>
                            <div className="flex-grow">
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <p className="text-center p-2 font-bold">
                                            Đau thần kinh tọa
                                        </p>
                                        <p>
                                            Đau thần kinh tọa là bệnh không gây
                                            nguy hiểm đến tính mạng người bệnh.
                                            Tuy nhiên, những biến chứng đau thần
                                            kinh tọa gây nhiều khó chịu cho
                                            người bệnh và có thể gây suy giảm
                                            chức năng vận động.
                                        </p>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <Link
                                            href="/service/673c0113fc2d5c3307d0190b"
                                            className="bg-primary text-white font-semibold  px-8 py-2 rounded-md"
                                        >
                                            Xem Tiếp
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col border-b-2 pb-8 lg:border-b-0 lg:pb-0">
                            <div>
                                <Image
                                    className="mx-auto lg:mx-0"
                                    src={image4}
                                    alt="Thoat vi dia dem"
                                />
                            </div>
                            <div className="flex-grow">
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <p className="text-center p-2 font-bold">
                                            Thoát vị đĩa đệm
                                        </p>
                                        <p>
                                            Thời gian gần đây, tỷ lệ người trẻ
                                            tuổi mắc thoát vị đĩa đệm ngày càng
                                            gia tăng. Tình trạng thoái hóa đĩa
                                            đệm, rách hoặc nứt gây chèn ép dây
                                            thần kinh, dẫn đến cơn đau khó chịu,
                                            gây cản trở khả năng vận động.
                                        </p>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <Link
                                            href="/service/673c028835004991a4c3f3f7"
                                            className="bg-primary text-white font-semibold  px-8 py-2 rounded-md"
                                        >
                                            Xem Tiếp
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col border-b-2 pb-8 lg:border-b-0 lg:pb-0">
                            <div>
                                <Image
                                    className="mx-auto lg:mx-0"
                                    src={image5}
                                    alt="Chan thuong the thao"
                                />
                            </div>
                            <div className="flex-grow">
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <p className="text-center p-2 font-bold">
                                            Chấn thương thể thao
                                        </p>
                                        <p>
                                            Nguy cơ chấn thương thể thao là hoàn
                                            toàn có thể xảy ra đối với những
                                            người đam mê vận động. Mức độ tổn
                                            thương có thể nặng nhẹ khác nhau ở
                                            các vùng khác nhau như: cẳng chân,
                                            bong gân mắt cá hoặc căng cơ đùi,
                                            đau khuỷu tay Tennis Elbow, căng cơ,
                                            chấn thương vai...
                                        </p>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <Link
                                            href="/service/673c03ab35004991a4c3f3f9"
                                            className="bg-primary text-white font-semibold  px-8 py-2 rounded-md"
                                        >
                                            Xem Tiếp
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col border-b-2 pb-8 lg:border-b-0 lg:pb-0">
                            <div>
                                <Image
                                    className="mx-auto lg:mx-0"
                                    src={image6}
                                    alt="Viem dau cac khop"
                                />
                            </div>
                            <div className="flex-grow">
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <p className="text-center p-2 font-bold">
                                            Viêm đau các khớp
                                        </p>
                                        <p>
                                            Viêm khớp là tình trạng viêm, sưng
                                            đau ở một hay nhiều khớp như khớp
                                            đầu gối, khớp háng, khớp vai, khớp
                                            cổ tay, khớp cổ… Đây là một bệnh lý
                                            thường gặp, ảnh hưởng lớn đến khả
                                            năng vận động của khớp, khiến người
                                            bệnh gặp nhiều khó khăn trong sinh
                                            hoạt và thực hiện các công việc hàng
                                            ngày.
                                        </p>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <Link
                                            href="/service/673c04ba35004991a4c3f3fb"
                                            className="bg-primary text-white font-semibold  px-8 py-2 rounded-md"
                                        >
                                            Xem Tiếp
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default page;
