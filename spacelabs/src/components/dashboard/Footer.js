export default function Footer() {
  return (
    <>
      <div className="nk-footer">
        <div className="container-fluid">
          <div className="nk-footer-wrap">
            <div className="nk-footer-copyright">
              {" "}
              © SpaceLabs 2023. All Rights Reserved.
            </div>
            <div className="nk-footer-links">
              <ul className="nav nav-sm">
                <li className="nav-item">
                  <a data-bs-toggle="modal" href="#region" className="nav-link">
                    <em className="icon ni ni-equal" />
                    <span className="ms-1">Direct Support</span>
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
