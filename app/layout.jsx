import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";
import "@/assets/styles/globals.css";
import Box1 from "@/components/Box1";
import Box2 from "@/components/Box2";
import Box3 from "@/components/Box3";
import Box4 from "@/components/Box4";
import Box5 from "@/components/Box5";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Bamboo Holistic",
    keywords:
        "Chiropractic,Applied Kinesiology,Trị liệu thần kinh,Cơ xương khớp",
    description: "Chữa lành mọi tổn thương của cơ thể",
};
const MainLayout = () => {
    return (
        <html>
            <body>
                <Navbar />
                <Box1 />
                <Box2 />
                <Box3 />
                <Box4 />
                <Box5 />
                <Footer />
                <main></main>
            </body>
        </html>
    );
};
export default MainLayout;
