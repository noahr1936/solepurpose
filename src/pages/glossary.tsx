import { findGlossaryItems } from "@/data/service";
import { IDesignElement, IPatternElement, IGlossaryItems } from "@/interfaces/IGlossary";
import Image from "next/image";

function Glossary({ designs, patterns, brands }: IGlossaryItems) {
    const elementList = (list: IDesignElement[] | IPatternElement[]) => {
        console.log("list", list);

        return (
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        {/* <th className="col-1" scope="col">
                            Id
                        </th> */}
                        <th className="col-2" scope="col">
                            Name
                        </th>
                        <th className="col-2" scope="col">
                            Description
                        </th>
                        <th className="col-3" scope="col">
                            Image
                        </th>
                        <th className="col-4" scope="col">
                            Examples
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {list.length > 0 ? (
                        list.map((element, index) => (
                            <tr key={index}>
                                {/* <td>{element._id}</td> */}
                                <td>{element.name}</td>
                                <td>{element.description}</td>
                                <td>
                                    <Image
                                        width={100}
                                        height={100}
                                        src={element.image}
                                        alt="Element"
                                    />
                                </td>
                                <td>
                                    <div>
                                        {element.examplePhotos?.map((src, index) => (
                                            <Image
                                                key={index}
                                                width={150}
                                                height={100}
                                                src={src}
                                                alt="Example"
                                            />
                                        )) ?? "No Examples"}
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td>No Elements</td>
                        </tr>
                    )}
                    <tr>
                        <td>
                            <button>Add New</button>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        );
    };

    return (
        <>
            <h1>Glossary</h1>
            <p>Unifies the language used for describing shoes and outsole patterns</p>
            <hr />
            <div style={{ marginLeft: "10px" }}>
                <h5>Designs</h5>
                {elementList(designs)}
                <hr />
                <h5>Patterns</h5>
                {elementList(patterns)}
                <hr />
                <h5>Brands</h5>
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            {/* <th scope="col">Id</th> */}
                            <th className="col-2" scope="col">
                                Name
                            </th>
                            <th className="col-8" scope="col">
                                Logo(s)
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {brands.length > 0 ? (
                            brands.map((element, index) => (
                                <tr key={index}>
                                    {/* <td>{element._id}</td> */}
                                    <td>{element.name}</td>
                                    <td>
                                        <div>
                                            {element.logos?.map((src, index) => (
                                                <div key={index}>
                                                    Style #{index + 1}:
                                                    <Image
                                                        key={index}
                                                        width={200}
                                                        height={150}
                                                        src={src}
                                                        alt="Example"
                                                    />
                                                </div>
                                            )) ?? "No Images"}
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td>No Brand Logos</td>
                            </tr>
                        )}
                        <tr>
                            <td>
                                <button>Add New</button>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export async function getServerSideProps() {
    try {
        const items = await findGlossaryItems();

        return { props: items };
    } catch (error) {
        console.log(error);

        return { props: { isConnected: false } };
    }
}

export default Glossary;
