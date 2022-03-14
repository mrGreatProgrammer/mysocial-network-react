import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/posts-reducer";
import Input from "../InputForms/Input";

function AddPost(props) {
  let [title, setTitle] = useState("");
  let [txt, setTxt] = useState("");
  let [img, setImg] = useState();
  let dispatch = useDispatch();

  function imgHandler(e) {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("img", file);

    setImg(formData)
  }

  function toAddPost() {
    dispatch(addPost(props.currentUser.id, title, txt, img));
  }

  return (
    <>
      <Input
        type="text"
        name="titlePost"
        id="title_post"
        placeholder="enter title post"
        className="adding__post--title"
        value={title}
        setValue={setTitle}
      />
      <Input
        type="text"
        name="textPost"
        id="text_post--inp"
        placeholder="enter text post"
        className="adding__post--txtarea"
        value={txt}
        setValue={setTxt}
      />
      <input
          type="file"
          name="img"
          accept="image/*"
          multiple={false}
          onChange={imgHandler}
          className="profile__page--post__photo--input"
        />
      <button className="add__post--btn" onClick={() => toAddPost()}>
        add post
      </button>
    </>
  );
}

export default AddPost;
