// auth.js

import axiosInstance from "../../axiosInstance";
import { toast } from 'react-hot-toast';

export const signIn = async (credentials) => {
    try {
        const response = await axiosInstance.post('/api/auth/login', credentials);
        setToken(response.data.accessToken);
        toast.success("Successfully logged in!")
        return response.data.role;
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message);
        }
        else {
            toast.error("An error occurred during sign-in");
        }
        
        throw error;
    }
};

export const signUp = async (userData) => {
    try {
        const response = await axiosInstance.post('/api/auth/signup', userData);
        const credentials = {
            email: userData.email,
            password: userData.password
        };
        return await signIn(credentials);
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message);
        } else {
            toast.error("An error occurred during sign-up");
        }
        throw error;
    }
};

export const setToken = (token) => {
    localStorage.setItem('token', token);
};

export const getToken = () => {
    try {
        return localStorage.getItem('token');
    } catch (error) {
        toast.error(error.response.data.message)
        console.error('Get token error:', error);
        throw error;
    }
}

export const logOut = () => {
    const baseUrl = window.location.origin;
    const url = `${baseUrl}/`;
    window.location.href = url;
    localStorage.removeItem('token');
    toast('Successfully logged out!', {
        icon: '👋',
    });
}