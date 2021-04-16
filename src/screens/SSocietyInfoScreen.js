import React from 'react'
import SecurityNavbar from '../components/SecurityNavbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSociety } from '../actions/SocietyActions'

const SSocietyinfoScreen = (props) => {
  const dispatch = useDispatch()
  const getSocietyData = useSelector((store) => store.getSocietyData)
  const { error, response, loading } = getSocietyData

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getSociety())
  }, [])

  useEffect(() => {}, [error, response, loading])

  return (
    <div>
      <SecurityNavbar />
      <h2 className="text-center">Society Information</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Society Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Pin Code</th>
            <th>No of Wings</th>
            <th>Inaugration Date</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response &&
            response.length > 0 &&
            response.map((getSocietyData) => {
              return (
                <tr>
                  <td>{getSocietyData.societyName}</td>
                  <td>{getSocietyData.address}</td>
                  <td>{getSocietyData.city}</td>
                  <td>{getSocietyData.pinCode}</td>
                  <td>{getSocietyData.noOfWings}</td>
                  <td>{getSocietyData.societyCreateDate}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default SSocietyinfoScreen
