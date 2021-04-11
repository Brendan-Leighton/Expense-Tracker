import './CardInfo.css';

export default function CardInfo(props) {
    return (
        <div className="card-info">
            <header>
                <h3>{props.title}</h3>
            </header>
            <img src={props.image} alt="" />
            <p>{props.text}</p>
        </div>
    )
}
