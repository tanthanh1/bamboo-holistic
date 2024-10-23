import { fetchNews } from "@/utils/requests";

const NewsPage = async () => {
    // const [tickets,setTickets]=useState([]])
    // const [loading, setLoading] = useState(true);
    const news = await fetchNews();
    console.log(news);
    return (
        <div className="mt-4">
            {news.map((ticket) => (
                <div className="mb-4 leading-8 max-w-[1080px]  mx-auto">
                    <h1> {ticket.title}</h1>
                    <div
                        dangerouslySetInnerHTML={{ __html: ticket.content }}
                    ></div>
                    
                </div>
            ))}
        </div>
    );
};
export default NewsPage;
