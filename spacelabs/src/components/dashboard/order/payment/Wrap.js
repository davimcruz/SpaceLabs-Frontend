import dynamic from "next/dynamic";

const Header = dynamic(() => import("../../Header"), { ssr: false });
const Footer = dynamic(() => import("../../Footer"), { ssr: false });

export default function PaymentWrap() {
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
                      <a
                        href="#"
                        className="nk-msg-profile-toggle profile-toggle active"
                      >
                        <em className="icon ni ni-arrow-left" />
                      </a>
                    </div>
                    {/* .nk-msg-head */}
                    <div className="nk-msg-reply nk-reply" data-simplebar="">
                      <div className="nk-msg-head py-4 d-lg-none">
                        <h4 className="title">
                          Unable to select currency asd order
                        </h4>
                        <ul className="nk-msg-tags">
                          <li>
                            <span className="label-tag">
                              <em className="icon ni ni-flag-fill" />{" "}
                              <span>Technical Problem</span>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <br />
                      <div className="nk-reply-meta">
                        <div className="nk-reply-body">
                          <div className="nk-reply-entry entry note">
                            <div>
                              <h6>Method Payment</h6>
                            </div>
                            <p
                              className="text-muted"
                              style={{ marginTop: "0.5rem" }}
                            >
                              Select the payment method that you and your
                              freelancer are willing to accept. To further
                              enhance your experience, remember to{" "}
                              <span>
                                <a href="terms-of-service.html">
                                  read the terms
                                </a>
                              </span>{" "}
                              before you make the payment.
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
                              <img src="/assets/images/purple.png" />
                            </div>
                            <div className="user-name">
                              <h6>
                                Space Payment{" "}
                                <span style={{ fontSize: "0.9rem" }}>
                                  (Bot)
                                </span>
                              </h6>{" "}
                            </div>
                          </div>
                          <div className="date-time">Now</div>
                        </div>
                        <div className="nk-reply-body">
                          <div className="nk-reply-entry entry">
                            <p>
                              Hello Maciel, after you make the payment we will
                              receive your payment and it will be passed on to
                              the Freelancer when the order is finalized and
                              evaluated by our support.
                            </p>
                            <p className="text-muted">
                              (When you are done, just click on the finalize
                              order)
                            </p>
                          </div>
                          <br />
                          <ul className="custom-control-group">
                            <li>
                              <div className="custom-control custom-control-sm custom-radio custom-control-pro">
                                <input
                                  type="radio"
                                  className="custom-control-input"
                                  name="btnRadio"
                                  id="btnRadio1"
                                  defaultChecked=""
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="btnRadio1"
                                >
                                  PayPal
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-control-sm custom-radio custom-control-pro">
                                <input
                                  type="radio"
                                  className="custom-control-input"
                                  name="btnRadio"
                                  id="btnRadio2"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="btnRadio2"
                                >
                                  Stripe
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-control-sm custom-radio custom-control-pro">
                                <input
                                  type="radio"
                                  className="custom-control-input"
                                  name="btnRadio"
                                  id="btnRadio3"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="btnRadio3"
                                >
                                  Credits
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <br />
                        <ul
                          className="nk-reply-form-actions g-1"
                          style={{ marginLeft: "2.8rem" }}
                        >
                          <li>
                            <a
                              href="html/order-chat.html"
                              className="btn btn-dim btn-md btn-outline-success"
                            >
                              Complete Order
                            </a>
                          </li>
                          <li>
                            <a
                              href="html/faq.html"
                              className="btn btn-dim btn-md btn-outline-light"
                            >
                              Any Question?
                            </a>
                          </li>
                          <li></li>
                        </ul>
                      </div>
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
