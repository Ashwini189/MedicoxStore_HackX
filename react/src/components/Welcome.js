import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Welcome(props) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,

    };

    return (
        <Jumbotron className="bg-dark text-white">
            <h1>{props.heading}</h1>

            <blockquote className="blockquote mb-0">
                <p>
                    {props.quote}
                </p>
                <footer className="blockquote-footer">
                    {props.footer}
                </footer>
            </blockquote><br></br><br />

            <Slider {...settings}>


                <div>
                    <img style={{ marginLeft: "240px" }} src="https://tubertip.com/wp-content/uploads/2021/04/Benadryl-cough-syrup-Review.jpg" width="505" height="285" alt="brand" />
                </div>
                <div>
                    <img style={{ marginLeft: "240px" }} src="https://5.imimg.com/data5/FM/IN/LH/SELLER-49678549/snehmol-500-jpg-500x500.jpg" width="505" height="285" alt="brand" />
                </div>
                <div>
                    <img style={{ marginLeft: "240px" }} src="https://images.financialexpress.com/2019/07/medicine1.jpg?w=1200&h=800&imflag=true" width="505" height="285" alt="brand" />
                </div>
                
                <div>
                    <img style={{ marginLeft: "240px" }} src="https://www.siliconrepublic.com/wp-content/uploads/2018/05/Vitamin-bottle-718x523.jpg" width="505" height="285" alt="brand" />
                </div>
                <div>
                    <img style={{ marginLeft: "240px" }} src="https://d3srkhfokg8sj0.cloudfront.net/wp-content/uploads/sites/669/0219_STD_AskDoc_feature-final-696x313.jpg" width="505" height="285" alt="brand" />
                </div>
                <div>
                    <img style={{ marginLeft: "240px" }} src="https://www.brookshirebrothers.com/sites/default/files/600_pharmacyblog.jpg" width="505" height="285" alt="brand" />
                </div>
            </Slider>
        </Jumbotron>
    );
} 