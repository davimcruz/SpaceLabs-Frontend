import dynamic from 'next/dynamic';

const DashboardNavbar = dynamic(() => import('../../../src/components/dashboard/Navbar'), { ssr: false })
const TeamApplyWrap = dynamic(() => import('../../../src/components/dashboard/team-apply/Wrap'), { ssr: false })

export default function TeamApply() {

    return (
        <>
        <div className="nk-app-root">
            <div className="nk-main">

                <DashboardNavbar />
                <TeamApplyWrap />

            </div>
        </div>
        </>
    )

}