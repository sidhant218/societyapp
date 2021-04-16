import {
  SECURITY_ADD_FAIL,
  SECURITY_ADD_REQUEST,
  SECURITY_ADD_SUCCESS,
  SECURITY_FETCH_FAIL,
  SECURITY_FETCH_REQUEST,
  SECURITY_FETCH_SUCCESS,
} from '../constants/securityConstants'
import axios from 'axios'

export const addSecurity = (
  firstName,
  lastName,
  email,
  password,
  mobileNo,
  dateOfBirth,
  wingName,
  noOfFamilyMembers
) => {
  return (dispatch) => {
    dispatch({
      type: SECURITY_ADD_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const body = {
      firstName,
      lastName,
      email,
      password,
      mobileNo,
      dateOfBirth,
      wingName,
      noOfFamilyMembers,
    }
    const url = 'http://localhost:8080/secretary/addsecurity'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: SECURITY_ADD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: SECURITY_ADD_FAIL,
          payload: error,
        })
      })
  }
}

export const getSecurity = () => {
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

    const url = 'http://localhost:8080/secretary/securitylist'
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
