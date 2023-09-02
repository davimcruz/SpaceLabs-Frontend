import dynamic from "next/dynamic";

const DashboardNavbar = dynamic(
  () => import("../../../src/components/dashboard/Navbar"),
  { ssr: false }
);
const AccountWrap = dynamic(
  () => import("../../../src/components/dashboard/account/Wrap"),
  { ssr: false }
);

export default function Account() {
  return (
    <>
      <div className="nk-app-root">
        <div className="nk-main">
          <DashboardNavbar />
          <AccountWrap />
        </div>
      </div>
    </>
  );
}
