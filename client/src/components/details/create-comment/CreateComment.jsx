import { useState } from "react";
import useRequest from "../../../hooks/useRequest.js";
import { useParams } from "react-router";

export default function CreateComment() {
  const { gameId } = useParams();
  const { request } = useRequest();
  const [comment, setComment] = useState("");
  const changeHandler = (e) => {
    setComment(e.target.value);
  };
  const submitHandler = async () => {
    await request("/comments", "POST", {
      //todo add AUTHOR
      message: comment,
      gameId,
    });
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
        <input
          className="btn submit"
          type="submit"
          defaultValue="Add Comment"
        />
      </form>
    </article>
  );
}
