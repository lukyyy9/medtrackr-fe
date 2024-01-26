// patient.js

import axiosInstance from "../../axiosInstance";
import { getToken } from "./auth"
import { toast } from "react-hot-toast";

export const sendForm = async (formData) => {
    try {
        const response = await axiosInstance.post('/api/forms/send', formData, {
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
            toast.error("An error occurred during form sending");
        }
        throw error;
    }
}

export const sendCapteursData = async (capteursData) => {
    try {
        for (let i = 0; i < capteursData.length; i += 20) {
            const chunk = capteursData.slice(i, i + 20);
            const response = await axiosInstance.post('/api/patients/transferData', chunk, {
                headers: {
                    'x-access-token': `${getToken()}`
                }
            });
        }
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message);
        } else {
            toast.error("An error occurred during capteurs data sending");
        }
        throw error;
    }
}

export const getMyMedications = async () => {
    try {
        const response = await axiosInstance.get(`/api/patients/getMedication`, {
            headers: {
                'x-access-token': `${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message);
        throw error;
    }
}

export const getMyCapteurs = async () => {
    try {
        const response = await axiosInstance.get(`/api/patients/getSensors`, {
            headers: {
                'x-access-token': `${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message);
        throw error;
    }
}

export const addNewCapteur = async (data) => {
    try {
        const response = await axiosInstance.post(`/api/patients/setSensors`, data, {
            headers: {
                'x-access-token': `${getToken()}`
            }
        });
        toast.success(response.data.message);
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message);
        throw error;
    }
}

export const getForms = async () => {
    try {
        const response = await axiosInstance.get('/api/forms/getForms?page=1&perPage=100', {
            headers: {
                'x-access-token': `${getToken()}`
            }
        });
        return response.data.data;
    } catch (error) {
        console.error('Get forms error:', error);
        throw error;
    }
}