import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { getVisitor } from '../actions/visitorActions'

const VisitorList = () => {
  const dispatch = useDispatch()
  const getVisitorList = useSelector((store) => store.getVisitorList) //variable from store
  const { error, response, loading } = getVisitorList

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getVisitor()) //Visitor action
  }, [])

  useEffect(() => {}, [error, response, loading])

  return (
    <div>
      <Navbar />
      <Header title="Visitor List" />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>firstName</th>
            <th>lastName</th>
            <th>aadharNo</th>
            <th>wingName</th>
            <th>flatNo</th>
            <th>mobileNo</th>
            <th>entryDateTime</th>
            <th>exitDateTime</th>
            <th>parkingStatus</th>
            <th>Vehicle No.</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response &&
            response.length > 0 &&
            response.map((getVisitorList) => {
              return (
                <tr>
                  <td>{getVisitorList.firstName}</td>
                  <td>{getVisitorList.lastName}</td>
                  <td>{getVisitorList.aadharNo}</td>
                  <td>{getVisitorList.wingName}</td>
                  <td>{getVisitorList.flatNo}</td>
                  <td>{getVisitorList.mobileNo}</td>
                  <td>{getVisitorList.entryDateTime}</td>
                  <td>{getVisitorList.exitDateTime}</td>
                  <td>{getVisitorList.parkingStatus}</td>
                  <td>{getVisitorList.vehicleNo}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default VisitorList
