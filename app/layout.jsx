import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";
import "@/assets/styles/globals.css";
import Box1 from "@/components/Box1";

export const metadata = {
    title: "Bamboo Holistic",
    keywords:
        "Chiropractic,Applied Kinesiology,Trị liệu thần kinh,Cơ xương khớp",
    description: "Chua lanh moi ton thuong",
};
const MainLayout = ({ children }) => {
    return (
        <html>
            <body>
                <Navbar />
                <Box1 />
                <main>{children}</main>
            </body>
        </html>
    );
};
export default MainLayout;
