import React from "react";

export const CommentList = ({ comments }) => {
  const renderComments = comments.map((comment) => {
    let content;
    if (comment.status === "approved") {
      content = comment.content;
    }
    if (comment.status === "pending") {
      content = "Awaiting comment moderation";
    }
    if (comment.status === "rejected") {
      content = "Comment has been rejected";
    }
    return <li key={comment.id}>{content}</li>;
  });
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderComments}
    </div>
  );
};
