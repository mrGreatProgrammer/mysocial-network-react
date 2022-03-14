import friendsReducer, { setUsersAC } from "../../redux/friends-reducer";

let users = [
  {
    userId: 1,
    avatar: "avatar photo",
    name: "First",
    secondName: "Firstov",
    userSatus: "first status",
    followed: false,
  },
  {
    userId: 2,
    avatar: "avatar photo",
    name: "Second",
    secondName: "Secondov",
    userSatus: "second status",
    followed: false,
  },
  {
    userId: 3,
    avatar: "avatar photo",
    name: "Third",
    secondName: "Thirdov",
    userSatus: "third status",
    followed: false,
  },
  {
    userId: 4,
    avatar: "avatar photo",
    name: "Four",
    secondName: "Fourov",
    userSatus: "four status",
    followed: false,
  },
  {
    userId: 5,
    avatar: "avatar photo",
    name: "Five",
    secondName: "Ivanov",
    userSatus: "Five status",
    followed: false,
  },
  {
    userId: 6,
    avatar: "avatar photo",
    name: "Ivan",
    secondName: "Secondov",
    userSatus: "second status",
    followed: false,
  },
  {
    userId: 7,
    avatar: "avatar photo",
    name: "Seven",
    secondName: "Sevenov",
    userSatus: "Seven status",
    followed: false,
  },
];

let state = {
  friends: [],
  currentPage: 1,
  pageSize: 3,
  totalUsersCount: 0,
  isFetching: false,
};

describe("--------- friends reducer set users ----------", () => {
  it("SET_USERS", () => {
    let action = setUsersAC(users);
    let newState = friendsReducer(state, action);
    expect(newState.friends.length).toBe(7)
    expect(newState.friends).toMatchSnapshot()
  });
});
