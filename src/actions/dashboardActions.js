import {
    DASHBOARD_FETCH_REQUEST,
    DASHBOARD_FETCH_SUCCESS,
    DASHBOARD_FETCH_FAIL,
    SECURITY_FETCH_REQUEST,
    SECURITY_FETCH_SUCCESS,
    SECURITY_FETCH_FAIL,
    VISITORS_FETCH_REQUEST,
    VISITORS_FETCH_SUCCESS,
    VISITORS_FETCH_FAIL,
    WINGS_FETCH_REQUEST,
    WINGS_FETCH_SUCCESS,
    WINGS_FETCH_FAIL
  } from '../constants/dashboardConstant'

import axios from 'axios'

export const getResidentCount = () => {
    return (dispatch) => {
      dispatch({
        type: DASHBOARD_FETCH_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          token: sessionStorage['token'],
        },
      }
  
      const url = 'http://localhost:8080/users/dashboard/residentcount'
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: DASHBOARD_FETCH_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: DASHBOARD_FETCH_FAIL,
            payload: error,
          })
        })
    }
  }

export const getSecurityCount = () => {
    return (dispatch) => {
      dispatch({
        type: SECURITY_FETCH_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          token: sessionStorage['token'],
        },
      }
  
      const url = 'http://localhost:8080/users/dashboard/securitycount'
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: SECURITY_FETCH_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: SECURITY_FETCH_FAIL,
            payload: error,
          })
        })
    }
}

export const getVisitorsCount = () => {
  return (dispatch) => {
    dispatch({
      type: VISITORS_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:8080/users/dashboard/visitorcount'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: VISITORS_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: VISITORS_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

export const getWingsCount = () => {
  return (dispatch) => {
    dispatch({
      type: WINGS_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:8080/users/dashboard/wingcount'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: WINGS_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: WINGS_FETCH_FAIL,
          payload: error,
        })
      })
  }
}