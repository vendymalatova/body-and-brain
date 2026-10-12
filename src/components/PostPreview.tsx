import React from "react";
import styles from "./PostPreview.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  heading: string;
  content: string;
  postPicUrl: string;
  author: string;
  timeAdded: string;
  avatarUrl: string;
  category: string;
}

const PostPreview = ({
  id,
  heading,
  content,
  postPicUrl,
  author,
  timeAdded,
  avatarUrl,
  category,
}: Props) => {
  const [like, setLike] = useState(false);

  const handleLike = () => setLike((prevLike) => !prevLike);

  const text = content.substring(0, 108);

  return (
    <div>
      <div className={styles.post}>
        <Link to={`/${id}`}>
          <img className={styles.postPreviewPicture} src={postPicUrl} />
        </Link>
        <span className={`badge text-bg-secondary ${styles.categoryBadge}`}>
          {category}
        </span>
        <Link className={styles.noUnderline} to={`/${id}`}>
          <h2 className={styles.postPreviewTitle}>{heading}</h2>
        </Link>
        <p className={styles.textPreview}>{text}...</p>
      </div>
      <div className={styles.postFooter}>
        <div className={styles.author}>
          <img className={styles.avatar} src={avatarUrl} />
          <div className={styles.authorData}>
            <p className={styles.authorName}>{author}</p>
            <time className={styles.timeAdded}>{timeAdded} ago</time>
          </div>
        </div>
        <i
          className={like ? "bi bi-heart-fill" : "bi bi-heart"}
          onClick={handleLike}
        />
      </div>
    </div>
  );
};

export default PostPreview;
