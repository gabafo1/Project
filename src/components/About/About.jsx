import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../asset/Untitled-7.png';
import image2 from '../../asset/1517369981655__1_-removebg-preview-removebg-preview.png';
import image3 from '../../asset/Development-Bank-of-Nigeria-DBN-1024x578__1_-removebg-preview.png';
import image4 from '../../asset/logo-fid.png';
import image5 from '../../asset/kwese_logo-255x147.png'

const About = () => {
  const images = [
    { id: 1, src: image1, alt: '/', className: 'h-30 w-16 object-cover' },
    { id: 2, src: image2, alt: 'Image 2', className: 'h-full w-16 object-cover pt-3 pl-5' },
    { id: 3, src: image3, alt: 'Image 3', className: 'h-20 w-full object-contain mt-6' },
    { id: 4, src: image4, alt: 'Image 4', className: 'h-20 w-full object-cover mt-7' },
    { id: 5, src: image5, alt: 'Image 5', className: 'h-40 w-full object-contain pb-10' },
    // Add more image objects as needed
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    swipe: false, // Disable swipe gestures
    prevArrow: false, // Hide the default arrow icon
    nextArrow: false, // Hide the default arrow icon
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container w-full h-50 my-10">
      <div>
        <h1 className="text text-4xl font-bold text-center py-7 p-7">
          Trusted by world-class enterprises
        </h1>
      </div>
      <Slider {...settings} className="py-5">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={`${image.className} mx-2`} // Add mx-2 class for equal spacing
          />
        ))}
        {/* Add more images as needed */}
      </Slider>
    </div>
  );
};

export default About;
