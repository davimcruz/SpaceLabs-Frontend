import dynamic from "next/dynamic";

const Header = dynamic(() => import("../../Header"), { ssr: false });
const Footer = dynamic(() => import("../../Footer"), { ssr: false });

export default function FreelancerWrap() {

    return(
        <>
        <div className="nk-wrap">

            <Header />

            <Footer />

        </div>
        </>
    )
}