import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import * as Page from './containers/Containers'
import PrivateRoute from "./helpers/PrivateRoute";
import PublicRoute from "./helpers/PublicRoute";
import Banner from "react-js-banner";
import { useHistory } from "react-router-dom";
import Search from "./containers/Search";
import styled from "styled-components";

const App = () => {
  const [loggedOut, setLoggedOut] = useState(false);
  const windowSize = useWindowSize();

  const history = useHistory();

  const onFail = () => {
    setLoggedOut(true);
    setTimeout(() => setLoggedOut(false), 2000);
  };

  const logout = () => {
    onFail();
    setTimeout(() => {
      window.localStorage.clear();
      history.push("/");
    }, 2000);
  };

  return (
    <div
      className="centerPosition"
      style={{
        textAlign: "center",
        backgroundImage:
          "linear-gradient(-30deg, #ebbfe0, #c1d3ff, #d9ddff, #efd6ff)",
      }}
    >
      <div style={{ minHeight: `${windowSize.height}px` }}>
        <div className="totalStyledDiv" style={totalStyled}>
          <div className="navigation" style={stickyNavigation}>
            <Page.Navigation logout={logout} />
            <Banner
              showBanner={loggedOut}
              css={{
                backgroundColor: "#0080ff",
                fontSize: 20,
                // fontWeight: "lighter",
                color: "white",
                margin: "1rem auto",
                borderRadius: "25px",
              }}
              title="로그아웃 되었습니다."
            />
          </div>
          <div>
            <Switch>
              <PublicRoute exact path="/" component={Page.NonSignIn} />
              <PublicRoute path="/signin" component={Page.Signin} />
              <PublicRoute path="/signin">
                <Page.Signin windowHeight={windowSize.height} />
              </PublicRoute>
              <PublicRoute path="/signup" component={Page.Signup} />
              <PublicRoute path="/signup">
                <Page.Signup windowHeight={windowSize.height} />
              </PublicRoute>
              <PrivateRoute path="/main" component={Page.MainContainer} />
              <PrivateRoute
                path="/detail/:category/:id/:title"
                component={Page.ContentsDetail}
              />
              <PrivateRoute
                path="/list/:category"
                component={Page.ContentsCategory}
              />
              <Route path="/potato-basket/:nickname">
                <Page.PotatoesInBasket />
              </Route>
              <PrivateRoute path="/mypage" component={Page.MyPageContainer} />
              <PrivateRoute path="/mypage">
                <div style={{ minHeight: `${windowSize.height - 350}px` }}>
                  <Page.MyPageContainer />
                </div>
              </PrivateRoute>
              <PrivateRoute path="/search/:query" component={Search} />
              <PrivateRoute path="/search/:query">
                <Search windowHeight={windowSize.height} />
              </PrivateRoute>
              <Route
                render={() => (
                  <NonPage
                    style={{ minHeight: `${windowSize.height - 350}px` }}
                  >
                    <NonPageComment>존재하지 않는 페이지입니다.</NonPageComment>
                  </NonPage>
                )}
              />
            </Switch>
          </div>
          <Page.Footer />
        </div>
      </div>
    </div>
  );
};

export default App;

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

const totalStyled = {
  fontFamily: "NotoSansKR",
  fontWeight: "bold",
  fontStyle: "normal",
  textDecoration: "none",
  width: "1300px",
  display: "inline-block",
};

const stickyNavigation = {
  position: "sticky",
  top: 0,
  zIndex: 10,
};

const NonPage = styled.div`
  background-color: #ffffff8d;
  margin-top: 30px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const NonPageComment = styled.h2`
  font-size: 50px;
`;
