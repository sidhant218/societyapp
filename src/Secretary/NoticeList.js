import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNotice } from '../actions/noticeActions'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Button } from 'reactstrap'
import base_url from '../service/API'

const NoticeList = (props) => {
  const dispatch = useDispatch()
  const noticeList = useSelector((store) => store.noticeList)
  const { error, response, loading } = noticeList

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getNotice())
  }, [])

  useEffect(() => {}, [error, response, loading])

  const onAddNotice = () => {
    props.history.push('/add-notice')
  }

  const deleteRoutes = (announceId) => {
    axios.delete(`${base_url}/secretary/${announceId}`).then(
      (response) => {
        console.log(response)
        toast.success('deleted')
        dispatch(getNotice())
      },
      (error) => {
        console.log(error)
        toast.error('Not deleted')
      }
    )
  }

  return (
    <div>
      <Navbar />
      <h2 className="text-center">Notice Board</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date and Time</th>
            <th>Information Name</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response &&
            response.length > 0 &&
            response.map((noticeList) => {
              return (
                <tr>
                  <td>{noticeList.eventDateTime}</td>
                  <td>{noticeList.eventInformation}</td>
                  <td>{noticeList.eventName}</td>
                  <td>
                    <Button
                      color="danger"
                      onClick={() => {
                        deleteRoutes(noticeList.announceId)
                      }}>
                      Delete
                    </Button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
      <button onClick={onAddNotice} class="btn btn-success">
        Add
      </button>
    </div>
  )
}

export default NoticeList
