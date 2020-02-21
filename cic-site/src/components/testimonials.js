import React, { useState } from "react"
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Col
} from 'reactstrap';
import Joey from '../images/instructors/joeybuczek.jpg';
import Kelly from '../images/students/kellycorey.jpg';
import Doug from '../images/team/dougcrescenzi.png';
import 'bootstrap/dist/css/bootstrap.min.css'

// code for testimonial carousel taken from https://reactstrap.github.io/components/carousel/

const items = [
    {
        src: Joey,
        altText: 'Black and white headshot of Joey Buczek',
        caption: 'Being a part of this first cohort was definitely a rewarding experience! Not only did we help a group of wonderful people learn new skills to be able to advance their careers in a growing field, but we also learned a lot about how each of us could grow and contribute in more meaningful ways in the future of this program as well. There was a wealth of data collected that will positively influence future cohorts, allowing this program to evolve organically along with the wants and needs of both this area and in the technology field in general. I am so grateful to be a part of this endeavor, and am looking forward to seeing if this program will continue.',
        header: 'Joey Buczek, Cohort I Instructor'
    },
    {
        src: Kelly,
        altText: 'Headshot of Kelly Corey',
        caption: "Applying for Careers in Code was one of the best decisions I've made in my entire life! Over the course of 6 months, I went from a little knowledge of HTML and CSS to a full-stack JavaScript web developer. The instructors and TAs were always willing to go out of their way to help with anything we needed throughout the duration of class. I'm thrilled I got to opportunity to train in a field that I'm passionate about and I look forward to contributing to the Syracuse tech community.",
        header: 'Kelly Corey, Cohort I Graduate'
    },
    {
        src: Doug,
        altText: 'Headshot of Doug Crescenzi',
        caption: 'The rise of coding bootcamps throughout the country reflects the shortage of adequately trained software developers graduating from universities and the relative demand for them from the technology sector. The reason coding bootcamps have proven effective over the years is because they provide vocational training at a fraction of the cost of a college degree.',
        header: 'Doug Crescenzi, Founder'
    }
];

const Testimonials = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
                style={{
                    width: '200px',
                    margin: '0 auto',
                    padding: '5px',
                    border: '1px solid #ddd',
                    borderRadius: '50%'
                }}
            >
                <img
                    style={{
                        width: '50%',
                        height: '50%',
                        display: 'block',
                        borderRadius: '50%',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                    src={item.src} alt={item.altText} />
                <CarouselCaption
                    style={{
                        color: '#0a0a0a',
                        fontSize: '18px',
                        textAlign: 'center',
                        overflow: 'hidden',
                        minHeight: '290px',
                        padding: '500px'
                    }}
                    captionText={item.caption} captionHeader={item.header} />
            </CarouselItem>
        );
    });

    return (
        <div>
            <div>
                <Col md="12"
                    style={{
                        textAlign: 'center'
                    }}
                >
                    <h3> Testimonials </h3>
                </Col>
            </div>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                style={{
                    margin: '50px auto',
                    padding: '0 70px'
                }}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    );
}

export default Testimonials;

// to do: continue moving/adjusting CSS styles from main.css in cic current website code
// add button to testimonial page using Link
// figure out how to move text below image -> this is different from default reactstrap carousel!
// add media breakpoints for mobile/tablet so it looks less garbage when it collapses