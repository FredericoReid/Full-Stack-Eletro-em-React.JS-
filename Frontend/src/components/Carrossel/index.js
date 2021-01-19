import React from 'react';


const Carrossel = () => {

    return(
        <>
            <div className="container-fluid col-sm-3-xl-12">
                    <div className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="mainSlider" data-slide-to="0" className="active"></li>
                            <li data-target="mainSlider" data-slide-to="1" ></li>
                            <li data-target="mainSlider" data-slide-to="2" ></li>
                        </ol>

                        
                        <div className="carousel-inner">

                            
                            <div className="carousel-item active">
                                <img src="imagens/carousel1.jpg" className="d-block w-10" alt=""/>
                            </div>

                            
                            <div className="carousel-item">
                                <img src="imagens/carousel2.jpg" className="d-block w-10" alt=""/>
                            </div>

                            
                            <div className="carousel-item">
                                <img src="imagens/carousel3.jpg" className="d-block w-10" alt=""/>
                            </div>
                        </div>

                    </div>
            </div>
            <br />
            <br />
        </>
    )
}

export default Carrossel;