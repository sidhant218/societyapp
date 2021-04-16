import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getComplaint } from '../actions/complaintActions'

const ComplaintList = (props) => {
  const dispatch = useDispatch()
  const complaintList = useSelector((store) => store.complaintList)
  const { error, response, loading } = complaintList

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getComplaint())
  }, [])

  useEffect(() => {}, [error, response, loading])

  function onReplyComplaint(complaintId) {
    console.log(complaintId)
    sessionStorage.setItem('complaintId', complaintId)
    props.history.push('/reply-complaint')
  }

  const onDelete = (index) => {
    var newList = complaintList
    newList.splice(index, 1)
    complaintList(newList)
  }

  return (
    <div>
      <Navbar />
      <h2 className="text-center">Complaint List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Complaint </th>
            <th>Reply</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response &&
            response.length > 0 &&
            response.map((complaintList) => {
              return (
                <tr>
                  <td>{complaintList.subject}</td>
                  <td>{complaintList.complaint}</td>
                  <td>{complaintList.reply}</td>
                  <td>{complaintList.status}</td>
                  <td>
                    <button
                      onClick={() =>
                        onReplyComplaint(complaintList.complaintId)
                      }
                      class="btn btn-success">
                      Reply
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        onDelete(complaintList)
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

export default ComplaintList
