import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import { uploadDocument } from '../actions/documentActions'
import { useDispatch, useSelector } from 'react-redux'
import SecurityNavbar from '../components/SecurityNavbar'
import { useForm } from 'react-hook-form'

const SDocumentUpload = (props) => {
  const [eventName, setEventName] = useState('')
  const { register, handleSubmit } = useForm()

  const dispatch = useDispatch()

  // addResident function in action
  const uploadDocumentFile = useSelector((store) => store.uploadDocumentFile)
  const { loading, response, error } = uploadDocumentFile

  // listen on change of the [loading, response, error] values
  useEffect(() => {
    if (response && response.status == 'success') {
      props.history.push('/notice-list')
    } else if (error) {
      alert('error')
    }
  }, [loading, response, error])

  // const onSubmit = () => {
  //   dispatch(
  //     uploadDocument(
  //       // Action
  //       eventDateTime,
  //
  //     )
  //   )
  //   props.history.push('/dashboard')
  // }

  const onSubmit = (data) => {
    console.log(data)
  }

  const onCancel = () => {
    props.history.push('/s-doc')
  }
  return (
    <div>
      <SecurityNavbar />
      <Header title="Upload Documents" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Document Name</label>
          <input
            onChange={(e) => {
              setEventName(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input ref={register} type="file" name="picture" />
            <button onClick={onSubmit} className="btn btn-success">
              Submit
            </button>
            <button onClick={onCancel} className="btn btn-success float-end">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SDocumentUpload
