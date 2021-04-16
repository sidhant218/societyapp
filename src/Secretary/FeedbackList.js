import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFeedback } from '../actions/FeedbackActions'

const FeedBackList = (props) => {
  const dispatch = useDispatch()
  const feedbacklist = useSelector((store) => store.feedbacklist)
  const { error, response, loading } = feedbacklist

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getFeedback())
  }, [])

  useEffect(() => {}, [error, response, loading])

  const onDelete = (index) => {
    var newList = feedbacklist
    newList.splice(index, 1)
    feedbacklist(newList)
  }

  return (
    <div>
      <Navbar />
      <h2 className="text-center">Feedback List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Enter Event Name</th>
            <th> Rating Out of 10 </th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response &&
            response.length > 0 &&
            response.map((feedbacklist) => {
              return (
                <tr>
                  <td>{feedbacklist.eventName}</td>
                  <td>{feedbacklist.rating}</td>
                  <td>{feedbacklist.review}</td>

                  <td>
                    <button
                      onClick={() => {
                        onDelete(feedbacklist)
                      }}
                      class="btn btn-success">
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default FeedBackList
