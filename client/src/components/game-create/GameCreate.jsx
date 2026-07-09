import { useNavigate } from "react-router";
import useRequest from "../../hooks/useRequest.js";
import { useEffect, useState } from "react";

export default function GameCreate() {
  const navigate = useNavigate();
  const { request } = useRequest();
  const [imageUpload, setImageUpload] = useState(false);
  const [imageUrlPreview, setImageUrlPreview] = useState(null);

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(imageUrlPreview);
      setImageUrlPreview(null);
    };
  }, [imageUpload]);
  const createGameHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const { image, ...data } = Object.fromEntries(formData);

    data.players = Number(data.players);
    data._createdOn = Date.now();

    await request("/jsonstore/games", "POST", data);
    navigate("/catalog");
  };
  const imageUploadClickHandler = () => {
    setImageUpload((state) => !state);
  };
  const imageChangeHandler = (e) => {
    const image = e.target.files[0];
    const imageUrl = URL.createObjectURL(image);
    setImageUrlPreview(imageUrl);
  };
  return (
    <section id="add-page">
      <form id="add-new-game" onSubmit={createGameHandler}>
        <div className="container">
          <h1>Add New Game</h1>
          <div className="form-group-half">
            <label htmlFor="gameName">Game Name:</label>
            <input
              type="text"
              id="gameName"
              name="title"
              placeholder="Enter game title..."
            />
          </div>
          <div className="form-group-half">
            <label htmlFor="genre">Genre:</label>
            <input
              type="text"
              id="genre"
              name="genre"
              placeholder="Enter game genre..."
            />
          </div>
          <div className="form-group-half">
            <label htmlFor="activePlayers">Active Players:</label>
            <input
              type="number"
              id="activePlayers"
              name="players"
              min={0}
              placeholder={0}
            />
          </div>
          <div className="form-group-half">
            <label htmlFor="releaseDate">Release Date:</label>
            <input type="date" id="releaseDate" name="date" />
          </div>
          <div className="form-group-full">
            <label htmlFor="imageUrl">
              {imageUpload ? "Image Upload:" : "Image URL:"}
            </label>
            <button
              type="button"
              className="details-button"
              onClick={imageUploadClickHandler}
            >
              {imageUpload ? "Image Url" : "Image Upload"}
            </button>
            {imageUpload ? (
              <input
                type="file"
                id="image"
                name="image"
                placeholder="Upload image..."
                onChange={imageChangeHandler}
              />
            ) : (
              <input
                type="text"
                id="image"
                name="image"
                placeholder="Enter image URL..."
              />
            )}
            {imageUrlPreview && (
              <img src={imageUrlPreview} alt="preview image"></img>
            )}
          </div>
          <div className="form-group-full">
            <label htmlFor="summary">Summary:</label>
            <textarea
              name="summary"
              id="summary"
              rows={5}
              placeholder="Write a brief summary..."
              defaultValue={""}
            />
          </div>
          <input className="btn submit" type="submit" defaultValue="ADD GAME" />
        </div>
      </form>
    </section>
  );
}
