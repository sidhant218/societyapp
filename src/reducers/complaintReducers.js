import {
  COMPLAINT_ADD_FAIL,
  COMPLAINT_ADD_REQUEST,
  COMPLAINT_ADD_SUCCESS,
  COMPLAINT_ADD_RESET,
  COMPLAINT_FETCH_FAIL,
  COMPLAINT_FETCH_REQUEST,
  COMPLAINT_FETCH_SUCCESS,
  COMPLAINT_FETCH_RESET,
  COMPLAINT_REPLY_FAIL,
  COMPLAINT_REPLY_REQUEST,
  COMPLAINT_REPLY_SUCCESS,
  COMPLAINT_REPLY_RESET,
  COMPLAINT_DELETE_FAIL,
  COMPLAINT_DELETE_REQUEST,
  COMPLAINT_DELETE_SUCCESS,
  COMPLAINT_DELETE_RESET,
} from '../constants/complaintConstants'

export const addComplaintReducer = (state = {}, action) => {
  switch (action.type) {
    case COMPLAINT_ADD_REQUEST:
      return { loading: true }
    case COMPLAINT_ADD_SUCCESS:
      return { loading: false, response: action.payload }
    case COMPLAINT_ADD_FAIL:
      return { loading: false, error: action.payload }
    case COMPLAINT_ADD_RESET:
      return {}
    default:
      return state
  }
}

export const fetchComplaintReducer = (state = {}, action) => {
  switch (action.type) {
    case COMPLAINT_FETCH_REQUEST:
      return { loading: true }
    case COMPLAINT_FETCH_SUCCESS:
      return {
        loading: false,
        response: action.payload,
      }

    case COMPLAINT_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case COMPLAINT_FETCH_RESET:
      return {}
    default:
      return state
  }
}
export const replyComplaintReducer = (state = {}, action) => {
  switch (action.type) {
    case COMPLAINT_REPLY_REQUEST:
      return { loading: true }
    case COMPLAINT_REPLY_SUCCESS:
      return {
        loading: false,
        response: action.payload,
      }

    case COMPLAINT_REPLY_FAIL:
      return { loading: false, error: action.payload }
    case COMPLAINT_REPLY_RESET:
      return {}
    default:
      return state
  }
}
export const deleteComplaintReducer = (state = {}, action) => {
  switch (action.type) {
    case COMPLAINT_DELETE_REQUEST:
      return { loading: true }
    case COMPLAINT_DELETE_SUCCESS:
      return {
        loading: false,
        response: action.payload,
      }

    case COMPLAINT_DELETE_FAIL:
      return { loading: false, error: action.payload }
    case COMPLAINT_DELETE_RESET:
      return {}
    default:
      return state
  }
}
