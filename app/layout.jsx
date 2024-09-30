import { inter } from "next/font/google";

import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Box5 from "@/components/Box5";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Bamboo Holistic",
    keywords:
        "Chiropractic,Applied Kinesiology,Trị liệu thần kinh,Cơ xương khớp",
    description: "Chữa lành mọi tổn thương của cơ thể",
};
const MainLayout = ({ children }) => {
    return (
        <html>
            <body>
                <Navbar />

                <main>{children}</main>
                <Box5 />
                <Footer />
            </body>
        </html>
    );
};
export default MainLayout;
