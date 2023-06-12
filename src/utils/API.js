import axios from 'axios';
import { Config } from './Config';
import { requestResponseHandler } from '../functions/common';

function performRequest(method, payload, authenticated = true, isLogoutRequest = false) {
    return new Promise((resolve, reject) => {
        axios
            .post(Config.apiURL + method, payload)
            .then((response) => {
                if ('x-refreshed-token' in response.headers) {
                    // useDispatch(setAuthToken(response.headers['x-refreshed-token']))
                }
                resolve(response.data);
            })
            .catch((error) => {
                requestResponseHandler(error);
                reject(error);
            });
    });
}

function performAuthenticatedGetRequest(method, authenticated = true, isLogoutRequest = false) {
    return new Promise((resolve, reject) => {
        axios
            .get(Config.apiURL + method, {
                headers: {
                    Authorization: 'Token ' + JSON.parse(localStorage.getItem('token'))
                }
            })
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                requestResponseHandler(error);
                reject(error);
            });
    });
}

function performAuthenticatedPostRequest(method, payload, authenticated = true, isLogoutRequest = false) {
    return new Promise((resolve, reject) => {
        axios
            .post(Config.apiURL + method, payload, {
                headers: {
                    Authorization: 'Token ' + JSON.parse(localStorage.getItem('token'))
                }
            })
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                requestResponseHandler(error);
                reject(error);
            });
    });
}

function performAuthenticatedPutRequest(method, payload, authenticated = true, isLogoutRequest = false) {
    return new Promise((resolve, reject) => {
        axios
            .put(Config.apiURL + method, payload, {
                headers: {
                    Authorization: 'Token ' + JSON.parse(localStorage.getItem('token'))
                }
            })
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                requestResponseHandler(error);
                reject(error);
            });
    });
}

function performAuthenticatedDeleteRequest(method, authenticated = true, isLogoutRequest = false) {
    return new Promise((resolve, reject) => {
        axios
            .delete(Config.apiURL + method, {
                headers: {
                    Authorization: 'Token ' + JSON.parse(localStorage.getItem('token'))
                }
            })
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                requestResponseHandler(error);
                reject(error);
            });
    });
}

export function loginRequest(email, password, rememberMe = false, mfaCode = '') {
    const additional = {};
    if (mfaCode !== '') {
        additional.mfaCode = mfaCode;
    }
    return performRequest(
        'api/auth/login-user',
        {
            email: email,
            password: password
        },
        false
    );
}

export function resetPasswordRequest(password, confirm_password, user_id, rememberMe = false, mfaCode = '') {
    const additional = {};
    if (mfaCode !== '') {
        additional.mfaCode = mfaCode;
    }
    return performAuthenticatedPostRequest(
        'api/auth/reset-password/' + user_id,
        {
            password: password,
            confirm_password: confirm_password
        },
        false
    );
}

// User Request Resources

export function getUserListRequest() {
    return performAuthenticatedGetRequest('api/v1/users-list/');
}

export function registerUserRequest(payload) {
    return performAuthenticatedPostRequest('api/v1/register-user', payload);
}

export function getUserByIDRequest(id) {
    return performAuthenticatedGetRequest('api/v1/user/' + id);
}

export function editUserRequest(id, payload) {
    return performAuthenticatedPutRequest('api/v1/user/' + id, payload);
}

// Role Request Resources
export function getRolesRequest() {
    return performAuthenticatedGetRequest('api/v1/roles');
}

export function createRoleRequest(payload) {
    return performAuthenticatedPostRequest('api/v1/roles', payload);
}

export function editRoleRequest(id, payload) {
    return performAuthenticatedPutRequest('api/v1/role/' + id, payload);
}

export function getRoleByIdRequest(id) {
    return performAuthenticatedGetRequest('api/v1/role/' + id);
}

// Hostels
export function getHostelsListRequest() {
    return performAuthenticatedGetRequest('api/v1/hostels-list/');
}
export function getBookedHostelsListRequest() {
    return performAuthenticatedGetRequest('api/v1/booked-hostels-list/');
}

export function acceptBookedHostelRequest(id) {
    return performAuthenticatedPutRequest('api/v1/accept-booked-hostel/' + id, {});
}

export function rejectBookedHostelRequest(id) {
    return performAuthenticatedPutRequest('api/v1/reject-hostel-book/' + id, {});
}
