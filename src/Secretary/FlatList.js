import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFlats } from '../actions/FlatRelatedActions'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Button } from 'reactstrap'
import base_url from '../service/API'

const FlatList = (props) => {
    const dispatch = useDispatch()
    const listFlat = useSelector((store) => store.listFlat)
    const { error, response, loading } = listFlat

    useEffect(() => {
        dispatch(getFlats())
    }, [])

    useEffect(() => {}, [error, response, loading])

    const onAddFlat = () => {
        props.history.push('/add-flat')
    }

    const deleteFlat = (flatId) => {
      axios.delete(`${base_url}/secretary/deleteflat/${flatId}`).then(
        (response) => {
          console.log(response)
          toast.success('deleted')
          dispatch(getFlats())
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
          <h2 className="text-center">Flats List</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Status</th>
                <th>Flat Type</th>
                <th>Floor No</th>
                <th>Flat no</th>
              </tr>
            </thead>
            <tbody>
              {response &&
                response &&
                response.length > 0 &&
                response.map((flatList) => {
                  return (
                    <tr>
                      <td>{flatList.status}</td>
                      <td>{flatList.flatType}</td>
                      <td>{flatList.floorNo}</td>
                      <td>{flatList.flatNo}</td>
                      <td>
                        <Button
                          color="danger"
                          onClick={() => {
                          deleteFlat(flatList.flatId)
                          }}
                          >
                          Delete Flat
                        </Button>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
          <button onClick={onAddFlat} class="btn btn-success">
            Add Flat
          </button>
        </div>
      )
}
export default FlatList