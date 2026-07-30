export default function DetailsComments({ comments }) {
  return (
    <div className="details-comments">
      <h2>Comments:</h2>
      <ul>
        {comments?.map((comment) => (
          <li key={comment._id} className="comment">
            <p>
              {comment.author?.email}: {comment.message}
            </p>
          </li>
        ))}
      </ul>
      {comments.length === 0 && <p className="no-comment">No comments.</p>}
    </div>
  );
}
