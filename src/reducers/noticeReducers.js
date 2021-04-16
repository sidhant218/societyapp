import {
  NOTICE_ADD_FAIL,
  NOTICE_ADD_REQUEST,
  NOTICE_ADD_SUCCESS,
  NOTICE_ADD_RESET,
  NOTICE_FETCH_FAIL,
  NOTICE_FETCH_REQUEST,
  NOTICE_FETCH_SUCCESS,
  NOTICE_FETCH_RESET,
} from '../constants/noticeConstants'

export const addNoticeReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTICE_ADD_REQUEST:
      return { loading: true }
    case NOTICE_ADD_SUCCESS:
      return { loading: false, response: action.payload }
    case NOTICE_ADD_FAIL:
      return { loading: false, error: action.payload }
    case NOTICE_ADD_RESET:
      return {}
    default:
      return state
  }
}

export const fetchNoticeReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTICE_FETCH_REQUEST:
      return { loading: true }
    case NOTICE_FETCH_SUCCESS:
      return {
        loading: false,
        response: action.payload,
      }

    case NOTICE_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case NOTICE_FETCH_RESET:
      return {}
    default:
      return state
  }
}
