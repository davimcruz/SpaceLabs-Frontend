import { useEffect } from 'react';
import { useRouter } from 'next/router';
import LayoutScripts from '../../src/components/layouts/scripts';

export default function Dashboard() {
  const router = useRouter();

    useEffect(() => {
      router.push('/dashboard/overview');
    }, 
  );

  return (
    <LayoutScripts>
    </LayoutScripts>
  );
}
