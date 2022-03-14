import { Suspense } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Loader from "./components/Loader/Loader";
import Nav from "./components/Nav/Nav";
import { SuspenIt } from "./hoc/withSuspense";
import ChatsContainer from "./Pages/Chats/ChatsContainer";
import ErrorNF from "./Pages/ErrorNF/ErrorNF";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import FriendsContainer from "./Pages/Friends/FriendsContainer";
import HomePage from "./Pages/HomePage/HomePage";
import ProfileContainer from "./Pages/Profile/ProfileContainer";
import Registration from "./Pages/Registretion/Registretion";
import Settings from "./Pages/Settings/Settings";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <>
      <Router>
        {!isAuth ? (
          <main>
            <Routes>
              <Route path="/" element={<Registration />} />
              <Route path="/profile" element={<Registration />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="*" element={<ErrorNF />} />
            </Routes>
          </main>
        ) : (
          <>
            <HeaderContainer />
            <Nav />
            <div className="nav_and_main">
              <div className="space_wrapper"></div>
              <main>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Suspense fallback={<Loader />}>
                        <HomePage />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/profile"
                    element={<SuspenIt comp={<ProfileContainer />} />}
                  />
                  <Route
                    path="/friends"
                    element={
                      <Suspense fallback={<Loader />}>
                        <FriendsContainer />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/messages"
                    element={
                      <Suspense fallback={<Loader />}>
                        <ChatsContainer />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/settings"
                    element={
                      <Suspense fallback={<Loader />}>
                        <Settings />
                      </Suspense>
                    }
                  />
                  <Route path="*" element={<ErrorNF />} />
                </Routes>
              </main>
            </div>
          </>
        )}
      </Router>
    </>
  );
}

export default App;
