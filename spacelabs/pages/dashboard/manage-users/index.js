import dynamic from 'next/dynamic';
import LayoutScripts from '../../../src/components/layouts/scripts';

const DashboardNavbar = dynamic(() => import('../../../src/components/dashboard/Navbar'), { ssr: false })
const ManageUsersWrap = dynamic(() => import('../../../src/components/dashboard/manage-users/Wrap'), { ssr: false })

export default function ManageUsers() {

    return(
        <LayoutScripts>
        <div className="nk-app-root">
            <div className="nk-main">

                <DashboardNavbar />
                <ManageUsersWrap />

            </div>
        </div>
        </LayoutScripts>
    )

}