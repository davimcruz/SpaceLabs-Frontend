import dynamic from "next/dynamic";

const Header = dynamic(() => import("../../Header"), { ssr: false });
const Footer = dynamic(() => import("../../Footer"), { ssr: false });

const CardUserAside = dynamic(() => import("../CardUserAside"), { ssr: false });

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
