import dynamic from 'next/dynamic';
import LayoutScripts from '../../../src/components/layouts/scripts';

const DashboardNavbar = dynamic(() => import('../../../src/components/dashboard/Navbar'), { ssr: false })
const TeamApplyWrap = dynamic(() => import('../../../src/components/dashboard/team-apply/Wrap'), { ssr: false })

export default function TeamApply() {

    return (
        <LayoutScripts>
        <div className="nk-app-root">
            <div className="nk-main">

                <DashboardNavbar />
                <TeamApplyWrap />

            </div>
        </div>
        </LayoutScripts>
    )

}