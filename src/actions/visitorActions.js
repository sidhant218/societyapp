import {
  VISITOR_ADD_FAIL,
  VISITOR_ADD_REQUEST,
  VISITOR_ADD_SUCCESS,
  VISITOR_FETCH_FAIL,
  VISITOR_FETCH_REQUEST,
  VISITOR_FETCH_SUCCESS,
  VISITOR_UPDATE_FAIL,
  VISITOR_UPDATE_REQUEST,
  VISITOR_UPDATE_SUCCESS,
} from '../constants/visitorsConstants'
import axios from 'axios'

export const addVisitor = (
  firstName,
  lastName,
  aadharNo,
  wingName,
  flatNo,
  mobileNo,
  entryDateTime,
  exitDateTime,
  parkingStatus
) => {
  return (dispatch) => {
    dispatch({
      type: VISITOR_ADD_REQUEST,
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
      aadharNo,
      wingName,
      flatNo,
      mobileNo,
      entryDateTime,
      exitDateTime,
      parkingStatus,
    }
    const url = 'http://localhost:8080/security/addvisitor'

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: VISITOR_ADD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: VISITOR_ADD_FAIL,
          payload: error,
        })
      })
  }
}

export const updateVisitor = () => {
  return (dispatch) => {
    dispatch({
      type: VISITOR_UPDATE_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:8080/security/visitorparking'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: VISITOR_UPDATE_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: VISITOR_UPDATE_FAIL,
          payload: error,
        })
      })
  }
}

export const getVisitor = () => {
  return (dispatch) => {
    dispatch({
      type: VISITOR_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:8080/secretary/viewvisitor'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: VISITOR_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: VISITOR_FETCH_FAIL,
          payload: error,
        })
      })
  }
}
