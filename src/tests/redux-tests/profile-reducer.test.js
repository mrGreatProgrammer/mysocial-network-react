import profileReducer, {
  setUserProfile,
  updateUserStatusAC,
} from "../../redux/profile-reducer";

let profile = {
  id: 1,
  name: "myname",
  second_name: "secound",
  status: "double click to change your status",
};

let userStatus = "test test changed status";

let state = {
  userId: null,
  profile: {},
};

describe("--------- testing profile reducer SET_USER_PROFILE ---------", () => {
  it("right profile", () => {
    let action = setUserProfile(profile);
    let newState = profileReducer(state, action);
    expect(newState.profile).toEqual({
      id: 1,
      name: "myname",
      second_name: "secound",
      status: "double click to change your status",
    });
  });
});

describe("-------- testing profile reducer SET_USER_STATUS --------", () => {
  it("status didnt change", () => {
    let action = setUserProfile(profile);
    let newState = profileReducer(state, action);
    expect(newState.profile.status).toEqual(
      "double click to change your status"
    );
  });
  it("status changed", () => {
    let action = updateUserStatusAC(userStatus);
    let newState = profileReducer(state, action);
    expect(newState.profile.status).toEqual("test test changed status");
    expect(newState.profile.status).toMatchSnapshot()
  });
});
