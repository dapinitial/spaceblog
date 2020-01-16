import fetch from 'isomorphic-fetch';
import {API} from '../config';
import cookie from 'js-cookie';

export const signup = async user => {
    try {
        const response = await fetch(`${API}/signup`, {
            method: 'POST',

            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        return response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const signin = async user => {
    try {
        const response = await fetch(`${API}/signin`, {
            method: 'POST',

            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        return response.json();
    } catch (err) {
        return console.log(err);
    }
};

// set cookie
export const setCookie = (key, value) => {
    if (process.browser) {
        cookie.set(key, value, {expires: 1});
    }
};

export const removeCookie = key => {
    if (process.browser) {
        cookie.remove(key, {expires: 1});
    }
};

// get cookie
export const getCookie = key => {
    if (process.browser) {
        cookie.get(key);
    }
};

// localstorage
export const setLocalStorage = (key, value) => {
    if (process.browser) {
        localstorage.setItem(key, JSON.stringify(value));
    }
};

export const removeLocalStorage = key => {
    if (process.browser) {
        localstorage.removeItem(key);
    }
};

// authenticate user by passing data to cookie and localstorage
export const authenticate = (data, next) => {
    setCookie('token', data.token);
    setLocalStorage('user', data.user);
    next();
};

export const isAuth = () => {
    if (process.browser) {
        const cookieChecked = getCookie('token');
        if (cookieChecked) {
            if (localstorage.getItem('user')) {
                return JSON.parse();
            } else {
                return false;
            }
        }
    }
}