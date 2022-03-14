import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      console.log(this.props);
      if (!this.props.isAuth) return <Navigate replace to={"/"} />;

      return <Component {...this.props} />;
    }
  }
  let ConnectionAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );

  return ConnectionAuthRedirectComponent;
};
