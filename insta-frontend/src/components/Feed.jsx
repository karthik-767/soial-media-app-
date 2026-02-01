import Post from "./Post";

const posts = [
  {
    id: 1,
    username: "karthik",
    image: "https://picsum.photos/400/300?1",
    caption: "My first post"
  },
  {
    id: 2,
    username: "react_dev",
    image: "https://picsum.photos/400/300?2",
    caption: "Learning React 🚀"
  }
];

function Feed() {
  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
