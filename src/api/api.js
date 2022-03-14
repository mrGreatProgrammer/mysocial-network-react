import axios from "axios";

const baseUrl = "http://localhost:4000";

const instance = axios.create({
  withCredentials: true,
  headers: {
    Authorization: `${localStorage.getItem("token")}`,
    Accept: "multipart/form-data",
  },
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 3) {
    return instance.get(
      `${baseUrl}/api/users?page=${currentPage}&count=${pageSize}`
    );
  },
  follow(userid) {
    return instance.post(`${baseUrl}/user/follow`, {
      userid,
    });
  },
  unfollow(userId) {
    return instance.delete(`${baseUrl}/user/unfollow/?userid=${userId}`);
  },
  getProfile(userid) {
    return instance.get(`${baseUrl}/user/profile?id=` + userid);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`${baseUrl}/user/profile?id=${userId}`);
  },
  // getStatus(userId) {
  //   return instance.get(`/user/profile?id=` + userId + "/status");
  // },
  updateStatus(userStatus) {
    return instance.post(`${baseUrl}/api/auth/userstatus`, {
      status_text: userStatus,
    });
  },

  upLoadAvatar(userId, formData) {
    return axios.post(`${baseUrl}/api/auth/avatar?userid=${userId}`, formData, {
      headers: { Accept: "multipart/form-data" },
      credentials: "include",
    });
  },
};

export const authAPI = {
  signup(
    name,
    second_name,
    email,
    password,
    avatar = "avatar",
    user_status = "doublclick to add your status"
  ) {
    return axios.post(`${baseUrl}/api/auth/signup`, {
      name,
      second_name,
      email,
      password,
      avatar,
      user_status,
    });
  },
  login(email, password) {
    return axios.post(`${baseUrl}/api/auth/signin`, {
      email,
      password,
    });
  },
  logout() {
    return axios.delete(`${baseUrl}/api/auth/signin`);
  },
};

export const postsAPI = {
  getAllPosts() {
    return instance.get(`${baseUrl}/api/posts`);
  },
  getPostsByUserID(userid) {
    return instance.get(`${baseUrl}/api/posts/byid?userid=${userid}`);
  },
  like(likes, postid) {
    return instance.post(`${baseUrl}/api/posts/like`, {
      likes: likes,
      postid: postid,
    });
  },
  addPost(userid, title, text_content, formData) {
    return axios.post(
      `${baseUrl}/api/addpost?userid=${userid}&title=${title}&text_content=${text_content}`,
      formData,
      {
        headers: { Accept: "multipart/form-data" },
        credentials: "include",
      },
    );
  },
};

export const dialogsAPI = {
  getDialogs() {
    return instance.get(`${baseUrl}/api/dialogs`);
  },
  getAllMessages(dialogsid) {
    return instance.get(
      `${baseUrl}/api/dialogs/message?dialogsid=${dialogsid}`
    );
  },
  addDialog(userid, friendid, dialogname) {
    return instance.post(`${baseUrl}/api/dialogs?userid=${userid}`, {
      friendid,
      dialogname,
    });
  },
  addMessage(userid, dialogsid, text) {
    return instance.post(`${baseUrl}/api/dialogs/message?userid=${userid}`, {
      dialogsid,
      text,
    });
  },
};

export const mailSendAPI = {
  sendMail(mail){
    return axios.post(`${baseUrl}/api/sendmail`, {mail})
  }
}