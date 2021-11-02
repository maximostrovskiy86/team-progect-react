import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../redux/authorization";
import { Redirect, Switch } from "react-router";
import style from "./App.module.scss";

import PublicRoute from "../routes/PublicRoute";
import PrivateRoute from "../routes/PrivateRoute";
import Header from "./header/Header";
// import Container from "./container/Container";
// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import AppLoader from "./loader/Loader";

const MainPage = lazy(
  () =>
    import("../pages/mainPage/MainPage.js") /*webpackChunkName: 'MainPage' */
);
const RegistrationPage = lazy(
  () =>
    import(
      "../pages/registrationPage/RegistrationPage.js"
    ) /*webpackChunkName: 'RegistrationPage' */
);
const LoginPage = lazy(
  () =>
    import("../pages/loginPage/LoginPage.js") /*webpackChunkName: 'LoginPage' */
);
const DiaryPage = lazy(
  () =>
    import("../pages/diaryPage/DiaryPage.js") /*webpackChunkName: 'DiaryPage' */
);
const CalculatorPage = lazy(
  () =>
    import(
      "../pages/calculatorPage/CalculatorPage.js"
    ) /*webpackChunkName: 'CalculatorPage' */
);

export default function App() {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(authSelectors.getIsRefreshingUser);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    isLoggedIn && dispatch(authOperations.refreshUserData());
  }, [dispatch]);

<<<<<<< HEAD
    return (
        !isRefreshingUser && (
            <div className={!isLoggedIn ? style.bgLogOut : style.bgLogin}>
                <Header />
                <Switch>
                    <Suspense
                        fallback={
                            <div>
                                loader
                                {/* <Loader
                  className="Loader"
                  type="ThreeDots"
                  color="#00BFFF"
                  height={20}
                  width={100}
                  timeout={3000}
                /> */}
                            </div>
                        }
                    >
                        <PublicRoute exact path="/">
                            <MainPage />
                        </PublicRoute>

                        <PublicRoute path="/register" restricted>
                            <RegistrationPage />
                        </PublicRoute>

                        <PublicRoute path="/login" restricted redirectTo="/diary">
                            <LoginPage />
                        </PublicRoute>

                        <PrivateRoute path="/diary" restricted redirectTo="/login">
                            <DiaryPage />
                        </PrivateRoute>

                        <PrivateRoute path="/calculator" restricted redirectTo="/login">
                            <CalculatorPage />
                        </PrivateRoute>
                        <Redirect to="/" />
                    </Suspense>
                </Switch>
            </div>
        )
    );
}
=======
  return (
    !isRefreshingUser && (
      <div className={!isLoggedIn ? style.bgLogOut : style.bgLogin}>
        <Header />
        <Container>
          <Switch>
            <Suspense fallback={<AppLoader />}>
              <PublicRoute exact path="/">
                <MainPage />
              </PublicRoute>

              <PublicRoute path="/register" restricted redirectTo="/calculator">
                <RegistrationPage />
              </PublicRoute>

              <PublicRoute path="/login" restricted redirectTo="/diary">
                <LoginPage />
              </PublicRoute>

              <PrivateRoute path="/diary" restricted redirectTo="/login">
                <DiaryPage />
              </PrivateRoute>

              <PrivateRoute path="/calculator" restricted redirectTo="/login">
                <CalculatorPage />
              </PrivateRoute>
              {/*<Redirect to="/"/>*/}
            </Suspense>
          </Switch>
        </Container>
      </div>
    )
  );
}
>>>>>>> a76c1687a5a0b5c0ef1306f863b69e67b9bae3cf
