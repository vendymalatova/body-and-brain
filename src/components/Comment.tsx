import React from "react";
import postStyles from "./PostDetail.module.css";
import commentStyles from "./Comment.module.css";
import { useState } from "react";

interface Props {
  avatarUrl: string;
  author: string;
  timeAdded: string;
  commentContent: string;
}

const Comment = ({ avatarUrl, author, timeAdded, commentContent }: Props) => {
  const [like, setLike] = useState(false);

  const handleLike = () => setLike((prevLike) => !prevLike);

  return (
    <div className={commentStyles.comment}>
      <div>
        <div className={commentStyles.header}>
          <div className={`${postStyles.author} ${commentStyles.author}`}>
            <img className={commentStyles.avatar} src={avatarUrl} />
            <div
              className={`${postStyles.authorDetail} ${commentStyles.authorDetail}`}
            >
              {author}
            </div>
            <div className={`${postStyles.date} ${commentStyles.date}`}>
              {timeAdded} ago
            </div>
          </div>
          <i
            className={like ? "bi bi-heart-fill" : "bi bi-heart"}
            onClick={handleLike}
          />
        </div>
        <div className={commentStyles.content}>{commentContent}</div>
      </div>
    </div>
  );
};

export default Comment;
