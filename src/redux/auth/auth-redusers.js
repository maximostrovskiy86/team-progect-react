import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialUserState = {
    name: null,
    email: null,
    isLogIn: false,
    // isFetchingCurrentUser: false,
};


const user = createReducer(initialUserState, {
    [authActions.registerSuccess]: (_, {payload}) => ({
        ...payload.user,
        isLogIn: true,
    }),
    [authActions.loginSuccess]: (_, {payload}) => ({
        ...payload.user,
        isLogIn: true,
    }),
    [authActions.logoutSuccess]: () => initialUserState,
    [authActions.getCurrentUserSuccess]: (_, {payload}) => ({
        ...payload,
        isLogIn: true,
    }),
})

export default combineReducers({
    user,
});
