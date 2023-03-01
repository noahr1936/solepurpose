import { Role } from "@/utilities/enums";

export interface IAdmin {
    _id: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    phoneNumber: string;
    role: Role;
}
