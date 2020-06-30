import React from "react";
import { PostConsumer } from "../context";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const CarouselSlide = () => {
  return (
    <></>
    // <PostConsumer>
    //   {value => {
    //     console.log(value);
    //     return (
    //       <Slide index={0}>
    //         <div className="slide-img-container">
    //           <Image src={img1} />
    //           <Banner
    //             name={<FaLink />}
    //             title="best javascript framework of 2020"
    //           >
    //             <Link to="/posts" className="post-btn2">
    //               read more
    //             </Link>
    //           </Banner>
    //         </div>
    //       </Slide>
    //     );
    //   }}
    // </PostConsumer>
  );
};

export default CarouselSlide;
