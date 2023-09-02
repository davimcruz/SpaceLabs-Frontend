import dynamic from "next/dynamic";

const Header = dynamic(() => import("../Header"), { ssr: false });
const Footer = dynamic(() => import("../Footer"), { ssr: false });

export default function AccountWrap() {
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
                                Account Informations
                              </h4>
                              <div className="nk-block-des">
                                <p>
                                  Basic account information, such as username,
                                  in-game nick, e-mail address, and more.
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
                        <div className="nk-block">
                          <div className="nk-data data-list">
                            <div className="data-head">
                              <h6 className="overline-title">Account</h6>
                            </div>
                            <div className="data-item">
                              <div className="data-col">
                                <span className="data-label">
                                  <h6 style={{ fontSize: 16 }}>Your name</h6>
                                </span>
                                <span className="data-value">Maciel</span>
                              </div>
                              <div className="data-col data-col-end">
                                <span className="data-more disable">
                                  <em className="icon ni ni-lock-alt" />
                                </span>
                              </div>
                            </div>
                            {/* data-item */}
                            <div className="data-item">
                              <div className="data-col">
                                <span className="data-label">
                                  <h6 style={{ fontSize: 16 }}>
                                    Your nick in game
                                  </h6>
                                </span>
                                <span className="data-value">maciel_</span>
                              </div>
                              <div className="data-col data-col-end">
                                <span className="data-more disable">
                                  <em className="icon ni ni-lock-alt" />
                                </span>
                              </div>
                            </div>
                            {/* data-item */}
                            <div className="data-item">
                              <div className="data-col">
                                <span className="data-label">
                                  <h6 style={{ fontSize: 16 }}>
                                    Current Email
                                  </h6>
                                </span>
                                <span className="data-value">
                                  macielpacheca@gmail.com
                                </span>
                              </div>
                              <div className="data-col data-col-end">
                                <span className="data-more disable">
                                  <em className="icon ni ni-lock-alt" />
                                </span>
                              </div>
                            </div>
                            {/* data-item */}
                            <div className="data-item">
                              <div className="data-col">
                                <span className="data-label">
                                  <h6 style={{ fontSize: 16 }}>Your plan</h6>
                                </span>
                                <span className="data-value">
                                  <span className="badge bg-light">
                                    <strong>Beta</strong>
                                  </span>
                                </span>
                              </div>
                              <div className="data-col data-col-end">
                                <span className="data-more disable">
                                  <em className="icon ni ni-shield" />
                                </span>
                              </div>
                            </div>
                            {/* data-item */}
                          </div>
                          {/* data-list */}
                        </div>
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
                                  Your account is verified{" "}
                                </h6>
                              </div>
                              <div
                                className="user-balance-sub"
                                style={{ marginTop: "0.3rem" }}
                              >
                                Checked at <span>27 January, 2023</span>
                              </div>
                            </div>
                          </div>
                          <div className="card-inner p-0">
                            <ul className="link-list-menu">
                              <li>
                                <a className="active" href="html/account.html">
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
