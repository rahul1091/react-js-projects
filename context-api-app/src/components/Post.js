import React from "react";
import Comment from "./Comment";

export default function Post({ username, isAdmin }) {
  return (
    <div>
      {isAdmin && <button>Delete</button>}
      <h2>My First Post</h2>
      <p>This is the content of my first post.</p>
      <Comment username={username} isAdmin={isAdmin} />
    </div>
  );
}