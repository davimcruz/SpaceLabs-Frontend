import dynamic from 'next/dynamic';
import LayoutScripts from '../../../../src/components/layouts/scripts';

const DashboardNavbar = dynamic(() => import('../../../../src/components/dashboard/Navbar'), { ssr: false })
const FreelancerWrap = dynamic(() => import('../../../../src/components/dashboard/order/freelancer/Wrap'), { ssr: false })

export default function OrderFreelancer() {

    return(
        <LayoutScripts>
        <div className="nk-app-root">
            <div className="nk-main">

                <DashboardNavbar />
                <FreelancerWrap />

            </div>
        </div>
        </LayoutScripts>
    )

}