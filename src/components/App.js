import {lazy, Suspense, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authSelectors, authOperations} from "../redux/authorization";
import {Redirect, Switch} from "react-router";
import style from "./App.module.scss";
import PublicRoute from "../routes/PublicRoute";
import PrivateRoute from "../routes/PrivateRoute";
import Header from "./header/Header";
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
    }, [dispatch, isLoggedIn]);

    return (
        !isRefreshingUser && (
            <div className={!isLoggedIn ? style.bgLogOut : style.bgLogin}>
                <Header/>
                <Switch>
                    <Suspense fallback={<AppLoader/>}>
                        <PublicRoute exact path="/">
                            <MainPage/>
                        </PublicRoute>
                        <PublicRoute path="/register" restricted redirectTo="/diary">
                            <RegistrationPage/>
                        </PublicRoute>
                        <PublicRoute path="/login" restricted redirectTo="/diary">
                            <LoginPage/>
                        </PublicRoute>
                        <PrivateRoute path="/diary" restricted redirectTo="/login">
                            <DiaryPage/>
                        </PrivateRoute>
                        <PrivateRoute path="/calculator" restricted redirectTo="/login">
                            <CalculatorPage/>
                        </PrivateRoute>
                        {isLoggedIn ? <Redirect to="/calculator"/> : <Redirect to="/"/>}
                    </Suspense>
                </Switch>
            </div>
        )
    );
}
