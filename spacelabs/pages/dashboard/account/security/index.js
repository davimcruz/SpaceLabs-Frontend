import dynamic from "next/dynamic";

const DashboardNavbar = dynamic(
  () => import("../../../../src/components/dashboard/Navbar"),
  { ssr: false }
);
const AccountSecurityWrap = dynamic(
  () => import("../../../../src/components/dashboard/account/security/Wrap"),
  { ssr: false }
);

export default function AccountSecurity() {
  return (
    <>
      <div className="nk-app-root">
        <div className="nk-main">
          <DashboardNavbar />
          <AccountSecurityWrap />
        </div>
      </div>
    </>
  );
}
