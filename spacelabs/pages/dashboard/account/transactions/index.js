import dynamic from "next/dynamic";

const DashboardNavbar = dynamic(
  () => import("../../../../src/components/dashboard/Navbar"),
  { ssr: false }
);
const AccountTransactionsWrap = dynamic(
  () => import("../../../../src/components/dashboard/account/transactions/Wrap"),
  { ssr: false }
);

export default function AccountTransactions() {
  return (
    <>
      <div className="nk-app-root">
        <div className="nk-main">
          <DashboardNavbar />
          <AccountTransactionsWrap />
        </div>
      </div>
    </>
  );
}
