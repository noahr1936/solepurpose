import Common from "@/components/layouts/Common";
import { PropsWithChildren, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/main.scss";

interface IAppProps {
    //TODO: get type for component
    Component: any;
    pageProps: PropsWithChildren;
}

export default function MyApp({ Component, pageProps }: IAppProps) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    });
    return (
        <Common>
            <Component {...pageProps} />
        </Common>
    );
}
