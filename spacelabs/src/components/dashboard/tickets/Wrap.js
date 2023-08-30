import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../Header'), { ssr: false })
const Footer = dynamic(() => import('../Footer'), { ssr: false })

export default function TicketsWrap() {
  return (
    <>
      <div className="nk-wrap">
        <Header />
        <div className="nk-content ">
                    <div className="container-fluid">
                        <div className="nk-content-inner">
                            <div className="nk-content-body">
                                <div className="nk-ibx">
                                    <div className="nk-ibx-aside" data-content="inbox-aside" data-toggle-overlay="true" data-toggle-screen="lg">
                                        <div className="nk-ibx-head">
                                            <h5 className="mb-0">Tickets </h5>
                                            <li className="nk-block-tools-opt"><a data-bs-toggle="modal" href="#send-ticket" className="btn btn-outline-light btn-md btn-dim" style="border-radius: 0px; margin-left: 5%;"><em className="icon ni ni-plus"></em><span>Create a Ticket</span></a></li>
                                        </div>
                                        <div className="nk-ibx-nav" data-simplebar>
                                            <ul className="nk-ibx-menu">
                                                <li className="active">
                                                    <a className="nk-ibx-menu-item" href="#">
                                                        <em className="icon ni ni-inbox"></em>
                                                        <span className="nk-ibx-menu-text">Sent</span>
                                                        <span className="badge pill bg-primary" st>2</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="nk-ibx-menu-item" href="#">
                                                        <em className="icon ni ni-trash"></em>
                                                        <span className="nk-ibx-menu-text">Trash</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="nk-ibx-menu-item" href="#">
                                                        <em className="icon ni ni-emails"></em>
                                                        <span className="nk-ibx-menu-text">All Mails</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="nk-ibx-nav-head">
                                                <h6 className="title">Status</h6>
                                               
                                            </div>
                                            <ul className="nk-ibx-label">
                                                <li>
                                                    <a><span className="nk-ibx-label-dot dot dot-xl dot-label bg-primary"></span><span className="nk-ibx-label-text">Received</span></a>
                                              
                                                </li>
                                                <li>
                                                    <a><span className="nk-ibx-label-dot dot dot-xl dot-label bg-warning"></span><span className="nk-ibx-label-text">Pending</span></a>
                                              
                                                </li>
                                                <li>
                                                    <a><span className="nk-ibx-label-dot dot dot-xl dot-label bg-success"></span><span className="nk-ibx-label-text">Answered</span></a>
                                              
                                                </li>
                                            </ul>
                                            <div className="nk-ibx-nav-head">
                                                <h6 className="title">Contact</h6>
                                               
                                            </div>
                                            <ul className="nk-ibx-contact">
                                                <li>
                                                    <a href="discord.com/invite/spacelabs" target="_blank">
                                                      
                                                        <div style="margin-top: 4%; position: relative;padding-right: 1rem;">
                                                           <img src="https://media.discordapp.net/attachments/1129968852021809223/1145808032463323176/discordia.png" style="width:70%;"/>
                                                        
                                                        </div>
                                                        <div className="user-info" style="margin-right: 15%;">
                                                            <span className="lead-text">Discord</span>
                                                            <span className="sub-text">discord.com/invite/spacelabs</span>
                                                        </div>
                                                    </a>
                                                   
                                                </li>
                                                <li>
                                                    <a href="discord.com/invite/spacelabs" target="_blank">
                                                        <div className="nk-wg-action-content" style="margin-top: 4%;">
                                                            <em className="icon ni ni-github-circle"></em>
                                                        
                                                        </div>
                                                        <div className="user-info">
                                                            <span className="lead-text">GitHub</span>
                                                            <span className="sub-text">github.com/spacelabs</span>
                                                        </div>
                                                    </a>
                                                  
                                                </li>
                                                <li>
                                                    <a href="discord.com/invite/spacelabs" target="_blank">
                                                        <div className="nk-wg-action-content" style="margin-top: 4%;">
                                                            <em className="icon ni ni-behance"></em>
                                                        
                                                        </div>
                                                        <div className="user-info">
                                                            <span className="lead-text">Behance</span>
                                                            <span className="sub-text">behance.net/spacelabs</span>
                                                        </div>
                                                    </a>
                                                   
                                                </li>
                                            </ul>
                                            <div className="nk-ibx-status" style="background-color: transparent;">
                                          
                                                <span>We usually reply to tickets within 24 hours.</span>
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nk-ibx-body bg-white">
                                        <div className="nk-ibx-head">
                                            <div className="nk-ibx-head-actions">
                                                <div className="nk-ibx-head-check">
                                                    <div className="custom-control custom-control-sm custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input nk-dt-item-check" id="conversionAll"/>
                                                        <label className="custom-control-label" for="conversionAll"></label>
                                                    </div>
                                                </div>
                                                <ul className="nk-ibx-head-tools g-1">
                                                    <li><a href="#" className="btn btn-icon btn-trigger"><em className="icon ni ni-undo"></em></a></li>
                                                        <li className="d-none d-sm-block"><a href="#" className="btn btn-icon btn-trigger"><em className="icon ni ni-trash"></em></a></li>
                                                 
                                                </ul>
                                            </div>
                                            <div>
                                                <ul className="nk-ibx-head-tools g-1">
                                                  
                                                    <li><a href="#" className="btn btn-trigger btn-icon search-toggle toggle-search" data-target="search"><em className="icon ni ni-search"></em></a></li>
                                                    <li className="me-n1 d-lg-none"><a href="#" className="btn btn-trigger btn-icon toggle" data-target="inbox-aside"><em className="icon ni ni-menu-alt-r"></em></a></li>
                                                </ul>
                                            </div>
                                            <div className="search-wrap" data-search="search">
                                                <div className="search-content">
                                                    <a href="#" className="search-back btn btn-icon toggle-search" data-target="search"><em className="icon ni ni-arrow-left"></em></a>
                                                    <input type="text" className="form-control border-transparent form-focus-none" placeholder="Search by ID or category"/>
                                                    <button className="search-submit btn btn-icon"><em className="icon ni ni-search"></em></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="nk-ibx-list" data-simplebar>
                                            <div className="nk-ibx-item">
                                                <a href="#" className="nk-ibx-link"></a>
                                                <div className="nk-ibx-item-elem nk-ibx-item-check">
                                                    <div className="custom-control custom-control-sm custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input nk-dt-item-check" id="conversionItem01"/>
                                                        <label className="custom-control-label" for="conversionItem01"></label>
                                                    </div>
                                                </div>
                                                <div className="nk-ibx-item-elem nk-ibx-item-star">
                                                    <div className="asterisk" style="margin-top: 20%;"><em className="icon ni ni-arrow-long-right text-warning"></em></div>
                                                </div>
                                                <div className="nk-ibx-item-elem nk-ibx-item-user">
                                                    <div className="user-card">
                                                        <div className="user-avatar" style="background: none; border-radius: none;">
                                                            <img src="https://visage.surgeplay.com/head/512/9e8a126dbbd245bababc988ca2893b99?y=70" style="border-radius: 0%;"/>
                                                           
        
                                                        </div>
                                                        <div className="user-name">
                                                            <div className="lead-text">Maciel <span className="text-soft">(You)</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="nk-ibx-item-elem nk-ibx-item-fluid">
                                                    <div className="nk-ibx-context-group">
                                                        <div className="nk-ibx-context">
                                                            <span className="nk-ibx-context-text">
                                                                <span className="heading"><h6 style="font-size: 16px;">Problems with Payment <span className="nk-h6-head" style="font-size: 16px;">#9742</span></h6></span> Recently I've been having some problems with orders. When I click to create an order, nothing happens, just nothing.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="nk-ibx-item-elem nk-ibx-item-attach">
                                                </div>
                                                <div className="nk-ibx-item-elem nk-ibx-item-time">
                                                    <div className="sub-text" style="width: 5.5rem;">17 September, 19:12 PM</div>
                                                </div>
                                                <div className="nk-ibx-item-elem nk-ibx-item-tools">
                                                    <div className="ibx-actions">
                                                      
                                                        <ul className="ibx-actions-visible gx-2">
                                                            <li>
                                                                <div className="dropdown">
                                                                    <a href="#" className="dropdown-toggle btn btn-sm btn-icon btn-trigger" data-bs-toggle="dropdown"><em className="icon ni ni-more-h"></em></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <ul className="link-list-opt no-bdr">
                                                                            <li><a className="dropdown-item" href="#"><em className="icon ni ni-external"></em><span>View</span></a></li>
                                                                            <li><a className="dropdown-item" href="#"><em className="icon ni ni-archived"></em><span>Archive</span></a></li>
                                                                            <li><a className="dropdown-item" href="#"><em className="icon ni ni-trash"></em><span>Delete</span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                         
                                 
                                 
                                        </div>
                                        <div className="nk-ibx-view">
                                            <div className="nk-ibx-head">
                                                <div className="nk-ibx-head-actions">
                                                    <ul className="nk-ibx-head-tools g-1">
                                                        <li className="ms-n2"><a href="#" className="btn btn-icon btn-trigger nk-ibx-hide"><em className="icon ni ni-arrow-left"></em></a></li>
                                                        <li><a href="#" className="btn btn-icon btn-trigger btn-tooltip" title="Archive"><em className="icon ni ni-archived"></em></a></li>
                                                        <li><a href="#" className="btn btn-icon btn-trigger btn-tooltip" title="Delete"><em className="icon ni ni-trash"></em></a></li>
                                                       
                                                    </ul>
                                                </div>
                                                <div className="nk-ibx-head-actions">
                                                    <ul className="nk-ibx-head-tools g-1">
                                                     
                                                        <li className="me-n1 me-lg-0"><a href="#" className="btn btn-icon btn-trigger search-toggle toggle-search" data-target="search"><em className="icon ni ni-search"></em></a></li>
                                                    </ul>
                                                </div>
                                                <div className="search-wrap" data-search="search">
                                                    <div className="search-content">
                                                        <a href="#" className="search-back btn btn-icon toggle-search" data-target="search"><em className="icon ni ni-arrow-left"></em></a>
                                                        <input type="text" className="form-control border-transparent form-focus-none" placeholder="Search by user or message"/>
                                                        <button className="search-submit btn btn-icon"><em className="icon ni ni-search"></em></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nk-ibx-reply nk-reply" data-simplebar>
                                                <div className="nk-ibx-reply-head">
                                                    <div>
                                                        <h4 className="title">Problems with Payment</h4>
                                                        <ul className="nk-ibx-tags g-1">
                                                            <li className="btn-group is-tags">
                                                                <a className="btn btn-xs btn-primary btn-dim" href="#">Platform</a>
                                                                <a className="btn btn-xs btn-icon btn-primary btn-dim" href="#"><em className="icon ni ni-cross"></em></a>
                                                            </li>
                                                            <li className="btn-group is-tags">
                                                                <a className="btn btn-xs btn-success btn-dim" href="#">Finance</a>
                                                                <a className="btn btn-xs btn-icon btn-success btn-dim" href="#"><em className="icon ni ni-cross"></em></a>
                                                            </li>
                                                         
                                                        </ul>
                                                    </div>
                                                    
                                                </div>
                                                <div className="nk-ibx-reply-group">
                                            
                                                    <div className="nk-ibx-reply-item nk-reply-item">
                                                        <div className="nk-reply-header nk-ibx-reply-header is-opened">
                                                            <div className="nk-reply-desc">
                                                                <div className="user-avatar" style="background: none; border-radius: none;">
                                                                    <img src="https://visage.surgeplay.com/head/512/9e8a126dbbd245bababc988ca2893b99?y=70" style="border-radius: 0%;"/>
                                                                   
                
                                                                </div>
                                                                <div className="nk-reply-info">
                                                                    <div className="nk-reply-author lead-text"><h6>Maciel <span className="text-soft" style="font-size: 14px;">(You)</span></h6> <span className="date d-sm-none">20 Jan, 2020</span></div>
                                                                    <div className="dropdown nk-reply-msg-info">
                                                                        <a href="#" className="dropdown-toggle sub-text dropdown-indicator" data-bs-toggle="dropdown">to SpaceLabs</a>
                                                                        <div className="dropdown-menu dropdown-menu-md">
                                                                            <ul className="nk-reply-msg-meta">
                                                                                <li><span className="label">from:</span> <span className="info"><a href="#">macielrib@gmail.com</a></span></li>
                                                                                <li><span className="label">to:</span> <span className="info"><a href="#">support@spacelabs.com</a></span></li>
                                                                               
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <ul className="nk-reply-tools g-1">
                                                                <li className="date-msg"><span className="date">29 Aug, 2023</span></li>
                                                                <li className="more-actions">
                                                                    <div className="dropdown">
                                                                        <a href="#" className="dropdown-toggle btn btn-trigger btn-icon" data-bs-toggle="dropdown"><em className="icon ni ni-more-v"></em></a>
                                                                        <div className="dropdown-menu dropdown-menu-end">
                                                                            <ul className="link-list-opt no-bdr">
                                                                               
                                                                                <li><a className="dropdown-item" href="#"><em className="icon ni ni-trash-fill"></em><span>Delete this</span></a></li>
                                                                              
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="nk-reply-body nk-ibx-reply-body">
                                                            <div className="nk-reply-entry entry">
                                                                <p>Good morning all,</p>
                                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eos fuga quam quos dolore doloremque recusandae obcaecati vel nesciunt, excepturi hic ducimus. Minus officia, inventore veritatis odit libero vero nulla.</p>
                                                                <p>Lorem ipsum, <br/> Maciel</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                              
                                            
                                                    <div className="nk-ibx-reply-item nk-reply-item">
                                                        <div className="nk-reply-header nk-ibx-reply-header is-opened">
                                                            <div className="nk-reply-desc">
                                                                <div className="user-avatar" style="background: none; border-radius: none;">
                                                                    <img src="file:///C:/Users/POLACO/Documents/KAUE/Websites/CONCLUIDOS/spacelabs.com/images/spacelabs.png" style="border-radius: 0%;"/>
                                                                   
                
                                                                </div>
                                                                <div className="nk-reply-info">
                                                                    <div className="nk-reply-author lead-text"><h6>SpaceLabs <span className="text-soft" style="font-size: 14px;">(Support)</span></h6> <span className="date d-sm-none">20 Jan, 2020</span></div>
                                                                    <div className="dropdown nk-reply-msg-info">
                                                                        <a href="#" className="dropdown-toggle sub-text dropdown-indicator" data-bs-toggle="dropdown">to Maciel</a>
                                                                        <div className="dropdown-menu dropdown-menu-md">
                                                                            <ul className="nk-reply-msg-meta">
                                                                                <li><span className="label">from:</span> <span className="info"><a href="#">support@spacelabs.com</a></span></li>
                                                                                <li><span className="label">to:</span> <span className="info"><a href="#">macielrib@gmail.com</a></span></li>
                                                                               
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <ul className="nk-reply-tools g-1">
                                                                <li className="date-msg"><span className="date">29 Aug, 2023</span></li>
                                                                <li className="more-actions">
                                                                    <div className="dropdown">
                                                                        <a href="#" className="dropdown-toggle btn btn-trigger btn-icon" data-bs-toggle="dropdown"><em className="icon ni ni-more-v"></em></a>
                                                                        <div className="dropdown-menu dropdown-menu-end">
                                                                            <ul className="link-list-opt no-bdr">
                                                                               
                                                                                <li><a className="dropdown-item" href="#"><em className="icon ni ni-trash-fill"></em><span>Delete this</span></a></li>
                                                                              
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="nk-reply-body nk-ibx-reply-body">
                                                            <div className="nk-reply-entry entry">
                                                                <p>Good morning all,</p>
                                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eos fuga quam quos dolore doloremque recusandae obcaecati vel nesciunt, excepturi hic ducimus. Minus officia, inventore veritatis odit libero vero nulla.</p>
                                                                <p>Lorem ipsum, <br/> Maciel</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="nk-ibx-reply-form nk-reply-form">
                                                    <div className="nk-reply-form-header">
                                                        <div className="nk-reply-form-group">
                                                           
                                                            <div className="nk-reply-form-title d-sm-none">Reply</div>
                                                            <div className="nk-reply-form-input-group">
                                                                <div className="nk-reply-form-input nk-reply-form-input-to">
                                                                    <label className="label">To</label>
                                                                    <input type="text" className="input-mail" placeholder="support@spacelabs.com" disabled/>
                                                                </div>
                                                                <div className="nk-reply-form-input nk-reply-form-input-cc" data-content="mail-cc">
                                                                    <label className="label">Cc</label>
                                                                    <input type="text" className="input-mail tagify"/>
                                                                    <a href="#" className="toggle-opt" data-bs-target="mail-cc"><em className="icon ni ni-cross"></em></a>
                                                                </div>
                                                                <div className="nk-reply-form-input nk-reply-form-input-bcc" data-content="mail-bcc">
                                                                    <label className="label">Bcc</label>
                                                                    <input type="text" className="input-mail tagify"/>
                                                                    <a href="#" className="toggle-opt" data-bs-target="mail-bcc"><em className="icon ni ni-cross"></em></a>
                                                                </div>
                                                            </div>
                                                          
                                                        </div>
                                                    </div>
                                                    <div className="nk-reply-form-editor">
                                                        <div className="nk-reply-form-field">
                                                            <textarea className="form-control form-control-simple no-resize" placeholder="Continue your ticket here"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="nk-reply-form-tools">
                                                        <ul className="nk-reply-form-actions g-1">
                                                            <li className="me-2"><button className="btn btn-outline-light btn-md btn-dim" style="border-radius: 0px;" type="submit">Send</button></li>
                                                    
                                                       
                                                            <li>
                                                                <a className="btn btn-icon btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Upload Images" href="#"><em className="icon ni ni-img"></em></a>
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