import {
  PROFILE_UPDATE_FAIL,
  PROFILE_UPDATE_REQUEST,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_FETCH_FAIL,
  PROFILE_FETCH_REQUEST,
  PROFILE_FETCH_SUCCESS,
} from '../constants/editProfileConstant'
import axios from 'axios'

export const editProfile = (
  password,
  mobileNo,
  wingName,
  noOfFamilyMembers,
  id
) => {
  return (dispatch) => {
    dispatch({
      type: PROFILE_UPDATE_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const body = {
      password,
      mobileNo,
      wingName,
      noOfFamilyMembers,
    }
    const url = 'http://localhost:8080/users/' + id

    axios
      .put(url, body, header)
      .then((response) => {
        dispatch({
          type: PROFILE_UPDATE_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: PROFILE_UPDATE_FAIL,
          payload: error,
        })
      })
  }
}

export const getProfile = () => {
  return (dispatch) => {
    dispatch({
      type: PROFILE_FETCH_REQUEST,
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
          type: PROFILE_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: PROFILE_FETCH_FAIL,
          payload: error,
        })
      })
  }
}
