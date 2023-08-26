import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../../src/components/dashboard/Navbar'), { ssr: false })
const DashboardWrap = dynamic(() => import('../../src/components/dashboard/Wrap'), { ssr: false })

export default function Dashboard() {
  return (
    <>
      <div className="nk-app-root">
        <div className="nk-main ">
          <Navbar />
          <DashboardWrap />
        </div>
      </div>
    </>
  );
}
