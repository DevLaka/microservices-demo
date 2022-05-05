import React, { useState, useEffect } from "react";
import axios from "axios";

export const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const fetchComments = async (postId) => {
    const res = await axios.get(
      `http://localhost:5001/posts/${postId}/comments`
    );
    setComments(res.data);
  };

  useEffect(() => {
    fetchComments(postId);
  }, [postId]);

  const renderComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderComments}
    </div>
  );
};
