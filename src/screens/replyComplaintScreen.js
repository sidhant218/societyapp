import React, { useState} from 'react'
import Header from '../components/Header'
import { replyComplaint } from '../actions/complaintActions'
import { useDispatch} from 'react-redux'
import Navbar from '../components/Navbar'

const ReplyComplaintScreen = (props) => {
  const [reply, setReply] = useState('')

  // addResident function in action
 // const replyComplaintData = useSelector((store) => store.replyComplaintData)
  //const { loading, response, error } = replyComplaintData

  const dispatch = useDispatch()
  // listen on change of the [loading, response, error] values
  const onReplyComplaint = () => {
    const id = sessionStorage.getItem('complaintId')
    dispatch(replyComplaint(reply, id))
    props.history.push('/complaint')
    sessionStorage.removeItem('complaintId')
  }
  const onCancel = () => {
    props.history.push('/complaint')
  }
  return (
    <div>
      <Navbar />
      <Header title="Reply Complaint" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Reply</label>
          <input
            onChange={(e) => {
              setReply(e.target.value)
            }}
            className="form-control"
            type="text"></input>
        </div>

        <div className="mb-3">
          <button onClick={onReplyComplaint} className="btn btn-success">
            Reply
          </button>
          <button onClick={onCancel} className="btn btn-success float-end">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReplyComplaintScreen
