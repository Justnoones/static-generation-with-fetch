import Layout from "@/components/Layout";
import { getTicket, getTicketIds } from "@/libs/tickets";

export default ({ ticket }) => {
    return (
        <Layout>
            <section key={ticket.id} className="bg-black bg-opacity-5 p-5 shadow-2xl border-slate-100 border-2 flex flex-col gap-5 transition-all duration-150 hover:flex-[3] flex-1">
                <h1 className="text-2xl font-bold">
                    {ticket.title}
                </h1>
                <h4>
                    {ticket.user_email}
                </h4>
                <p>
                    {ticket.body}
                </p>
                <figure>
                    priority - {ticket.priority}
                </figure>
          </section>
        </Layout>
    )
}

export const getStaticPaths = async () => {
    const paths = await getTicketIds();
    return {
        paths,
        fallback: false
    };
}

export const getStaticProps = async ({ params }) => {
  const ticket = await getTicket(params.id);
  return {
    props: {
        ticket,
    },
  };
}