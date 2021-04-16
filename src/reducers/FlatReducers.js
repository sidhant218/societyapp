import {
    FLAT_REQUEST,
    FLAT_SUCCESS,
    FLAT_FAIL,
    FLAT_LIST_REQUEST,
    FLAT_LIST_SUCCESS,
    FLAT_LIST_FAIL,
    FLAT_DELETE_REQUEST,
    FLAT_DELETE_SUCCESS,
    FLAT_DELETE_FAIL
} from '../constants/FlatConstants'

export const addFlat = (state = {}, action) => {
    switch (action.type) {
      case FLAT_REQUEST:
        return { loading: true }
      case FLAT_SUCCESS:
        return { loading: false, response: action.payload }
      case FLAT_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
}

export const flatList = (state = {}, action) => {
  switch (action.type) {
    case FLAT_LIST_REQUEST:
      return { loading: true }
    case FLAT_LIST_SUCCESS:
      return { loading: false, response: action.payload }
    case FLAT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const flatDelete = (state = {}, action) => {
  switch (action.type) {
    case FLAT_DELETE_REQUEST:
      return { loading: true }
    case FLAT_DELETE_SUCCESS:
      return { loading: false, response: action.payload }
    case FLAT_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}