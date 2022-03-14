import Loader from "../../../components/Loader/Loader";
import Posts from "../../../components/Posts/Posts";

function AllPosts(props) {

  return (
    <div className="all__posts">
      <p>all posts</p>
      {!props.posts ? (
        <Loader />
      ) : (
      <Posts
        likePost={props.posts.likePost}
        disLikePost={props.posts.disLikePost}
        posts={props.posts.posts}
        users={props.posts.users}
      />
      )}
    </div>
  );
}

export default AllPosts;
