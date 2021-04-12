import './SectionHeader.css';

export default function SectionHeader(props) {
    return (
        <header className="section-header">
            <h2>{ props.title}</h2>
        </header>
    )
}
