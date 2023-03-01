import { IShoe } from "@/interfaces/IShoe";
import ViewShoe from "@/components/common/viewShoe";
import { ObjectId } from "mongodb";
import { GetServerSidePropsContext } from "next";
import { findShoeById } from "@/data/service";

interface Shoe {
    shoe: IShoe;
}

const SingleShoe = ({ shoe }: Shoe) => {
    return (
        <>
            <ViewShoe shoe={shoe} />
        </>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const id = context.params?.id;

    if (!id || Array.isArray(id)) {
        return {
            notFound: true,
        };
    }

    const shoe = await findShoeById(new ObjectId(id));

    if (shoe === null) {
        return {
            notFound: true,
        };
    }
    return { props: { shoe } };
}

export default SingleShoe;
