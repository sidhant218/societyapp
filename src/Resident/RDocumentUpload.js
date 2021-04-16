import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import { uploadDocument } from '../actions/documentActions'
import { useDispatch, useSelector } from 'react-redux'
import ResidentNavbar from '../components/ResidentNavbar'
import { useForm } from 'react-hook-form'

const RDocumentUpload = (props) => {
  const [documentName, setDocumentName] = useState('')
  const [validUpTo, setValidUpTo] = useState('')
  const [image, setImage] = useState('')
  const { register, handleSubmit } = useForm()

  const dispatch = useDispatch()

  // addResident function in action
  const uploadDocumentFile = useSelector((store) => store.uploadDocumentFile)
  const { loading, response, error } = uploadDocumentFile

  // listen on change of the [loading, response, error] values
  useEffect(() => {
    if (response && response.status == 'success') {
      props.history.push('/r-doc')
    } else if (error) {
      alert('error')
    }
  }, [loading, response, error])

  const onSubmit = () => {
    dispatch(
      uploadDocument(
        // Action
        documentName,
        validUpTo,
        image
      )
    )
    props.history.push('/r-dashboard')
  }

  // const onSubmit = (data) => {
  //   console.log(data)
  // }

  const onCancel = () => {
    props.history.push('/s-doc')
  }
  return (
    <div>
      <ResidentNavbar />
      <Header title="Upload Documents" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Document Name</label>
          <input
            onChange={(e) => {
              setDocumentName(e.target.value)
            }}
            className="form-control"></input>
          {/* <label className="form-label">Valid Upto</label>
          <input
            onChange={(e) => {
              setValidUpTo(e.target.value)
            }}
            className="form-control"
            type="date"></input> */}
        </div>
        <input
          onChange={(e) => {
            setImage(e.target.value)
          }}
          className="form-control"
          ref={register}
          type="file"
          name="picture"
        />
      </form>
      <br></br>
      <button onClick={onSubmit} className="btn btn-success">
        Submit
      </button>
      <button onClick={onCancel} className="btn btn-success float-end">
        Cancel
      </button>
    </div>
  )
}

export default RDocumentUpload
