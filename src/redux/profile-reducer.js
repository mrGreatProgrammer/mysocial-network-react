import { profileAPI, userAPI } from "../api/api";
import { setResponsStatusMessage } from "./auth-reducer";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let defaultState = {
  userId: null,
  profile: {},
};

export default function profileReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
      case SET_USER_STATUS:
        return {
          ...state,
          profile: {...state.profile, status: action.userStatus}
        }
    default:
      return state;
  }
}

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const updateUserStatusAC = (userStatus) => ({type: SET_USER_STATUS, userStatus})

export const getUserProfile = (userId) => async (dispatch) => {
  try {
    await userAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data.values.user));
    });
  } catch (error) {
    // console.log(error.response.data.values.message);
    // alert(error.response.data.values.message)
      
      // dispatch(setResponsStatusMessage(error.response.data.values.message))
  }
};


export const updateUserStatus = (userStatus) => {
  return async (dispatch) => {
    await profileAPI.updateStatus(userStatus).then(response => {
      if (response.data.status === 200) {
        dispatch(updateUserStatusAC(userStatus));
      } else{
        console.log(response.data.status);
      }
    })
  }
}

export const upLoadAvatar = (userId, file) => {
  return async (dispatch) => {
    // const formData = new FormData();
    // formData.append("image", file);

    await profileAPI.upLoadAvatar(userId, file).then(response=>{
      console.log(response.data);
    })
  }
}