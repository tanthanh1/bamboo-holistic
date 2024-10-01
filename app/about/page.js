import { inter } from "@/assets/styles/fonts";
import Image from "next/image";
import image1 from "@/assets/images/2.png";
import image2 from "@/assets/images/gioithieu.png";
import image3 from "@/assets/images/gioithieu3.png";

const AboutPage = () => {
    return (
        <div>
            <div className="bg-primary text-white  mx-auto pt-8 pb-10">
                <h1
                    className={`text-center text-2xl font-bold ${inter.className}`}
                >
                    Giới thiệu
                </h1>
            </div>
            <div className="bg-secondary mb-4 pb-8">
                <div className="flex flex-col lg:flex-row lg:gap-5 max-w-[1080px] mx-8 lg:mx-auto pt-20">
                    <Image className="flex-1" src={image1} />
                    <div className="flex-1">
                        <h1
                            className={`${inter.className} text-2xl font-bold mt-4 lg:mt-0`}
                        >
                            Tinh hoa của Y Học Tự Nhiên
                        </h1>
                        <p className="text-justify mt-2">
                            Hiệp hội các bác sỹ y học tự nhiên Mỹ định nghĩa Y
                            Học Tự Nhiên là cách chữa trị tập trung vào phòng
                            chống, điều trị và hỗ trợ sức khỏe tuyệt đối qua các
                            phương thức và chất giúp cơ thể con người tự hồi
                            phục. Cách điều trị này là kết hợp cả hiện đại, và
                            truyền thống. Nguyên tắc của điều trị là tập trung
                            vào sức mạnh tự hồi phục của cơ thể, điều trị căn
                            nguyên của bệnh và không gây tác dụng phụ hoặc hạn
                            chế một cách tối đa. Có thể hiểu Y học tự nhiên là
                            mô hình chăm sóc sức khỏe tổng thể, bao gồm các
                            phương pháp trị liệu tự nhiên được sắp xếp, kết hợp
                            với nhau một cách toàn diện – thống nhất, từ việc
                            điều chỉnh lối sống, tâm lý, chế độ ăn uống, tập
                            luyện… đến việc trị liệu, dựa trên cơ chế TỰ CHỮA
                            LÀNH của cơ thể.
                        </p>
                    </div>
                </div>
                <div className=" max-w-[1080px] mx-8 lg:mx-auto pt-20 ">
                    <Image src={image2} />
                    <p className="mt-6">
                        Một số trường phái trị liệu Y học tự nhiên đang được sử
                        dụng rộng rãi hiện nay trên thế giới như:
                    </p>
                    <ul className="list-disc pl-5">
                        <li>
                            Chiropractic: Đây là phương pháp mà người trị liệu
                            sử dụng kĩ thuật bằng tay giúp điều chỉnh những sai
                            lệch vị trí của hệ xương khớp và hệ thần kinh trong
                            cơ thể(đặc biệt là cột sống) gây ra các triệu chứng
                            đau-mỏi-mất cân bằng tư thế hoặc hạn chế vận động.
                            Ông tổ là Daniel David Palmer(1845-1913) bắt đầu sử
                            dụng điều trị từ năm 1895.
                        </li>
                        <li>
                            {" "}
                            Osteopathy: Ông tổ là Andrew Taylor
                            Still(1828-1917), giới thiệu bộ môn vào năm 1874.
                            Phương pháp này tiếp cận toàn bộ cơ thể người bởi
                            quan niệm “cơ thể con người giống như một cỗ máy,
                            một cỗ máy sẽ hoạt động tốt nếu tất cả các bộ phận
                            của nó đều hoạt động tốt”. Do đó, ngoài việc tiếp
                            cận hệ xương khớp, họ còn tác động lên cơ
                            mạc(Myofascial), nội tạng(Visceral manipulation)
                            hoặc hệ thần kinh trung ương(Cranial Sacral)...
                        </li>
                        <li>
                            Applied Kinesiology(AK) là một hệ thống đánh giá 3
                            khía cạnh của Tam giác sức khỏe: Cấu trúc, Chuyển
                            hóa và Tinh thần bằng cách sử dụng test cơ kết hợp
                            với các tiêu chuẩn chẩn đoán khác. Đây một hệ thống
                            đánh giá chức năng cơ thể không xâm lấn, độc nhất
                            trong nghệ thuật chữa bệnh, đã trở thành một phong
                            trào mạnh mẽ trong lĩnh vực chăm sóc sức khỏe trong
                            thời gian phát triển tương đối ngắn. Đây là trường
                            phái trị liệu tự nhiên đa dạng, phong phú nhất hiện
                            nay (đồng thời cũng là phương pháp khó tiếp cận bậc
                            nhất)
                        </li>
                    </ul>

                    <Image className="mt-6" src={image3} />
                    <p className="mt-6">
                        Và hiện nay, tại Bamboo Holistic chúng tôi phối hợp sử
                        dụng các trường phái trị liệu Y học tự nhiên khác nhau
                        của thế giới vào thăm khám và điều trị các vấn đề Cơ
                        Xương Khớp: Chiropractic, Mulligan, Osteopathy,
                        Gonstead, Applied Kinesiology... nhằm nâng cao hiệu quả
                        điều trị. Chúng tôi mong muốn mang đến những giá trị
                        thiết thực và toàn diện nhất đối với cơ thể khách hàng
                        như:
                    </p>
                    <ul className="list-disc pl-5">
                        <li>
                            Cho phép cơ thể tự phục hồi bằng cách cân bằng dòng
                            năng lượng
                        </li>
                        <li>
                            Giải tỏa căng thẳng về tinh thần và cảm xúc. Giảm
                            đau hiệu quả - đau đầu, đau lưng, đau dạ dày, đau
                            cánh tay, vai, chân và đầu gối.
                        </li>
                        <li>
                            Cải thiện tư thế Tăng năng lượng, sức sống và chống
                            lại sự mệt mỏi.
                        </li>
                        <li>
                            Cải thiện nhận thức về tâm trí và cơ thể Cải thiện
                            hiệu suất tại nơi làm việc, trường học và ở nhà;
                            trong thể thao và trong các mối quan hệ.
                        </li>
                        <li>
                            Hỗ trợ khách hàng đạt được mục tiêu cuộc sống và tận
                            hưởng cuộc sống một cách trọn vẹn nhất.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default AboutPage;
