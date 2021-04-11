import "./CardTestimonials.css";

export default function Testimonials(props) {
    return (
        <div className="card-testimonial">
            <img className="card-image" src={props.image} alt={`Face of ${props.author}, the author of the testimonial.`} />
            <p className="card-text">{props.text}</p>
            <p className="card-author">-  {props.author}</p>
        </div>
    )
}
