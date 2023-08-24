import dynamic from 'next/dynamic';

const DashboardNavbar = dynamic(() => import('../../../src/components/dashboard/Navbar'), { ssr: false })
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