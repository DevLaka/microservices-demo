import React, { useState } from "react";
import axios from "axios";

export const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:5001/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            type="text"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
