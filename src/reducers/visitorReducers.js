import {
  VISITOR_ADD_FAIL,
  VISITOR_ADD_REQUEST,
  VISITOR_ADD_SUCCESS,
  VISITOR_ADD_RESET,
  VISITOR_FETCH_FAIL,
  VISITOR_FETCH_REQUEST,
  VISITOR_FETCH_SUCCESS,
  VISITOR_FETCH_RESET,
  VISITOR_UPDATE_FAIL,
  VISITOR_UPDATE_REQUEST,
  VISITOR_UPDATE_SUCCESS,
  VISITOR_UPDATE_RESET,
} from '../constants/visitorsConstants'

export const addVisitorReducer = (state = {}, action) => {
  switch (action.type) {
    case VISITOR_ADD_REQUEST:
      return { loading: true }
    case VISITOR_ADD_SUCCESS:
      return { loading: false, response: action.payload }
    case VISITOR_ADD_FAIL:
      return { loading: false, error: action.payload }
    case VISITOR_ADD_RESET:
      return {}
    default:
      return state
  }
}

export const fetchVisitorReducer = (state = {}, action) => {
  switch (action.type) {
    case VISITOR_FETCH_REQUEST:
      return { loading: true }
    case VISITOR_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case VISITOR_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case VISITOR_FETCH_RESET:
      return {}
    default:
      return state
  }
}

export const updateVisitorReducer = (state = {}, action) => {
  switch (action.type) {
    case VISITOR_UPDATE_REQUEST:
      return { loading: true }
    case VISITOR_UPDATE_SUCCESS:
      return { loading: false, response: action.payload }
    case VISITOR_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case VISITOR_UPDATE_RESET:
      return {}
    default:
      return state
  }
}
