import { IShoe } from "@/interfaces/IShoe";
import Image from "next/image";

interface Shoe {
    shoe: IShoe;
}

function ViewShoe({ shoe }: Shoe) {
    return (
        <div>
            <button onClick={() => history.back()}>Back</button>

            <h2>
                <u>Shoe {shoe._id}</u>
            </h2>

            <div>
                <div id="container">
                    <div id="contentContainer">
                        <div>
                            <h5>Id: </h5>
                            <b>{shoe._id}</b>
                        </div>
                        <div>
                            <h5>Name: </h5>
                            <b>{shoe.name}</b>
                        </div>
                        <div>
                            <h5>Size: </h5>
                            <b>{shoe.primarySize}</b>
                        </div>
                        <div>
                            <h5>Style Number: </h5>
                            <b>{shoe.styleNumber}</b>
                        </div>
                        <div>
                            <h5>Year Manufactured: </h5>
                            <b>{shoe.yearManufactured}</b>
                        </div>
                        <div>
                            <h5>Length: </h5>
                            <b>{shoe.length}</b>
                        </div>
                        <div>
                            <h5>Sex: </h5>
                            <b>{shoe.sex}</b>
                        </div>
                        <div>
                            <h5>Date Photographed: </h5>
                            <b>{shoe.datePhotographed.toString()}</b>
                        </div>
                        <div>
                            <h5>Camera Used: </h5>
                            <b>{shoe.camera}</b>
                        </div>
                        <div>
                            <h5>Number of Photographs: </h5>
                            <b>{shoe.numberOfPhotos}</b>
                        </div>
                        <div>
                            <h5>Brand: </h5>
                            <b>{shoe.brand}</b>
                        </div>
                        <div>
                            <h5>Location Manufactured: </h5>
                            <b>{shoe.locationManufactured}</b>
                        </div>
                        <div>
                            <h5>Side Of Shoe: </h5>
                            <b>{shoe.side}</b>
                        </div>
                        <div>
                            <h5>Price: </h5>
                            <b>{shoe.price}</b>
                        </div>
                    </div>
                    <div id="imageContainer">
                        <Image
                            height={300}
                            width={400}
                            src={shoe.displayImageUrl}
                            alt="Main Shoe"
                        />
                    </div>
                </div>
                <hr />
                <div id="additionalContainer">
                    <h4>Tread Pattern Description</h4>
                    <p>{shoe.name}</p>

                    <h4>Additional Images</h4>
                    <div id="additionalImageContainer">
                        {shoe.additionalDisplayImageUrls?.map((image, index) => (
                            <Image
                                key={index}
                                height={200}
                                width={300}
                                src={image}
                                alt="Additional Shoe"
                            />
                        )) ?? "No Images"}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewShoe;
