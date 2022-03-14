import ProfileUser from "../ProfileUser/ProfileUser";
import Searcher from "../Searcher/Searcher";
import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <div className="logo">
        <h1>
          <a href="/">
            <span className="s">Som</span>
            <span className="golden">on</span>
          </a>
        </h1>
      </div>
      <Searcher setSearcher={props.data.setSearcher} searchResult={props.data.searchResult} />

      {props.data.isAuth ? <ProfileUser data={props} /> : <></>}
    </header>
  );
}

export default Header;
{
  /* <ProfileUser data={props} />  */
}
