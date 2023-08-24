import dynamic from 'next/dynamic';

import DashboardNavbar from "../../../src/components/dashboard/Navbar";

const FaqWrap = dynamic(() => import('../../../src/components/dashboard/faq/Wrap'), { ssr: false })

export default function Faq() {

    return(
        <>
        <div className="nk-app-root">
            <div className="nk-main">

                <DashboardNavbar />
                <FaqWrap />

            </div>
        </div>
        </>
    )

}