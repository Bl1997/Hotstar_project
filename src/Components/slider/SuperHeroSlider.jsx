import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const images = [
  {
    id: 1,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/5180/875180-v",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/8299/1328299-v-41830f478c3f",
    alt: "Image 2 ",
  },
  {
    id: 3,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7973/1317973-v-f6a964bf4713",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/2350/1282350-v-15ffecf89380",
    alt: "Image 4 ",
  },
  {
    id: 5,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/2353/1282353-v-ba90d44ce003",
    alt: "Image 5 ",
  },
  {
    id: 6,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2347/1282347-v-57b71e72275e",
    alt: "Image6 ",
  },
  {
    id: 7,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2261/1422261-v-0e77e925ce97",
    alt: "Image 7 ",
  },

  {
    id: 8,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2357/1282357-v-b8d865fb55aa",
    alt: "Image 8 ",
  },
  {
    id: 9,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9942/1279942-v-724d56a723a1",
    alt: "Image 9 ",
  },
  {
    id: 10,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2381/1282381-v-7e83ba0a71a7",
    alt: "Image 10 ",
  },
  {
    id: 11,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5190/875190-v",
    alt: "Image 11 ",
  },
  {
    id: 12,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/5157/875157-v",
    alt: "Image 12 ",
  },
  {
    id: 13,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5168/875168-v",
    alt: "Image 13 ",
  },
  {
    id: 14,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4580/674580-v",
    alt: "Image 14 ",
  },

  {
    id: 15,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4296/674296-v",
    alt: "Image 15 ",
  },
  {
    id: 16,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4483/674483-v",
    alt: "Image 16 ",
  },
  {
    id: 17,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4271/674271-v",
    alt: "Image 17 ",
  },
  {
    id: 18,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4308/674308-v",
    alt: "Image 18 ",
  },
  {
    id: 19,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/5600/675600-v",
    alt: "Image 19 ",
  },
  {
    id: 20,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5215/875215-v",
    alt: "Image 20 ",
  },
  {
    id: 21,
    src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5157/875157-v",
    alt: "Image 21 ",
  },
];

const SuperHeroSlider = () => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 8,
    slidesToScroll: 2,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Text textAlign={"left"} fontSize="2xl" fontWeight={"bold"} color="white" marginLeft={"15px"} cursor="pointer">
      <Link to={"/superhero"}>  Watch Super Heros Movies</Link>
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
export default SuperHeroSlider;
