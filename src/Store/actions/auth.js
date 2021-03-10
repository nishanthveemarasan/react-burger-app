import * as actionTypes from './action';
import axios from 'axios';
//this is jut show spinner untill get the data
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId,
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}



export const auth = (email, password, method) => {
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true,
    };
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC5qz51YpqYGYkslWipVDjztxdbeut1QN0';
    if (method == 'signIn') {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC5qz51YpqYGYkslWipVDjztxdbeut1QN0';
    }
    return dispatch => {
        dispatch(authStart());//load the spinner
        axios.post(url, authData)
            .then(respone => {
                console.log(respone);
                const expirationDate = new Date(new Date().getTime() + respone.data.expiresIn * 1000);
                localStorage.setItem('token', respone.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', respone.data.localId);
                dispatch(authSuccess(respone.data.idToken, respone.data.localId));
                dispatch(checkAuthTimeout(respone.data.expiresIn));
            }).catch(error => {
                console.log(error);
                dispatch(authFail(error));
            })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(dispatch(logout()));
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(dispatch(logout()));
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }

        }

    }
}