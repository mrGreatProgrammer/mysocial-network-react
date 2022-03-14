import "./Posts.css";
import Post from "./Post/Post";

function Posts(props) {

  return (
    <div className="posts">
      {props.posts.map((p, i) => (
        <Post
          users={props.users}
          posts={p}
          key={i}
          likePost={props.likePost}
          disLikePost={props.disLikePost}
        />
      ))}
    </div>
  );
}

export default Posts;
