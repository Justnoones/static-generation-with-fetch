export default async () => {
    const res = await fetch("http://localhost:4000/tickets");
    const data = await res.json();
    return data;
}

export const getTicketIds = async () => {
    const res = await fetch("http://localhost:4000/tickets");
    const data = await res.json();
    let ids = [];
    return data.map(d => (
        {
            params: {
                id: d.id
            }
        }
    ));
}

export const getTicket = async (id) => {
    const res = await fetch(`http://localhost:4000/tickets/${id}`);
    const data = await res.json();
    return data;
}