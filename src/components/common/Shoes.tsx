import { IShoe } from "@/interfaces/IShoe";
import Image from "next/image";
import Link from "next/link";
import vercel from "../../../public/vercel.svg";

interface Shoe {
    shoes: IShoe[];
}
function Shoes({ shoes }: Shoe) {
    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Sex</th>
                        <th scope="col">Size</th>
                        <th scope="col">Style Number</th>
                        <th scope="col">Year Manufactured</th>
                        <th scope="col">Length</th>
                        <th scope="col">Name</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>

                <tbody>
                    {shoes.length === 0 ? (
                        <tr>
                            <td>No Shoes Available</td>
                        </tr>
                    ) : (
                        shoes.map((shoe, index) => (
                            <tr key={index}>
                                <td>{shoe._id}</td>
                                <td>{shoe.sex}</td>
                                <td>{shoe.primarySize}</td>
                                <td>{shoe.styleNumber}</td>
                                <td>{shoe.yearManufactured}</td>
                                <td>{shoe.length}</td>
                                <td>
                                    <Link href={`/search/${shoe._id}`} className="btn btn-primary">
                                        View
                                    </Link>
                                </td>

                                {/* TODO: set defined images sizes */}
                                <td style={{ height: "20vh", width: "20vw" }}>
                                    <Image
                                        width={500}
                                        height={300}
                                        src={shoe.displayImageUrl ?? vercel}
                                        alt="Shoe"
                                    />
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Shoes;
