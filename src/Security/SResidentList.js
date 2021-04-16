import React from 'react'
import SecurityNavbar from '../components/SecurityNavbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getResident } from '../actions/residentActions'

const SResidentList = (props) => {
  const dispatch = useDispatch()
  const residentList = useSelector((store) => store.residentList)
  const { error, response, loading } = residentList

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getResident())
  }, [])

  useEffect(() => {}, [error, response, loading])

  return (
    <div>
      <SecurityNavbar />
      <h2 className="text-center">Resident List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Wing Name</th>
            <th>FirstName</th>
            <th>Last Name</th>
            <th>Mobile no</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response &&
            response.length > 0 &&
            response.map((residentList) => {
              return (
                <tr>
                  <td>{residentList.wingName}</td>
                  <td>{residentList.firstName}</td>
                  <td>{residentList.lastName}</td>
                  <td>{residentList.mobileNo}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default SResidentList
