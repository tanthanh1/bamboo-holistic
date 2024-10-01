"use client";
import { useState, useEffect } from "react";
import { fetchTickets } from "@/utils/requests";

const AdminPage = async () => {
    // const [tickets,setTickets]=useState([]])
    // const [loading, setLoading] = useState(true);
    const tickets = await fetchTickets();
    console.log(tickets);
    return (
        <div>
            {tickets.map((ticket) => (
                <div className="mb-4 leading-8 max-w-[1080px]  mx-auto">
                    <p className="font-bold">Ngày gửi: {ticket.createdAt} </p>
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
