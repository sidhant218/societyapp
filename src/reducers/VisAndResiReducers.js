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

export const visitorEnterReducer = (state = {}, action) => {
    switch (action.type) {
      case VISITOR_ENTER_REQUEST:
        return { loading: true }
      case VISITOR_ENTER_SUCCESS:
        return { loading: false, response: action.payload }
      case VISITOR_ENTER_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
}

export const visitorExitReducer = (state = {}, action) => {
  switch (action.type) {
    case VISITOR_EXIT_REQUEST:
      return { loading: true }
    case VISITOR_EXIT_SUCCESS:
      return { loading: false, response: action.payload }
    case VISITOR_EXIT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const visitorParkingReducer = (state = {}, action) => {
  switch (action.type) {
    case VISITOR_PARKING_REQUEST:
      return { loading: true }
    case VISITOR_PARKING_SUCCESS:
      return { loading: false, response: action.payload }
    case VISITOR_PARKING_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const residentParkingReducer = (state = {}, action) => {
  switch (action.type) {
    case RESIDENT_PARKING_REQUEST:
      return { loading: true }
    case RESIDENT_PARKING_SUCCESS:
      return { loading: false, response: action.payload }
    case RESIDENT_PARKING_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}