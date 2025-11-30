import { Link } from "react-router"
export default function Game({
    _id,
    title,
    genre,
    players,
    date,
    imageUrl,
    summary,
    _createdOn,
}) {
    return (
        <div className="catalog-container">
            <div className="game">
                <img src={imageUrl} alt={title} />
                <div className="details-overlay">
                    <p className="name">{title}</p>
                    <p className="genre">{genre}</p>
                    <Link to="/games/${_id}/details" className="details-button">
                        {summary}
                    </Link>
                </div>
            </div>
        </div>)
}