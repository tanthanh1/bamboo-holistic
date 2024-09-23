import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";
import "@/assets/styles/globals.css";

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
                <main>{children}</main>
            </body>
        </html>
    );
};
export default MainLayout;
