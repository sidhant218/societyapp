import React from 'react'
import SecurityNavbar from '../components/SecurityNavbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSecurity } from '../actions/securityActions'

const RSecurityList = (props) => {
  const dispatch = useDispatch()
  const securityList = useSelector((store) => store.securityList)
  const { error, response, loading } = securityList

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getSecurity()) // from actions
  }, [])

  useEffect(() => {}, [error, response, loading])

  return (
    <div>
      <SecurityNavbar />
      <h2 className="text-center">Security List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>first Name</th>
            <th>Last Name</th>
            <th>Mobile Number</th>
            <th>Shift</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response &&
            response.length > 0 &&
            response.map((securityList) => {
              return (
                <tr>
                  <td>{securityList.firstName}</td>
                  <td>{securityList.lastName}</td>
                  <td>{securityList.mobileNo}</td>
                  <td>{securityList.shift}</td>
                  <td>{securityList.status}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default RSecurityList
