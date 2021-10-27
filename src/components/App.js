// import {lazy} from "react";
// import {lazy, Suspense, useEffect} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {authSelectors, authOperations} from "../redux/authorization";
// import PublicRoute from "../routes/PublicRoute";
// import PrivateRoute from "../routes/PrivateRoute";
// import {Switch} from "react-router-dom";
import Header from "./header/Header";
import MainPage from "../pages/mainPage/MainPage";
import RegistrationPage from "../pages/registrationPage/RegistrationPage";
import LoginPage from "../pages/loginPage/LoginPage";
import DiaryPage from "../pages/diaryPage/DiaryPage";
import CalculatorPage from "../pages/calculatorPage/CalculatorPage";
import Container from "./container/Container";
// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// const MainPage = lazy(
//     () =>
//         import("../pages/mainPage/MainPage.js") /*webpackChunkName: 'MainPage' */
// );
// const RegistrationPage = lazy(
//     () =>
//         import(
//             "../pages/registrationPage/RegistrationPage.js"
//             ) /*webpackChunkName: 'RegistrationPage' */
// );
// const LoginPage = lazy(
//     () =>
//         import("../pages/loginPage/LoginPage.js") /*webpackChunkName: 'LoginPage' */
// );
// const DiaryPage = lazy(
//     () =>
//         import("../pages/diaryPage/DiaryPage.js") /*webpackChunkName: 'DiaryPage' */
// );
// const CalculatorPage = lazy(
//     () =>
//         import(
//             "../pages/calculatorPage/CalculatorPage.js"
//             ) /*webpackChunkName: 'CalculatorPage' */
// );

export default function App() {
    // const dispatch = useDispatch();
    // const isRefreshingUser = useSelector(authSelectors.getIsRefreshingUser);

    // useEffect(() => {
    //     dispatch(authOperations.refreshCurrentUser());
    // }, [dispatch]);

    return (
        // !isRefreshingUser && (
        <>
        <Container>
            <Header/>
            {/*<Switch>*/}

                <MainPage/>
            <RegistrationPage/>
            <LoginPage/>
            <DiaryPage/>
            <CalculatorPage/>
            {/*<Suspense*/}
            {/*>*/}
            {/*    <PublicRoute exact path="/">*/}
            {/*        <MainPage/>*/}
            {/*    </PublicRoute>*/}

            {/*    <PublicRoute path="/register" restricted>*/}
            {/*        <RegistrationPage/>*/}
            {/*    </PublicRoute>*/}

            {/*    <PublicRoute path="/login" restricted redirectTo="/diary">*/}
            {/*        <LoginPage/>*/}
            {/*    </PublicRoute>*/}

            {/*    <PrivateRoute path="/diary" restricted redirectTo="/login">*/}
            {/*        <DiaryPage/>*/}
            {/*    </PrivateRoute>*/}

            {/*    <PrivateRoute path="/calculator" restricted redirectTo="/login">*/}
            {/*        <CalculatorPage/>*/}
            {/*    </PrivateRoute>*/}
            {/*</Suspense>*/}
        {/*</Switch>*/}
        </Container>
</>
    // )
)
    ;
}
