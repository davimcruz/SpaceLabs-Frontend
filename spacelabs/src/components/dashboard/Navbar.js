import { useRouter } from "next/router";

export default function DashboardNavbar() {
  const router = useRouter();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleNavigation = (path) => {
    setIsNavbarOpen(false); // Fechar a navbar ao navegar
    router.push(path);
  };

  return (
    <>
    <div className={`nk-sidebar nk-sidebar-fixed is-dark ${isNavbarOpen ? 'is-open' : ''}`}>
      <div className="nk-sidebar-element nk-sidebar-head">
        <div className="nk-menu-trigger">
          <button
            className="nk-nav-toggle nk-quick-nav-icon d-xl-none"
            data-target="sidebarMenu"
            onClick={toggleNavbar}
          >
            <em className="icon ni ni-arrow-left" />
          </button>
          <button
            className="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex"
            data-target="sidebarMenu"
            onClick={toggleNavbar}
          >
            <em className="icon ni ni-menu" />
          </button>
        </div>
        <div className="nk-sidebar-brand">
          <button
            className="logo-link nk-sidebar-logo"
            onClick={(e) => {
              e.preventDefault();
              if (router.pathname === '/') return;
              handleNavigation('/');
            }}
          >
            <img
              className="logo-light logo-img"
              src="/assets/images/spacelabs.png"
              alt="logo"
              style={{ marginLeft: '3.5rem' }}
            />
          </button>
        </div>
      </div>
      <div className="nk-sidebar-element nk-sidebar-body">
        <div className="nk-sidebar-content">
          <div className="nk-sidebar-menu" data-simplebar="">
            <ul className="nk-menu">
                <li className="nk-menu-heading">
                  <h6 className="overline-title text-primary-alt">Dashboard</h6>
                </li>
                <li className="nk-menu-item">
                  <a
                    href="#"
                    className="nk-menu-link"
                    onClick={(e) => {
                      e.preventDefault();

                      if (router.pathname == "/dashboard") return;

                      router.push("/dashboard");
                    }}
                  >
                    <span className="nk-menu-icon">
                      <em className="icon ni ni-opt-alt-fill" />
                    </span>
                    <span className="nk-menu-text">You Overview</span>
                  </a>
                </li>
                <li className="nk-menu-item">
                  <a
                    href="#"
                    className="nk-menu-link"
                    onClick={(e) => {
                      e.preventDefault();

                      if (router.pathname == "/dashboard/team-apply") return;

                      router.push("/dashboard/team-apply");
                    }}
                  >
                    <span className="nk-menu-icon">
                      <em
                        className="icon ni ni-plus-fill-c
                                      "
                      />
                    </span>
                    <span className="nk-menu-text">Apply to the Team</span>
                  </a>
                </li>
                <li className="nk-menu-item">
                  <a
                    href="#"
                    className="nk-menu-link"
                    onClick={(e) => {
                      e.preventDefault();

                      if (router.pathname == "/dashboard/terms-of-service")
                        return;

                      router.push("/dashboard/terms-of-service");
                    }}
                  >
                    <span className="nk-menu-icon">
                      <em
                        className="icon ni ni-grid-fill
                                      "
                      />
                    </span>
                    <span className="nk-menu-text">Terms of Service</span>
                  </a>
                </li>
                <li className="nk-menu-heading">
                  <h6 className="overline-title text-primary-alt">
                    Marketplace
                  </h6>
                </li>
                {/*

                           <li class="nk-menu-item">
                              <a href="html/item-shop.html" class="nk-menu-link">
                                  <span class="nk-menu-icon"><em class="icon ni ni-cart"></em></span>
                                  <span class="nk-menu-text">Item Shop</span>
                              </span>
                              </a>
                          </li>
                          
                          */}
                <li className="nk-menu-item">
                  <a
                    href="#"
                    className="nk-menu-link"
                    onClick={(e) => {
                      e.preventDefault();

                      if (router.pathname == "/dashboard/place-order") return;

                      router.push("/dashboard/place-order");
                    }}
                  >
                    <span className="nk-menu-icon">
                      <em className="icon ni ni-offer-fill" />
                    </span>
                    <span className="nk-menu-text">
                      Place your Order{" "}
                      <span
                        className="badge badge-dim bg-primary"
                        style={{
                          marginLeft: "0.3rem",
                          marginTop: "-0.15rem",
                        }}
                      >
                        New
                      </span>
                    </span>
                  </a>
                </li>
                <li className="nk-menu-heading">
                  <h6 className="overline-title text-primary-alt">Others</h6>
                </li>
                <li className="nk-menu-item">
                  <a href="html/team-apply.html" className="nk-menu-link">
                    <span className="nk-menu-icon">
                      <em className="icon ni ni-filter-fill" />
                    </span>
                    <span className="nk-menu-text">Open a Ticket</span>
                  </a>
                </li>
                <li className="nk-menu-item">
                  <a
                    href="#"
                    className="nk-menu-link"
                    onClick={(e) => {
                      e.preventDefault();

                      if (router.pathname == "/dashboard/faq") return;

                      router.push("/dashboard/faq");
                    }}
                  >
                    <span className="nk-menu-icon">
                      <em className="icon ni ni-help-fill" />
                    </span>
                    <span className="nk-menu-text">Frequent Questions</span>
                  </a>
                </li>
                <li className="nk-menu-heading">
                  <h6 className="overline-title text-primary-alt">Explore</h6>
                </li>
                <li className="nk-menu-item">
                  <a href="html/#" className="nk-menu-link">
                    <span className="nk-menu-icon">
                      <em className="icon ni ni-elementor" />
                    </span>
                    <span className="nk-menu-text">
                      Our updates{" "}
                      <span
                        className="badge badge-dim bg-primary"
                        style={{ marginLeft: "0.3rem" }}
                      >
                        <strong style={{ fontWeight: 800 }}>1.14.0</strong>
                      </span>
                    </span>
                  </a>
                </li>
                <li className="nk-menu-item">
                  <a
                    href="https://discord.gg/WQqcrDY8Up"
                    target="_blank"
                    className="nk-menu-link"
                  >
                    <span className="nk-menu-icon">
                      <em
                        className="icon ni ni-live
                                      "
                      />
                    </span>
                    <span className="nk-menu-text">Our Community</span>
                  </a>
                </li>
                <li className="nk-menu-heading">
                  <h6 className="overline-title text-primary-alt">
                    Management
                  </h6>
                </li>
                <li className="nk-menu-item">
                  <a href="html/manage-users.html" className="nk-menu-link">
                    <span className="nk-menu-icon">
                      <em className="icon ni ni-user-list-fill" />
                    </span>
                    <span className="nk-menu-text">Manage Users</span>
                  </a>
                </li>
                <li className="nk-menu-item">
                  <a
                    href="https://discord.gg/WQqcrDY8Up"
                    target="_blank"
                    className="nk-menu-link"
                  >
                    <span className="nk-menu-icon">
                      <em className="icon ni ni-opt-alt-fill" />
                    </span>
                    <span className="nk-menu-text">Order Viewing</span>
                  </a>
                </li>
                <li className="nk-menu-item">
                  <a
                    href="https://discord.gg/WQqcrDY8Up"
                    target="_blank"
                    className="nk-menu-link"
                  >
                    <span className="nk-menu-icon">
                      <em className="icon ni ni-note-add-fill-c" />
                    </span>
                    <span className="nk-menu-text">
                      View Tickets{" "}
                      <span
                        className="badge bg-outline-light"
                        style={{
                          marginBottom: "0.05rem",
                          marginLeft: "0.3rem",
                        }}
                      >
                        15+
                      </span>{" "}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
