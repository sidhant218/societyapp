import {
  SOCIETY_ADD_FAIL,
  SOCIETY_ADD_REQUEST,
  SOCIETY_ADD_SUCCESS,
  SOCIETY_FETCH_FAIL,
  SOCIETY_FETCH_REQUEST,
  SOCIETY_FETCH_SUCCESS,
} from '../constants/societyConstants'
import axios from 'axios'

export const addSociety = (
  societyName,
  address,
  city,
  noOfWings,
  pinCode,
  societyCreateDate
) => {
  return (dispatch) => {
    dispatch({
      type: SOCIETY_ADD_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const body = {
      societyName,
      address,
      city,
      noOfWings,
      pinCode,
      societyCreateDate,
    }
    const url = 'http://localhost:8080/users/societyinfo'

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: SOCIETY_ADD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: SOCIETY_ADD_FAIL,
          payload: error,
        })
      })
  }
}

export const getSociety = () => {
  return (dispatch) => {
    dispatch({
      type: SOCIETY_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:8080/users/societyinfo'

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: SOCIETY_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: SOCIETY_FETCH_FAIL,
          payload: error,
        })
      })
  }
}
