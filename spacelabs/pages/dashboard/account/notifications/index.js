import dynamic from "next/dynamic";

const DashboardNavbar = dynamic(
  () => import("../../../../src/components/dashboard/Navbar"),
  { ssr: false }
);
const AccountNotificationsWrap = dynamic(
  () => import("../../../../src/components/dashboard/account/notifications/Wrap"),
  { ssr: false }
);

export default function AccountNotifications() {
  return (
    <>
      <div className="nk-app-root">
        <div className="nk-main">
          <DashboardNavbar />
          <AccountNotificationsWrap />
        </div>
      </div>
    </>
  );
}
