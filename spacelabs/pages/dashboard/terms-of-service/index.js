import dynamic from 'next/dynamic';
import LayoutScripts from '../../../src/components/layouts/scripts';

const DashboardNavbar = dynamic(() => import('../../../src/components/dashboard/Navbar'), { ssr: false })
const TermsOfServiceWrap = dynamic(() => import('../../../src/components/dashboard/terms-of-service/Wrap'), { ssr: false })

export default function Updates() {

    return(
        <LayoutScripts>
        <div className="nk-app-root">
            <div className="nk-main">

                <DashboardNavbar />
                <TermsOfServiceWrap />

            </div>
        </div>
        </LayoutScripts>
    )

}