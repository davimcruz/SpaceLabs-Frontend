import dynamic from 'next/dynamic';
import Footer from './Footer';

const Header = dynamic(() => import('./Header'), { ssr: false })

export default function DashboardWrap() {
  return (
    <>
      <div className="nk-wrap ">
        <Header />
        <div className="nk-content ">
          <div className="container-fluid">
            <div className="nk-content-inner">
              <div className="nk-content-body">
                <div className="nk-block-head nk-block-head-sm">
                  <div className="nk-block-between">
                    <div className="nk-block-head-content">
                      <h3 className="nk-block-title page-title">
                        Control Panel
                      </h3>
                      <div className="nk-block-des text-soft">
                        <p>
                          Here you can track your orders &amp; make new ones
                          with quality professionals.
                        </p>
                      </div>
                    </div>
                    <div className="nk-block-head-content">
                      <div className="toggle-wrap nk-block-tools-toggle">
                        <a
                          href="#"
                          className="btn btn-icon btn-trigger toggle-expand me-n1"
                          data-target="pageMenu"
                        >
                          <em className="icon ni ni-more-v" />
                        </a>
                        <div
                          className="toggle-expand-content"
                          data-content="pageMenu"
                        >
                          <ul className="nk-block-tools g-3">
                            <li className="nk-block-tools-opt">
                              <a
                                href="#"
                                className="btn btn-outline-light btn-dim"
                              >
                                <em className="icon ni ni-account-setting-fill" />
                                <span>Management Dashboard</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* .nk-block-head-content */}
                  </div>
                </div>
                <div className="nk-block">
                  <div className="row g-gs">
                    <div className="col-xxl-3">
                      <div
                        className="card card-bordered"
                        style={{ height: "22.8rem" }}
                      >
                        <div className="card-inner">
                          <div className="team">
                            {/*
                                                  <em class="card-hint icon ni ni-help-fill" data-bs-toggle="tooltip" data-bs-placement="left" title="Not Verified"></em>


                                                  */}
                            <span
                              className="badge badge-dim rounded-pill bg-success"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Linked Account"
                            >
                              <em className="icon ni ni-signal" />
                            </span>
                            <span
                              className="badge  rounded-pill bg-light"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Administrator"
                            >
                              <em className="icon ni ni-ticket-alt" />
                            </span>
                            <div className="team-options">
                              <div className="drodown">
                                <a
                                  href="#"
                                  className="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="You no have credits, click to recharge."
                                >
                                  <em className="icon ni ni-wallet" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <ul className="link-list-opt no-bdr">
                                    <li>
                                      <a href="html/account.html">
                                        <em className="icon ni ni-expand" />
                                        <span>Quick View</span>
                                      </a>
                                    </li>
                                    {/*

                                                                  <li><a href="html/account.html"><em class="icon ni ni-share-alt"></em><span>Share Profile</span></a></li>

                                                                  */}
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="user-card user-card-s2">
                              {/*

                                                          <div class="minecraft-avatar">
                                                          <img src="https://minecraft-api.com/api/skins/blu_ey/body/10.5/10/10.25/25.12/12"/>
                                                            </div>

                                                  */}
                              <div
                                className="minecraft-avatar"
                                style={{
                                  marginBottom: "0.5rem",
                                  marginTop: "1.8rem",
                                }}
                              >
                                <img src="https://visage.surgeplay.com/full/512/9e8a126dbbd245bababc988ca2893b99" />
                              </div>
                              <div className="user-info">
                                <h6>Welcome, Maciel</h6>
                                <p>You are a member since November 29, 2022.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <a href="html/account.html">
                          <button
                            className="kanban-add-task btn btn-block"
                            style={{ marginTop: "-1rem" }}
                          >
                            <em className="icon ni ni-account-setting-fill" />
                            <span> Edit your profile</span>
                          </button>
                        </a>
                        <a href="html/account-transactions.html">
                          <button
                            className="kanban-add-task btn btn-block"
                            style={{ marginTop: "0.7rem" }}
                          >
                            <em className="icon ni ni-grid-fill-c" />
                            <span> Join our community</span>
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-12 col-xxl-9">
                      <div className="card card-bordered card-stretch">
                        <div className="card-inner-group">
                          <div className="card-inner">
                            <div className="card-title-group">
                              <div
                                className="card-title"
                                style={{ marginLeft: "1%" }}
                              >
                                <h5 className="title">Your Shopping List</h5>
                              </div>
                              <div className="card-tools me-n1">
                                <ul className="btn-toolbar gx-1">
                                  <li>
                                    <a
                                      href="#"
                                      className="search-toggle toggle-search btn btn-icon"
                                      data-target="search"
                                    >
                                      <em className="icon ni ni-search" />
                                    </a>
                                  </li>
                                  <li className="btn-toolbar-sep" />
                                  <li>
                                    <div className="dropdown">
                                      <a
                                        href="#"
                                        className="btn btn-trigger btn-icon dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                      >
                                        <div className="badge badge-circle bg-primary">
                                          2
                                        </div>
                                        <em className="icon ni ni-filter-alt" />
                                      </a>
                                      <div className="filter-wg dropdown-menu dropdown-menu-xl dropdown-menu-end">
                                        <div className="dropdown-head">
                                          <span className="sub-title dropdown-title">
                                            Advance Filter
                                          </span>
                                          <div className="dropdown">
                                            <a
                                              href="#"
                                              className="link link-light"
                                            >
                                              <em className="icon ni ni-more-h" />
                                            </a>
                                          </div>
                                        </div>
                                        <div className="dropdown-body dropdown-body-rg">
                                          <div className="row gx-6 gy-4">
                                            <div className="col-6">
                                              <div className="form-group">
                                                <label className="overline-title overline-title-alt">
                                                  Category
                                                </label>
                                                <select className="form-select js-select2">
                                                  <option value="any">
                                                    Any category
                                                  </option>
                                                  <option value="bulder">
                                                    Builder
                                                  </option>
                                                  <option value="pending">
                                                    Design
                                                  </option>
                                                  <option value="cancel">
                                                    FrontEnd
                                                  </option>
                                                  <option value="process">
                                                    BackEnd
                                                  </option>
                                                </select>
                                              </div>
                                            </div>
                                            <div className="col-6">
                                              <div className="form-group">
                                                <label className="overline-title overline-title-alt">
                                                  Status
                                                </label>
                                                <select className="form-select js-select2">
                                                  <option value="any">
                                                    Any Status
                                                  </option>
                                                  <option value="pending">
                                                    In progress
                                                  </option>
                                                  <option value="cancel">
                                                    Canceled
                                                  </option>
                                                  <option value="completed">
                                                    Completed
                                                  </option>
                                                </select>
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="form-group">
                                                <button
                                                  type="button"
                                                  className="btn btn-secondary"
                                                >
                                                  Filter
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="dropdown-foot between">
                                          <a className="clickable" href="#">
                                            Reset Filter
                                          </a>
                                          <a
                                            href="#savedFilter"
                                            data-bs-toggle="modal"
                                          >
                                            Save Filter
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="card-search search-wrap"
                                data-search="search"
                              >
                                <div className="search-content">
                                  <a
                                    href="#"
                                    className="search-back btn btn-icon toggle-search"
                                    data-target="search"
                                  >
                                    <em className="icon ni ni-arrow-left" />
                                  </a>
                                  <input
                                    type="text"
                                    className="form-control border-transparent form-focus-none"
                                    placeholder="Quick search by category"
                                  />
                                  <button className="search-submit btn btn-icon">
                                    <em className="icon ni ni-search" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-inner p-0">
                            <div className="nk-tb-list nk-tb-tnx">
                              <div className="nk-tb-item nk-tb-head">
                                <div className="nk-tb-col">
                                  <span>Ordering freelancer</span>
                                </div>
                                <div className="nk-tb-col tb-col-xxl">
                                  <span>Purchase Category</span>
                                </div>
                                <div className="nk-tb-col tb-col-lg">
                                  <span>Order Value</span>
                                </div>
                                <div className="nk-tb-col tb-col-lg">
                                  <span>Your Review</span>
                                </div>
                                <div className="nk-tb-col text-center">
                                  <span>Order ID</span>
                                </div>
                                <div className="nk-tb-col nk-tb-col-status">
                                  <span className="sub-text d-none d-md-block">
                                    Status
                                  </span>
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
                                      <img src="https://visage.surgeplay.com/head/512/9e8a126dbbd245bababc988ca2893b99?y=70" />
                                    </div>
                                    <div className="nk-tnx-type-text">
                                      <span className="tb-lead">Wowy</span>
                                      <span className="tb-date">
                                        On January 25, 2023
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="nk-tb-col tb-col-xxl">
                                  <span className="tb-lead">
                                    <h6 style={{ fontSize: 16 }}>
                                      Minecraft Builder
                                    </h6>
                                  </span>
                                </div>
                                <div className="nk-tb-col tb-col-lg">
                                  <span className="tb-lead">
                                    <h6>$199.99</h6>
                                  </span>
                                </div>
                                <div className="nk-tb-col">
                                  <span className="tb-lead">
                                    <em className="icon ni ni-star-fill text-warning" />
                                    <em className="icon ni ni-star-fill text-warning" />
                                    <em className="icon ni ni-star-fill text-warning" />
                                    <em className="icon ni ni-star-fill text-warning" />
                                    <em className="icon ni ni-star-fill text-warning" />{" "}
                                    <span className="text-muted">(5)</span>
                                  </span>
                                </div>
                                <div
                                  className="nk-tb-col"
                                  style={{ textAlign: "center" }}
                                >
                                  <span>
                                    <h6
                                      className="nk-h6-head"
                                      style={{ fontSize: 16 }}
                                    >
                                      #00214
                                    </h6>
                                  </span>
                                </div>
                                <div className="nk-tb-col nk-tb-col-status">
                                  <div className="dot dot-success d-md-none" />
                                  <span className="badge badge-sm badge-dim bg-warning d-none d-md-inline-flex">
                                    In progress
                                  </span>
                                </div>
                                <div className="nk-tb-col">
                                  <a
                                    href="html/order-chat.html"
                                    className="bg-white btn btn-sm btn-outline-light btn-icon btn-tooltip"
                                    title="Go to Order"
                                  >
                                    <em className="icon ni ni-external" />
                                  </a>
                                </div>
                              </div>
                              <div className="nk-tb-item">
                                <div className="nk-tb-col">
                                  <div className="nk-tnx-type">
                                    <div
                                      className="minecraft-head"
                                      style={{ marginRight: "1rem" }}
                                    >
                                      <img src="https://visage.surgeplay.com/head/512/d8a858cf9dda472baf308443d0e8b837?y=70" />
                                    </div>
                                    <div className="nk-tnx-type-text">
                                      <span className="tb-lead">EduKof</span>
                                      <span className="tb-date">
                                        On January 13, 2023
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="nk-tb-col tb-col-xxl">
                                  <span className="tb-lead">
                                    <h6 style={{ fontSize: 16 }}>
                                      Minecraft FrontEnd
                                    </h6>
                                  </span>
                                </div>
                                <div className="nk-tb-col tb-col-lg">
                                  <span className="tb-lead">
                                    <h6>$99.99</h6>
                                  </span>
                                </div>
                                <div className="nk-tb-col">
                                  <span className="tb-lead">
                                    <em className="icon ni ni-star-fill text-warning" />
                                    <em className="icon ni ni-star-fill text-warning" />
                                    <em className="icon ni ni-star-fill text-warning" />
                                    <em className="icon ni ni-star-fill text-warning" />
                                    <em className="icon ni ni-star-fill text-warning" />{" "}
                                    <span className="text-muted">(5)</span>
                                  </span>
                                </div>
                                <div
                                  className="nk-tb-col"
                                  style={{ textAlign: "center" }}
                                >
                                  <span>
                                    <h6
                                      className="nk-h6-head"
                                      style={{ fontSize: 16 }}
                                    >
                                      #00209
                                    </h6>
                                  </span>
                                </div>
                                <div className="nk-tb-col nk-tb-col-status">
                                  <div className="dot dot-success d-md-none" />
                                  <span className="badge badge-sm badge-dim bg-success d-none d-md-inline-flex">
                                    Completed
                                  </span>
                                </div>
                                <div className="nk-tb-col nk-tb-col-tools">
                                  <ul className="nk-tb-actions gx-2">
                                    <li className="nk-tb-action-hidden">
                                      <a
                                        href="#viewOrder"
                                        data-bs-toggle="modal"
                                        className="bg-white btn btn-sm btn-outline-light btn-icon btn-tooltip"
                                        title="View Order"
                                      >
                                        <em className="icon ni ni-eye" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="nk-tb-item">
                                <div className="nk-tb-col">
                                  <div className="nk-tnx-type">
                                    <div
                                      className="minecraft-head"
                                      style={{ marginRight: "1rem" }}
                                    >
                                      <img src="https://visage.surgeplay.com/head/512/1f8e65d2a1944632bff4b4f6b02d9567?y=70" />
                                    </div>
                                    <div className="nk-tnx-type-text">
                                      <span className="tb-lead">mlgboi</span>
                                      <span className="tb-date">
                                        On December 28, 2022
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="nk-tb-col tb-col-xxl">
                                  <span className="tb-lead">
                                    <h6 style={{ fontSize: 16 }}>
                                      Minecraft Design
                                    </h6>
                                  </span>
                                </div>
                                <div className="nk-tb-col tb-col-lg">
                                  <span className="tb-lead">
                                    <h6>$44.99</h6>
                                  </span>
                                </div>
                                <div className="nk-tb-col">
                                  <span className="tb-lead">
                                    <em className="icon ni ni-star-fill text-warning" />
                                    <em className="icon ni ni-star-fill text-warning" />
                                    <em className="icon ni ni-star-fill text-warning" />
                                    <em className="icon ni ni-star-fill text-warning" />
                                    <em className="icon ni ni-star-fill text-warning" />{" "}
                                    <span className="text-muted">(5)</span>
                                  </span>
                                </div>
                                <div
                                  className="nk-tb-col"
                                  style={{ textAlign: "center" }}
                                >
                                  <span>
                                    <h6
                                      className="nk-h6-head"
                                      style={{ fontSize: 16 }}
                                    >
                                      #00194
                                    </h6>
                                  </span>
                                </div>
                                <div className="nk-tb-col nk-tb-col-status">
                                  <div className="dot dot-success d-md-none" />
                                  <span className="badge badge-sm badge-dim bg-success d-none d-md-inline-flex">
                                    Completed
                                  </span>
                                </div>
                                <div className="nk-tb-col nk-tb-col-tools">
                                  <ul className="nk-tb-actions gx-2">
                                    <li className="nk-tb-action-hidden">
                                      <a
                                        href="#viewOrder"
                                        data-bs-toggle="modal"
                                        className="bg-white btn btn-sm btn-outline-light btn-icon btn-tooltip"
                                        title="View Order"
                                      >
                                        <em className="icon ni ni-eye" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="nk-tb-item">
                                <div className="nk-tb-col">
                                  <div className="nk-tnx-type">
                                    <div
                                      className="minecraft-head"
                                      style={{ marginRight: "1rem" }}
                                    >
                                      <img src="https://visage.surgeplay.com/head/512/10f114c247814eaeae6362b2f0dd8415?y=70" />
                                    </div>
                                    <div className="nk-tnx-type-text">
                                      <span className="tb-lead">Promax8</span>
                                      <span className="tb-date">
                                        On December 14, 2022
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="nk-tb-col tb-col-xxl">
                                  <span className="tb-lead">
                                    <h6 style={{ fontSize: 16 }}>
                                      Minecraft BackEnd
                                    </h6>
                                  </span>
                                </div>
                                <div className="nk-tb-col tb-col-lg">
                                  <span className="tb-lead">
                                    <h6>$74.99</h6>
                                  </span>
                                </div>
                                <div className="nk-tb-col">
                                  <span className="tb-lead">
                                    <em className="icon ni ni-star-fill text-warning" />
                                    <em className="icon ni ni-star-fill text-warning" />
                                    <em className="icon ni ni-star-fill text-warning" />
                                    <em className="icon ni ni-star-fill text-warning" />
                                    <em className="icon ni ni-star-fill text-warning" />{" "}
                                    <span className="text-muted">(5)</span>
                                  </span>
                                </div>
                                <div
                                  className="nk-tb-col"
                                  style={{ textAlign: "center" }}
                                >
                                  <span>
                                    <h6
                                      className="nk-h6-head"
                                      style={{ fontSize: 16 }}
                                    >
                                      #00182
                                    </h6>
                                  </span>
                                </div>
                                <div className="nk-tb-col nk-tb-col-status">
                                  <div className="dot dot-success d-md-none" />
                                  <span className="badge badge-sm badge-dim bg-success d-none d-md-inline-flex">
                                    Completed
                                  </span>
                                </div>
                                <div className="nk-tb-col nk-tb-col-tools">
                                  <ul className="nk-tb-actions gx-2">
                                    <li className="nk-tb-action-hidden">
                                      <a
                                        href="#viewOrder"
                                        data-bs-toggle="modal"
                                        className="bg-white btn btn-sm btn-outline-light btn-icon btn-tooltip"
                                        title="View Order"
                                      >
                                        <em className="icon ni ni-eye" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="nk-tb-item">
                                <div className="nk-tb-col">
                                  <div className="nk-tnx-type">
                                    <div
                                      className="minecraft-head"
                                      style={{ marginRight: "1rem" }}
                                    >
                                      <img src="https://visage.surgeplay.com/head/512/f4b0dd3566834a059bb0c4257b8f287a?y=70" />
                                    </div>
                                    <div className="nk-tnx-type-text">
                                      <span className="tb-lead">plazarr</span>
                                      <span className="tb-date">
                                        On November 27, 2022
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="nk-tb-col tb-col-xxl">
                                  <span className="tb-lead">
                                    <h6 style={{ fontSize: 16 }}>
                                      Minecraft Plugin
                                    </h6>
                                  </span>
                                </div>
                                <div className="nk-tb-col tb-col-lg">
                                  <span className="tb-lead">
                                    <h6>$144.99</h6>
                                  </span>
                                </div>
                                <div className="nk-tb-col">
                                  <span className="tb-lead">
                                    <em className="icon ni ni-star-fill text-warning" />
                                    <em className="icon ni ni-star-fill text-warning" />
                                    <em className="icon ni ni-star-fill text-warning" />
                                    <em className="icon ni ni-star-fill text-warning" />
                                    <em className="icon ni ni-star-fill text-warning" />{" "}
                                    <span className="text-muted">(5)</span>
                                  </span>
                                </div>
                                <div
                                  className="nk-tb-col"
                                  style={{ textAlign: "center" }}
                                >
                                  <span>
                                    <h6
                                      className="nk-h6-head"
                                      style={{ fontSize: 16 }}
                                    >
                                      #00124
                                    </h6>
                                  </span>
                                </div>
                                <div className="nk-tb-col nk-tb-col-status">
                                  <div className="dot dot-success d-md-none" />
                                  <span className="badge badge-sm badge-dim bg-success d-none d-md-inline-flex">
                                    Completed
                                  </span>
                                </div>
                                <div className="nk-tb-col nk-tb-col-tools">
                                  <ul className="nk-tb-actions gx-2">
                                    <li className="nk-tb-action-hidden">
                                      <a
                                        href="#viewOrder"
                                        data-bs-toggle="modal"
                                        className="bg-white btn btn-sm btn-outline-light btn-icon btn-tooltip"
                                        title="View Order"
                                      >
                                        <em className="icon ni ni-eye" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="modal fade"
                            tabIndex={-1}
                            id="viewOrder"
                          >
                            <div
                              className="modal-dialog modal-lg"
                              role="document"
                            >
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
                                    <h4 className="nk-modal-title title">
                                      Order{" "}
                                      <small className="nk-h6-head">
                                        <strong>#NTJ-58248</strong>
                                      </small>
                                    </h4>
                                  </div>
                                  <div className="nk-tnx-details">
                                    <div className="nk-block-between flex-wrap g-3">
                                      <div className="nk-tnx-type">
                                        <div
                                          className="minecraft-head"
                                          style={{ marginRight: "1rem" }}
                                        >
                                          <img src="https://visage.surgeplay.com/head/512/d8a858cf9dda472baf308443d0e8b837?y=70" />
                                        </div>
                                        <div className="nk-tnx-type-text">
                                          <h5 className="title">EduKof</h5>
                                          <span className="sub-text mt-n1">
                                            On January 25, 2023
                                          </span>
                                        </div>
                                      </div>
                                      <ul className="align-center flex-wrap gx-3">
                                        <li>
                                          <span className="badge badge-sm bg-success badge-dim bg-success d-none d-md-inline-flex">
                                            Order Completed
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="nk-modal-head mt-sm-5 mt-4 mb-4">
                                      <h5 className="title">Order Details</h5>
                                    </div>
                                    <div className="row gy-3">
                                      <div className="col-lg-6">
                                        <span className="sub-text">
                                          Order Category
                                        </span>
                                        <span className="caption-text">
                                          Minecraft Builder
                                        </span>
                                      </div>
                                      <div className="col-lg-6">
                                        <span className="sub-text">
                                          Payment Method
                                        </span>
                                        <span className="caption-text text-break text-primary">
                                          <em className="icon ni ni-master-card text-primary" />{" "}
                                          Credit Card
                                        </span>
                                      </div>
                                      <div className="col-lg-6">
                                        <span className="sub-text">
                                          Ordering Time
                                        </span>
                                        <span className="caption-text">
                                          January 25, 2023, to February 10, 2023
                                        </span>
                                      </div>
                                      <div className="col-lg-6">
                                        <span className="sub-text">
                                          Order Review
                                        </span>
                                        <span className="caption-text">
                                          {" "}
                                          <span className="tb-lead">
                                            <em className="icon ni ni-star-fill text-warning" />
                                            <em className="icon ni ni-star-fill text-warning" />
                                            <em className="icon ni ni-star-fill text-warning" />
                                            <em className="icon ni ni-star-fill text-warning" />
                                            <em className="icon ni ni-star-fill text-warning" />{" "}
                                            <span className="text-muted">
                                              (5)
                                            </span>
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-inner">
                            <ul className="pagination justify-content-center justify-content-md-start">
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  Prev
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  1
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  2
                                </a>
                              </li>
                              <li className="page-item">
                                <span className="page-link">
                                  <em className="icon ni ni-more-h" />
                                </span>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  6
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  7
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  Next
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
