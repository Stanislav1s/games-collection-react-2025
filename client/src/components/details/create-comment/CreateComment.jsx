import { useState } from "react";
import useRequest from "../../../hooks/useRequest.js";
import { useParams } from "react-router";

export default function CreateComment({ onCreate }) {
  const { gameId } = useParams();
  const { request } = useRequest();
  const [comment, setComment] = useState("");
  const changeHandler = (e) => {
    setComment(e.target.value);
  };
  const submitHandler = async () => {
    try {
      await request("/jsonstore/comments", "POST", {
        email: "email",
        message: comment,
        gameId,
      });
      onCreate();
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <article className="create-comment">
      <label>Add new comment:</label>
      <form className="form" action={submitHandler}>
        <textarea
          name="comment"
          onChange={changeHandler}
          value={comment}
          placeholder="Comment......"
        />
        <input className="btn submit" type="submit" value="Add Comment" />
      </form>
    </article>
  );
}
