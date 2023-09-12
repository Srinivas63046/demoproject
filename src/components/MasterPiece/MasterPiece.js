import React from 'react';
import './MasterPiece.css'
const MasterPiece = () => {
    return (
        <div className='master-piece-container'>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col">
                                            <img className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" src='https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg' width="800" height="400" /><text>First slide</text>
                                        </div>
                                        <div className="col">
        
                                            <h2 >AWESOME WEBSITE TEMPLATE</h2>
                                            <p >Create your website. Online store editor. Customize your store. Store themes. Find business apps. Shopify app store. Own your site domain.</p>
                                        </div>

                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className='row'>
                                        <div className='col'>
                                            <img className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" src='https://thewowstyle.com/wp-content/uploads/2015/01/images-of-nature-4.jpg' width="800" height="400" /><text>second slide</text>
                                        </div>
                                        <div className='col'>
                                            <h2>Sorty private limited company</h2>
                                            <p>Create your website. Online store editor. Customize your store. Store themes. Find business apps. Shopify app store. Own your site domain.</p>

                                        </div>
                                    </div>

                                </div>
                                 <div className="carousel-item">
                                    <div className='row'>
                                        <div className='col'>
                                            
                                            <img className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" src='http://wallup.net/wp-content/uploads/2016/03/10/319576-photography-landscape-nature-water-grass-trees-plants-sunrise-lake.jpg' width="800" height="400" /><text>Three slide</text>
                                        </div>
                                        <div className='col'>
                                            <h2>Sorty private limited company</h2>
                                            <p>Create your website. Online store editor. Customize your store. Store themes. Find business apps. Shopify app store. Own your site domain.</p>

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

            <div className='master-pice-text-wrapper'>
                <h1>Create your own Genuine Web MasterPiece</h1>
                <p>Lorem   Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
        </div>
    )
};

export default MasterPiece;