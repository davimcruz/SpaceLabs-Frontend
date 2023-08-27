import LayoutScripts from '../../src/components/layouts/scripts';

export const getServerSideProps = ({req, res}) => {
  return {
    redirect: {
        permanent: false,
        destination: "/dashboard/overview"
    },
    props: {}
  }
}

export default function Dashboard() {

  return (
    <LayoutScripts>
    </LayoutScripts>
  );
}


