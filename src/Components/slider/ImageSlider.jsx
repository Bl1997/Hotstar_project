import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const images = [{
  id: 1,
  src: "https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-01-21/ChocoBackes_Desktop-f0e2ddd5-ed6d-4bf8-b996-068a92f6e12e.jpg",
  alt: "Image 1"
},
{
  id: 2,
  src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5453/305453-h",
  alt: "Image 2 "
},
{
  id: 3,
  src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1157/1451157-h-945591285ed5",
  alt: "Image 3"
},
{
  id: 4,
  src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3589/1453589-h-2f302d68987e",
  alt: "Image 4 "
},
{
  id: 5,
  src: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5419/1445419-h-af35b771bce5",
  alt: "Image 5 "
},
];

const ImageSlider = () => {
  
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
  autoplaySpeed: 3000,
   
  };
  return (
    <>

      <div className="imgslider">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img style={{width:"100%",height:"500px",padding:"25px",borderRadius:"10px"}} src={item.src}  alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div>
          </>
  )
}
export default ImageSlider;