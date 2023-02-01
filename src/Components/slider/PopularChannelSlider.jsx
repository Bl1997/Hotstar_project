
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  Text } from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";




const PopularChannelSlider = () => {

    const API_KEY = "AIzaSyAGlOnz0IKoW_2xtOU61nkADfnlhZEqrkc";

    const [data, setData] = useState([]);
   
  
   
  
    useEffect(() => {
      axios
        .get(
          ` https://www.googleapis.com/youtube/v3/search?q=  Star Channel  &key=${API_KEY}&part=snippet&maxResults=50&order=title`
        )
  
        .then((res) => setData(res.data.items));
    }, []);

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 8,
    slidesToScroll: 4,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Text textAlign={"left"} fontSize="2xl" fontWeight={"bold"} color="white" marginLeft={"15px"} cursor="pointer">
   <Link to={"/popularchannel"}>Popular Channel </Link>
      </Text>
      <div className="imgslider">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index}>
              <img
                className="image_hover"
                style={{
                  width: "100%",
                  height: "220px",
                  padding: "5px",
                  borderRadius: "10px",
                }}
                src={item.snippet.thumbnails.high.url}
                alt={item.alt}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default PopularChannelSlider;
