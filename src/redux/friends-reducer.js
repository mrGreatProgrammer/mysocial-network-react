import { userAPI } from "../api/api";

const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let defaultState = {
  friends: [],
  currentPage: 1,
  pageSize: 3,
  totalUsersCount: 0,
  isFetching: false,
};

function friend(userId, avatar, name, secondName, userSatus) {
  return {
    userId,
    avatar,
    name,
    secondName,
    userSatus,
    followed: false,
  };
}

const friendsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        friends: action.user.map((f) =>
          friend(f.id, f.avatar, f.name, f.second_name, f.status)
        ),
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case FOLLOW:
      return {
        ...state,
        friends: state.friends.map((f) => {
          if (f.userId === action.userId) {
            return { ...f, followed: true };
          }
          return f;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        friends: state.friends.map((f) => {
          if (f.userId === action.userId) {
            return { ...f, followed: false };
          }
          return f;
        }),
      };
    default:
      return state;
  }
};

export const setUsersAC = (user) => ({ type: SET_USERS, user });
export const setTotalUsersCountAC = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const toggleIsFetchingAC = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const setUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetchingAC(true))
  await userAPI.getUsers(currentPage, pageSize).then((response) => {
    // console.log(response.data.values.users);
    dispatch(toggleIsFetchingAC(false))
    dispatch(setUsersAC(response.data.values.users));
    dispatch(setCurrentPageAC(currentPage));
    dispatch(setTotalUsersCountAC(response.data.values.totalUsersCount));
  });
};

export const follow = (userId) => async (dispatch) => {
  debugger;
  dispatch(followAC(userId));
  await userAPI.follow(userId).then((response) => {
    console.log(response.data.values.message);
  });
};

export const unfollow = (userId) => async (dispatch) => {
  await userAPI.unfollow(userId).then((response) => {
    dispatch(unfollowAC(userId));
  });
};

export default friendsReducer;
