import dynamic from "next/dynamic";

const Header = dynamic(() => import("../../Header"), { ssr: false });
const Footer = dynamic(() => import("../../Footer"), { ssr: false });

export default function AccountNotificationsWrap() {
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
                                Notification Settings
                              </h4>
                              <div className="nk-block-des">
                                <p>
                                  Notifications will only be received if you
                                  enable them.
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
                          </div>
                        </div>
                        {/* .nk-block-head */}
                        <div className="nk-block-head nk-block-head-sm">
                          <div className="nk-block-head-content">
                            <h6>Security Notifications</h6>
                            <p>
                              Receive notifications directly from the platform.
                            </p>
                          </div>
                        </div>
                        {/* .nk-block-head */}
                        <div className="nk-block-content">
                          <div className="gy-3">
                            <div className="g-item">
                              <div className="custom-control custom-switch">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  defaultChecked=""
                                  id="unusual-activity"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="unusual-activity"
                                >
                                  Call me when there is unusual activity
                                </label>
                              </div>
                            </div>
                            <div className="g-item">
                              <div className="custom-control custom-switch">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="changes-account"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="changes-account"
                                >
                                  Notify me when there are changes in my account
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* .nk-block-content */}
                        <div className="nk-block-head nk-block-head-sm">
                          <div className="nk-block-head-content">
                            <h6>Updates &amp; Order</h6>
                            <p>Stay informed of all SpaceLabs news.</p>
                          </div>
                        </div>
                        {/* .nk-block-head */}
                        <div className="nk-block-content">
                          <div className="gy-3">
                            <div className="g-item">
                              <div className="custom-control custom-switch">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="update-platform"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="update-platform"
                                >
                                  Let me know when there is a new update on the
                                  platform
                                </label>
                              </div>
                            </div>
                            <div className="g-item">
                              <div className="custom-control custom-switch">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="form-opens"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="form-opens"
                                >
                                  Notify me when forms are opened
                                </label>
                              </div>
                            </div>
                            <div className="g-item">
                              <div className="custom-control custom-switch">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  defaultChecked=""
                                  id="inform-order"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="inform-order"
                                >
                                  Inform me about the status of my order
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* .nk-block-content */}
                      </div>
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
                                  href="html/account-notifications.html"
                                >
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
