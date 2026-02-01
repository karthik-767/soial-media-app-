import { useState } from "react";

function Post({ post }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="post">
      <h3>{post.username}</h3>

      <img src={post.image} alt="post" />

      <div>
        <button onClick={() => setLiked(!liked)}>
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>
      </div>

      <p>{post.caption}</p>
    </div>
  );
}

export default Post;
