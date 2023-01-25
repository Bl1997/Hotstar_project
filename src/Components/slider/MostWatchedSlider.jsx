
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Text } from "@chakra-ui/react";
import axios from "axios";


// const images = [
//   {
//     id: 1,
//     src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2387/1452387-v-e9e11947b44a",
//     alt: "Image 1",
//   },
//   {
//     id: 2,
//     src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1158/1451158-v-60ae0c6f2c82",
//     alt: "Image 2 ",
//   },
//   {
//     id: 3,
//     src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5420/1445420-v-50e5c9e5afc8",
//     alt: "Image 3",
//   },
//   {
//     id: 4,
//     src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1970/1441970-v-574d1988c10a",
//     alt: "Image 4 ",
//   },
//   {
//     id: 5,
//     src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6479/1436479-v-3bd70e9e2b4d",
//     alt: "Image 5 ",
//   },
//   {
//     id: 6,
//     src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2979/1432979-v-36cfe251ff8a",
//     alt: "Image6 ",
//   },
//   {
//     id: 7,
//     src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9490/1429490-v-b6665ae9e72f",
//     alt: "Image 7 ",
//   },

//   {
//     id: 8,
//     src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5980/1425980-v-211ae5b2e668",
//     alt: "Image 8 ",
//   },
//   {
//     id: 9,
//     src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/5052/1405052-v-2063bab41935",
//     alt: "Image 9 ",
//   },
//   {
//     id: 10,
//     src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9264/1319264-v-0bd71e83df13",
//     alt: "Image 10 ",
//   },
//   {
//     id: 11,
//     src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8727/1448727-v-984e086fc891",
//     alt: "Image 11 ",
//   },
//   {
//     id: 12,
//     src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4452/1444452-v-aff8aea93f8e",
//     alt: "Image 12 ",
//   },
//   {
//     id: 13,
//     src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3639/1433639-v-4667d2acb4c6",
//     alt: "Image 13 ",
//   },
//   {
//     id: 14,
//     src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/1138/1431138-v-15bc1d407090",
//     alt: "Image 14 ",
//   },

//   {
//     id: 15,
//     src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/3414/1413414-v-cdd2518d6ab1",
//     alt: "Image 15 ",
//   },
//   {
//     id: 16,
//     src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8727/1448727-v-984e086fc891",
//     alt: "Image 16 ",
//   },
//   {
//     id: 17,
//     src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6835/1306835-v-c7de376e8e62",
//     alt: "Image 17 ",
//   },
//   {
//     id: 18,
//     src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4920/1044920-v-1ac34349aead",
//     alt: "Image 18 ",
//   },
//   {
//     id: 19,
//     src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/9833/1119833-v-fcf7e530dcd6",
//     alt: "Image 19 ",
//   },
//   {
//     id: 20,
//     src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4267/1364267-v-59ed5cfdea3a",
//     alt: "Image 20 ",
//   },
//   {
//     id: 21,
//     src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5455/305455-v",
//     alt: "Image 21 ",
//   },
// ];



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
      <Text textAlign={"left"} fontSize="2xl" fontWeight={"bold"} color="white" marginLeft={"15px"}>
     Most Watched In 2022{" "}
      </Text>
      <div className="imgslider">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index}>
              <img
                className="image_hover"
                style={{
                  width: "100%",
                  height: "210px",
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
