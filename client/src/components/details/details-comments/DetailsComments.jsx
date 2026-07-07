import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useRequest from "../../../hooks/useRequest.js";

export default function DetailsComments() {
  const { request } = useRequest();
  const { gameId } = useParams();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    request("/jsonstore/comments").then((result) => {
      const gameComments = Object.values(result).filter(
        (comment) => comment.gameId === gameId
      );
      setComments(gameComments);
    });
  }, [gameId]);
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
