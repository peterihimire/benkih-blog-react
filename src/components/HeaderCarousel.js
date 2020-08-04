import React from "react";
// import img1 from "../images/blog-header.jpg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight, FaLink } from "react-icons/fa";
import { PostConsumer } from "../context";
import Loading from "../components/Loading";

// import CarouselSlider from "../components/CarouselSlider";
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
    <PostConsumer>
      {value => {
        console.log(value);
        const { popularPosts, loading } = value;
        console.log(popularPosts);

        return (
          <CarouselProvider
            visibleSlides={1}
            totalSlides={4}
            step={1}
            naturalSlideWidth={100}
            naturalSlideHeight={51.5}
            hasMasterSpinner
            isPlaying={true}
          >
            <div className="container">
              <Slider className="slider">
                {loading ? (
                  <Loading />
                ) : (
                  popularPosts.map(post => {
                    return (
                      <Slide index={post.id}>
                        <div className="slide-img-container">
                          <Image src={post.image} />
                          <Banner name={<FaLink />} title={post.title}>
                            <Link
                              to={`/posts/${post.slug}`}
                              className="post-btn2"
                            >
                              read more
                            </Link>
                          </Banner>
                        </div>
                      </Slide>
                    );
                  })
                )}
              </Slider>

              {/* <Slider className="slider">
          <Slide index={0}>
            <div className="slide-img-container">
              <Image src={img1} />
              <Banner
                name={<FaLink />}
                title="best javascript framework of 2020"
              >
                <Link to="/posts" className="post-btn2">
                  read more
                </Link>
              </Banner>
            </div>
          </Slide>
          <Slide index={1}>
            <div className="slide-img-container">
              <Image src={img1} />
              <Banner
                name={<FaLink />}
                title="my programming setup for productivity"
              >
                <Link to="/posts" className="post-btn2">
                  read more
                </Link>
              </Banner>
            </div>
          </Slide>
          <Slide index={2}>
            <div className="slide-img-container">
              <Image src={img1} />
              <Banner
                name={<FaLink />}
                title="things to know in javascript before learning react framework"
              >
                <Link to="/posts" className="post-btn2">
                  read more
                </Link>
              </Banner>
            </div>
          </Slide>
          <Slide index={3}>
            <div className="slide-img-container">
              <Image src={img1} />
              <Banner
                name={<FaLink />}
                title="best attire to make a good impression on a first date"
              >
                <Link to="/posts" className="post-btn2">
                  read more
                </Link>
              </Banner>
            </div>
          </Slide>
          <Slide index={4}>
            <div className="slide-img-container">
              <Image src={img1} />
              <Banner
                name={<FaLink />}
                title="best career goals for a fresh graduate"
              >
                <Link to="/posts" className="post-btn2">
                  read more
                </Link>
              </Banner>
            </div>
          </Slide>
        </Slider> */}
              <ButtonBack className="buttonBack">
                {" "}
                <FaAngleLeft />
              </ButtonBack>
              <ButtonNext className="buttonNext">
                {" "}
                <FaAngleRight />
              </ButtonNext>
            </div>
            <DotGroup className="dotGroup" />
          </CarouselProvider>
        );
      }}
    </PostConsumer>
  );
};

export default HeaderCarousel;
