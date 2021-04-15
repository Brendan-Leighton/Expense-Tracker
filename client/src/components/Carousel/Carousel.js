import React from 'react'
import './Carousel.css';
//  COMPONENTS
import CardTestimonial from '../Cards/Testimonials/CardTestimonials';

export default function Carousel(props) {

    const [currentSlide, setCurrentSlide] = React.useState(0);

    const nextSlide = () => {
        setCurrentSlide(currentSlide === props.data.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? props.data.length - 1 : currentSlide - 1);
    };

    if (!Array.isArray(props.data) || props.data.length <= 0) {
        return null;
    }

    return (
        <div className="carousel">
            {props.data.map((testimonial, index) => {
                return (
                    <>
                        <div className={index === currentSlide ? 'carousel-slide active' : 'carousel-slide'}>
                            <button onClick={nextSlide}>Right</button>
                            <button onClick={prevSlide}>Left</button>
                            <CardTestimonial
                                key={testimonial.id}
                                author={testimonial.author}
                                text={testimonial.text}
                                image={testimonial.image}
                            />
                        </div>
                    </>
                )
            })}
        </div>
    )
}
