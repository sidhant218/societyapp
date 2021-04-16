import {
  RESIDENT_ADD_FAIL,
  RESIDENT_ADD_REQUEST,
  RESIDENT_ADD_SUCCESS,
  RESIDENT_ADD_RESET,
  RESIDENT_FETCH_FAIL,
  RESIDENT_FETCH_REQUEST,
  RESIDENT_FETCH_SUCCESS,
  RESIDENT_FETCH_RESET,
} from '../constants/residentConstants'

export const addResidentReducer = (state = {}, action) => {
  switch (action.type) {
    case RESIDENT_ADD_REQUEST:
      return { loading: true }
    case RESIDENT_ADD_SUCCESS:
      return { loading: false, response: action.payload }
    case RESIDENT_ADD_FAIL:
      return { loading: false, error: action.payload }
    case RESIDENT_ADD_RESET:
      return {}
    default:
      return state
  }
}

export const fetchResidentReducer = (state = {}, action) => {
  switch (action.type) {
    case RESIDENT_FETCH_REQUEST:
      return { loading: true }
    case RESIDENT_FETCH_SUCCESS:
      return {
        loading: false,
        response: action.payload,
      }

    case RESIDENT_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case RESIDENT_FETCH_RESET:
      return {}
    default:
      return state
  }
}
