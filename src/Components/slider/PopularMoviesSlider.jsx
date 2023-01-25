import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Text } from "@chakra-ui/react";

const images = [
  {
    id: 1,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/4189/1000074189/1000074189-v",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v",
    alt: "Image 2 ",
  },
  {
    id: 3,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5455/305455-v",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1248/1431248-v-af62a54a6d8d",
    alt: "Image 4 ",
  },
  {
    id: 5,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2914/472914-v",
    alt: "Image 5 ",
  },
  {
    id: 6,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/9276/1389276-v-6214be423dc1",
    alt: "Image6 ",
  },
  {
    id: 7,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1270/1431270-v-b6bfc3b82ee5",
    alt: "Image 7 ",
  },

  {
    id: 8,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5678/1415678-v-e252f7b02e04",
    alt: "Image 8 ",
  },
  {
    id: 9,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/48/1420048-v-19b4da5bf6f6",
    alt: "Image 9 ",
  },
  {
    id: 10,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9235/1389235-v-27df0544998f",
    alt: "Image 10 ",
  },
  {
    id: 11,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1529/571529-v",
    alt: "Image 11 ",
  },
  {
    id: 12,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/3270/1173270-v-b2cc135901b1",
    alt: "Image 12 ",
  },
  {
    id: 13,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9239/1389239-v-b354c74533f6",
    alt: "Image 13 ",
  },
  {
    id: 14,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3669/593669-v",
    alt: "Image 14 ",
  },

  {
    id: 15,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/old_images/vertical/MOVIE/6013/1000216013/1000216013-v",
    alt: "Image 15 ",
  },
  {
    id: 16,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v",
    alt: "Image 16 ",
  },
  {
    id: 17,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6531/1326531-v-e6302c49fcd9",
    alt: "Image 17 ",
  },
  {
    id: 18,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3299/953299-v",
    alt: "Image 18 ",
  },
  {
    id: 19,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6828/556828-v",
    alt: "Image 19 ",
  },
  {
    id: 20,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1258/1431258-v-bfcf814b38fd",
    alt: "Image 20 ",
  },
  {
    id: 21,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4740/14740-v",
    alt: "Image 21 ",
  },
  {
    id: 22,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1327/441327-v",
    alt: "Image 22 ",
  },
  {
    id: 23,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/4315/1000084315/1000084315-v",
    alt: "Image 23 ",
  },
  {
    id:24,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/old_images/vertical/MOVIE/4502/1000034502/1000034502-v",
    alt: "Image24 ",
  },
  {
    id:25,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9726/439726-v",
    alt: "Image25 ",
  },
];

const PopularMoviesSlider = () => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 8,
    slidesToScroll: 4,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <>
      <Text textAlign={"left"} fontSize="2xl" fontWeight={"bold"} color="white" marginLeft={"15px"}>
        Popular Movies{" "}
      </Text>
      <div className="imgslider">
        <Slider {...settings}>
          {images.map((item, index) => (
            <div key={index}>
              <img
                className="image_hover"
                style={{
                  width: "100%",
                  height: "15%",
                  padding: "5px",
                  borderRadius: "10px",
                }}
                src={item.src}
                alt={item.alt}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default PopularMoviesSlider;
