import dynamic from "next/dynamic";

const Header = dynamic(() => import("../../Header"), { ssr: false });
const Footer = dynamic(() => import("../../Footer"), { ssr: false });

const CardUserAside = dynamic(() => import("../CardUserAside"), { ssr: false });

export default function AccountSecurityWrap() {
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
                                Account Settings
                              </h4>
                              <div className="nk-block-des">
                                <p>
                                  These settings are helps you keep your account
                                  secure.
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
                          <div className="card card-bordered">
                            <div className="card-inner-group">
                              <div className="card-inner">
                                <div className="between-center flex-wrap flex-md-nowrap g-3">
                                  <div className="nk-block-text">
                                    <h6>Open for Comissions</h6>
                                    <p>
                                      You can change this option to receive
                                      notifications from the platform whenever
                                      you want.
                                    </p>
                                  </div>
                                  <div className="nk-block-actions">
                                    <ul className="align-center gx-3">
                                      <li className="order-md-last">
                                        <div className="custom-control custom-switch me-n2">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="activity-log1"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="activity-log1"
                                          />
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="card-inner">
                                <div className="between-center flex-wrap g-3">
                                  <div className="nk-block-text">
                                    <h6>Change Password</h6>
                                    <p>
                                      Protect your account with a secure
                                      password.
                                    </p>
                                  </div>
                                  <div className="nk-block-actions flex-shrink-sm-0">
                                    <ul className="align-center flex-wrap flex-sm-nowrap gx-3 gy-2">
                                      <li className="order-md-last">
                                        <a
                                          href="#"
                                          className="btn btn-primary"
                                          data-bs-toggle="modal"
                                          data-bs-target="#modalSenha"
                                        >
                                          Change Password
                                        </a>
                                      </li>
                                      <li>
                                        <em className="text-soft text-date fs-12px">
                                          Last changed:{" "}
                                          <span>22 January, 2023</span>
                                        </em>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="card-inner">
                                <div className="between-center flex-wrap flex-md-nowrap g-3">
                                  <div className="nk-block-text">
                                    <h6>
                                      Two Factor Auth &nbsp;{" "}
                                      <span className="badge bg-danger badge-dim ms-0">
                                        Disabled
                                      </span>
                                    </h6>
                                    <p>
                                      Keep your account safe with two-factor
                                      authentication security.
                                    </p>
                                  </div>
                                  <div className="nk-block-actions">
                                    <a
                                      href="#"
                                      className="btn btn-primary"
                                      data-bs-toggle="modal"
                                      data-bs-target="#modal2Auth"
                                    >
                                      Click to Enable
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardUserAside />
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
