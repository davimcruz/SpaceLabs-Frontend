import Footer from "../Footer";
import Header from "../Header";

export default function TeamApplyWrap() {
  return (
    <>
      <div className="nk-wrap">
        <Header />

        <div className="nk-content ">
          <div className="container-fluid">
            <div className="nk-content-inner">
              <div className="nk-content-body">
                <div className="nk-block-head nk-block-head-sm">
                  <div className="nk-block-between">
                    <div className="nk-block-head-content">
                      <h3 className="nk-block-title page-title">
                        Join our Team
                      </h3>
                      <div className="nk-block-des text-soft">
                        <p>
                          Yes, you can be part of our team, receive cash and
                          exclusive advantages.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nk-block">
                  <div className="row g-gs">
                    <div className="col-md-6">
                      <div className="card card-bordered">
                        <div className="card-inner">
                          <h4 className="card-title mb-1">
                            Senior Minecraft Builder
                          </h4>
                          <div className="d-flex justify-content-between align-items-end">
                            <ul className="pt-2 gy-1">
                              <li>
                                <em className="icon ni ni-calender-date" />
                                <span>Open until March 3rd</span>
                              </li>
                              <li>
                                <em className="icon ni ni-briefcase" />
                                <span>Fulltime</span>
                              </li>
                            </ul>
                            <span className="badge badge-dim badge-sm bg-success">
                              Open Application
                            </span>
                          </div>
                          <div className="collapse show" id="collapseDes1">
                            <div className="divider" />
                            <div className="rating-card-description">
                              <h5 className="card-title">Requirements</h5>
                              <p className="text-muted">
                                A few requirements are necessary before you can
                                start your application, we have made a short
                                list for you to be aware of these.
                              </p>
                              <ul className="pt-2 gy-1">
                                <li>
                                  <em className="icon ni ni-plus-sm" />
                                  <span>More than 2 years of experience</span>
                                </li>
                                <li>
                                  <em className="icon ni ni-plus-sm" />
                                  <span>
                                    Use at least two tools from at least one
                                    language
                                  </span>
                                </li>
                                <li>
                                  <em className="icon ni ni-plus-sm" />
                                  <span>
                                    Have a recent and well-judged portfolio
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer rating-card-footer bg-light border-top d-flex align-center justify-content-between">
                          <a
                            className="switch-text"
                            data-bs-toggle="collapse"
                            href="#collapseDes1"
                          >
                            <div className="link link-gray switch-text-normal">
                              <span>Less Info</span>
                              <em className="icon ni ni-upword-ios" />
                            </div>
                            <div className="link link-gray switch-text-collapsed">
                              <span>More Info</span>
                              <em className="icon ni ni-downward-ios" />
                            </div>
                          </a>
                          <a href="#" className="btn btn-primary disabled">
                            Apply
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card card-bordered">
                        <div className="card-inner">
                          <h4 className="card-title mb-1">
                            Senior Web Developer
                          </h4>
                          <div className="d-flex justify-content-between align-items-end">
                            <ul className="pt-2 gy-1">
                              <li>
                                <em className="icon ni ni-calender-date" />
                                <span>
                                  <strong>Closed until further notice</strong>
                                </span>
                              </li>
                              <li>
                                <em className="icon ni ni-briefcase" />
                                <span>
                                  <strong>Front and BackEnd</strong>
                                </span>
                              </li>
                            </ul>
                            <span className="badge badge-sm badge-dim bg-danger ">
                              Closed on February 24th
                            </span>
                          </div>
                          <div className="collapse show" id="collapseDes2">
                            <div className="divider" />
                            <div className="rating-card-description">
                              <h5 className="card-title">Requirements</h5>
                              <p className="text-muted">
                                A few requirements are necessary before you can
                                start your application, we have made a short
                                list for you to be aware of these.
                              </p>
                              <ul className="pt-2 gy-1">
                                <li>
                                  <em className="icon ni ni-plus-sm" />
                                  <span>More than 2 years of experience</span>
                                </li>
                                <li>
                                  <em className="icon ni ni-plus-sm" />
                                  <span>
                                    Use at least two tools from at least one
                                    language
                                  </span>
                                </li>
                                <li>
                                  <em className="icon ni ni-plus-sm" />
                                  <span>
                                    Have a recent and well-judged portfolio
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer rating-card-footer bg-light border-top d-flex align-center justify-content-between">
                          <a
                            className="switch-text"
                            data-bs-toggle="collapse"
                            href="#collapseDes2"
                          >
                            <div className="link link-gray switch-text-normal">
                              <span>Less Info</span>
                              <em className="icon ni ni-upword-ios" />
                            </div>
                            <div className="link link-gray switch-text-collapsed">
                              <span>More Info</span>
                              <em className="icon ni ni-downward-ios" />
                            </div>
                          </a>
                          <button
                            className="btn btn-primary"
                            style={{ pointerEvents: "none" }}
                            type="button"
                            disabled=""
                          >
                            <span>Start Application</span>
                          </button>
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
