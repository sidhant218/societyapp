import React from 'react'
import ResidentNavbar from '../components/ResidentNavbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNotice } from '../actions/noticeActions'

const RNoticeList = (props) => {
  const dispatch = useDispatch()
  const noticeList = useSelector((store) => store.noticeList)
  const { error, response, loading } = noticeList

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getNotice())
  }, [])

  useEffect(() => {}, [error, response, loading])

  return (
    <div>
      <ResidentNavbar />
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
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default RNoticeList
