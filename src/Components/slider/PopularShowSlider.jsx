import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const images = [
  {
    id: 1,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4253/1364253-v-17a2ff74143c",
    alt: "Image 2 ",
  },
  {
    id: 3,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2387/1452387-v-e9e11947b44a",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4267/1364267-v-59ed5cfdea3a",
    alt: "Image 4 ",
  },
  {
    id: 5,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4255/1364255-v-7d13c9d136b5",
    alt: "Image 5 ",
  },
  {
    id: 6,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5362/1395362-v-f8d73be7dd01",
    alt: "Image6 ",
  },
  {
    id: 7,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7721/847721-v",
    alt: "Image 7 ",
  },

  {
    id: 8,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4259/1364259-v-fe5f361f4eae",
    alt: "Image 8 ",
  },
  {
    id: 9,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8056/1308056-v-b52e223ef46d",
    alt: "Image 9 ",
  },
  {
    id: 10,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6594/1446594-v-8ccc26ba3e66",
    alt: "Image 10 ",
  },
  {
    id: 11,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4261/1364261-v-bc200a22b55b",
    alt: "Image 11 ",
  },
  {
    id: 12,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3569/1443569-v-9dd281391af9",
    alt: "Image 12 ",
  },
  {
    id: 13,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1475/1441475-v-33d3428a9d16",
    alt: "Image 13 ",
  },
  {
    id: 14,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/3639/1443639-v-107c591f03f7",
    alt: "Image 14 ",
  },

  {
    id: 15,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3229/1423229-v-38316a3e497f",
    alt: "Image 15 ",
  },
  {
    id: 16,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/884/1400884-v-a3d0bc715410",
    alt: "Image 16 ",
  },
  {
    id: 17,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/440/1430440-v-a4752401320e",
    alt: "Image 17 ",
  },
  {
    id: 18,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4335/1104335-v-6cd8d08e03da",
    alt: "Image 18 ",
  },
  {
    id: 19,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6064/1416064-v-1617690793be",
    alt: "Image 19 ",
  },
  {
    id: 20,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8803/1308803-v-92e2188d682a",
    alt: "Image 20 ",
  },
  {
    id: 21,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7527/267527-v",
    alt: "Image 21 ",
  },
  {
    id: 22,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1992/311992-v",
    alt: "Image 22 ",
  },
  {
    id: 23,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2028/552028-v",
    alt: "Image 23 ",
  },
  {
    id:24,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3065/1323065-v-58c6d2de61e1",
    alt: "Image24 ",
  },
  {
    id:25,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/SHOW/81/81/81-v",
    alt: "Image25 ",
  },
];

const PopularShowSlider = () => {
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
      <Text textAlign={"left"} fontSize="2xl" fontWeight={"bold"} color="white" marginLeft={"15px"} cursor="pointer">
       <Link to={"/popularshow"}>Popular Show</Link>
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
export default PopularShowSlider;
