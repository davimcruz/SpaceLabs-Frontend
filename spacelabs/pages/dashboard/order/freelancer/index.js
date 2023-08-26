import dynamic from 'next/dynamic';

const DashboardNavbar = dynamic(() => import('../../../../src/components/dashboard/Navbar'), { ssr: false })
const FreelancerWrap = dynamic(() => import('../../../../src/components/dashboard/order/freelancer/Wrap'), { ssr: false })

export default function OrderFreelancer() {

    return(
        <>
        <div className="nk-app-root">
            <div className="nk-main">

                <DashboardNavbar />
                <FreelancerWrap />

            </div>
        </div>
        </>
    )

}