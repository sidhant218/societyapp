import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getResident } from '../actions/residentActions'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Button } from 'reactstrap'
import base_url from '../service/API'

const ResidentList = (props) => {
  const dispatch = useDispatch()
  const residentList = useSelector((store) => store.residentList)
  const { error, response, loading } = residentList

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getResident())
  }, [])

  useEffect(() => {}, [error, response, loading])

  const onAddResident = () => {
    props.history.push('/add-resident')
  }
  const deleteRoutes = (userId) => {
    axios.delete(`${base_url}/secretary/resident/${userId}`).then(
      (response) => {
        console.log(response)
        toast.success('deleted')
        dispatch(getResident())
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
      <h2 className="text-center">Resident List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Wing Name</th>
            <th>Mobile no</th>
            <th>Email</th>
            <th>Parking Status</th>           
            <th>Vehicle No.</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response &&
            response.length > 0 &&
            response.map((residentList) => {
              return (
                <tr>
                  <td>{residentList.firstName}</td>
                  <td>{residentList.lastName}</td>
                  <td>{residentList.wingName}</td>
                  <td>{residentList.mobileNo}</td>
                  <td>{residentList.email}</td>
                  <td>{residentList.parkingStatus}</td>                 
                  <td>{residentList.vehicleNo}</td>
                  <td>
                    <Button
                      color="danger"
                      onClick={() => {
                        deleteRoutes(residentList.userId)
                      }}>
                      Delete
                    </Button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
      <button onClick={onAddResident} class="btn btn-success">
        Add
      </button>
    </div>
  )
}

export default ResidentList
