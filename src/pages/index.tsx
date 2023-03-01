import Image from "next/image";
import MySolePurposeIcon from "../../public/MySolePurposeIcon.png";
import MyGrandCanyonLogo from "../../public/MyGrandCanyonLogo.png";
import MyPhoenixPoliceLogo from "../../public/MyPhoenixPoliceLogo.png";
import Head from "next/head";

function Introduction() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <div id="homePage">
                <h1>The Arizona SolePurpose Database</h1>
                <Image src={MySolePurposeIcon} height={320} width={500} alt="SolePurpose" />
                <div id="collabs">
                    <div>
                        <h3>
                            <u>In Collaboration with Grand Canyon University</u>
                        </h3>
                        <Image src={MyGrandCanyonLogo} height={320} width={500} alt="SolePurpose" />
                    </div>
                    <div>
                        <h3>
                            <u>In Collaboration with Grand Canyon University</u>
                        </h3>
                        <Image
                            src={MyPhoenixPoliceLogo}
                            height={500}
                            width={700}
                            alt="SolePurpose"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Introduction;
