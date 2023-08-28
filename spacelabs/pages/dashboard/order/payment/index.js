import dynamic from 'next/dynamic';
import LayoutScripts from '../../../../src/components/layouts/scripts';

import MessagesJS from '../../../../src/app/messages';

const DashboardNavbar = dynamic(() => import('../../../../src/components/dashboard/Navbar'), { ssr: false })
const PaymentWrap = dynamic(() => import('../../../../src/components/dashboard/order/payment/Wrap'), { ssr: false })

export default function OrderPayment() {

    MessagesJS();

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