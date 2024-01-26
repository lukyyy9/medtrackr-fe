// common.js

import axiosInstance from "../../axiosInstance";
import { toast } from "react-hot-toast";
import { getToken } from "./auth"

export const getMyInfos = async () => {
    try {
        const response = await axiosInstance.get('/api/users/getMyInfos', {
            headers: {
                'x-access-token': `${getToken()}`
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Get my infos error:', error);
        throw error;
    }
}

export const setMyInfos = async (userData) => {
    try {
        const response = await axiosInstance.post('/api/users/setMyInfos', userData, {
            headers: {
                'x-access-token': `${getToken()}`
            }
        });
        toast.success(response.data.message);
        return response;
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message);
        } else {
            toast.error("An error occurred during informations update");
        }
        throw error;
    }
};

export const getAlerts = async () => {
    try {
        const response = await axiosInstance.get('/api/users/getAlert', {
            headers: {
                'x-access-token': `${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Get alerts error:', error);
        throw error;
    }
}