<<<<<<< HEAD
import LayoutScripts from '../../src/components/layouts/scripts';
=======
import { useEffect } from 'react';
import { useRouter } from 'next/router';
>>>>>>> 6af7ca888386a9936cb5cb3229022adecd06c038

export const getServerSideProps = ({req, res}) => {
  return {
    redirect: {
        permanent: false,
        destination: "/dashboard/overview"
    },
    props: {}
  }
}

<<<<<<< HEAD
export default function Dashboard() {

  return (
    <LayoutScripts>
    </LayoutScripts>
=======
  useEffect(() => {
    router.push('/dashboard/overview');
    },
>>>>>>> 6af7ca888386a9936cb5cb3229022adecd06c038
  );
}


