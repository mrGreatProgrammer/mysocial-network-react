import React from "react";
import { connect } from "react-redux";
import Chats from "./Chats";
import { getAllChats, getAllMessages } from "../../redux/chats-reducer";
import Messages from "./Messages/Messages";
import Loader from "../../components/Loader/Loader";

class ChatsContainer extends React.Component {
  componentDidMount() {
    this.props.getAllChats();
    this.props.getAllMessages(1);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.messageAddNow.length !== this.props.messageAddNow.length) {
      this.props.getAllChats();
      this.props.getAllMessages(1);
    }
  }

  render() {
    return (
      <div className="chats__container">
        {this.props.isFetching ? (
          <Loader />
        ) : (
          <>
            <Chats chats={this.props.chats} />
            <Messages
              messages={this.props.messages}
              currentUser={this.props.currentUser}
            />
          </>
        )}
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
  chats: state.chatsPage.chats,
  messages: state.chatsPage.messages,
  messageAddNow: state.chatsPage.messageAddNow,
  isFetching: state.chatsPage.isFetching,
});

export default connect(mapStateToProps, { getAllChats, getAllMessages })(
  ChatsContainer
);
