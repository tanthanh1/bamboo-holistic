const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchTickets() {
    try {
        const res = await fetch(
            `${apiDomain}/tickets`,
            { cache: "no-store" },
            { revalidate: 0 }
        );
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json();
    } catch (error) {
        console.log(error);
        return [];
    }
}

export { fetchTickets };
