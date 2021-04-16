import {
    DASHBOARD_FETCH_REQUEST,
    DASHBOARD_FETCH_SUCCESS,
    DASHBOARD_FETCH_FAIL,
    DASHBOARD_FETCH_RESET,
    SECURITY_FETCH_REQUEST,
    SECURITY_FETCH_SUCCESS,
    SECURITY_FETCH_FAIL,
    SECURITY_FETCH_RESET,
    VISITORS_FETCH_REQUEST,
    VISITORS_FETCH_SUCCESS,
    VISITORS_FETCH_FAIL,
    VISITORS_FETCH_RESET,
    WINGS_FETCH_REQUEST,
    WINGS_FETCH_SUCCESS,
    WINGS_FETCH_FAIL,
    WINGS_FETCH_RESET
  } from '../constants/dashboardConstant'

export const fetchResidentCountReducer = (state = {}, action) => {
    switch (action.type) {
      case DASHBOARD_FETCH_REQUEST:
        return { loading: true }
      case DASHBOARD_FETCH_SUCCESS:
        return { loading: false, response: action.payload }
      case DASHBOARD_FETCH_FAIL:
        return { loading: false, error: action.payload }
      case DASHBOARD_FETCH_RESET:
        return {}
      default:
        return state
    }
}

export const fetchSecurityCountReducer = (state = {}, action) => {
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

export const fetchVisitorsCountReducer = (state = {}, action) => {
  switch (action.type) {
    case VISITORS_FETCH_REQUEST:
      return { loading: true }
    case VISITORS_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case VISITORS_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case VISITORS_FETCH_RESET:
      return {}
    default:
      return state
  }
}

export const fetchWingsCountReducer = (state = {}, action) => {
  switch (action.type) {
    case WINGS_FETCH_REQUEST:
      return { loading: true }
    case WINGS_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case WINGS_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case WINGS_FETCH_RESET:
      return {}
    default:
      return state
  }
}