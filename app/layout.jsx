import { inter } from "next/font/google";

import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Bamboo Holistic",
    keywords:
        "Chiropractic,Applied Kinesiology,Trị liệu thần kinh,Cơ xương khớp",
    description: "Chữa lành mọi tổn thương của cơ thể",
};
const MainLayout = ({ children }) => {
    return (
        <html className="overflow-x-hidden">
            <body className="overflow-x-hidden relative">
                <Navbar />

                <main className="lg:max-w-[1080px] lg:mx-auto  px-4 lg:px-0">
                    {children}
                </main>
                <Contact />
                <Footer />
            </body>
        </html>
    );
};
export default MainLayout;

export const fetchCache = "force-cache";
