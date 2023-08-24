import React from "react";

const Header = () => {
  return (
    <div className="nk-header nk-header-fixed is-light">
      <div className="container-fluid">
        <div className="nk-header-wrap" style={{ height: "4rem" }}>
          <div className="nk-menu-trigger d-xl-none ms-n1">
            <a
              href="#"
              className="nk-nav-toggle nk-quick-nav-icon"
              data-target="sidebarMenu"
            >
              <em className="icon ni ni-menu" />
            </a>
          </div>
          <div className="nk-header-brand d-xl-none">
            <a href="html/index.html" className="logo-link">
              <img
                className="logo-dark logo-img"
                src="/assets/images/spacelabs.png"
                alt="logo-dark"
              />
            </a>
          </div>
          <div className="nk-header-news d-none d-xl-block">
            <div className="nk-news-list">
              <div className="nk-news-list">
                <a className="nk-news-item" href="#">
                  <div className="nk-news-icon">
                    <em className="icon ni ni-quote-left" />
                  </div>
                  <div className="nk-news-text">
                    <h6 style={{ fontSize: 15 }}>
                      Read the <span className="text-primary">Terms</span> and
                      avoid being punished by the team.
                    </h6>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="nk-header-tools">
            <ul className="nk-quick-nav">
              <li className="dropdown language-dropdown d-none d-sm-block me-n1">
                <a
                  href="#"
                  className="dropdown-toggle nk-quick-nav-icon"
                  data-bs-toggle="dropdown"
                >
                  <div className="quick-icon border border-light">
                    <img
                      className="icon"
                      src="/assets/images/flags/english-sq.png"
                      alt=""
                    />
                  </div>
                </a>
                {/*

                              

                                 <div class="dropdown-menu dropdown-menu-end dropdown-menu-s1">
                                <ul class="language-list">
                                    <li>
                                        <a href="#" class="language-item">
                                            <img src="./images/flags/english.png" alt="" class="language-flag">
                                            <span class="language-name">English</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="language-item">
                                            <img src="./images/flags/spanish.png" alt="" class="language-flag">
                                            <span class="language-name">Español</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="language-item">
                                            <img src="./images/flags/french.png" alt="" class="language-flag">
                                            <span class="language-name">Français</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="language-item">
                                            <img src="./images/flags/turkey.png" alt="" class="language-flag">
                                            <span class="language-name">Türkçe</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                                
                             */}
              </li>
              <li className="dropdown user-dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <div className="user-toggle">
                    <div
                      className="user-avatar"
                      style={{
                        background: "none",
                        borderRadius: "none",
                      }}
                    >
                      <img
                        src="https://visage.surgeplay.com/head/512/9e8a126dbbd245bababc988ca2893b99"
                        style={{ borderRadius: "0%" }}
                      />
                      <span className="status dot dot-lg dot-success" />
                    </div>
                    <div className="user-info d-none d-md-block">
                      <div className="user-status">
                        <span className="badge bg-light">
                          <strong>Beta User</strong>
                        </span>
                      </div>
                      <div className="user-name dropdown-indicator">
                        <strong>Maciel</strong>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-md dropdown-menu-end dropdown-menu-s1">
                  <div className="dropdown-inner user-card-wrap bg-light d-none d-md-block">
                    <div className="user-card">
                      <img
                        src="https://visage.surgeplay.com/head/512/9e8a126dbbd245bababc988ca2893b99"
                        style={{ marginLeft: "-0.5rem", width: "17%" }}
                      />
                      <div className="user-info" style={{ marginLeft: "1rem" }}>
                        <span className="lead-text">
                          <strong>Maciel</strong>{" "}
                          <span style={{ marginLeft: "0.2rem" }}>
                            <strong className="text-success">
                              <em
                                className="icon ni ni-check-round-fill"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Account Verified"
                              />
                            </strong>
                          </span>{" "}
                        </span>
                        <span className="sub-text">
                          kauecarvalho
                          <span className="text-muted">
                            <em className="icon ni ni-at" />
                            gmail.com
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-inner">
                    <ul className="link-list">
                      <li>
                        <a href="html/account.html">
                          <em className="icon ni ni-user-fill-c" />
                          <span>View my Account</span>
                        </a>
                      </li>
                      <li>
                        <a href="html/account-security.html">
                          <em className="icon ni ni-opt-dot-fill" />
                          <span>My Account Settings</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown-inner">
                    <ul className="link-list">
                      <li>
                        <a href="#">
                          <em className="icon ni ni-arrow-long-left" />
                          <span>Sign out</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="dropdown notification-dropdown me-n1 ">
                <a
                  href="#"
                  className="dropdown-toggle nk-quick-nav-icon"
                  data-bs-toggle="dropdown"
                >
                  <div className="icon-status icon-status-info">
                    <em className="icon ni ni-bell" />
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-xl dropdown-menu-end dropdown-menu-s1">
                  <div className="dropdown-head">
                    <span className="sub-title nk-dropdown-title">
                      <h6 style={{ fontSize: "0.99rem" }}>
                        Your Notifications
                      </h6>
                    </span>
                    <a href="#">
                      <strong>
                        Delete all <em className="icon ni ni-trash-alt" />
                      </strong>
                    </a>
                  </div>
                  <div className="dropdown-body">
                    <div className="nk-notification">
                      <div className="nk-notification-item dropdown-inner">
                        <div
                          className="user-avatar"
                          style={{ background: "none" }}
                        >
                          <em
                            className="icon ni ni-notify text-success"
                            style={{ marginLeft: "-1rem" }}
                          />
                        </div>
                        <div className="nk-notification-content">
                          <h6 style={{ fontSize: 14 }}>
                            We found some freelancers to your order.
                          </h6>
                          <div className="nk-notification-time">
                            01/14/2023 at 09:23 AM
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nk-notification">
                      <div className="nk-notification-item dropdown-inner">
                        <div
                          className="user-avatar"
                          style={{ background: "none" }}
                        >
                          <em
                            className="icon ni ni-notify text-warning"
                            style={{ marginLeft: "-1rem" }}
                          />
                        </div>
                        <div className="nk-notification-content">
                          <h6 style={{ fontSize: 14 }}>
                            Applications to Team are Open
                          </h6>
                          <div className="nk-notification-time">
                            01/14/2023 at 09:23 AM
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
