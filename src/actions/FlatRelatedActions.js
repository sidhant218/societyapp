import {
    FLAT_REQUEST,
    FLAT_SUCCESS,
    FLAT_FAIL,
    FLAT_LIST_REQUEST,
    FLAT_LIST_SUCCESS,
    FLAT_LIST_FAIL,
    FLAT_DELETE_REQUEST,
    FLAT_DELETE_SUCCESS,
    FLAT_DELETE_FAIL
} from '../constants/FlatConstants'

import axios from 'axios'

export const addingFlat = (
    status,
    flatType,
    floorNo,
    flatNo,
  ) => {
    return (dispatch) => {
      dispatch({
        type: FLAT_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
  
    const body = {
        status,
        flatType,
        floorNo,
        flatNo,
    }
    const url = 'http://localhost:8080/secretary/addflat'
    axios
        .post(url, body, header)
        .then((response) => {
          dispatch({
            type: FLAT_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: FLAT_FAIL,
            payload: error,
          })
        })
    }
}

export const getFlats = () => {
  return (dispatch) => {
    dispatch({
      type: FLAT_LIST_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:8080/secretary/flatlist'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: FLAT_LIST_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: FLAT_LIST_FAIL,
          payload: error,
        })
      })
  }
}

export const deleteFlatById = (userId) => {
  return (dispatch) => {
    dispatch({
      type: FLAT_DELETE_REQUEST,
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
          type: FLAT_DELETE_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: FLAT_DELETE_FAIL,
          payload: error,
        })
      })
  }
}
