import useRequest from "../../../hooks/useRequest.js";
import { useParams } from "react-router";
import useForm from "../../../hooks/useForm.js";

export default function CreateComment({ onCreateStart, onCreateEnd }) {
  const { gameId } = useParams();
  const { request } = useRequest();

  const submitHandler = async ({ comment }) => {
    const data = {
      message: comment,
      gameId,
    };
    onCreateStart(data);
    try {
      const createdComment = await request("/data/comments", "POST", data);
      onCreateEnd(createdComment);
    } catch (err) {
      alert(err.message);
    }
  };
  const { register, formAction } = useForm(submitHandler, { comment: "" });
  return (
    <article className="create-comment">
      <label>Add new comment:</label>
      <form className="form" action={formAction}>
        <textarea {...register("comment")} placeholder="Comment......" />
        <input className="btn submit" type="submit" value="Add Comment" />
      </form>
    </article>
  );
}
