import {
  DOCUMENT_UPLOAD_FAIL,
  DOCUMENT_UPLOAD_REQUEST,
  DOCUMENT_UPLOAD_SUCCESS,
  DOCUMENT_FETCH_FAIL,
  DOCUMENT_FETCH_REQUEST,
  DOCUMENT_FETCH_SUCCESS,
  DOCUMENT_DOWNLOAD_FAIL,
  DOCUMENT_DOWNLOAD_REQUEST,
  DOCUMENT_DOWNLOAD_SUCCESS,
} from '../constants/documentConstants'
import axios from 'axios'

export const uploadDocument = (documentName, image) => {
  return (dispatch) => {
    dispatch({
      type: DOCUMENT_UPLOAD_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'form-data',
        token: sessionStorage['token'],
      },
    }

    const body = {
      documentName,
      image,
      // validUpTo,
    }
    const url = 'http://localhost:8080/resident/upload'

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: DOCUMENT_UPLOAD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: DOCUMENT_UPLOAD_FAIL,
          payload: error,
        })
      })
  }
}

export const downloadDocument = () => {
  return (dispatch) => {
    dispatch({
      type: DOCUMENT_DOWNLOAD_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:8080/secretary/download'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: DOCUMENT_DOWNLOAD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: DOCUMENT_DOWNLOAD_FAIL,
          payload: error,
        })
      })
  }
}

export const getDocumentList = () => {
  return (dispatch) => {
    dispatch({
      type: DOCUMENT_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:8080/secretary/documentlist'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: DOCUMENT_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: DOCUMENT_FETCH_FAIL,
          payload: error,
        })
      })
  }
}
