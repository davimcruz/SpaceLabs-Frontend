import dynamic from 'next/dynamic';

import DashboardNavbar from "../../../src/components/dashboard/Navbar";

const PlaceOrderWrap = dynamic(() => import('../../../src/components/dashboard/place-order/Wrap'), { ssr: false })


export default function PlaceOrder() {

    return(
        <>
        <div className="nk-app-root">
            <div className="nk-main">

                <DashboardNavbar />
                <PlaceOrderWrap />

            </div>
        </div>
        </>
    )

}