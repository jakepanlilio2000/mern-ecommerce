import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousell() {
  // Import images from public folder instead
  const images = [
    '/carousel/image1.png',
    '/carousel/image2.jpg',
    '/carousel/image3.jpg'
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    adaptiveHeight: true
  };

  return (
    <div className="slick-slider max-w-4xl mx-auto my-8">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2">
            <img 
              src={img} 
              alt={`Slide ${index + 1}`}
              className="rounded-lg shadow-xl mx-auto max-h-96 object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousell;