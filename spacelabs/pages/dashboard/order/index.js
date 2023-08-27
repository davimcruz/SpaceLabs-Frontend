import dynamic from 'next/dynamic';
import LayoutScripts from '../../../src/components/layouts/scripts';

const DashboardNavbar = dynamic(() => import('../../../src/components/dashboard/Navbar'), { ssr: false })
const OrderWrap = dynamic(() => import('../../../src/components/dashboard/order/Wrap'), { ssr: false })

export default function Order() {

    return(
        <LayoutScripts>
        <div className="nk-app-root">
            <div className="nk-main">

                <DashboardNavbar />
                <OrderWrap />

            </div>
        </div>
        </LayoutScripts>
    )

}