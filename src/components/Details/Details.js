import React from 'react';
import './Details.css'




const Details = () => {
    return (
        <div className='master-piece-containerthree'>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                    
                                        <div className="col">
                                            <div className='net-work-info'>
                                            <h1>About us</h1>
                                            <p className='playone'>Create your website. Online store editor. Customize your store. Store themes. Find business apps. Shopify app store. Own your site domain.
                                                 who achieved the feat in his 321st innings against Pakistan in Rawalpindi back in 2004.</p>
                                                 </div>
                                        </div>

                                        <div className="col">
                                        <div className='net-work-info'>
                                        <h1>Get in touch</h1>
                                            <p className='playone'>Create your website. Online store editor. Customize your store. Store themes. Find business apps. Shopify app store. Own your site domain.
                                                 who achieved the feat in his 321st innings against Pakistan in Rawalpindi back in 2004.</p>
                                            
                                        </div>
                                        </div>
                                        <div className="col">
                                        <div className='net-work-info'>
                                        <h1>Social media</h1>
                                            <p className='playone'>Create your website. Online store editor. 
                                             He broke the record of Sachin Tendulkar, who achieved the feat in his 321st innings against Pakistan in Rawalpindi back in 2004.</p>
                                            
                                            </div>  
                                             
                                        </div>
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




    )
};

export default Details;