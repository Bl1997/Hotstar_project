
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Text } from "@chakra-ui/react";
import axios from "axios";
import {Link} from "react-router-dom"




const MostWatchedSlider = () => {

    const API_KEY = "AIzaSyAGlOnz0IKoW_2xtOU61nkADfnlhZEqrkc";

    const [data, setData] = useState([]);
   
  
   
  
    useEffect(() => {
      axios
        .get(
          ` https://www.googleapis.com/youtube/v3/search?q= Most watched in 2022 on Hotstar  &key=${API_KEY}&part=snippet&maxResults=50&order=title`
        )
  
        .then((res) => setData(res.data.items));
    }, []);

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 8,
    slidesToScroll: 7,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <Text textAlign={"left"} fontSize="2xl" fontWeight={"bold"} color="white" marginLeft={"15px"} cursor="pointer">
    <Link to={"/mostwatched"}> Most Watched In 2022</Link>
      </Text>
      <div className="imgslider">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index}>
              <img
                className="image_hover"
                style={{
                  width: "100%",
                  height: "20%",
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
export default MostWatchedSlider;
