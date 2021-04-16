import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSecurity } from '../actions/securityActions'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Button } from 'reactstrap'
import base_url from '../service/API'

const SecurityList = (props) => {
  const dispatch = useDispatch()
  const securityList = useSelector((store) => store.securityList)
  const { error, response, loading } = securityList

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getSecurity()) // from actions
  }, [])

  useEffect(() => {}, [error, response, loading])

  const onAddSecurity = () => {
    props.history.push('/add-security')
  }

  const deleteRoutes = (securityId) => {
    axios.delete(`${base_url}/secretary/security/${securityId}`).then(
      (response) => {
        console.log(response)
        toast.success('deleted')
        dispatch(getSecurity())
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
                  <td>
                    <Button
                      color="danger"
                      onClick={() => {
                        deleteRoutes(securityList.securityId)
                      }}>
                      Delete
                    </Button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
      <button onClick={onAddSecurity} class="btn btn-success">
        Add
      </button>
    </div>
  )
}

export default SecurityList
