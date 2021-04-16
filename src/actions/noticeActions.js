import {
  NOTICE_ADD_FAIL,
  NOTICE_ADD_REQUEST,
  NOTICE_ADD_SUCCESS,
  NOTICE_FETCH_FAIL,
  NOTICE_FETCH_REQUEST,
  NOTICE_FETCH_SUCCESS,
} from '../constants/noticeConstants'
import axios from 'axios'

export const addNotice = (eventDateTime, eventInformation, eventName) => {
  return (dispatch) => {
    dispatch({
      type: NOTICE_ADD_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const body = {
      eventDateTime,
      eventInformation,
      eventName,
    }
    const url = 'http://localhost:8080/users/events'

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: NOTICE_ADD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: NOTICE_ADD_FAIL,
          payload: error,
        })
      })
  }
}

export const getNotice = () => {
  return (dispatch) => {
    dispatch({
      type: NOTICE_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:8080/users/noticelist'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: NOTICE_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: NOTICE_FETCH_FAIL,
          payload: error,
        })
      })
  }
}
