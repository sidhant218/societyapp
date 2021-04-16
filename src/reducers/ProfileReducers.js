import {
  PROFILE_UPDATE_FAIL,
  PROFILE_UPDATE_REQUEST,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_RESET,
  PROFILE_FETCH_FAIL,
  PROFILE_FETCH_REQUEST,
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_RESET,
} from '../constants/editProfileConstant'

export const editProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case PROFILE_UPDATE_REQUEST:
      return { loading: true }
    case PROFILE_UPDATE_SUCCESS:
      return { loading: false, response: action.payload }
    case PROFILE_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case PROFILE_UPDATE_RESET:
      return {}
    default:
      return state
  }
}

export const fetchProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case PROFILE_FETCH_REQUEST:
      return { loading: true }
    case PROFILE_FETCH_SUCCESS:
      return {
        loading: false,
        response: action.payload,
      }

    case PROFILE_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case PROFILE_FETCH_RESET:
      return {}
    default:
      return state
  }
}
