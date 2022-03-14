import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    userStatus: this.props.profile.status,
  };

  activateEditMode() {
    console.log(this.props);
    this.setState({
      editMode: true,
    });
  }

  deactivateEditMode() {
    this.setState({
      editMode: false,
    });
    this.props.updateUserStatus = this.state.userStatus;
  }

  onChangeStatus = (e) => {
    this.setState({ userStatus: e.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.profile.status !== this.props.profile.status) {
      this.setState({
        userStatus: this.props.profile.status,
      });
    }
  }

  render() {
    return (
      <div className="profile__status">
        {!this.state.editMode ? (
          <div className="profile__page__status--description">
            <p onDoubleClick={this.activateEditMode.bind(this)}>
              {this.props.profile.status ||
                "Double click to add your status..."}
            </p>
          </div>
        ) : (
          <div className="profile__page__status--description">
            <input
              autoFocus={true}
              onBlur={this.deactivateEditMode.bind(this)}
              className="profile__status--input"
              type="text"
              value={this.props.profile.status}
              onChange={this.onChangeStatus}
              ref={this.statusInputRef}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
