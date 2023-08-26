import dynamic from "next/dynamic";

const Header = dynamic(() => import("../Header"), { ssr: false });
const Footer = dynamic(() => import("../Footer"), { ssr: false });

export default function OrderWrap() {
  return (
    <>
      <div className="nk-wrap">
        <Header />

        <div className="nk-content ">
          <div className="container-fluid">
            <div className="nk-content-inner">
              <div className="nk-content-body">
                <div className="nk-msg">
                  <div className="nk-msg-body bg-white profile-shown">
                    <div className="nk-msg-head">
                      <h4 className="title d-none d-lg-block">
                        <span className="nk-h6-head">Order #0014</span>{" "}
                        Minecraft Builder
                      </h4>
                      <div className="nk-msg-head-meta">
                        <div className="d-none d-lg-block">
                          <ul className="nk-msg-tags">
                            <li>
                              <strong>Created at</strong> 24 January, 2023 at
                              09:00 PM
                            </li>
                          </ul>
                        </div>
                        <div className="d-lg-none">
                          <a
                            href="#"
                            className="btn btn-icon btn-trigger nk-msg-hide ms-n1"
                          >
                            <em className="icon ni ni-arrow-left" />
                          </a>
                        </div>
                        <ul className="nk-msg-actions">
                          <li>
                            <button
                              type="button"
                              className="btn btn-dim btn-sm btn-outline-danger"
                              data-bs-container="body"
                              data-bs-toggle="popover"
                              data-bs-placement="top"
                              data-bs-content="Are you sure? Click again to confirm."
                            >
                              <em
                                className="icon ni ni-trash-alt"
                                style={{ fontSize: 15, marginRight: 10 }}
                              />{" "}
                              Cancel Order
                            </button>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="btn btn-dim btn-sm btn-outline-light"
                            >
                              <em className="icon ni ni-map" />
                              <span>Order Guide</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a className="nk-msg-profile-toggle profile-toggle active">
                        <em className="icon ni ni-arrow-left" />
                      </a>
                    </div>
                    {/* .nk-msg-head */}
                    <div className="nk-msg-reply nk-reply" data-simplebar="">
                      <br />
                      <div className="nk-reply-meta">
                        <div className="nk-reply-body">
                          <div className="nk-reply-entry entry note">
                            <div>
                              <h6>How do you want your order?</h6>
                            </div>
                            <p
                              className="text-muted"
                              style={{ marginTop: "0.5rem" }}
                            >
                              Please detail your project, what it is about, what
                              theme you want, send references if possible, and
                              what is the target date for completion of the
                              project.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="nk-reply-item">
                        <div className="nk-reply-header">
                          <div className="user-card">
                            <div
                              className="user-avatar sm"
                              style={{ background: "none" }}
                            >
                              <img src="/assets/images/spacelabs.png" />
                            </div>
                            <div className="user-name">
                              <h6>
                                Support Space{" "}
                                <span style={{ fontSize: "0.9rem" }}>
                                  today at 14:51 PM
                                </span>
                              </h6>{" "}
                            </div>
                          </div>
                          <div className="date-time">Now</div>
                        </div>
                        <div className="nk-reply-body">
                          <div className="nk-reply-entry entry">
                            <p>
                              Well done{" "}
                              <strong className="text-white">Maciel,</strong>
                            </p>
                            <p>
                              Describe the project in the chat below, there is
                              no character limit.
                            </p>
                            <p className="text-muted">
                              (When you are ready, click &quot;continue step&quot;)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="nk-reply-form">
                        <div className="tab-content">
                          <div className="tab-pane active" id="reply-form">
                            <div className="nk-reply-form-editor">
                              <div className="nk-reply-form-field">
                                <textarea
                                  className="form-control form-control-simple no-resize"
                                  placeholder="Send details to Support Space"
                                  defaultValue={""}
                                />
                              </div>
                              <div className="nk-reply-form-tools">
                                <ul className="nk-reply-form-actions g-1">
                                  <li>
                                    <a
                                      href="html/order-freelancer.html"
                                      className="btn btn-dim btn-md btn-outline-success"
                                    >
                                      Continue Step
                                    </a>
                                  </li>
                                  <li>
                                    <div className="form-control-wrap">
                                      <div className="form-file">
                                        <input
                                          type="file"
                                          multiple=""
                                          className="form-file-input"
                                          id="customMultipleFiles"
                                        />
                                        <label
                                          className="form-file-label"
                                          htmlFor="customMultipleFiles"
                                        >
                                          Choose files
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li></li>
                                </ul>
                              </div>
                              {/* .nk-reply-form-tools */}
                            </div>
                            {/* .nk-reply-form-editor */}
                          </div>
                          <div className="tab-pane" id="note-form">
                            <div className="nk-reply-form-editor">
                              <div className="nk-reply-form-field">
                                <textarea
                                  className="form-control form-control-simple no-resize"
                                  placeholder="Type your private note, that only visible to internal team."
                                  defaultValue={""}
                                />
                              </div>
                              <div className="nk-reply-form-tools">
                                <ul className="nk-reply-form-actions g-1">
                                  <li className="me-2">
                                    <button
                                      className="btn btn-primary"
                                      type="submit"
                                    >
                                      Add Note
                                    </button>
                                  </li>
                                  <li>
                                    <a
                                      className="btn btn-icon btn-sm"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Upload Attachment"
                                      href="#"
                                    >
                                      <em className="icon ni ni-clip-v" />
                                    </a>
                                  </li>
                                </ul>
                                <div className="dropdown">
                                  <a
                                    href="#"
                                    className="dropdown-toggle btn-trigger btn btn-icon me-n2"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em className="icon ni ni-more-v" />
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <ul className="link-list-opt no-bdr">
                                      <li>
                                        <a href="#">
                                          <span>Another Option</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <span>More Option</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              {/* .nk-reply-form-tools */}
                            </div>
                            {/* .nk-reply-form-editor */}
                          </div>
                        </div>
                      </div>
                      {/* .nk-reply-form */}
                    </div>
                    {/* .nk-reply */}
                    <div className="nk-msg-profile " data-simplebar="">
                      <div className="card">
                        <div className="card-inner-group">
                          <div className="card-inner">
                            <div
                              className="user-card user-card-s2"
                              style={{ marginBottom: "-2.3rem" }}
                            >
                              <div
                                className="user-avatar md"
                                style={{
                                  background: "none",
                                  marginBottom: "-10%",
                                }}
                              >
                                <img src="https://visage.surgeplay.com/head/512/9e8a126dbbd245bababc988ca2893b99" />
                              </div>
                              <div className="user-info">
                                <h5>
                                  Maciel{" "}
                                  <span
                                    className="badge bg-outline-light"
                                    style={{
                                      marginTop: "0.75rem",
                                      marginLeft: "0.1rem",
                                    }}
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Beta User"
                                  >
                                    <em className="icon ni ni-shield" />
                                  </span>
                                </h5>
                                <p>Member since 04 Feb, 2018</p>
                                <br />
                              </div>
                            </div>
                            <div className="row text-center g-1">
                              <div className="col-4">
                                <div className="profile-stats">
                                  <span className="amount">197</span>
                                  <span className="sub-text">Total Order</span>
                                </div>
                              </div>
                              <div className="col-4">
                                <div className="profile-stats">
                                  <span className="amount">78</span>
                                  <span className="sub-text">Rated</span>
                                </div>
                              </div>
                              <div className="col-4">
                                <div className="profile-stats">
                                  <span className="amount">1</span>
                                  <span className="sub-text">Progress</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-inner">
                            <div className="aside-wg">
                              <h6 className="overline-title-alt mb-2">
                                This Order
                              </h6>
                              <div className="row gx-1 gy-3">
                                <div className="col-6">
                                  <span className="sub-text">
                                    Order Status{" "}
                                  </span>
                                  <span className="lead-text text-warning">
                                    Pending
                                  </span>
                                </div>
                                <div className="col-6">
                                  <span className="sub-text">Customer</span>
                                  <span>(You)</span>
                                </div>
                                <div className="col-6">
                                  <span className="sub-text">Order Number</span>
                                  <span className="grad-text">º00014</span>
                                </div>
                                <div className="col-6">
                                  <span className="sub-text">Freelancer</span>
                                  <span className="lead-text text-light">
                                    <h6>-</h6>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              className="aside-wg"
                              style={{ marginTop: "0.35rem" }}
                            >
                              <br />
                              <h6 className="overline-title-alt mb-2">
                                Your Information
                              </h6>
                              <ul className="user-contacts">
                                <li>
                                  <em className="icon ni ni-emails" />
                                  <span>kauecarv****@gmail.com</span>
                                </li>
                                <li>
                                  <em className="icon ni ni-calendar" />
                                  <span>Since at 24 February, 2022</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* .nk-msg-profile */}
                  </div>
                  {/* .nk-msg-body */}
                </div>
                {/* .nk-msg */}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
