import {
  ADD_FEEDBACK_REQUEST,
  ADD_FEEDBACK_SUCCESS,
  ADD_FEEDBACK_FAIL,
  FETCH_FEEDBACK_REQUEST,
  FETCH_FEEDBACK_SUCCESS,
  FETCH_FEEDBACK_FAIL,
} from '../constants/FeedbackConstants'

export const addFeedback = (state = {}, action) => {
  switch (action.type) {
    case ADD_FEEDBACK_REQUEST:
      return { loading: true }
    case ADD_FEEDBACK_SUCCESS:
      return { loading: false, response: action.payload }
    case ADD_FEEDBACK_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const getFeedback = (state = {}, action) => {
  switch (action.type) {
    case FETCH_FEEDBACK_REQUEST:
      return { loading: true }
    case FETCH_FEEDBACK_SUCCESS:
      return { loading: false, response: action.payload }
    case FETCH_FEEDBACK_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
