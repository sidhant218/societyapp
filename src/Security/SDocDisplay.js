import React from 'react'
import Header from '../components/Header'
import SecurityNavbar from '../components/SecurityNavbar'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadDocument } from '../actions/documentActions'

const SDocDisplay = (props) => {
  const [documentName, setDocumentName] = useState('')
  const dispatch = useDispatch()
  const uploadDocumentFile = useSelector((store) => store.uploadDocumentFile)
  const { error, response, loading } = uploadDocumentFile

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(uploadDocument()) // from actions
  }, [])

  useEffect(() => {}, [error, response, loading])

  const onUploadDocument = () => {
    dispatch(
      uploadDocument(
        // Action
        documentName
      )
    )
    props.history.push('/r-upload-doc')
  }

  return (
    <div>
      <SecurityNavbar />
      <Header title="Add Notice" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Document Name</label>
          <input
            onChange={(e) => {
              setDocumentName(e.target.value)
            }}
            className="form-control"></input>
        </div>

        <div className="mb-3">
          <button onClick={onUploadDocument} class="btn btn-success">
            Upload
          </button>
        </div>
      </div>
    </div>
  )
}

export default SDocDisplay
