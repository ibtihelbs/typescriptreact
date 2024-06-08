import { useState, useEffect } from "react";
import Comment from "./Comment";
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

const Comments: React.FC = () => {
  const [comments, setComments] = useState<commentProp[]>([]);
  const getData = async () => {
    try {
      const res = await fetch("./data.json");
      const data = await res.json();
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(comments);
  const len = comments.filter((comment) => comment.unread).length;

  console.log(comments);
  return (
    <div>
      <div>
        {" "}
        <h3>
          Notification <span> 5 </span>{" "}
        </h3>{" "}
        <button>mark all as read</button>
      </div>
      <div
        style={{ display: "grid", gap: "20px", width: "800px", margin: "auto" }}
      >
        {comments.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
