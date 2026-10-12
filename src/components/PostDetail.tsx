import React, { useEffect } from "react";
import styles from "./PostDetail.module.css";
import Comment from "./Comment";
import commentStyles from "./Comment.module.css";
import { mockData } from "../constants/mockData";
import { useParams } from "react-router-dom";
import Page404 from "./Page404";
import Header from "./Header";
import Footer from "./Footer";

const PostDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const param = useParams();

  const postDetailData = mockData.find((post) => post.id === param.id);
  if (!postDetailData) {
    return <Page404 />;
  }

  const {
    heading,
    postPicUrl,
    avatarUrl,
    author,
    timeAdded,
    content,
    comments,
  } = postDetailData;

  return (
    <>
      <Header />
      <div className={styles.postContainer}>
        <div className={styles.header}>
          <div>
            <div className={styles.postInfo}>
              <span className="badge text-bg-secondary">Category</span>
            </div>
            <div className={styles.postInfo}>
              <h3 className={styles.postHeading}>{heading}</h3>
            </div>

            <div className={styles.author}>
              <img className={styles.avatar} src={avatarUrl} />
              <div className={styles.authorDetail}>{author}</div>
              <div className={styles.date}>{timeAdded}</div>
            </div>
          </div>
          <img className={styles.postPic} src={postPicUrl} />
        </div>
        <div className={styles.postContent}>{content}</div>
        <div className={commentStyles.commentsContainer}>
          <h2 className={commentStyles.heading}>
            Comments
            <span className={commentStyles.number}>{comments.length}</span>
          </h2>

          {comments.map((comment: any) => (
            <Comment
              key={comment.id}
              avatarUrl={comment.avatarUrl}
              author={comment.author}
              timeAdded={comment.timeAdded}
              commentContent={comment.commentContent}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostDetail;
