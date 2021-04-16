import {
  SOCIETY_ADD_FAIL,
  SOCIETY_ADD_REQUEST,
  SOCIETY_ADD_SUCCESS,
  SOCIETY_ADD_RESET,
  SOCIETY_FETCH_FAIL,
  SOCIETY_FETCH_REQUEST,
  SOCIETY_FETCH_SUCCESS,
  SOCIETY_FETCH_RESET,
} from '../constants/societyConstants'

export const addSocietyReducer = (state = {}, action) => {
  switch (action.type) {
    case SOCIETY_ADD_REQUEST:
      return { loading: true }
    case SOCIETY_ADD_SUCCESS:
      return { loading: false, response: action.payload }
    case SOCIETY_ADD_FAIL:
      return { loading: false, error: action.payload }
    case SOCIETY_ADD_RESET:
      return {}
    default:
      return state
  }
}

export const fetchSocietyReducer = (state = {}, action) => {
  switch (action.type) {
    case SOCIETY_FETCH_REQUEST:
      return { loading: true }
    case SOCIETY_FETCH_SUCCESS:
      return {
        loading: false,
        response: action.payload,
      }

    case SOCIETY_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case SOCIETY_FETCH_RESET:
      return {}
    default:
      return state
  }
}
