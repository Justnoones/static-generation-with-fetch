import Layout from "@/components/Layout";
import getTickets from "../libs/tickets";
import Link from "next/link";

export default ({ tickets }) => {
  return (
      <Layout>
        {tickets.map(ticket => (
          <Link href={`/tickets/${ticket.id}`} key={ticket.id} className="bg-black bg-opacity-5 p-5 shadow-2xl border-slate-100 border-2 flex flex-col gap-5 transition-all duration-150 hover:flex-[3] flex-1">
            <h1 className="text-2xl font-bold">
              {ticket.title}
            </h1>
            <h4>
              {ticket.user_email}
            </h4>
            <p>
              {ticket.body.substring(0, 150)}...
            </p>
            <figure>
              priority - {ticket.priority}
            </figure>
          </Link>
        ))}
      </Layout>    
    )
}

export const getStaticProps = async () => {
  const tickets = await getTickets();
  return {
    props: {
      tickets
    },
  };
}