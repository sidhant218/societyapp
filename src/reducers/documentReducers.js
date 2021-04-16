import {
  DOCUMENT_UPLOAD_FAIL,
  DOCUMENT_UPLOAD_REQUEST,
  DOCUMENT_UPLOAD_SUCCESS,
  DOCUMENT_UPLOAD_RESET,
  DOCUMENT_FETCH_FAIL,
  DOCUMENT_FETCH_REQUEST,
  DOCUMENT_FETCH_SUCCESS,
  DOCUMENT_FETCH_RESET,
  DOCUMENT_DOWNLOAD_FAIL,
  DOCUMENT_DOWNLOAD_REQUEST,
  DOCUMENT_DOWNLOAD_SUCCESS,
  DOCUMENT_DOWNLOAD_RESET,
} from '../constants/documentConstants'

export const uploadDocumentReducer = (state = {}, action) => {
  switch (action.type) {
    case DOCUMENT_UPLOAD_REQUEST:
      return { loading: true }
    case DOCUMENT_UPLOAD_SUCCESS:
      return { loading: false, response: action.payload }
    case DOCUMENT_UPLOAD_FAIL:
      return { loading: false, error: action.payload }
    case DOCUMENT_UPLOAD_RESET:
      return {}
    default:
      return state
  }
}

export const fetchDocumentReducer = (state = {}, action) => {
  switch (action.type) {
    case DOCUMENT_FETCH_REQUEST:
      return { loading: true }
    case DOCUMENT_FETCH_SUCCESS:
      return {
        loading: false,
        response: action.payload,
      }

    case DOCUMENT_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case DOCUMENT_FETCH_RESET:
      return {}
    default:
      return state
  }
}

export const downloadDocumentReducer = (state = {}, action) => {
  switch (action.type) {
    case DOCUMENT_DOWNLOAD_REQUEST:
      return { loading: true }
    case DOCUMENT_DOWNLOAD_SUCCESS:
      return {
        loading: false,
        response: action.payload,
      }

    case DOCUMENT_DOWNLOAD_FAIL:
      return { loading: false, error: action.payload }
    case DOCUMENT_DOWNLOAD_RESET:
      return {}
    default:
      return state
  }
}
