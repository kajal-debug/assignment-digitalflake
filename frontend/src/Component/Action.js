// actions.js
import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const STATE_FAILURE = 'STATE_FAILURE';
export const STATE_SUCCESS = 'STATE_SUCCESS';
export const STATEDETAILS_FAILURE = 'STATE_FAILURE';
export const STATEDETAILS_SUCCESS = 'STATE_SUCCESS';
export const CITYDETAILS_FAILURE = 'CITY_FAILURE';
export const CITYDETAILS_SUCCESS = 'CITY_SUCCESS';

const loginRequest = () => ({
  type: LOGIN_REQUEST
});

const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data
});

const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: error
});
const StateSuccess = data => ({
  type: STATE_SUCCESS,
  payload: data
});

const StateFailure = error => ({
  type: STATE_FAILURE,
  payload: error
});

const StateDetailsSuccess = data => ({
  type: STATEDETAILS_SUCCESS,
  payload: data
});

const StateDetailsFailure = error => ({
  type: STATEDETAILS_FAILURE,
  payload: error
});
const CityDetailsSuccess = data => ({
  type: CITYDETAILS_SUCCESS,
  payload: data
});

const CityDetailsFailure = error => ({
  type: CITYDETAILS_FAILURE,
  payload: error
});


export const login = (email, password) => {
  return async dispatch => {
    dispatch(loginRequest());

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/auth/login', { email, password });
      dispatch(loginSuccess(response.data));
    } catch (error) {
      dispatch(loginFailure(error.message ? error.message : error));
    }
  };
};

export const getstate = () => {
  return async dispatch => {

    try {
      const response = await axios.get('http://127.0.0.1:5000/api/tasksDetails');
      dispatch(StateDetailsSuccess(response.data));
    } catch (error) {
      dispatch(StateDetailsFailure(error.message ? error.message : error));
    }
  };
};
export const getcity = () => {
  return async dispatch => {

    try {
      const response = await axios.get('http://127.0.0.1:5000/api/cityDetails');
      dispatch(CityDetailsSuccess(response.data));
    } catch (error) {
      dispatch(CityDetailsFailure(error.message ? error.message : error));
    }
  };
};

export const state = (StateName,stateCode,status) => {
  return async dispatch => {
console.log("from actio",StateName,Number(stateCode),status)
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/tasks', {StateName:StateName,status:status,StateCode:Number(stateCode)});
      dispatch(StateSuccess(response.data));
    } catch (error) {
      dispatch(StateFailure(error.message ? error.message : error));
    }
  };
};
