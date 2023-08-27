import { useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import LayoutScripts from '../../src/components/layouts/scripts';

const DashboardNavbar = dynamic(() => import('../../src/components/dashboard/Navbar'), { ssr: false });
const DashboardWrap = dynamic(() => import('../../src/components/dashboard/Wrap'), { ssr: false });

export default function Dashboard() {
  const router = useRouter();

    useEffect(() => {
      // Redirecionar para /dashboard/overview
      router.push('/dashboard/overview');
    }, 
  );

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
