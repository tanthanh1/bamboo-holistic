import { fetchTickets } from "@/utils/requests";

const AdminPage = async () => {
    // const [tickets,setTickets]=useState([]])
    // const [loading, setLoading] = useState(true);
    const tickets = await fetchTickets();
    console.log(tickets);
    return (
        <div className="mt-4">
            {tickets.map((ticket) => (
                <div className="mb-4 leading-8 max-w-[1080px]  mx-auto">
                    <p className="font-bold">
                        Ngày gửi: {new Date(ticket.createdAt).toLocaleString()}
                    </p>
                    <p className="text-red-500 font-bold">
                        Trạng thái: {ticket.status === "Open" && "Chưa trả lời"}
                    </p>
                    <p>Họ và tên: {ticket.name}</p>
                    <p>Số điện thoại: {ticket.phone}</p>
                    <p>Email: {ticket.email}</p>
                    <p>Nội dung: {ticket.content}</p>
                </div>
            ))}
        </div>
    );
};
export default AdminPage;

export const dynamic = "force-dynamic";
