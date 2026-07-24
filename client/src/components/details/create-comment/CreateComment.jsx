import useRequest from "../../../hooks/useRequest.js";
import { useParams } from "react-router";
import useForm from "../../../hooks/useForm.js";

export default function CreateComment({ onCreate }) {
  const { gameId } = useParams();
  const { request } = useRequest();

  const submitHandler = async ({ comment }) => {
    try {
      await request("/data/comments", "POST", {
        message: comment,
        gameId,
      });
      onCreate();
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
