import React from 'react';
import './Wraprounded.css'
const Wraprounded = () => {
    return (
        <div className='wrap-cards-container'>
            <div className="row justify-content-center">

                <div className="col-sm-3 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body">
                            <img className='image-wrapper' src='https://media.istockphoto.com/vectors/transparent-checkered-background-transparent-grid-squares-texture-vector-id1205276256' width='250px' />
                            <img className='child-image-wrapper' src='https://static.vecteezy.com/system/resources/previews/000/422/914/original/vector-settings-icon.jpg' width='250px' />
                            <p>
                                This paragraph
                                contains a lot of lines
                                in the source code,
                                but the browser
                                ignores it.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <img className='image-wrapper' src='https://media.istockphoto.com/vectors/transparent-checkered-background-transparent-grid-squares-texture-vector-id1205276256' width='250px' />
                            <img className='child-image-wrapper' src='https://icons.iconarchive.com/icons/martz90/circle-addon2/512/computer-icon.png' width='250px' />
                            <p>
                                This paragraph
                                contains a lot of lines
                                in the source code,
                                but the browser
                                ignores it.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col-sm-3 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body">
                            <img className='image-wrapper' src='https://media.istockphoto.com/vectors/transparent-checkered-background-transparent-grid-squares-texture-vector-id1205276256' width='250px' />
                            <img className='child-image-wrapper' src='https://www.pngitem.com/pimgs/m/11-110377_research-vector-research-clipart-transparent-background-hd-png.png' />
                            <p>
                                This paragraph
                                contains a lot of lines
                                in the source code,
                                but the browser
                                ignores it.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <img className='image-wrapper' src='https://media.istockphoto.com/vectors/transparent-checkered-background-transparent-grid-squares-texture-vector-id1205276256' width='250px' />
                            <img className='child-image-wrapper' src='https://www.freeiconspng.com/uploads/message-icon-png-3.png' />
                            <p>
                                This paragraph
                                contains a lot of lines
                                in the source code,
                                but the browser
                                ignores it.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Wraprounded;