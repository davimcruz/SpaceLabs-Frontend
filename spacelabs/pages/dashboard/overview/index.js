import dynamic from 'next/dynamic';
import LayoutScripts from '../../../src/components/layouts/scripts';

const DashboardNavbar = dynamic(() => import('../../../src/components/dashboard/Navbar'), { ssr: false })
const DashboardWrap = dynamic(() => import('../../../components/dashboard/Wrap'), { ssr: false })

export default function DashboardOverview() {
  return (
    <LayoutScripts>
      <div className="nk-app-root">
        <div className="nk-main ">
          <DashboardNavbar />
          <DashboardWrap />
        </div>
      </div>
    </LayoutScripts>
  );
}
