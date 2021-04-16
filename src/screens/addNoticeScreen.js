import { useState, useEffect } from 'react'
import Header from '../components/Header'
import { addNotice } from '../actions/noticeActions'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'

const AddNoticeScreen = (props) => {
  const [eventName, setEventName] = useState('')
  const [eventInformation, setEventInformation] = useState('')
  const [eventDateTime, setEventDateTime] = useState('')

  const dispatch = useDispatch()

  // addResident function in action
  const addNoticeData = useSelector((store) => store.addNoticeData)
  const { loading, response, error } = addNoticeData

  // listen on change of the [loading, response, error] values
  useEffect(() => {
    if (response && response.status === 'success') {
      props.history.push('/notice-list')
    } else if (error) {
      alert('error')
    }
  }, [loading, response, error])

  const onAddNotice = () => {
    dispatch(
      addNotice(
        // Action
        eventDateTime,
        eventInformation,
        eventName
      )
    )
    props.history.push('/notice-list')
  }

  const onCancel = () => {
    props.history.push('/notice-list')
  }
  return (
    <div>
      <Navbar />
      <Header title="Add Notice" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Event Name</label>
          <input
            onChange={(e) => {
              setEventName(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Event Information</label>
          <input
            onChange={(e) => {
              setEventInformation(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Event Date Time</label>
          <input
            onChange={(e) => {
              setEventDateTime(e.target.value)
            }}
            type="date"
            className="form-control"
            placeholder="Event Date"
          />
        </div>

        <div className="mb-3">
          <button onClick={onAddNotice} className="btn btn-success">
            Add
          </button>
          <button onClick={onCancel} className="btn btn-success float-end">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddNoticeScreen
