import { useState, useEffect } from 'react'
import Header from '../components/Header'
import { addComplaint } from '../actions/complaintActions'
import { useDispatch, useSelector } from 'react-redux'
import ResidentNavbar from '../components/ResidentNavbar'

const RComplaintList = (props) => {
  const [subject, setSubject] = useState('')
  const [complaint, setComplaint] = useState('')

  const dispatch = useDispatch()

  const addComplaintPage = useSelector((store) => store.addComplaintPage)
  const { loading, response, error } = addComplaintPage

  // listen on change of the [loading, response, error] values
  useEffect(() => {
    console.log('use effect called: ')
    console.log('loading: ', loading)
    console.log('response: ', response)
    console.log('error: ', error)

    if (response && response.status === 'success') {
      // user successfully got registered
      props.history.push('/dashboard')
    } else if (error) {
      // there is an error while making the API call
      console.log(error)
      alert('error while making API call')
    }
  }, [loading, response, error])

  const onAddComplaint = () => {
    dispatch(addComplaint(subject, complaint))
    props.history.push('/r-dashboard')
  }

  return (
    <div>
      <ResidentNavbar />
      <Header title="Complaint" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Subject</label>
          <input
            onChange={(e) => {
              setSubject(e.target.value)
            }}
            type="text"
            className="form-control"></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            onChange={(e) => {
              setComplaint(e.target.value)
            }}
            className="form-control"></input>
        </div>

        <div className="mb-3">
          <button onClick={onAddComplaint} className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default RComplaintList
