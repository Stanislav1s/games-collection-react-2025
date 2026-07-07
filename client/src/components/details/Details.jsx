import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import useRequest from "../../hooks/useRequest.js";
import CreateComment from "./create-comment/CreateComment.jsx";
import DetailsComments from "./details-comments/detailsComments.jsx";

export default function Details() {
  const { request } = useRequest();
  const navigate = useNavigate();
  const { gameId } = useParams();
  const [game, setGame] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3030/jsonstore/games/${gameId}`)
      .then((response) => response.json())
      .then((result) => setGame(result))
      .catch((err) => alert(err.message));
  }, [gameId]);
  const deleteHandler = async () => {
    if (!window.confirm("Are you sure you want to delete this game?")) return;
    try {
      await request(`/jsonstore/games/${game._id}`, "DELETE");
      alert("Game deleted successfully");
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="header-and-image">
          <img className="game-img" src={game.imageUrl} alt={game.title} />
          <div className="meta-info">
            <h1 className="game-name">{game.title}</h1>
            <p className="data-row">
              <span className="label">Genre:</span>
              <span className="value">{game.genre}</span>
            </p>
            <p className="data-row">
              <span className="label">Active Players:</span>
              <span className="value">{game.players}</span>
            </p>
            <p className="data-row">
              <span className="label">Release Date:</span>
              <span className="value">{game.date}</span>
            </p>
          </div>
          <div className="summary-section">
            <h2>Summary:</h2>
            <p className="text-summary">{game.summary}</p>
          </div>
        </div>
        {/* Edit/Delete buttons ( Only for creator of this game )  */}
        <div className="buttons">
          <Link to={`/games/${gameId}/edit`} className="button">
            Edit
          </Link>
          <button className="button" onClick={deleteHandler}>
            Delete
          </button>
        </div>
        <DetailsComments />
      </div>
      <CreateComment />
    </section>
  );
}
