import postsReducer, {
  addPostAC,
  disLikePostAC,
  getAllPosts,
  getAllPostsAC,
  getAllPostsByUserIdAC,
  likePostAC,
} from "../../redux/posts-reducer";

let postsForTst = [
  {
    id: 1,
    userId: 1,
    title: "first post",
    textContent: "text content",
    photo: "photo",
    likes: 2,
    created: "recently",
    liked: false,
  },
  {
    id: 2,
    userId: 1,
    title: "first post",
    textContent: "text content",
    photo: "photo",
    likes: 2,
    created: "recently",
    liked: false,
  },
  {
    id: 3,
    userId: 2,
    title: "third post",
    textContent: "text content",
    photo: "photo",
    likes: 2,
    created: "recently",
    liked: false,
  },
];
let myPosts = [
  {
    id: 3,
    userId: 2,
    title: "third post",
    textContent: "text content",
    photo: "photo",
    likes: 2,
    created: "recently",
    liked: false,
  },
];

let state = {
  posts: [
    {
      id: 1,
      userId: 1,
      title: "first post",
      textContent: "text content",
      photo: "photo",
      likes: 2,
      created: "recently",
      liked: false,
    },
    {
      id: 2,
      userId: 1,
      title: "first post",
      textContent: "text content",
      photo: "photo",
      likes: 3,
      created: "recently",
      liked: false,
    },
    {
      id: 3,
      userId: 2,
      title: "third post",
      textContent: "text content",
      photo: "photo",
      likes: 2,
      created: "recently",
      liked: false,
    },
  ],
  myPostsAddNow: [
    {
      postTitle: "title one",
      postTxt: "action.postTxt",
      postPhoto: "action.postPhoto",
    },
    {
      postTitle: "title two",
      postTxt: "action.postTxt",
      postPhoto: "action.postPhoto",
    },
  ],
  myPosts: [
    {
      id: 3,
      userId: 2,
      title: "third post",
      textContent: "text content",
      photo: "photo",
      likes: 2,
      created: "recently",
      liked: false,
    },
  ],
};

describe("----- testing posts reducer ADD_POST ------", () => {
  it("length of myPostsAddNow should be incremented", () => {
    // готовим исходные данные
    let action = addPostAC("title third", "action.postTxt", "action.postPhoto");
    // action
    let newState = postsReducer(state, action);
    // ожидаем
    expect(newState.myPostsAddNow.length).toBe(3);
  });

  it("postTitle, postTxt,postPhoto of myPostsAddNow should be 'title third', 'action.postTxt', 'action.postPhoto'", () => {
    // готовим исходные данные
    let action = addPostAC("title third", "action.postTxt", "action.postPhoto");
    // action
    let newState = postsReducer(state, action);
    // ожидаем
    expect(newState.myPostsAddNow[2]).toEqual({
      postTitle: "title third",
      postTxt: "action.postTxt",
      postPhoto: "action.postPhoto",
    });
  });
});

describe("------- testing posts reducer GET_ALL_POSTS -----", () => {
  it("length should be three", () => {
    // готовим исходные данные
    let action = getAllPostsAC(postsForTst);
    // action
    let newState = postsReducer(state, action);
    // ожидаем
    expect(newState.posts.length).toBe(3);
  });

  it("values should be correct", () => {
    let action = getAllPostsAC(postsForTst);
    let newState = postsReducer(state, action);
    expect(newState.posts).toMatchSnapshot();
  });
});

describe("---- testing posts reducer GET_ALL_POSTS_BY_USER_ID", () => {
  it("length should be one", () => {
    let action = getAllPostsByUserIdAC(myPosts);
    let newState = postsReducer(state, action);
    expect(newState.myPosts.length).toBe(1);
  });
});

describe("---- testing posts reducer LIKE_POST or DIS_LIKE -----", () => {
  let likes = 3;
  let postId = 2;
  it("post liked should be increment", () => {
    let action = likePostAC((likes += 1), postId);
    let newState = postsReducer(state, action);
    expect(newState.posts[1].likes).toBe(4);
  });
  it("post id 2 liked should be true", () => {
    let action = likePostAC((likes += 1), postId);
    let newState = postsReducer(state, action);
    expect(newState.posts[1].liked).toBe(true);
  });
  it("post id 1 should not be liked", () => {
    let action = likePostAC((likes += 1), postId);
    let newState = postsReducer(state, action);
    expect(newState.posts[0].liked).toBe(false);
  });
  it("post id 2 disliked should be false", () => {
    let action = disLikePostAC((likes -= 1), postId);
    let newState = postsReducer(state, action);
    expect(newState.posts[1].likes).toBe(5);
  });
  it("post id 2 disliked should be false", () => {
    let action = disLikePostAC((likes -= 1), postId);
    let newState = postsReducer(state, action);
    expect(newState.posts[1].liked).toBe(false);
  });
});

describe("-------- testing posts reducer getAllPosts thunk --------", () => {
  it("getAllPostsThunk should get all posts", async () => {
    let action = await getAllPosts();
    let newState = postsReducer(state, action);
    expect(newState.posts.length).toBe(3);
  });
});
