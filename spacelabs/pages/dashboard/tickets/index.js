import dynamic from 'next/dynamic';
import LayoutScripts from '../../../src/components/layouts/scripts';

const DashboardNavbar = dynamic(() => import('../../../src/components/dashboard/Navbar'), { ssr: false })
const TicketsWrap = dynamic(() => import('../../../src/components/dashboard/tickets/Wrap'), { ssr: false })

export default function Tickets() {

    return(
        <LayoutScripts>
        <div className="nk-app-root">
            <div className="nk-main">

                <DashboardNavbar />
                <TicketsWrap />

            </div>
        </div>
        </LayoutScripts>
    )

}