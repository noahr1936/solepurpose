export interface IDesignElement {
    _id: string;
    name: string;
    description: string;
    image: string;
    examplePhotos: string[];
}

export interface IPatternElement {
    _id: string;
    name: string;
    description: string;
    image: string;
    examplePhotos: string[];
}

export interface IBrandLogo {
    _id: string;
    name: string;
    logos: string[];
}

export interface IGlossaryItems {
    designs: IDesignElement[];
    patterns: IPatternElement[];
    brands: IBrandLogo[];
}
