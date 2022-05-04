import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/posts", {
      title,
    });
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <div className="form-group">
          <label className="my-2">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary my-2">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
