import { dialogsAPI } from "../api/api";

const GET_ALL_DIALOGS = "GET_ALL_DIALOGS";
const CHATING_WITH = "CHATTIN_WITH";
const NO_CHATING_WITH = "NO_CHATTIN_WITH";
const GET_ALL_MESSAGES = "GET_ALL_MESSAGES";
const SEND_MESSAGE = "SEND_MESSAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

let defaultState = {
  chats: [],
  messages: [],
  messageAddNow: [],
  isFetching: false
};

function chat(id, userId, friendsId, name) {
  return {
    id,
    userId,
    friendsId,
    name,
    chattingWith: false,
  };
}

function message(id, dialogId, textMessage, fromWho, sentAt) {
  return {
    id,
    dialogId,
    textMessage,
    fromWho,
    sentAt,
  };
}

const chatsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ALL_DIALOGS:
      return {
        ...state,
        chats: action.chats.map((c) =>
          chat(c.id, c.user_id, c.friends_id, c.name)
        ),
      };
    case CHATING_WITH:
      return {
        ...state,
        chats: state.chats.map((c) => {
          if (c.id === action.chatId) {
            return { ...c, chattingWith: true };
          }
          return c;
        }),
      };
    case GET_ALL_MESSAGES:
      return {
        ...state,
        messages: action.messages.map((m) =>
          message(m.id, m.dialog_id, m.text_message, m.from_who, m.sent_at)
        ),
      };
    case SEND_MESSAGE:
      let msg = {
        msgTxt: action.msg,
      };
      return {
        ...state,
        messageAddNow: [...state.messageAddNow, msg],
      };
      case TOGGLE_IS_FETCHING:
        return {
          ...state,
          isFetching: action.isFetching
        }
    default:
      return state;
  }
};

export const getAllChatsAC = (chats) => ({
  type: GET_ALL_DIALOGS,
  chats: chats.dialogs,
});
export const chattingWithAC = (chatId) => ({ type: CHATING_WITH, chatId });
export const getAllMessagesAC = (messages) => ({
  type: GET_ALL_MESSAGES,
  messages: messages.messages,
});
export const sendMessageAC = (msg) => ({ type: SEND_MESSAGE, msg });

export const toggleIsFetchingAC = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getAllChats = () => {
  return async (dispatch) => {
    await dialogsAPI.getDialogs().then((response) => {
      dispatch(getAllChatsAC(response.data.values));
    });
  };
};

export const getAllMessages = (dialogsId) => {
  return async (dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    await dialogsAPI.getAllMessages(dialogsId).then((response) => {
      console.log(response.data.values);
      dispatch(toggleIsFetchingAC(false))
      dispatch(getAllMessagesAC(response.data.values));
    });
  };
};

export const sendMessage = (userid, dialogId, msgTxt) => {
  return async (dispatch) => {
    try {
      dispatch(sendMessageAC(msgTxt));
      await dialogsAPI.addMessage(userid, dialogId, msgTxt).then((response) => {
        console.log("msg added");
      });
    } catch (error) {
      console.log(error.response.data.values.message);
    }
  };
};

export default chatsReducer;
