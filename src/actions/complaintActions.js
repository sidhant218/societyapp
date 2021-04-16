import {
  COMPLAINT_ADD_FAIL,
  COMPLAINT_ADD_REQUEST,
  COMPLAINT_ADD_SUCCESS,
  COMPLAINT_FETCH_FAIL,
  COMPLAINT_FETCH_REQUEST,
  COMPLAINT_FETCH_SUCCESS,
  COMPLAINT_REPLY_FAIL,
  COMPLAINT_REPLY_REQUEST,
  COMPLAINT_REPLY_SUCCESS,
  COMPLAINT_DELETE_FAIL,
  COMPLAINT_DELETE_REQUEST,
  COMPLAINT_DELETE_SUCCESS,
} from '../constants/complaintConstants'
import axios from 'axios'

export const addComplaint = (subject, complaint, reply, status) => {
  return (dispatch) => {
    dispatch({
      type: COMPLAINT_ADD_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const body = {
      subject,
      complaint,
      reply,
      status,
    }
    const url = 'http://localhost:8080/resident/addcomplaint'

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: COMPLAINT_ADD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: COMPLAINT_ADD_FAIL,
          payload: error,
        })
      })
  }
}

export const getComplaint = () => {
  return (dispatch) => {
    dispatch({
      type: COMPLAINT_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }
    // const body = {
    //   complaintId,
    // }

    const url = 'http://localhost:8080/secretary/complaintlist'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: COMPLAINT_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: COMPLAINT_FETCH_FAIL,
          payload: error,
        })
      })
  }
}
export const replyComplaint = (reply, id) => {
  return (dispatch) => {
    dispatch({
      type: COMPLAINT_REPLY_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const body = {
      reply,
    }

    const url = 'http://localhost:8080/secretary/complaint/' + id
    axios
      .put(url, body, header)
      .then((response) => {
        dispatch({
          type: COMPLAINT_REPLY_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: COMPLAINT_REPLY_FAIL,
          payload: error,
        })
      })
  }
}
export const deleteComplaint = () => {
  return (dispatch) => {
    dispatch({
      type: COMPLAINT_DELETE_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:8080/users/noticelist'
    axios
      .delete(url, header)
      .then((response) => {
        dispatch({
          type: COMPLAINT_DELETE_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: COMPLAINT_DELETE_FAIL,
          payload: error,
        })
      })
  }
}
