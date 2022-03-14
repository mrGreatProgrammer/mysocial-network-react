import chatsReducer, { getAllChatsAC } from "../../redux/chats-reducer";

let chats = [
  { id: 1, userId: 1, friendsId: 2, name: "first dialog", chattingWith: false, },
  { id: 2, userId: 2, friendsId: 3, name: "second dialog", chattingWith: false, },
  { id: 3, userId: 1, friendsId: 4, name: "third dialog", chattingWith: false, },
];

let state = {
  chats: [],
  messages: [],
  messageAddNow: [],
};

describe("--------- test chats reducer  ---------", () => {
  it("GET_ALL_DIALOGS", () => {
    let action = getAllChatsAC(chats);
    let newState = chatsReducer(state, action);
    expect(newState.chats.length).toBe(3);
  });
});
