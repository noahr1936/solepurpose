import SearchShoe from "@/components/common/SearchShoe";
import Shoes from "@/components/common/Shoes";
import { findAllShoesByPage, searchShoe } from "@/data/service";
import { ISearchCriteria, IShoe } from "@/interfaces/IShoe";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

export interface Shoe {
    shoes: IShoe[];
    form: ISearchCriteria;
}
function Search({ shoes, form }: Shoe) {
    return (
        <>
            <Head>
                <title>Shoes</title>
            </Head>
            <div>
                <SearchShoe query={form} />
                <hr />
                <Shoes shoes={shoes} />
            </div>
        </>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    console.log(context.query);
    const shoes = await searchShoe(context.query);
    return { props: { shoes, form: context.query } };
}

export default Search;
