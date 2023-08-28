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
  <></>
  );
}
