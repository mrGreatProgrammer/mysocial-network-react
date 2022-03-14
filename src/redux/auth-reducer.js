import { authAPI, mailSendAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_RESPONSE_STATUS = "SET_RESPONSE_STATUS";
const LOG_OUT = "LOG_OUT";

let defaultState = {
  currentUser: {}, // НАШ ПОЛЬЗОВАТЕЛЬ
  isAuth: false, // АВТОРИЗОВАН ЛИ ПОЛЬЗОВАТЕЛЬ
  responseMessage: "", // статус сообщение от сервака
};

export default function authReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        currentUser: action.me,
        isAuth: true,
      };
    case LOG_OUT:
      localStorage.removeItem("token");
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };
    case SET_RESPONSE_STATUS:
      return {
        ...state,
        isAuth: false,
        responseMessage: action.responseMessage,
      };
    default:
      return state;
  }
}

export const setAuthUserData = (user) => ({ type: SET_USER_DATA, me: user });
export const logout = () => ({ type: LOG_OUT });
export const setResponsStatusMessage = (responseMessage) => ({
  type: SET_RESPONSE_STATUS,
  responseMessage,
});

export const registration = async (name, secondName, email, password) => {
  try {
    let response = await authAPI.signup(name, secondName, email, password);
    alert(response.data.values.message);
  } catch (error) {
    console.log(error);
    alert(error.response.data.message);
  }
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await authAPI.login(email, password);
      if (response.data.status === 402 || response.data.status === 401) {
        alert("wrong password or email");
      }
      dispatch(setAuthUserData(response.data.values.user));
      localStorage.setItem("token", response.data.values.token);
    } catch (error) {
      console.log(error);
      dispatch(setResponsStatusMessage(error.response.data.values.message));
    }
  };
};

export const getAuthUserData = () => async (dispatch) => {
  try {
    await authAPI.login().then((response) => {
      dispatch(setAuthUserData(response.data.values.user));
    });
  } catch (error) {
    console.log(error.response.data.values);
  }
};

export const sendMail = async (mail) => {
  try {
    await mailSendAPI.sendMail(mail)
  } catch (error) {
    console.log(error);
  }
}