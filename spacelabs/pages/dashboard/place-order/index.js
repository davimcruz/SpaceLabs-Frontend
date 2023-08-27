import dynamic from 'next/dynamic';
import LayoutScripts from '../../../src/components/layouts/scripts';

const DashboardNavbar = dynamic(() => import('../../../src/components/dashboard/Navbar'), { ssr: false })
const PlaceOrderWrap = dynamic(() => import('../../../src/components/dashboard/place-order/Wrap'), { ssr: false })

export default function PlaceOrder() {

    return(
        <LayoutScripts>
        <div className="nk-app-root">
            <div className="nk-main">

                <DashboardNavbar />
                <PlaceOrderWrap />

            </div>
        </div>
        </LayoutScripts>
    )

}