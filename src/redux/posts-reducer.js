import { postsAPI, userAPI } from "../api/api";

const GET_ALL_POSTS = "GET_ALL_POSTS";
const GET_ALL_POSTS_BY_USER_ID = "GET_ALL_POSTS_BY_USER_ID";
const LIKE_POST = "LIKE_POST";
const DIS_LIKE = "DIS_LIKE";
const GET_POST_USER = "GET_POST_USER";
const ADD_POST = "ADD_POST";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  users: [],
  posts: [],
  myPostsAddNow: [],
  myPosts: [],
  isFetching: false,
};

function user(userId, avatar, name, secondName, userSatus) {
  return {
    userId,
    avatar,
    name,
    secondName,
    userSatus,
    followed: false,
  };
}

function post(
  id,
  userId,
  title,
  textContent,
  photo = "doesnt have photo",
  likes,
  created
) {
  return {
    id,
    userId,
    title,
    textContent,
    photo,
    likes,
    created,
    liked: false,
  };
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        postTitle: action.postTitle,
        postTxt: action.postTxt,
        postPhoto: action.postPhoto,
      };
      return {
        ...state,
        myPostsAddNow: [...state.myPostsAddNow, newPost],
      };
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.posts.map((p) =>
          post(
            p.id,
            p.user_id,
            p.title,
            p.text_content,
            p.photo,
            p.likes,
            p.created
          )
        ),
      };
    case GET_ALL_POSTS_BY_USER_ID:
      return {
        ...state,
        myPosts: action.myPosts.map((p) =>
          post(
            p.id,
            p.user_id,
            p.title,
            p.text_content,
            p.photo,
            p.likes,
            p.created
          )
        ),
      };
    case GET_POST_USER:
      return {
        ...state,
        users: action.users.map((u) =>
        user(u.id, u.avatar, u.name, u.second_name, u.status)
      ),
      };
    case LIKE_POST:
      return {
        ...state,
        posts: state.posts.map((p) => {
          if (p.id === action.postID) {
            return { ...p, liked: true, likes: action.likes };
          }
          return p;
        }),
      };
    case DIS_LIKE:
      return {
        ...state,
        posts: state.posts.map((p) => {
          if (p.id === action.postID) {
            return { ...p, liked: false, likes: action.likes };
          }
          return p;
        }),
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export const addPostAC = (postTitle, postTxt, postPhoto) => ({
  type: ADD_POST,
  postTitle,
  postTxt,
  postPhoto,
});
export const getAllPostsAC = (posts) => ({
  type: GET_ALL_POSTS,
  posts: posts,
});

export const getAllPostsByUserIdAC = (myPosts) => ({
  type: GET_ALL_POSTS_BY_USER_ID,
  myPosts,
});

export const getPostUsersAC = (users) => ({
  type: GET_POST_USER,
  users: users,
});
export const likePostAC = (likes, postID) => ({
  type: LIKE_POST,
  likes,
  postID,
});

export const disLikePostAC = (likes, postID) => ({
  type: DIS_LIKE,
  likes: likes,
  postID,
});
export const toggleIsFetchingAC = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

//  THUNCKS
export const addPost =
  (userId, titlePost, txtPost, photoPost) => async (dispatch) => {
    try {
      dispatch(addPostAC(titlePost, txtPost, photoPost));
      await postsAPI
        .addPost(userId, titlePost, txtPost, photoPost)
        .then((response) => {
          console.log("good");
        });
    } catch (error) {
      console.log(error.response.data.values.message);
    }
  };

export const getAllPosts = () => async (dispatch) => {
  dispatch(toggleIsFetchingAC(true));
  await postsAPI.getAllPosts().then((response) => {
    dispatch(toggleIsFetchingAC(false));
    dispatch(getAllPostsAC(response.data.values.posts));
  });
  userAPI.getUsers(1, 10).then(response=>{
    dispatch(getPostUsersAC(response.data.values.users))
  })
};

export const getAllPostsByUserId = (userId) => async (dispatch) => {
  await postsAPI.getPostsByUserID(userId).then((response) => {
    dispatch(getAllPostsByUserIdAC(response.data.values.posts));
  });
  // userAPI.getProfile(1).then((r) => {
  //   dispatch(getPostUsersAC(r.data.values.user[0]));
  // });
};

export const likePost = (likes, postId) => async (dispatch) => {
  likes++;
  dispatch(likePostAC(likes, postId));
  await postsAPI.like(likes, postId).then((response) => {
    console.log(response.data);
  });
};

export const disLikePost = (likes, postId) => async (dispatch) => {
  likes--;
  dispatch(disLikePostAC(likes, postId));
  await postsAPI.like(likes, postId).then((response) => {
    console.log(response.data);
  });
};

export default postsReducer;
