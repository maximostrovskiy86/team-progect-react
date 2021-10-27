import axios from 'axios';
import authActions from './auth-actions';

const baseURL = 'https://slimmom-backend.herokuapp.com';

const register = credentials => async dispatch => {
    dispatch(authActions.registerRequest());

    try {
        const response = await axios.post(baseURL + '/auth/register', credentials);

        dispatch(authActions.registerSuccess(response.data));
    } catch (error) {
        dispatch(authActions.registerError(error.message));
    }
};

const operations = {
    register,
}

export default operations;