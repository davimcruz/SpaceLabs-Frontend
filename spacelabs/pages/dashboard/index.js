import dynamic from 'next/dynamic';
import DashboardNavbar from '../../src/components/dashboard/Navbar';
import DashboardWrap from '../../src/components/dashboard/Wrap';
const Navbar = dynamic(() => import('../../src/components/dashboard/Navbar'), { ssr: false })
const Wrap = dynamic(() => import('../../src/components/dashboard/Wrap'), { ssr: false })

export default function Dashboard() {
  return (
    <>
      <div className="nk-app-root">
        <div className="nk-main ">
          <DashboardNavbar />
          <DashboardWrap />
        </div>
      </div>
    </>
  );
}
