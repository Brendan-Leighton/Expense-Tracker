import "./CardPricing.css";

export default function CardPricing(props) {
    return (
        <div className="card-pricing">
            <h3 className="title">{ props.title}</h3>
            <p className="subtitle">{props.subtitle}</p>
            <p className="disclaimer">{props.disclaimer} Can cancel in account settings at any time.</p>
            <button className="button">BUY!</button>
        </div>
    )
}
