import React from 'react';
import './Cards.css'
const Cards = () => {
    return (
        <div className='cards-container'>
            <div className="row">
                <div className="col-sm-3 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body">
                            <img src='https://www.pngitem.com/pimgs/m/11-110377_research-vector-research-clipart-transparent-background-hd-png.png' width='150px'/>
                            <div className='cart-text-wrapper'>
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <img src='https://icons.iconarchive.com/icons/martz90/circle-addon2/512/computer-icon.png' width='150px'/>
                            <div className='cart-text-wrapper'>
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body">
                            <img src='https://www.freeiconspng.com/uploads/message-icon-png-3.png' width='150px'/>
                            <div className='cart-text-wrapper'>
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <img src='https://static.vecteezy.com/system/resources/previews/000/422/914/original/vector-settings-icon.jpg' width='150px'/>
                            <div className='cart-text-wrapper'>
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cards;