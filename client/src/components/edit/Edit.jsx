import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useRequest from "../../hooks/useRequest.js";

export default function Edit() {
  const initialValues = {
    title: "",
    genre: "",
    players: "",
    imageUrl: "",
    summary: "",
  };
  const navigate = useNavigate();
  const { gameId } = useParams();
  const { request } = useRequest();
  const [values, setValues] = useState(initialValues);
  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    request(`/jsonstore/games/${gameId}`)
      .then((result) => setValues(result))
      .catch((err) => alert(err.message));
  }, [gameId]);
  const editGameHandler = async () => {
    try {
      await request(`/jsonstore/games/${gameId}`, "PUT", values);
    } catch (err) {
      alert(err.message);
    }
    navigate(`/games/${gameId}/details`);
  };
  return (
    <section id="edit-page">
      <form id="add-new-game" action={editGameHandler}>
        <div className="container">
          <h1>Edit Game</h1>
          <div className="form-group-half">
            <label htmlFor="gameName">Game Name:</label>
            <input
              type="text"
              id="gameName"
              name="title"
              onChange={changeHandler}
              value={values.title}
              placeholder="Enter game title..."
            />
          </div>
          <div className="form-group-half">
            <label htmlFor="genre">Genre:</label>
            <input
              type="text"
              id="genre"
              name="genre"
              onChange={changeHandler}
              value={values.genre}
              placeholder="Enter game genre..."
            />
          </div>
          <div className="form-group-half">
            <label htmlFor="activePlayers">Active Players:</label>
            <input
              type="number"
              id="activePlayers"
              name="players"
              onChange={changeHandler}
              value={values.players}
              min={0}
              placeholder={0}
            />
          </div>
          <div className="form-group-half">
            <label htmlFor="releaseDate">Release Date:</label>
            <input type="date" id="releaseDate" name="releaseDate" />
          </div>
          <div className="form-group-full">
            <label htmlFor="imageUrl">Image URL:</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              onChange={changeHandler}
              value={values.imageUrl}
              placeholder="Enter image URL..."
            />
          </div>
          <div className="form-group-full">
            <label htmlFor="summary">Summary:</label>
            <textarea
              name="summary"
              id="summary"
              onChange={changeHandler}
              value={values.summary}
              rows="{5}"
              placeholder="Write a brief summary..."
            />
          </div>
          <input
            className="btn submit"
            type="submit"
            defaultValue="EDIT GAME"
          />
        </div>
      </form>
    </section>
  );
}
