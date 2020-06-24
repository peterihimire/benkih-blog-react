import React from "react";
import img1 from "../images/post-1.jpeg";
import img2 from "../images/post-2.jpeg";
import img3 from "../images/post-3.jpeg";
import img4 from "../images/post-4.jpeg";
import img5 from "../images/post-5.jpeg";

import {
  ButtonBack,
  // ButtonFirst,
  // ButtonLast,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Image,
  Slide,
  Slider
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
const HeaderCarousel = () => {
  return (
    <CarouselProvider
      visibleSlides={1}
      totalSlides={5}
      step={1}
      naturalSlideHeight={60}
      naturalSlideWidth={100}
      hasMasterSpinner
      isPlaying={true}
    >
      <div className="container">
        <Slider className="slider">
          <Slide index={0}>
            <Image src={img1} />
          </Slide>
          <Slide index={1}>
            <Image src={img2} />
          </Slide>
          <Slide index={2}>
            <Image src={img3} />
          </Slide>
          <Slide index={3}>
            <Image src={img4} />
          </Slide>
          <Slide index={4}>
            <Image src={img5} />
          </Slide>
        </Slider>
        <ButtonBack className="buttonBack">back</ButtonBack>
        <ButtonNext className="buttonNext">next</ButtonNext>
      </div>
      <DotGroup className="dotGroup" />
    </CarouselProvider>
  );
};

export default HeaderCarousel;
