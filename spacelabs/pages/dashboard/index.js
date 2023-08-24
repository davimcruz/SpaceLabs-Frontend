import dynamic from 'next/dynamic'

const DashboardWrap = dynamic(() => import('../../src/components/dashboard/Wrap'), { ssr: false })
const Navbar = dynamic(() => import('../../src/components/dashboard/Navbar'), { ssr: false })

export default function Dashboard() {
  return (
    <div>
      <div className="nk-app-root">
        <div className="nk-main ">
          <Navbar />
          <DashboardWrap />
        </div>
      </div>
      <div className="modal fade" tabIndex={-1} role="dialog" id="dasd">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <a href="#" className="close" data-bs-dismiss="modal">
              <em className="icon ni ni-cross-sm" />
            </a>
            <div className="modal-body modal-body-md">
              <h5 className="title mb-4">Select Your Country</h5>
              <div className="nk-country-region">
                <ul className="country-list text-center gy-2">
                  <li>
                    <a href="#" className="country-item">
                      <img
                        src="../images/flags/"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Argentina</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="country-item">
                      <img
                        src="./images/flags/arg.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Argentina</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="country-item">
                      <img
                        src="./images/flags/french.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">France</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="country-item">
                      <img
                        src="./images/flags/portugal.png"
                        alt=""
                        className="country-flag"
                      />
                      <span className="country-name">Portugal</span>
                    </a>
                  </li>
                  <a href="#" className="country-item">
                    <img
                      src="./images/flags/english.png"
                      alt=""
                      className="country-flag"
                    />
                    <span className="country-name">United State</span>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
