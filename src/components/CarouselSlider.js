import React from "react";
import { PostConsumer } from "../context";
import CarouselSlide from "../components/CarouselSlide";

const CarouselSlider = () => {
  return (
    <PostConsumer>
      {/* {value => {
        console.log(value);
        return (
          <Slider>
            <CarouselSlide />
          </Slider>
        );
      }} */}
    </PostConsumer>
  );
};

export default CarouselSlider;
