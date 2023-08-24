import dynamic from "next/dynamic";

const Header = dynamic(() => import("../Header"), { ssr: false });
const Footer = dynamic(() => import("../Footer"), { ssr: false });

export default function PlaceOrderWrap() {
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
                        Place your Order
                      </h3>
                      <div className="nk-block-des text-soft">
                        <p>
                          Excellent! Now you can Place your Order for your item,
                          all automatic.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nk-block">
                  <div className="row g-gs">
                    <div className="col-sm-6 col-lg-3">
                      <div className="col">
                        <div className="card card-bordered product-card">
                          <div className="product-thumb">
                            <a href="html/order.html">
                              <img
                                className="card-img-top"
                                src="./images/wallpapers/builder.jpg"
                                alt=""
                              />
                            </a>
                            <ul className="product-badges">
                              <li>
                                <span
                                  className="badge bg-danger"
                                  style={{ fontWeight: 600 }}
                                >
                                  New
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="card-inner text-center">
                            <ul className="product-tags">
                              <li className="text-muted">
                                <em className="icon ni ni-users" />{" "}
                                <span>214 professionals</span>
                              </li>
                            </ul>
                            <h5 className="product-title">
                              <a href="html/order.html">Minecraft Builder</a>
                            </h5>
                            <div className="product-price text-primary h5">
                              <a
                                href="html/order.html"
                                className="btn btn-outline-success btn-dim btn-block"
                              >
                                <span>Make a Order</span>{" "}
                                <em
                                  className="icon ni ni-arrow-long-right"
                                  style={{ marginTop: "-0.2rem" }}
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="col">
                        <div className="card card-bordered product-card">
                          <div className="product-thumb">
                            <a href="html/order.html">
                              <img
                                className="card-img-top"
                                src="./images/wallpapers/website.jpg"
                                alt=""
                              />
                            </a>
                            <ul className="product-badges">
                              <li>
                                <span
                                  className="badge bg-danger"
                                  style={{ fontWeight: 600 }}
                                >
                                  New
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="card-inner text-center">
                            <ul className="product-tags">
                              <li className="text-muted">
                                <em className="icon ni ni-users" />{" "}
                                <span>214 professionals</span>
                              </li>
                            </ul>
                            <h5 className="product-title">
                              <a href="html/order.html">Minecraft Website</a>
                            </h5>
                            <div className="product-price text-primary h5">
                              <a
                                href="html/order.html"
                                className="btn btn-outline-success btn-dim btn-block"
                              >
                                <span>Make a Order</span>{" "}
                                <em
                                  className="icon ni ni-arrow-long-right"
                                  style={{ marginTop: "-0.2rem" }}
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="col">
                        <div className="card card-bordered product-card">
                          <div className="product-thumb">
                            <a href="html/order.html">
                              <img
                                className="card-img-top"
                                src="./images/wallpapers/design.jpg"
                                alt=""
                              />
                            </a>
                            <ul className="product-badges">
                              <li>
                                <span
                                  className="badge bg-danger"
                                  style={{ fontWeight: 600 }}
                                >
                                  New
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="card-inner text-center">
                            <ul className="product-tags">
                              <li className="text-muted">
                                <em className="icon ni ni-users" />{" "}
                                <span>214 professionals</span>
                              </li>
                            </ul>
                            <h5 className="product-title">
                              <a href="html/order.html">Minecraft Plugin</a>
                            </h5>
                            <div className="product-price text-primary h5">
                              <a
                                href="html/order.html"
                                className="btn btn-outline-success btn-dim btn-block"
                              >
                                <span>Make a Order</span>{" "}
                                <em
                                  className="icon ni ni-arrow-long-right"
                                  style={{ marginTop: "-0.2rem" }}
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="col">
                        <div className="card card-bordered product-card">
                          <div className="product-thumb">
                            <a href="html/order.html">
                              <img
                                className="card-img-top"
                                src="./images/wallpapers/design.jpg"
                                alt=""
                              />
                            </a>
                            <ul className="product-badges">
                              <li>
                                <span
                                  className="badge bg-danger"
                                  style={{ fontWeight: 600 }}
                                >
                                  New
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="card-inner text-center">
                            <ul className="product-tags">
                              <li className="text-muted">
                                <em className="icon ni ni-users" />{" "}
                                <span>214 professionals</span>
                              </li>
                            </ul>
                            <h5 className="product-title">
                              <a href="html/order.html">Minecraft Designer</a>
                            </h5>
                            <div className="product-price text-primary h5">
                              <a
                                href="html/order.html"
                                className="btn btn-outline-success btn-dim btn-block"
                              >
                                <span>Make a Order</span>{" "}
                                <em
                                  className="icon ni ni-arrow-long-right"
                                  style={{ marginTop: "-0.2rem" }}
                                />
                              </a>
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
