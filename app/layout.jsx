import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";
import "@/assets/styles/globals.css";

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
                <Footer />
            </body>
        </html>
    );
};
export default MainLayout;
