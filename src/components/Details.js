import React from 'react';
import {Link} from 'react-router-dom';

import Logo from './logo1.png'
import Avatar from './avatar_0.png'
import AvatarMini from './avatar_0.png'

const Details = () =>{
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <div className="container">
                        <Link to="/dashboard"><img src={Logo} width="42px" height="41px;"/></Link>
                        <div className="navbar-collapse collapse" id="responsive-navbar-nav">
                            <div className="mr-auto navbar-nav">
                                <Link to="/dashboard" className="text-white nav-link">Dashboard</Link>
                                <Link to="/contacts" className="text-white nav-link">Contacts</Link>
                                <Link to="/campaigns" className="text-white nav-link">Campaigns</Link>
                            </div>
                            <div className="navbar-nav">
                        <div className="dropdown nav-item">
                                    <a aria-haspopup="true" aria-expanded="false" href="#" data-toggle="dropdown" className="dropdown-toggle nav-link" role="button" >
                                        <img className="rounded-circle" id="h-mini-avatar" src={AvatarMini} width="30" height="30"/>
                                        <span className="text-white">Jeffery</span>
                                    </a>
                                <div className="dropdown-menu" aria-labelledby>
                                        <Link className="dropdown-item" to="/settings">Settings</Link>
                                        <Link className="dropdown-item" to="/new-contact">Create a new contact</Link>
                                        <div className="dropdown-divider" role="separator"></div>
                                        <Link className="dropdown-item" to="#">Log out</Link>
                                </div>
                            </div>
                        </div> 
                        </div>
                    </div>  
                </nav>

                    <div className="container">
                        <div className="row">
                            <div id="contact-info" className="bg-white p-0 position-relative col-md-3 col-12">
                                <button id="back" type="button" className="rounded-0 btn btn-dark"> <Link to="/contacts" className="text-white">Back</Link></button>
                                <div className="container-avatar-info border-bottom">
                                    <div className="d-flex justify-content-center">
                                        <figure className="text-center">
                                            <img src={Avatar} className="avatar"></img>
                                            <figcaption className="name-with-avatar">Jeffery Fox</figcaption>
                                        </figure>
                                    </div>
                                </div>
                                    <div className="ag-p-20">
                                        <div className="d-flex">
                                            <h6 className="ac-text-16 font-weight-bold">About</h6>
                                            <ul className="list-about-user">
                                                <li>
                                                    <label className="text-secondary">Phone Number</label>
                                                    <p>(415) 123-4567</p>
                                                </li>
                                                <li>
                                                    <label className="text-secondary">Email</label>
                                                    <p>jfox@gamil.com</p>
                                                </li>
                                                <li>
                                                    <label className="text-secondary">Objective</label>
                                                    <p>Objective</p>
                                                </li>
                                                <li>
                                                    <label className="text-secondary">Lifecycle Stage</label>
                                                    <p>New</p>
                                                </li>
                                                <li>
                                                    <label className="text-secondary">Contact Status</label>
                                                    <p>New</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                            <div className="p-0 col-9">
                                
                                    <div className="pt-1-hf pl-2 row">
                                        <div className="ag-m-3 col-lg-6 col-12">
                                            <div className="block-list">
                                                <div className="card-header bg-dark d-flex">
                                                <h6 className="ac-text-16 font-weight-bold text-white">Overview</h6>
                                                </div>
                                                <div className="card-body">
                                                    <div className="list-group">
                                                        <div className="list-group-item">
                                                            <div className="d-flex justify-content-between">
                                                            <label class="font-weight-bold">City</label>
                                                            <span>San Francisco</span>
                                                            </div>
                                                        </div>
                                                    
                                                    
                                                        <div className="list-group-item">
                                                            <div className="d-flex justify-content-between">
                                                            <label class="font-weight-bold">State</label>
                                                            <span>California</span>
                                                            </div>
                                                        </div>
                                                  
                                                    
                                                        <div className="list-group-item">
                                                            <div className="d-flex justify-content-between">
                                                            <label class="font-weight-bold">ZIP CODE</label>
                                                            <span>1234567</span>
                                                            </div>
                                                        </div>
                                                 
                                                   
                                                        <div className="list-group-item">
                                                            <div className="d-flex justify-content-between">
                                                            <label class="font-weight-bold">Property Type</label>
                                                            <span>Any Type</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ag-m-3 col-lg-6 col-12">
                                            <div className="block-list">
                                                <div className="card-header bg-dark d-flex">
                                                <h6 className="ac-text-16 font-weight-bold text-white">Contract Details</h6>
                                                </div>
                                                <div className="card-body">
                                                    <div className="list-group">
                                                        <div className="list-group-item">
                                                            <div className="d-flex justify-content-between">
                                                            <label class="font-weight-bold">Objective</label>
                                                            <span>Buyer</span>
                                                            </div>
                                                        </div>
                                                   
                                                   
                                                        <div className="list-group-item">
                                                            <div className="d-flex justify-content-between">
                                                            <label class="font-weight-bold">Estimated Price</label>
                                                            <span>$450,000-$500,000</span>
                                                            </div>
                                                        </div>
                                               
                                                 
                                                        <div className="list-group-item">
                                                            <div className="d-flex justify-content-between">
                                                            <label class="font-weight-bold">Down Payment</label>
                                                            <span>15%</span>
                                                            </div>
                                                        </div>
                                                   
                                                    
                                                        <div className="list-group-item">
                                                            <div className="d-flex justify-content-between">
                                                            <label class="font-weight-bold">Timeframe</label>
                                                            <span>ASAP</span>
                                                            </div>
                                                        </div>
                                                        </div>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ag-m-3 col-lg-6 col-12">
                                            <div className="block-list">
                                                <div className="card-header bg-dark d-flex">
                                                <h6 className="ac-text-16 font-weight-bold text-white">Other Info</h6>
                                                </div>
                                                <div className="card-body">
                                                    
                                                        <div className="list-group-item">
                                                            <div className="d-flex justify-content-between">
                                                            <label class="font-weight-bold">First Time Buyer</label>
                                                            <span>Yes</span>
                                                            </div>
                                                        </div>
                                                   
                                                    
                                                        <div className="list-group-item">
                                                            <div className="d-flex justify-content-between">
                                                            <label class="font-weight-bold">Other Info</label>
                                                            <span className="text-success">Good</span>
                                                            </div>
                                                        </div>
                                                    
                                                    
                                                        <div className="list-group-item">
                                                            <div className="d-flex justify-content-between">
                                                            <label class="font-weight-bold">Veteran Status</label>
                                                            <span>I'm not Veteran</span>
                                                            </div>
                                                        </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
        </React.Fragment>
       
    )
}

export default Details;