// doctor.js

import axiosInstance from "../../axiosInstance";
import { getToken } from "./auth"
import { toast } from "react-hot-toast";

export const getPatients = async () => {
    try {
        const response = await axiosInstance.get('/api/patients?page=1&perPage=1000', {
            headers: {
                'x-access-token': `${getToken()}`
            }
        });
        return response.data.data;
    } catch (error) {
        console.error('Get patients error:', error);
        throw error;
    }
}

export const getPatientDetails = async (id) => {
    try {
        const response = await axiosInstance.get(`/api/patients/${id}/detail`, {
            headers: {
                'x-access-token': `${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message);
        } else {
            toast.error("An error occurred during patient details fetching");
        }
        throw error;
    }
}

export const setNewMedication = async (id, medication) => {
    try {
        const response = await axiosInstance.post(`/api/patients/${id}/setMedication`, medication, {
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
            toast.error("An error occurred during medication updating");
        }
        throw error;
    }
}

export const removeMedication = async (id, medication) => {
    try {
        const response = await axiosInstance.delete(`/api/patients/${id}/removeMedication`, {
            headers: {
                'x-access-token': `${getToken()}`
            },
            data: medication
        });
        toast.success(response.data.message);
        return response;
    }
    catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message);
        } else {
            toast.error("An error occurred during medication removing");
        }
        throw error;
    }
}

export const getPatientMedications = async (id) => {
    try {
        const response = await axiosInstance.get(`/api/patients/${id}/getMedication`, {
            headers: {
                'x-access-token': `${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Get medications error:', error);
        throw error;
    }
}

export const getPatientForms = async (id) => {
    try {
        const response = await axiosInstance.get(`/api/forms/getPatientForms?patientId=${id}&page=1&perPage=100`, {
            headers: {
                'x-access-token': `${getToken()}`
            }
        });
        return response.data.data;
    }
    catch (error) {
        console.error('Get forms error:', error);
        throw error;
    }
}