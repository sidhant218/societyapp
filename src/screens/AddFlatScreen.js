import { useState, useEffect } from 'react'
import Header from '../components/Header'
import { addingFlat } from '../actions/FlatRelatedActions'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'

const AddFlatScreen = (props) => {
  const [status, setStatus] = useState('')
  const [flatType, setFlatType] = useState('')
  const [floorNo, setFloorNo] = useState('')
  const [flatNo, setFlatNo] = useState('')
  const dispatch = useDispatch()

  const flatAddInSec = useSelector((store) => store.flatAddInSec)
  const { loading, response, error } = flatAddInSec

  useEffect(() => {
    if (response && response.status === 'success') {
      props.history.push('/add-resident')
    } else if (error) {
      alert('error')
    }
  }, [loading, response, error])

  const onAddFlat = () => {
    dispatch(addingFlat(status, flatType, floorNo, flatNo))
    props.history.push('/flat-list')
  }
  const onCancel = () => {
    props.history.push('/add-resident')
  }

  return (
    <div>
      <Navbar />
      <Header title="Add Flat" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Enter Status</label>
          <input
            onChange={(e) => {
              setStatus(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Enter Flat Type</label>
          <input
            onChange={(e) => {
              setFlatType(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Enter Floor No</label>
          <input
            onChange={(e) => {
              setFloorNo(e.target.value)
            }}
            className="form-control"
            placeholder="Enter Floor No"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Enter Flat No.</label>
          <input
            onChange={(e) => {
              setFlatNo(e.target.value)
            }}
            className="form-control"
            placeholder="enter flat no"></input>
        </div>

        <div className="mb-3">
          <button onClick={onAddFlat} className="btn btn-success">
            Add Flat
          </button>
          <button onClick={onCancel} className="btn btn-success float-end">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
export default AddFlatScreen
