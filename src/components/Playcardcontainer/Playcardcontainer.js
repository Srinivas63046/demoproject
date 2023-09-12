import React from 'react';
import './Playcardcontainer.css'
const Playcardcontainer = () => {
    return (
        <div className='master-piece-containerone'>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col">
                                            <img className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" src='http://wallsdesk.com/wp-content/uploads/2016/06/youtube-logo.jpg' width="800" height="300" /><text>First slide</text>
                                        </div>
                                        <div className="col">
                                            <h1 className='play-heading'>WHY ARE YOU WAITING START  TODAY ?</h1>
                                            <p className='play-text'>Create your website. Online store editor. Customize your store. Store themes. Find business apps. Shopify app store. Own your site domain.</p>
                                            <button className='btnn'>submit</button>
                                        </div>
                                        

                                    </div>
                                </div>
                                
                                 
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" fdprocessedid="zlotp">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" fdprocessedid="7q7e7">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            
    
    )
};

export default Playcardcontainer;