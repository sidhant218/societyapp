import {
  RESIDENT_ADD_FAIL,
  RESIDENT_ADD_REQUEST,
  RESIDENT_ADD_SUCCESS,
  RESIDENT_FETCH_FAIL,
  RESIDENT_FETCH_REQUEST,
  RESIDENT_FETCH_SUCCESS,
  RESIDENT_DELETE_FAIL,
  RESIDENT_DELETE_REQUEST,
  RESIDENT_DELETE_SUCCESS,
} from '../constants/residentConstants'
import axios from 'axios'

export const addResident = (
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
      type: RESIDENT_ADD_REQUEST,
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
    const url = 'http://localhost:8080/secretary/addresident'

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: RESIDENT_ADD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: RESIDENT_ADD_FAIL,
          payload: error,
        })
      })
  }
}

export const deleteResident = () => {
  return (dispatch) => {
    dispatch({
      type: RESIDENT_DELETE_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:8080/secretary/memberlist'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: RESIDENT_DELETE_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: RESIDENT_DELETE_FAIL,
          payload: error,
        })
      })
  }
}

export const getResident = () => {
  return (dispatch) => {
    dispatch({
      type: RESIDENT_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:8080/users/memberinfo'

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: RESIDENT_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: RESIDENT_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

export const deleteResidentById = (userId) => {
  return (dispatch) => {
    dispatch({
      type: RESIDENT_DELETE_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:8080/secretary/memberlist'
    axios
      .delete(url + '/' + userId, header)
      .then((response) => {
        dispatch({
          type: RESIDENT_DELETE_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: RESIDENT_DELETE_FAIL,
          payload: error,
        })
      })
  }
}
