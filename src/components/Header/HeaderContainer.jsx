import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getAuthUserData, logout} from "../../redux/auth-reducer";
import { setSearcher } from "../../redux/app-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return (
      <>
        <Header data={this.props} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  currentUser: state.auth.currentUser,
  searchResult: state.settings.searchResult,
});

export default connect(mapStateToProps, 
   {getAuthUserData, logout, setSearcher})(HeaderContainer);
