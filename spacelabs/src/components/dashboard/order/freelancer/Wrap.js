import dynamic from "next/dynamic";

const Header = dynamic(() => import("../../Header"), { ssr: false });
const Footer = dynamic(() => import("../../Footer"), { ssr: false });

export default function FreelancerWrap() {
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
                        <span className="nk-h6-head">Order #00014</span>{" "}
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
                      {/*

                                      <div class="nk-reply-meta">
                                          <div class="nk-reply-body">
                                              <div class="nk-reply-entry entry note">
                                                  <div><h6>Method Payment</h6></div>
                                                  <p class="text-muted" style="margin-top: 0.5rem;">Make your request as detailed as possible, write down precisely the smallest details of theme, professional, entertainment, and the purpose of the project.</p>

                                              </div>
                                          </div>
                                      </div>
                                  
                                  

                                    */}
                      <div className="nk-reply-meta">
                        <div className="nk-reply-body">
                          <div className="nk-reply-entry entry note">
                            <div>
                              <h6>Freelancer Listing</h6>
                            </div>
                            <p
                              className="text-muted"
                              style={{ marginTop: "0.5rem" }}
                            >
                              Find the ideal professional for your project:
                              choose the right freelancer among the recommended
                              options and ensure that your goals are realized.
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
                              <img src="./images/purple.png" />
                            </div>
                            <div className="user-name">
                              <h6>
                                Space Order{" "}
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
                              Choose the payment method that suits you best,
                              <br /> our options are between PayPal and Stripe.
                              All guaranteed with security and practicality.
                            </p>
                            <p className="text-muted">
                              (If you need help, we are here, click on get
                              support)
                            </p>
                          </div>
                          <li style={{ marginTop: "0.9rem" }}>
                            <a
                              href="#"
                              className="btn btn-dim btn-sm btn-outline-light"
                            >
                              <em className="icon ni ni-external" />
                              <span>Get Support</span>
                            </a>
                          </li>
                        </div>
                      </div>
                      <div
                        className="col-xl-12 col-xxl-12"
                        style={{ marginTop: "-0.5rem" }}
                      >
                        <div
                          className="card card-bordered"
                          style={{ height: "100%" }}
                        >
                          <div className="card-inner-group">
                            <div className="card-inner p-0">
                              <div className="nk-tb-list nk-tb-tnx">
                                <div className="nk-tb-item nk-tb-head">
                                  <div className="nk-tb-col">
                                    <span>Freelancer</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-xxl">
                                    <span>Order Value</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-xxl">
                                    <span>Estimated Time</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-xxl text-left">
                                    <span>Freelancer Information</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-lg text-center">
                                    <span>Your Options</span>
                                  </div>
                                  <div className="nk-tb-col nk-tb-col-tools" />
                                </div>
                                <div className="nk-tb-item">
                                  <div className="nk-tb-col">
                                    <div className="nk-tnx-type">
                                      <div
                                        className="minecraft-head"
                                        style={{ marginRight: "1rem" }}
                                      >
                                        <img src="https://visage.surgeplay.com/head/192/853c80ef3c3749fdaa49938b674adae6?y=35" />
                                      </div>
                                      <div className="nk-tnx-type-text">
                                        <span className="tb-lead">
                                          <h6>Maciel</h6>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="nk-tb-col tb-col-lg">
                                    <span className="tb-lead">
                                      <h6 className="text-success">$99.99</h6>
                                    </span>
                                  </div>
                                  <div className="nk-tb-col tb-col-lg">
                                    <span className="tb-lead">
                                      <em className="icon ni ni-calendar-booking" />{" "}
                                      1 month
                                    </span>
                                  </div>
                                  <div className="nk-tb-col">
                                    <li>
                                      <a
                                        href="#modalFreelancer"
                                        data-bs-toggle="modal"
                                        className="btn btn-dim btn-sm btn-outline-light"
                                      >
                                        <em className="icon ni ni-template" />
                                        <span>Informations</span>
                                      </a>
                                    </li>
                                  </div>
                                  <div className="nk-tb-col">
                                    <li style={{ marginRight: "-0.5rem" }}>
                                      <a
                                        href="html/order-payment.html"
                                        className="btn btn-dim btn-sm btn-outline-success"
                                      >
                                        <em
                                          className="icon ni ni-check-round-fill
                                                              "
                                        />
                                        <span>Accept</span>
                                      </a>
                                    </li>
                                  </div>
                                  <div className="nk-tb-col ">
                                    <li style={{ marginLeft: "-3rem" }}>
                                      <a
                                        href="#"
                                        className="btn btn-dim btn-sm btn-outline-danger"
                                      >
                                        <em className="icon ni ni-cross-c" />
                                      </a>
                                    </li>
                                  </div>
                                </div>
                                <div className="nk-tb-item">
                                  <div className="nk-tb-col">
                                    <div className="nk-tnx-type">
                                      <div
                                        className="minecraft-head"
                                        style={{ marginRight: "1rem" }}
                                      >
                                        <img src="https://visage.surgeplay.com/head/192/cecea4da3bc941f9a9109e7be63e1295?y=35" />
                                      </div>
                                      <div className="nk-tnx-type-text">
                                        <span className="tb-lead">
                                          <h6>tuskzin</h6>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="nk-tb-col tb-col-lg">
                                    <span className="tb-lead">
                                      <h6 className="text-success">$199.99</h6>
                                    </span>
                                  </div>
                                  <div className="nk-tb-col tb-col-lg">
                                    <span className="tb-lead">
                                      <em className="icon ni ni-calendar-booking" />{" "}
                                      1 month
                                    </span>
                                  </div>
                                  <div className="nk-tb-col">
                                    <li>
                                      <a
                                        href="#"
                                        className="btn btn-dim btn-sm btn-outline-light"
                                      >
                                        <em className="icon ni ni-template" />
                                        <span>Informations</span>
                                      </a>
                                    </li>
                                  </div>
                                  <div className="nk-tb-col">
                                    <li style={{ marginRight: "-0.5rem" }}>
                                      <a
                                        href="html/order-payment.html"
                                        className="btn btn-dim btn-sm btn-outline-success"
                                      >
                                        <em
                                          className="icon ni ni-check-round-fill
                                                              "
                                        />
                                        <span>Accept</span>
                                      </a>
                                    </li>
                                  </div>
                                  <div className="nk-tb-col ">
                                    <li style={{ marginLeft: "-3rem" }}>
                                      <a
                                        href="#"
                                        className="btn btn-dim btn-sm btn-outline-danger"
                                      >
                                        <em className="icon ni ni-cross-c" />
                                      </a>
                                    </li>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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

        <div className="modal fade" tabIndex={-1} id="modalFreelancer">
          <div className="modal-dialog modal-lg" role="document">
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
                  <h4 className="title d-none d-lg-block">
                    <span className="nk-h6-head">Selecting Freelancers</span>{" "}
                    for Your Order
                  </h4>
                </div>
                <div className="nk-tnx-details">
                  <div className="nk-block-between flex-wrap g-3">
                    <div className="nk-tnx-type">
                      <div
                        className="nk-tnx-type-icon"
                        style={{ background: "none" }}
                      >
                        <img src="https://visage.surgeplay.com/head/512/853c80ef3c3749fdaa49938b674adae6?y=70" />
                      </div>
                      <div className="nk-tnx-type-text">
                        <h5 className="title">
                          Maciel
                          <span
                            className="badge badge-dim rounded-pill bg-outline-success"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Freelancer Verified"
                            style={{
                              marginTop: "-0.38rem",
                              marginRight: "-0.5rem",
                            }}
                          >
                            <em className="icon ni ni-check" />
                          </span>
                        </h5>
                        <span className="sub-text mt-n1">
                          {" "}
                          Freelancer since June 29, 2023.
                        </span>
                      </div>
                    </div>
                    <ul className="align-center flex-wrap gx-3">
                      <li>
                        <a
                          href="#"
                          className="btn btn-dim btn-sm btn-outline-light"
                        >
                          <em className="icon ni ni-menu-squared" />
                          <span>View Portfolio</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="nk-modal-head mt-sm-5 mt-4 mb-4">
                    <h5 className="title">Comment on your order</h5>
                    <span className="sub-text mt-n1">
                      I liked your request, my name is Maciel, I recently joined
                      the SpaceLabs team but I have been working with
                      Freelancing for over 4 years, I have the experience and
                      ability to completely handle your request in the way you
                      prefer.
                    </span>
                  </div>
                  <div className="row gy-3">
                    <div className="col-lg-6">
                      <h6 className="title">All Reviews</h6>
                      <span className="tb-lead">
                        <em className="icon ni ni-star-fill text-warning" />
                        <em className="icon ni ni-star-fill text-warning" />
                        <em className="icon ni ni-star-fill text-warning" />
                        <em className="icon ni ni-star-fill text-warning" />
                        <em className="icon ni ni-star-fill text-warning" />
                        <span className="nk-h6-head" style={{ fontSize: 14 }}>
                          (234)
                        </span>
                      </span>
                    </div>
                    <div className="col-lg-6">
                      <h6 className="title">Quotation</h6>
                      <span
                        className="tb-lead nk-h6-head"
                        style={{ fontSize: 16 }}
                      >
                        $99.99
                      </span>
                    </div>
                    <div className="col-lg-6">
                      <h6 className="title">Completion Deadline</h6>
                      <span className="tb-lead" style={{ fontSize: 16 }}>
                        Maximum 2 weeks
                      </span>
                    </div>
                    <div className="col-lg-6">
                      <h6 className="title">Freelancer Availability</h6>
                      <span className="tb-lead" style={{ fontSize: 16 }}>
                        6 to 12 hours a day
                      </span>
                    </div>
                  </div>
                  {/* .row */}
                </div>
                {/* .nk-tnx-details */}
              </div>
              {/* .modal-body */}
            </div>
            {/* .modal-content */}
          </div>
          {/* .modal-dialog */}
        </div>
        {/* .modal */}

        <Footer />
      </div>
    </>
  );
}
