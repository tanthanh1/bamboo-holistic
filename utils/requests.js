const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchTickets() {
    try {
        const res = await fetch(`${apiDomain}/tickets`, { cache: "no-store" });
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json();
    } catch (error) {
        console.log(error);
        return [];
    }
}

async function fetchNews() {
    try {
        // const res = await fetch(`${apiDomain}/news`, { cache: "no-store" });
        const res = await fetch(`${apiDomain}/news`, {
            next: {
                revalidate: 60, // 1 hour
            },
        });
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json();
    } catch (error) {
        console.log(error);
        return [];
    }
}

async function fetchNewById(id) {
    try {
        const res = await fetch(`${apiDomain}/news/${id}`, {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function fetchServiceById(id) {
    try {
        const res = await fetch(`${apiDomain}/services/${id}`);
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}

export { fetchTickets, fetchNews, fetchNewById, fetchServiceById };
