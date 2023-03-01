import { IDesignElement, IGlossaryItems } from "@/interfaces/IGlossary";
import { ISearchCriteria, IShoe } from "@/interfaces/IShoe";
import serialize from "@/utilities/functions";
import { ObjectId } from "mongodb";
import { getDb } from "./database";

export async function findAllShoesByPage(start?: number, limit?: number): Promise<IShoe[]> {
    const db = await getDb();

    const data = serialize(
        await db
            .collection("shoes")
            .find({})
            .skip(start ?? 0)
            .limit(limit ?? 100)
            .toArray()
    );
    return data;
}

export async function findShoeById(_id: ObjectId): Promise<IShoe | null> {
    const db = await getDb();
    // will return null if no object is found
    const data = serialize(await db.collection("shoes").findOne({ _id }));

    return data;
}

export async function searchShoe(params: ISearchCriteria): Promise<IShoe[]> {
    const db = await getDb();
    const data = serialize(await db.collection("shoes").find(params).toArray());

    // console.log(data);

    return data;
}

// export async function createDesignElement(element: IDesignElement): Promise<IDesignElement> {}

export async function findGlossaryItems(): Promise<IGlossaryItems> {
    const db = await getDb();
    const designs = serialize(await db.collection("design_elements").find({}).toArray());
    const patterns = serialize(await db.collection("pattern_elements").find({}).toArray());
    const brands = serialize(await db.collection("brand_logos").find({}).toArray());

    return { designs, patterns, brands };
}
