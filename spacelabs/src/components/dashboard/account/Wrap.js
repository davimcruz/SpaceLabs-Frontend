import dynamic from "next/dynamic";

const Header = dynamic(() => import("../Header"), { ssr: false });
const Footer = dynamic(() => import("../Footer"), { ssr: false });

const CardUserAside = dynamic(() => import("./CardUserAside"), { ssr: false });

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
