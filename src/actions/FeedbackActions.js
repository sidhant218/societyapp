import {
  ADD_FEEDBACK_REQUEST,
  ADD_FEEDBACK_SUCCESS,
  ADD_FEEDBACK_FAIL,
  FETCH_FEEDBACK_REQUEST,
  FETCH_FEEDBACK_SUCCESS,
  FETCH_FEEDBACK_FAIL,
} from '../constants/FeedbackConstants'
import axios from 'axios'

export const addFeedback = (eventName, rating, review, userName) => {
  return (dispatch) => {
    dispatch({
      type: ADD_FEEDBACK_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      eventName,
      rating,
      review,
      userName,
    }
    const url = 'http://localhost:8080/users/addfeedback'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: ADD_FEEDBACK_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: ADD_FEEDBACK_FAIL,
          payload: error,
        })
      })
  }
}
export const getFeedback = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_FEEDBACK_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:8080/secretary/viewfeedback'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: FETCH_FEEDBACK_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: FETCH_FEEDBACK_FAIL,
          payload: error,
        })
      })
  }
}
