import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import MyGrandCanyonLogo from "../../../public/MyGrandCanyonLogo.png";

export default function Common({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
}
