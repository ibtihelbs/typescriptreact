type commentProp = {
  comment: {
    user: string;
    action: string;
    content?: string;
    time: string;
    img: string;
    unread: boolean;
    message?: string;
  };
};

const Comment = ({ comment }: commentProp) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        backgroundColor: `${comment.unread ? "grey" : ""} `,
      }}
    >
      <img src={comment.img} alt={comment.user} />
      <div>
        <span> {comment.user} </span>
        <span> {comment.action} </span>
        <span>{comment.content}</span>
        <p> {comment.time} </p>
      </div>
    </div>
  );
};

export default Comment;
