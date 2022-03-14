import "./MyPosts.css";
import { useRef } from "react/cjs/react.development";
import Post from "../../../components/Posts/Post/Post";
import React from "react";
import AddPost from "../../../components/AddPost/AddPost";

const MyPosts = React.memo((props) => {
  let addingPostDivRef = useRef();
  let addingPostDivBtn = useRef();

  function showAddPost() {
    if (addingPostDivBtn.current.className === "show__adding_post_div--btn") {
      addingPostDivBtn.current.className =
        "show__adding_post_div--btn show__adding_post_div--btn-active";
      addingPostDivRef.current.className = "adding-post";
    } else {
      addingPostDivBtn.current.className = "show__adding_post_div--btn";
      addingPostDivRef.current.className =
        "adding-post adding-post-div--notactive";
    }
  }

  return (
    <div className="myposts">
      <div className="myposts_show_adding_post">
        add post
        <div
          onClick={showAddPost}
          className="show__adding_post_div--btn"
          ref={addingPostDivBtn}
          title="Add post"
        >
          <span>+</span>
        </div>
      </div>
      <div
        className="adding-post adding-post-div--notactive"
        ref={addingPostDivRef}
      >
        <AddPost currentUser={props.myPosts.currentUser} />
      </div>
      <div className="posts">
        {!props.myPosts.posts.length ? (
          <p>add some post</p>
        ) : (
          props.myPosts.posts.map((item) => <Post posts={item} key={item.id} />)
        )}
      </div>
    </div>
  );
});

export default MyPosts;
