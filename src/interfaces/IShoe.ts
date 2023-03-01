import { Age, OutSole, Sex, SideOfFoot } from "@/utilities/enums";

export interface ShoeDetails {
    _id: string;

    // must be unique
    // will be folder name
    styleNumber: string;

    brand: string;
    name: string;
    yearManufactured: string;
    locationManufactured: string;
    length: number;
    price: number;
    age: Age;
    sex: Sex;
    type: string;

    // will always be mens or womens size if not Unisex
    // will always be mens size if Unisex
    primarySize: number;

    // will always be womens size if size is Unisex
    secondarySize: number | null;

    side: SideOfFoot;
    colorPhotographed: string;

    datePhotographed: Date;
    camera: string;
    numberOfPhotos: number;
    outerSole: Sole | null;
    middleSole: Sole | null;
    heelSole: Sole | null;

    adminUsername: string;
    dateCreated: Date;

    // urls for images
    displayImageUrl: string;
    additionalDisplayImageUrls: string[];

    version: string;
}

export interface IShoe extends ShoeDetails {
    history: IShoe[];
}

export type IShoeHistory = ShoeDetails;

interface Sole {
    pattern: string;
    design: string;
    notes: string;
}

interface Brand {
    name: string;
}

export interface ISearchCriteria {
    sex?: string;
}
