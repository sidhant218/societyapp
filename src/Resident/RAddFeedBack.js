import Header from '../components/Header'
import { useState, useEffect } from 'react'
import { addFeedback } from '../actions/FeedbackActions'
import { useDispatch, useSelector } from 'react-redux'
import ResidentNavbar from '../components/ResidentNavbar'

const RAddFeedBack = (props) => {
  const [eventName, setEventName] = useState('')
  const [rating, setRating] = useState('')
  const [review, setReview] = useState('')
  const [userName, setUserName] = useState('')

  const dispatch = useDispatch()

  const feedAdd = useSelector((store) => store.feedAdd)
  const { loading, response, error } = feedAdd

  useEffect(() => {
    console.log('use effect called: ')
    console.log('loading: ', loading)
    console.log('response: ', response)
    console.log('error: ', error)

    if (response && response.status === 'success') {
      props.history.push('/resident')
    } else if (error) {
      console.log(error)
      alert('error while making API call')
    }
  }, [loading, response, error])

  const sFeedAdd = () => {
    dispatch(addFeedback(eventName, rating, review, userName))
    props.history.push('/r-dashboard')
  }
  return (
    <div>
      <ResidentNavbar />
      <Header title="Add FeedBack" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Enter Event Name. :</label>
          <input
            onChange={(e) => {
              setEventName(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Enter Rating Out of 10 :</label>
          <input
            onChange={(e) => {
              setRating(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Please Enter Your Review About Event:
          </label>
          <input
            onChange={(e) => {
              setReview(e.target.value)
            }}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Enter Your Name.:</label>
          <input
            onChange={(e) => {
              setUserName(e.target.value)
            }}
            className="form-control"
            placeholder="enter your Name"></input>
        </div>

        <div className="mb-3">
          <button onClick={sFeedAdd} className="btn btn-success">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  )
}
export default RAddFeedBack
