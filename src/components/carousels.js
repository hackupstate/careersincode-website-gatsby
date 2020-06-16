import React, { useState } from "react";
import { Link } from "gatsby";
import {
  Button,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Col,
} from "reactstrap";
import Joey from "../images/instructors/joeybuczek.jpg";
import Kelly from "../images/students/kellycorey.jpg";
import Doug from "../images/team/dougcrescenzi.png";

import content from "../content/content.json";
import carouselStyles from "./carousel.module.css";

// code for testimonial carousel taken and adapted from https://reactstrap.github.io/components/carousel/

const items = [
  {
    src: Joey,
    altText: "Black and white headshot of Joey Buczek",
    caption:
      "Being a part of this first cohort was definitely a rewarding experience! Not only did we help a group of wonderful people learn new skills to be able to advance their careers in a growing field, but we also learned a lot about how each of us could grow and contribute in more meaningful ways in the future of this program as well. There was a wealth of data collected that will positively influence future cohorts, allowing this program to evolve organically along with the wants and needs of both this area and in the technology field in general. I am so grateful to be a part of this endeavor, and am looking forward to seeing if this program will continue.",
    header: "Joey Buczek, Cohort I Instructor",
  },
  {
    src: Kelly,
    altText: "Headshot of Kelly Corey",
    caption:
      "Applying for Careers in Code was one of the best decisions I've made in my entire life! Over the course of 6 months, I went from a little knowledge of HTML and CSS to a full-stack JavaScript web developer. The instructors and TAs were always willing to go out of their way to help with anything we needed throughout the duration of class. I'm thrilled I got to opportunity to train in a field that I'm passionate about and I look forward to contributing to the Syracuse tech community.",
    header: "Kelly Corey, Cohort I Graduate",
  },
  {
    src: Doug,
    altText: "Headshot of Doug Crescenzi",
    caption:
      "The rise of coding bootcamps throughout the country reflects the shortage of adequately trained software developers graduating from universities and the relative demand for them from the technology sector. The reason coding bootcamps have proven effective over the years is because they provide vocational training at a fraction of the cost of a college degree.",
    header: "Doug Crescenzi, Founder",
  },
];

const Carousels = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          className={carouselStyles.carouselImg}
          src={item.src}
          alt={item.altText}
        />
        <CarouselCaption
          className={carouselStyles.carouselCaption}
          captionText={item.caption}
          captionHeader={item.header}
          fluid
        />
      </CarouselItem>
    );
  });

  return (
    <div className={carouselStyles.carouselMain}>
      <Col md="12">
        <h3> {content.ui.index_main_content_testimonials.copy} </h3>
      </Col>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <Col md="12" className={carouselStyles.btnContainer}>
        <Link to={content.ui.index_main_content_testimonials_button.link}>
          <Button size="md" className={carouselStyles.blueButton}>
            {content.ui.index_main_content_testimonials_button.copy}
          </Button>
        </Link>
      </Col>
    </div>
  );
};

export default Carousels;
