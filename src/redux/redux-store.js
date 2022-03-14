import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import thunkMiddleWare from "redux-thunk";
import authReducer from "./auth-reducer";
import postsReducer from "./posts-reducer";
import friendsReducer from "./friends-reducer";
import chatsReducer from "./chats-reducer";
import appReducer from "./app-reducer";

let reducers = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  profilePage: profileReducer,
  friendsPage: friendsReducer,
  chatsPage: chatsReducer,
  settings: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;
