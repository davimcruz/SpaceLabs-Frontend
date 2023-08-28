import dynamic from "next/dynamic";

const Header = dynamic(() => import("../Header"), { ssr: false });
const Footer = dynamic(() => import("../Footer"), { ssr: false });

export default function ManageUsers() {
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
                      <h3 className="nk-block-title page-title">Users Lists</h3>
                      <div className="nk-block-des text-soft">
                        <p>We have total 2,595 users.</p>
                      </div>
                    </div>
                    <div className="nk-block-head-content">
                      <div className="toggle-wrap nk-block-tools-toggle">
                        <a
                          href="#"
                          className="btn btn-icon btn-trigger toggle-expand me-n1"
                          data-target="pageMenu"
                        >
                          <em className="icon ni ni-menu-alt-r" />
                        </a>
                        <div
                          className="toggle-expand-content"
                          data-content="pageMenu"
                        >
                          <ul className="nk-block-tools g-3">
                            <li>
                              <a
                                href="#"
                                className="btn btn-white btn-outline-light disabled"
                              >
                                <em className="icon ni ni-download-cloud" />
                                <span>Export</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nk-block">
                  <div className="card card-bordered card-stretch">
                    <div className="card-inner-group">
                      <div className="card-inner position-relative card-tools-toggle">
                        <div className="card-title-group">
                          <div className="card-tools">
                            <div className="form-inline flex-nowrap gx-3">
                              <div className="form-wrap w-150px">
                                <select
                                  className="form-select js-select2"
                                  data-search="off"
                                  data-placeholder="Make Action"
                                >
                                  <option value="">k Action</option>
                                  <option value="email">Send Email</option>
                                  <option value="group">Change Group</option>
                                  <option value="suspend">Ban User</option>
                                  <option value="delete">Delete User</option>
                                </select>
                              </div>
                              <div className="btn-wrap">
                                <span className="d-none d-md-block">
                                  <button className="btn btn-dim btn-outline-light disabled">
                                    Apply
                                  </button>
                                </span>
                                <span className="d-md-none">
                                  <button className="btn btn-dim btn-outline-light btn-icon disabled">
                                    <em className="icon ni ni-arrow-right" />
                                  </button>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="card-tools me-n1">
                            <ul className="btn-toolbar gx-1">
                              <li>
                                <a
                                  href="#"
                                  className="btn btn-icon search-toggle toggle-search"
                                  data-target="search"
                                >
                                  <em className="icon ni ni-search" />
                                </a>
                              </li>
                              <li className="btn-toolbar-sep" />
                              <li>
                                <div className="toggle-wrap">
                                  <a
                                    href="#"
                                    className="btn btn-icon btn-trigger toggle"
                                    data-target="cardTools"
                                  >
                                    <em className="icon ni ni-menu-right" />
                                  </a>
                                  <div
                                    className="toggle-content"
                                    data-content="cardTools"
                                  >
                                    <ul className="btn-toolbar gx-1">
                                      <li className="toggle-close">
                                        <a
                                          href="#"
                                          className="btn btn-icon btn-trigger toggle"
                                          data-target="cardTools"
                                        >
                                          <em className="icon ni ni-arrow-left" />
                                        </a>
                                      </li>
                                      <li>
                                        <div className="dropdown">
                                          <a
                                            href="#"
                                            className="btn btn-trigger btn-icon dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                          >
                                            <div className="dot dot-primary" />
                                            <em className="icon ni ni-filter-alt" />
                                          </a>
                                          <div className="filter-wg dropdown-menu dropdown-menu-xl dropdown-menu-end">
                                            <div className="dropdown-head">
                                              <span className="sub-title dropdown-title">
                                                Filter Users
                                              </span>
                                            </div>
                                            <div className="dropdown-body dropdown-body-rg">
                                              <div className="row gx-6 gy-3">
                                                <div className="col-6">
                                                  <div className="custom-control custom-control-sm custom-checkbox">
                                                    <input
                                                      type="checkbox"
                                                      className="custom-control-input"
                                                      id="hasCredits"
                                                    />
                                                    <label
                                                      className="custom-control-label"
                                                      htmlFor="hasCredits"
                                                    >
                                                      {" "}
                                                      Have Credits
                                                    </label>
                                                  </div>
                                                </div>
                                                <div className="col-6">
                                                  <div className="custom-control custom-control-sm custom-checkbox">
                                                    <input
                                                      type="checkbox"
                                                      className="custom-control-input"
                                                      id="hasKYC"
                                                    />
                                                    <label
                                                      className="custom-control-label"
                                                      htmlFor="hasKYC"
                                                    >
                                                      {" "}
                                                      Terms Verified
                                                    </label>
                                                  </div>
                                                </div>
                                                <div className="col-6">
                                                  <div className="form-group">
                                                    <label className="overline-title overline-title-alt">
                                                      Role
                                                    </label>
                                                    <select className="form-select js-select2">
                                                      <option value="user">
                                                        User
                                                      </option>
                                                      <option value="freelancer">
                                                        Freelancer
                                                      </option>
                                                      <option value="customer">
                                                        Customer
                                                      </option>
                                                      <option value="beta">
                                                        Beta
                                                      </option>
                                                      <option value="admin">
                                                        Admin
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
                                                      <option value="online">
                                                        Online
                                                      </option>
                                                      <option value="pending">
                                                        Pending
                                                      </option>
                                                      <option value="banned">
                                                        Banned
                                                      </option>
                                                      <option value="deleted">
                                                        Deleted
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
                                              <a href="#">Save Filter</a>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="dropdown">
                                          <a
                                            href="#"
                                            className="btn btn-trigger btn-icon dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                          >
                                            <em className="icon ni ni-setting" />
                                          </a>
                                          <div className="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                                            <ul className="link-check">
                                              <li>
                                                <span>Show</span>
                                              </li>
                                              <li className="active">
                                                <a href="#">10</a>
                                              </li>
                                              <li>
                                                <a href="#">20</a>
                                              </li>
                                              <li>
                                                <a href="#">50</a>
                                              </li>
                                            </ul>
                                            <ul className="link-check">
                                              <li>
                                                <span>Role</span>
                                              </li>
                                              <li className="active">
                                                <a href="#">VERIFIED</a>
                                              </li>
                                              <li>
                                                <a href="#">NO VERIFIED</a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className="card-search search-wrap"
                          data-search="search"
                        >
                          <div className="card-body">
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
                                placeholder="Search by user or email"
                              />
                              <button className="search-submit btn btn-icon">
                                <em className="icon ni ni-search" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-inner p-0">
                        <div className="nk-tb-list nk-tb-ulist">
                          <div className="nk-tb-item nk-tb-head">
                            <div className="nk-tb-col nk-tb-col-check">
                              <div className="custom-control custom-control-sm custom-checkbox notext">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="uid"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="uid"
                                />
                              </div>
                            </div>
                            <div className="nk-tb-col">
                              <span className="sub-text">User</span>
                            </div>
                            <div className="nk-tb-col tb-col-mb">
                              <span className="sub-text">Credits</span>
                            </div>
                            <div className="nk-tb-col tb-col-md">
                              <span className="sub-text">Your Role</span>
                            </div>
                            <div className="nk-tb-col tb-col-lg">
                              <span className="sub-text">Verifications</span>
                            </div>
                            <div className="nk-tb-col tb-col-lg">
                              <span className="sub-text">Last Login</span>
                            </div>
                            <div className="nk-tb-col tb-col-md">
                              <span className="sub-text">Status</span>
                            </div>
                            <div className="nk-tb-col nk-tb-col-tools text-end"></div>
                          </div>
                          <div className="nk-tb-item">
                            <div className="nk-tb-col nk-tb-col-check">
                              <div className="custom-control custom-control-sm custom-checkbox notext">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="uid1"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="uid1"
                                />
                              </div>
                            </div>
                            <div className="nk-tb-col">
                              <a href="html/user-details-regular.html">
                                <div className="user-card">
                                  <div
                                    className="user-avatar"
                                    style={{
                                      background: "none",
                                      borderRadius: "none",
                                    }}
                                  >
                                    <img
                                      alt=""
                                      src="https://visage.surgeplay.com/head/512/9e8a126dbbd245bababc988ca2893b99?y=70"
                                      style={{ borderRadius: "0%" }}
                                    />
                                  </div>
                                  <div className="user-info">
                                    <span className="tb-lead">
                                      Maciel Ribeiro{" "}
                                      <span className="dot dot-success d-md-none ms-1" />
                                    </span>
                                    <span>macielribeiro@gmail.com</span>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="nk-tb-col tb-col-mb">
                              <span className="text-muted">
                                This user no have credits.
                              </span>
                            </div>
                            <div className="nk-tb-col tb-col-md">
                              <span>
                                <h6
                                  style={{ fontSize: 14 }}
                                  className="text-danger"
                                >
                                  Administrator
                                </h6>
                              </span>
                            </div>
                            <div className="nk-tb-col tb-col-lg">
                              <ul className="list-status">
                                <li>
                                  <em className="icon text-success ni ni-check-circle" />{" "}
                                  <span>Email</span>
                                </li>
                                <li>
                                  <em className="icon text-success ni ni-check-circle" />
                                  <span>Terms</span>
                                </li>
                              </ul>
                            </div>
                            <div className="nk-tb-col tb-col-lg">
                              <span>01 July, 2023</span>
                            </div>
                            <div className="nk-tb-col tb-col-md">
                              <span className="tb-status text-success">
                                Online
                              </span>
                            </div>
                            <div className="nk-tb-col nk-tb-col-tools">
                              <ul className="nk-tb-actions gx-1">
                                <li className="nk-tb-action-hidden">
                                  <a
                                    href="#"
                                    className="btn btn-trigger btn-icon"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Send Notification"
                                  >
                                    <em className="icon ni ni-mail-fill" />
                                  </a>
                                </li>
                                <li className="nk-tb-action-hidden">
                                  <a
                                    href="#"
                                    className="btn btn-trigger btn-icon"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Change Role"
                                  >
                                    <em className="icon ni ni-pen2" />
                                  </a>
                                </li>
                                <li className="nk-tb-action-hidden">
                                  <a
                                    href="#"
                                    className="btn btn-trigger btn-icon"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Banned"
                                  >
                                    <em className="icon ni ni-user-cross-fill" />
                                  </a>
                                </li>
                                <li>
                                  <div className="drodown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle btn btn-icon btn-trigger"
                                      data-bs-toggle="dropdown"
                                    >
                                      <em className="icon ni ni-more-h" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <ul className="link-list-opt no-bdr">
                                        <li className="disabled">
                                          <a href="#">
                                            <em className="icon ni ni-focus" />
                                            <span>Quick View</span>
                                          </a>
                                        </li>
                                        <li className="disabled">
                                          <a href="#">
                                            <em className="icon ni ni-eye" />
                                            <span>View Details</span>
                                          </a>
                                        </li>
                                        <li className="disabled">
                                          <a href="#">
                                            <em className="icon ni ni-activity-round" />
                                            <span>Activities</span>
                                          </a>
                                        </li>
                                        <li className="divider" />
                                        <li>
                                          <a href="#">
                                            <em className="icon ni ni-shield-star" />
                                            <span>Reset Pass</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            <em className="icon ni ni-shield-off" />
                                            <span>Reset 2FA</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            <em className="icon ni ni-na" />
                                            <span>Ban User</span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="nk-tb-item">
                            <div className="nk-tb-col nk-tb-col-check">
                              <div className="custom-control custom-control-sm custom-checkbox notext">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="uid2"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="uid2"
                                />
                              </div>
                            </div>
                            <div className="nk-tb-col">
                              <a href="html/user-details-regular.html">
                                <div className="user-card">
                                  <div
                                    className="user-avatar"
                                    style={{
                                      background: "none",
                                      borderRadius: "none",
                                    }}
                                  >
                                    <img
                                      alt=""
                                      src="https://visage.surgeplay.com/head/192/61699b2ed3274a019f1e0ea8c3f06bc6?y=70"
                                      style={{ borderRadius: "0%" }}
                                    />
                                  </div>
                                  <div className="user-info">
                                    <span className="tb-lead">
                                      Wikyzl{" "}
                                      <span className="dot dot-success d-md-none ms-1" />
                                    </span>
                                    <span>thewiky@gmail.com</span>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="nk-tb-col tb-col-mb">
                              <span className="text-muted">
                                <span className="text-white">
                                  <strong>Wikyzl</strong>
                                </span>{" "}
                                have{" "}
                                <span className="text-success">
                                  <strong>399.99</strong>
                                </span>{" "}
                                credits.
                              </span>
                            </div>
                            <div className="nk-tb-col tb-col-md">
                              <span>
                                <h6
                                  style={{ fontSize: 14 }}
                                  className="text-muted"
                                >
                                  User
                                </h6>
                              </span>
                            </div>
                            <div className="nk-tb-col tb-col-lg">
                              <ul className="list-status">
                                <li>
                                  <em className="icon text-danger ni ni-user-cross-fill" />{" "}
                                  <span>Email</span>
                                </li>
                                <li>
                                  <em className="icon text-success ni ni-check-circle" />
                                  <span>Terms</span>
                                </li>
                              </ul>
                            </div>
                            <div className="nk-tb-col tb-col-lg">
                              <span>05 Feb 2023</span>
                            </div>
                            <div className="nk-tb-col tb-col-md">
                              <span className="tb-status text-muted">
                                Offline
                              </span>
                            </div>
                            <div className="nk-tb-col nk-tb-col-tools">
                              <ul className="nk-tb-actions gx-1">
                                <li className="nk-tb-action-hidden">
                                  <a
                                    href="#"
                                    className="btn btn-trigger btn-icon"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Send Notification"
                                  >
                                    <em className="icon ni ni-mail-fill" />
                                  </a>
                                </li>
                                <li className="nk-tb-action-hidden">
                                  <a
                                    href="#"
                                    className="btn btn-trigger btn-icon"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Change Role"
                                  >
                                    <em className="icon ni ni-pen2" />
                                  </a>
                                </li>
                                <li className="nk-tb-action-hidden">
                                  <a
                                    href="#"
                                    className="btn btn-trigger btn-icon"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Banned"
                                  >
                                    <em className="icon ni ni-user-cross-fill" />
                                  </a>
                                </li>
                                <li>
                                  <div className="drodown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle btn btn-icon btn-trigger"
                                      data-bs-toggle="dropdown"
                                    >
                                      <em className="icon ni ni-more-h" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <ul className="link-list-opt no-bdr">
                                        <li className="disabled">
                                          <a href="#">
                                            <em className="icon ni ni-focus" />
                                            <span>Quick View</span>
                                          </a>
                                        </li>
                                        <li className="disabled">
                                          <a href="#">
                                            <em className="icon ni ni-eye" />
                                            <span>View Details</span>
                                          </a>
                                        </li>
                                        <li className="disabled">
                                          <a href="#">
                                            <em className="icon ni ni-activity-round" />
                                            <span>Activities</span>
                                          </a>
                                        </li>
                                        <li className="divider" />
                                        <li>
                                          <a href="#">
                                            <em className="icon ni ni-shield-star" />
                                            <span>Reset Pass</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            <em className="icon ni ni-shield-off" />
                                            <span>Reset 2FA</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            <em className="icon ni ni-na" />
                                            <span>Ban User</span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-inner">
                        <div className="nk-block-between-md g-3">
                          <div className="g">
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
                          <div className="g">
                            <div className="pagination-goto d-flex justify-content-center justify-content-md-start gx-3">
                              <div style={{ textTransform: "none" }}>
                                Select Page
                              </div>
                              <div>
                                <select
                                  className="form-select js-select2"
                                  data-search="on"
                                  data-dropdown="xs center"
                                >
                                  <option value="page-1">1</option>
                                  <option value="page-2">2</option>
                                  <option value="page-4">4</option>
                                </select>
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
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
