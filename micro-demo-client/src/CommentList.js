import React from "react";

export const CommentList = ({ comments }) => {
  const renderComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderComments}
    </div>
  );
};
