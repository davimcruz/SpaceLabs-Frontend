import dynamic from "next/dynamic";

const Header = dynamic(() => import("../Header"), { ssr: false });
const Footer = dynamic(() => import("../Footer"), { ssr: false });

export default function UpdatesWrap() {
  return (
    <>
      <div className="nk-wrap">
        <Header />

        <div className="nk-content ">
          <div className="container-fluid">
            <div className="nk-content-inner">
              <div className="nk-content-body">
                <div className="content-page wide-sm m-auto">
                  <div className="nk-block-head nk-block-head-lg wide-xs mx-auto">
                    <div className="nk-block-head-content text-center">
                      <div className="nk-block-head-sub">
                        <span>Our Updates</span>
                      </div>
                      <h2 className="nk-block-title fw-normal">
                        News at SpaceLabs
                      </h2>
                      <div className="nk-block-des">
                        <p className="lead">
                        Found a bug on our platform?
                          <a href="#"> contact us</a> and get a reward!.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="nk-block">
                    <div className="card">
                      <div id="faqs" className="accordion">
                        <div className="accordion-item">
                          <a
                            href="#"
                            className="accordion-head"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-q1"
                          >
                            <h6 className="title">Version - 1.14.0</h6>
                            <span className="accordion-icon" />
                          </a>
                          <div
                            className="accordion-body collapse show"
                            id="faq-q1"
                            data-bs-parent="#faqs"
                          >
                            <div className="accordion-inner">
                              <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ipsum praesentium minus eaque,
                                labore iure in deleniti eum ipsa, animi dolorum
                                repudiandae modi nulla voluptatum aliquam. Ipsam
                                odit animi dolore aperiam?
                                <br />
                                <br />
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ad modi magni quas fuga
                                perferendis, sunt culpa, obcaecati ullam eaque,
                                architecto non iste quod. Nam, repellat unde.
                                Minima aliquid ab perferendis.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <a
                            href="#"
                            className="accordion-head collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-q2"
                          >
                            <h6 className="title">
                                Version - 1.13.0
                            </h6>
                            <span className="accordion-icon" />
                          </a>
                          <div
                            className="accordion-body collapse"
                            id="faq-q2"
                            data-bs-parent="#faqs"
                          >
                            <div className="accordion-inner">
                              <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ipsum praesentium minus eaque,
                                labore iure in deleniti eum ipsa, animi dolorum
                                repudiandae modi nulla voluptatum aliquam. Ipsam
                                odit animi dolore aperiam?
                                <br />
                                <br />
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ad modi magni quas fuga
                                perferendis, sunt culpa, obcaecati ullam eaque,
                                architecto non iste quod. Nam, repellat unde.
                                Minima aliquid ab perferendis.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <a
                            href="#"
                            className="accordion-head collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-q3"
                          >
                            <h6 className="title">
                                Version - 1.12.0
                            </h6>
                            <span className="accordion-icon" />
                          </a>
                          <div
                            className="accordion-body collapse"
                            id="faq-q3"
                            data-bs-parent="#faqs"
                          >
                            <div className="accordion-inner">
                              <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ipsum praesentium minus eaque,
                                labore iure in deleniti eum ipsa, animi dolorum
                                repudiandae modi nulla voluptatum aliquam. Ipsam
                                odit animi dolore aperiam?
                                <br />
                                <br />
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ad modi magni quas fuga
                                perferendis, sunt culpa, obcaecati ullam eaque,
                                architecto non iste quod. Nam, repellat unde.
                                Minima aliquid ab perferendis.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <a
                            href="#"
                            className="accordion-head collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-q4"
                          >
                            <h6 className="title">
                                Version - 1.11.0
                            </h6>
                            <span className="accordion-icon" />
                          </a>
                          <div
                            className="accordion-body collapse"
                            id="faq-q4"
                            data-bs-parent="#faqs"
                          >
                            <div className="accordion-inner">
                              <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ipsum praesentium minus eaque,
                                labore iure in deleniti eum ipsa, animi dolorum
                                repudiandae modi nulla voluptatum aliquam. Ipsam
                                odit animi dolore aperiam?
                                <br />
                                <br />
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ad modi magni quas fuga
                                perferendis, sunt culpa, obcaecati ullam eaque,
                                architecto non iste quod. Nam, repellat unde.
                                Minima aliquid ab perferendis.
                              </p>
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
