import { useParams } from "react-router";
import useRequest from "../../../hooks/useRequest.js";

export default function DetailsComments({ refresh }) {
  const { request } = useRequest();
  const { gameId } = useParams();

  const urlParams = new URLSearchParams({
    where: `gameId="${gameId}"`,
    load: "author=_ownerId:users",
  });
  const { data: comments } = request(
    `/data/comments?${(urlParams.toString(), [])}`
  );
  return (
    <div className="details-comments">
      <h2>Comments:</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id} className="comment">
            <p>email: {comment.message}</p>
          </li>
        ))}
      </ul>
      {comments.length === 0 && <p className="no-comment">No comments.</p>}
    </div>
  );
}
