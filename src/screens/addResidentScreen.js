import { useState, useEffect } from 'react'
import Header from '../components/Header'
import { addResident } from '../actions/residentActions'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'

const AddResidentScreen = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [wingName, setWingName] = useState('')
  const [noOfFamilyMembers, setNoOfFamilyMembers] = useState('')
  const dispatch = useDispatch()

  // addResident function in action
  const addResidentData = useSelector((store) => store.addResidentData)
  const { loading, response, error } = addResidentData

  // listen on change of the [loading, response, error] values
  useEffect(() => {
    if (response && response.status === 'success') {
      props.history.push('/resident-list')
    } else if (error) {
      alert('error')
    }
  }, [loading, response, error])

  const onAddResident = () => {
    dispatch(
      addResident(
        // Action
        firstName,
        lastName,
        email,
        password,
        mobileNo,
        dateOfBirth,
        wingName,
        noOfFamilyMembers
      )
    )
    props.history.push('/resident-list')
  }

  const onCancel = () => {
    props.history.push('/resident-list')
  }
  return (
    <div>
      <Navbar />
      <Header title="Add Resident" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            onChange={(e) => {
              setLastName(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
            className="form-control"
            placeholder="test@test.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password"
            className="form-control"
            placeholder="*****"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile No</label>
          <input
            onChange={(e) => {
              setMobileNo(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Date of birth</label>
          <input
            onChange={(e) => {
              setDateOfBirth(e.target.value)
            }}
            className="form-control"
            type="date"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Wing Name</label>
          <input
            onChange={(e) => {
              setWingName(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">No of family</label>
          <input
            onChange={(e) => {
              setNoOfFamilyMembers(e.target.value)
            }}
            className="form-control"
            type="number"></input>
        </div>

        <div className="mb-3">
          <button onClick={onAddResident} className="btn btn-success">
            Add
          </button>
          <button onClick={onCancel} className="btn btn-success float-end">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddResidentScreen
