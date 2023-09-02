import dynamic from "next/dynamic";

const Header = dynamic(() => import("../../Header"), { ssr: false });
const Footer = dynamic(() => import("../../Footer"), { ssr: false });

export default function AccountTransactionsWrap() {
  return (
    <>
      <div className="nk-wrap">
        <Header />
        <div className="nk-content ">
          <div className="container-fluid">
            <div className="nk-content-inner">
              <div className="nk-content-body">
                <div className="nk-block">
                  <div className="card card-bordered">
                    <div className="card-aside-wrap">
                      <div className="card-inner card-inner-lg">
                        <div className="nk-block-head nk-block-head-lg">
                          <div className="nk-block-between">
                            <div className="nk-block-head-content">
                              <h4 className="nk-block-title">
                                Transactions Activity
                              </h4>
                              <div className="nk-block-des">
                                <p>
                                  Here you can find his recent transaction
                                  updates.
                                </p>
                              </div>
                            </div>
                            <div className="nk-block-head-content align-self-start d-lg-none">
                              <a
                                href="#"
                                className="toggle btn btn-icon btn-trigger mt-n1"
                                data-target="userAside"
                              >
                                <em className="icon ni ni-menu-alt-r" />
                              </a>
                            </div>
                            <div className="nk-block-head-content">
                              <div className="toggle-wrap nk-block-tools-toggle">
                                <a
                                  href="#"
                                  className="btn btn-icon btn-trigger toggle-expand me-n1"
                                  data-target="pageMenu"
                                >
                                  <em className="icon ni ni-more-v" />
                                </a>
                                <div
                                  className="toggle-expand-content"
                                  data-content="pageMenu"
                                >
                                  <ul className="nk-block-tools g-3">
                                    <li className="nk-block-tools-opt">
                                      <a
                                        href="html/buy-credits.html"
                                        className="btn btn-outline-success btn-dim"
                                      >
                                        <em className="icon ni ni-coins" />
                                        <span>Buy credits</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* .nk-block-head-content */}
                          </div>
                        </div>
                        {/* .nk-block-head */}
                        <div className="col-xxl-12">
                          <div className="card card-bordered card-stretch">
                            <div className="card-inner-group">
                              <div className="card-inner p-0">
                                <div className="nk-tb-list nk-tb-tnx">
                                  <div className="nk-tb-item nk-tb-head">
                                    <div className="nk-tb-col">
                                      <span>Ordering freelancer</span>
                                    </div>
                                    <div className="nk-tb-col tb-col-xxl">
                                      <span>Order Category</span>
                                    </div>
                                    <div className="nk-tb-col tb-col-lg">
                                      <span>Order Value</span>
                                    </div>
                                    <div className="nk-tb-col text-center">
                                      <span>Order ID</span>
                                    </div>
                                    <div className="nk-tb-col nk-tb-col-status">
                                      <span className="sub-text d-none d-md-block">
                                        Status
                                      </span>
                                    </div>
                                    <div className="nk-tb-col nk-tb-col-tools" />
                                  </div>
                                  <div className="nk-tb-item">
                                    <div className="nk-tb-col">
                                      <div className="nk-tnx-type">
                                        <div className="nk-tnx-type-text">
                                          <span className="tb-lead">
                                            Bedablio
                                          </span>
                                          <span className="tb-date">
                                            25 Jan, 2023 at 10:12 AM
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="nk-tb-col tb-col-xxl">
                                      <span className="tb-lead">
                                        <h6 style={{ fontSize: 14 }}>
                                          Minecraft Builder
                                        </h6>
                                      </span>
                                    </div>
                                    <div className="nk-tb-col tb-col-lg">
                                      <span className="tb-lead">
                                        <h6 style={{ fontSize: 14 }}>
                                          $199.99
                                        </h6>
                                      </span>
                                    </div>
                                    <div
                                      className="nk-tb-col"
                                      style={{ textAlign: "center" }}
                                    >
                                      <span>
                                        <h6
                                          className="nk-h6-head"
                                          style={{ fontSize: 14 }}
                                        >
                                          #00214
                                        </h6>
                                      </span>
                                    </div>
                                    <div className="nk-tb-col nk-tb-col-status">
                                      <div className="dot dot-success d-md-none" />
                                      <span className="badge badge-sm badge-dim bg-outline-success d-none d-md-inline-flex">
                                        Completed
                                      </span>
                                    </div>
                                    <div className="nk-tb-col nk-tb-col-tools">
                                      <ul className="nk-tb-actions gx-2">
                                        <li className="nk-tb-action-hidden">
                                          <a
                                            className="bg-white btn btn-sm btn-outline-light btn-icon btn-tooltip"
                                            title="Delete"
                                          >
                                            <em className="icon ni ni-trash" />
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="modal fade"
                                tabIndex={-1}
                                id="viewOrder"
                              >
                                <div
                                  className="modal-dialog modal-lg"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <a
                                      href="#"
                                      className="close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    >
                                      <em className="icon ni ni-cross" />
                                    </a>
                                    <div className="modal-body modal-body-md">
                                      <div className="nk-modal-head mb-3 mb-sm-5">
                                        <h4 className="nk-modal-title title">
                                          Order{" "}
                                          <small className="nk-h6-head">
                                            <strong>#NTJ-58248</strong>
                                          </small>
                                        </h4>
                                      </div>
                                      <div className="nk-tnx-details">
                                        <div className="nk-block-between flex-wrap g-3">
                                          <div className="nk-tnx-type">
                                            <div
                                              className="minecraft-head"
                                              style={{ marginRight: "1rem" }}
                                            >
                                              <img src="/assets/images/avatars/heads/Cat.png" />
                                            </div>
                                            <div className="nk-tnx-type-text">
                                              <h5 className="title">
                                                Bedablio
                                              </h5>
                                              <span className="sub-text mt-n1">
                                                On January 25, 2023
                                              </span>
                                            </div>
                                          </div>
                                          <ul className="align-center flex-wrap gx-3">
                                            <li>
                                              <span className="badge badge-sm badge-dim bg-success d-none d-md-inline-flex">
                                                Completed
                                              </span>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="nk-modal-head mt-sm-5 mt-4 mb-4">
                                          <h5 className="title">
                                            Order Details
                                          </h5>
                                        </div>
                                        <div className="row gy-3">
                                          <div className="col-lg-6">
                                            <span className="sub-text">
                                              Order Category
                                            </span>
                                            <span className="caption-text">
                                              Minecraft Builder
                                            </span>
                                          </div>
                                          <div className="col-lg-6">
                                            <span className="sub-text">
                                              Payment Method
                                            </span>
                                            <span className="caption-text text-break text-primary">
                                              <em className="icon ni ni-master-card text-primary" />{" "}
                                              Credit Card
                                            </span>
                                          </div>
                                          <div className="col-lg-6">
                                            <span className="sub-text">
                                              Ordering Time
                                            </span>
                                            <span className="caption-text">
                                              January 25, 2023, to February 10,
                                              2023
                                            </span>
                                          </div>
                                          <div className="col-lg-6">
                                            <span className="sub-text">
                                              Order Review
                                            </span>
                                            <span className="caption-text">
                                              <span className="tb-lead">
                                                <em className="icon ni ni-star-fill text-success" />
                                                <em className="icon ni ni-star-fill text-success" />
                                                <em className="icon ni ni-star-fill text-success" />
                                                <em className="icon ni ni-star-fill text-success" />
                                                <em className="icon ni ni-star-fill text-success" />
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-inner">
                                <ul className="pagination justify-content-center justify-content-md-start">
                                  <li className="page-item">
                                    <a className="page-link" href="#">
                                      Prev
                                    </a>
                                  </li>
                                  <li className="page-item">
                                    <a className="page-link" href="#">
                                      1
                                    </a>
                                  </li>
                                  <li className="page-item">
                                    <a className="page-link" href="#">
                                      2
                                    </a>
                                  </li>
                                  <li className="page-item">
                                    <span className="page-link">
                                      <em className="icon ni ni-more-h" />
                                    </span>
                                  </li>
                                  <li className="page-item">
                                    <a className="page-link" href="#">
                                      6
                                    </a>
                                  </li>
                                  <li className="page-item">
                                    <a className="page-link" href="#">
                                      Next
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* .card-inner */}
                      <div className="card-aside card-aside-left user-aside">
                        <div className="card-inner-group" data-simplebar="">
                          <div className="card-inner">
                            <div className="user-card">
                              <div
                                className="minecraft-head"
                                style={{ marginRight: "1rem" }}
                              >
                                <img src="https://visage.surgeplay.com/head/512/9e8a126dbbd245bababc988ca2893b99" />
                              </div>
                              <div className="user-info">
                                <span className="lead-text">Maciel</span>
                                <span className="sub-text">
                                  kaueandretti@gmail.com
                                </span>
                              </div>
                              {/*

                                                        <div class="user-action">
                                                          <div class="dropdown">
                                                              <a class="btn btn-icon btn-trigger me-n2" data-bs-toggle="dropdown" href="#"><em class="icon ni ni-more-v"></em></a>
                                                              <div class="dropdown-menu dropdown-menu-end">
                                                                  <ul class="link-list-opt no-bdr">
                                                                      <li><a href="#"><em class="icon ni ni-camera-fill"></em><span>Change Avatar</span></a></li>
                                                                  </ul>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      
                                                    */}
                            </div>
                            {/* .user-card */}
                          </div>
                          <div className="card-inner">
                            <div className="user-account-info py-0">
                              <div>
                                <h6 className="text-success">
                                  Account Verified{" "}
                                  <span className="text-success">
                                    <em className="icon ni ni-signal" />
                                  </span>
                                </h6>
                              </div>
                              <div
                                className="user-balance-sub"
                                style={{ marginTop: "0.3rem" }}
                              >
                                Joined at <span>27 January, 2023</span>
                              </div>
                            </div>
                          </div>
                          <div className="card-inner p-0">
                            <ul className="link-list-menu">
                              <li>
                                <a href="html/account.html">
                                  <em className="icon ni ni-user-fill-c" />
                                  <span>Account Infomation</span>
                                </a>
                              </li>
                              <li>
                                <a href="html/account-security.html">
                                  <em className="icon ni ni-lock-alt-fill" />
                                  <span>Account Settings</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="active"
                                  href="html/account-transactions.html"
                                >
                                  <em className="icon ni ni-coins" />
                                  <span>Account Transactions</span>
                                </a>
                              </li>
                              <li>
                                <a href="html/account-notifications.html">
                                  <em className="icon ni ni-bell" />
                                  <span>Notifications</span>
                                </a>
                              </li>
                              <li>
                                <a href="html/account.html">
                                  <em className="icon ni ni-grid-add-fill-c" />
                                  <span>Your Connections</span>
                                  <span
                                    className="badge bg-danger"
                                    style={{
                                      marginLeft: "0.8rem",
                                      marginTop: "-0.2rem",
                                    }}
                                  >
                                    Disabled
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
