import {
  SECURITY_ADD_FAIL,
  SECURITY_ADD_REQUEST,
  SECURITY_ADD_SUCCESS,
  SECURITY_ADD_RESET,
  SECURITY_FETCH_FAIL,
  SECURITY_FETCH_REQUEST,
  SECURITY_FETCH_SUCCESS,
  SECURITY_FETCH_RESET,
} from '../constants/securityConstants'

export const addSecurityReducer = (state = {}, action) => {
  switch (action.type) {
    case SECURITY_ADD_REQUEST:
      return { loading: true }
    case SECURITY_ADD_SUCCESS:
      return { loading: false, response: action.payload }
    case SECURITY_ADD_FAIL:
      return { loading: false, error: action.payload }
    case SECURITY_ADD_RESET:
      return {}
    default:
      return state
  }
}

export const fetchSecurityReducer = (state = {}, action) => {
  switch (action.type) {
    case SECURITY_FETCH_REQUEST:
      return { loading: true }
    case SECURITY_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case SECURITY_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case SECURITY_FETCH_RESET:
      return {}
    default:
      return state
  }
}
