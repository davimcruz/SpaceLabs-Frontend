import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../Header'), { ssr: false })
const Footer = dynamic(() => import('../Footer'), { ssr: false })

export default function TermsOfServiceWrap() {
  return (
    <>
      <div className="nk-wrap">
        <Header />
        <div className="nk-content ">
                    <div className="container-fluid">
                        <div className="nk-content-inner">
                            <div className="nk-content-body">
                                <div className="content-page wide-md m-auto">
                                    <div className="nk-block-head nk-block-head-lg wide-sm mx-auto">
                                        <div className="nk-block-head-content text-center">
                                            <h2 className="nk-block-title fw-normal">Read our Terms</h2>
                                            <div className="nk-block-des">
                                                <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci sequi quidem id neque, repellat, vero ex esse eligendi odit voluptatem placeat laboriosam molestiae cum.</p>
                                                <p className="text-soft"><em className="icon ni ni-calendar-alt"></em> Last Update: 28 August, 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nk-block">
                                        <div className="card card-bordered">
                                            <div className="card-inner card-inner-xl">
                                                <div className="entry">
                                                    <h3>Terms and Conditions</h3>
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, magnam. Quo, nobis pariatur libero adipisci quas earum quibusdam id maxime! Officiis nemo neque, iure unde laborum harum officia accusamus? Totam!</p>
                                                    <h4>First</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam vitae ipsa placeat pariatur sequi, expedita veniam asperiores magni eum numquam natus, sapiente animi ea voluptatum sit molestiae quaerat quas cupiditate?</p>
                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam vitae ipsa placeat pariatur sequi, expedita veniam asperiores magni eum numquam natus, sapiente animi ea voluptatum sit molestiae quaerat quas cupiditate?</p>
                                           
                                                    <h4>Second</h4>
                                                    <p>Follow this list strictly:</p>
                                                    <ul className="list list-sm list-checked">
                                                        <li>Four;</li>
                                                        
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
        <Footer />
      </div>
    </>
  );
}