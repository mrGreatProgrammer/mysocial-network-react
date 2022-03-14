import { useLocation, useNavigate, useParams } from "react-router-dom";

export function withRouter(Component) {
  function ComponentWithRouter(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} match={{ location, navigate, params }} />;
  }

  return ComponentWithRouter;
}
