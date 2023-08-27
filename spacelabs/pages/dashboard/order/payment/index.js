import dynamic from 'next/dynamic';
import LayoutScripts from '../../../../src/components/layouts/scripts';

const DashboardNavbar = dynamic(() => import('../../../../src/components/dashboard/Navbar'), { ssr: false })
const PaymentWrap = dynamic(() => import('../../../../src/components/dashboard/order/payment/Wrap'), { ssr: false })

export default function OrderPayment() {

    return(
        <LayoutScripts>
        <div className="nk-app-root">
            <div className="nk-main">

                <DashboardNavbar />
                <PaymentWrap />

            </div>
        </div>
        </LayoutScripts>
    )

}