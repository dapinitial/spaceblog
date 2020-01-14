import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const signup = async (user) => {
    try {
        const response = await fetch(`${API}/signup`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        console.log(response.json());
        return response.json();
    }
    catch (err) {
        return console.log(err);
    }
};