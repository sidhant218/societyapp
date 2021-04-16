import {
    VISITOR_ENTER_REQUEST,
    VISITOR_ENTER_SUCCESS,
    VISITOR_ENTER_FAIL,
    VISITOR_EXIT_REQUEST,
    VISITOR_EXIT_SUCCESS,
    VISITOR_EXIT_FAIL,
    VISITOR_PARKING_REQUEST,
    VISITOR_PARKING_SUCCESS,
    VISITOR_PARKING_FAIL,
    RESIDENT_PARKING_REQUEST,
    RESIDENT_PARKING_SUCCESS,
    RESIDENT_PARKING_FAIL
} from '../constants/VisAndResiConstants'
import axios from 'axios'

export const visitorEnter = (
    firstName,
    lastName,
    aadharNo,
    mobileNo,
    wingName,
    flatNo,
    reason,
    entryDateTime
  ) => {
    return (dispatch) => {
      dispatch({
        type: VISITOR_ENTER_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
  
    const body = {
    firstName,
    lastName,
    aadharNo,
    mobileNo,
    wingName,
    flatNo,
    reason,
    entryDateTime
    }
    const url = 'http://localhost:8080/security/addvisitor'
    axios
        .post(url, body, header)
        .then((response) => {
          dispatch({
            type: VISITOR_ENTER_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: VISITOR_ENTER_FAIL,
            payload: error,
          })
        })
    }
}

export const visitorExit = (
    exitDateTime,
    aadharNo
) => {
  return (dispatch) => {
    dispatch({
      type: VISITOR_EXIT_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

  const body = {
    exitDateTime,
    aadharNo
  }
  const url = 'http://localhost:8080/security/exitparking'
  axios
      .put(url, body, header)
      .then((response) => {
        dispatch({
          type: VISITOR_EXIT_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: VISITOR_EXIT_FAIL,
          payload: error,
        })
      })
  }
}

export const visitorParking = (
  vehicleNo,
  vehicleType,
  parkingStatus,
  aadharNo
) => {
return (dispatch) => {
  dispatch({
    type: VISITOR_PARKING_REQUEST,
  })

  const header = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

const body = {
  vehicleNo,
  vehicleType,
  parkingStatus,
  aadharNo
}
const url = 'http://localhost:8080/security/visitorparking'
axios
    .put(url, body, header)
    .then((response) => {
      dispatch({
        type: VISITOR_PARKING_SUCCESS,
        payload: response.data,
      })
    })
    .catch((error) => {
      dispatch({
        type: VISITOR_PARKING_FAIL,
        payload: error,
      })
    })
}
}

export const residentParking = (
  vehicleNo,
  vehicleType,
  parkingStatus,
  email
) => {
return (dispatch) => {
  dispatch({
    type: RESIDENT_PARKING_REQUEST,
  })

  const header = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

const body = {
  vehicleNo,
  vehicleType,
  parkingStatus,
  email
}
const url = 'http://localhost:8080/security/residentparking'
axios
    .put(url, body, header)
    .then((response) => {
      dispatch({
        type: RESIDENT_PARKING_SUCCESS,
        payload: response.data,
      })
    })
    .catch((error) => {
      dispatch({
        type: RESIDENT_PARKING_FAIL,
        payload: error,
      })
    })
}
}