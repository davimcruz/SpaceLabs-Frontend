import { useRouter } from "next/router";

export default function CardUserAside() {
  const router = useRouter();
  return (
    <>
      <div className="card-aside card-aside-left user-aside">
        <div className="card-inner-group" data-simplebar="">
          <div className="card-inner">
            <div className="user-card">
              <div className="minecraft-head" style={{ marginRight: "1rem" }}>
                <img src="https://visage.surgeplay.com/head/512/9e8a126dbbd245bababc988ca2893b99" />
              </div>
              <div className="user-info">
                <span className="lead-text">Maciel</span>
                <span className="sub-text">kaueandretti@gmail.com</span>
              </div>
              {/*

                                                        <div class="user-action">
                                                          <div class="dropdown">
                                                              <a class="btn btn-icon btn-trigger me-n2" data-bs-toggle="dropdown" href="#"><em class="icon ni ni-more-v"></em></a>
                                                              <div class="dropdown-menu dropdown-menu-end">
                                                                  <ul class="link-list-opt no-bdr">
                                                                      <li><a href="#"><em class="icon ni ni-camera-fill"></em><span>Change Avatar</span></a></li>
                                                                  </ul>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      
                                                    */}
            </div>
            {/* .user-card */}
          </div>

          <div className="card-inner">
            <div className="user-account-info py-0">
              <div>
                <h6 className="text-success">Your account is verified </h6>
              </div>
              <div className="user-balance-sub" style={{ marginTop: "0.3rem" }}>
                Checked at <span>27 January, 2023</span>
              </div>
            </div>
          </div>
          <div className="card-inner p-0">
            <ul className="link-list-menu">
              <li>
                <a className={router.pathname == "/dashboard/account" ? "active" : ""} href="#" onClick={(e) => {
                  e.preventDefault();

                  if(router.pathname == "/dashboard/account") return;

                  router.push("/dashboard/account");

                }}>
                  <em className="icon ni ni-user-fill-c" />
                  <span>Account Infomation</span>
                </a>
              </li>
              <li>
                <a className={router.pathname == "/dashboard/account/security" ? "active" : ""} href="#" onClick={(e) => {
                  e.preventDefault();

                  if(router.pathname == "/dashboard/account/security") return;

                  router.push("/dashboard/account/security");

                }}>
                  <em className="icon ni ni-lock-alt-fill" />
                  <span>Account Settings</span>
                </a>
              </li>
              <li>
                <a className={router.pathname == "/dashboard/account/notifications" ? "active" : ""} href="#" onClick={(e) => {
                  e.preventDefault();

                  if(router.pathname == "/dashboard/account/notifications") return;

                  router.push("/dashboard/account/notifications");

                }}>
                  <em className="icon ni ni-bell" />
                  <span>Notifications</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <em className="icon ni ni-grid-add-fill-c" />
                  <span>Your Connections</span>
                  <span
                    className="badge bg-danger"
                    style={{
                      marginLeft: "0.8rem",
                      marginTop: "-0.2rem",
                    }}
                  >
                    Disabled
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
