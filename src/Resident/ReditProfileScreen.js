import { useState, useEffect } from 'react'
import Header from '../components/Header'
import { editProfile } from '../actions/profileActions'
import { useDispatch, useSelector } from 'react-redux'
import ResidentNavbar from '../components/ResidentNavbar'

const REditProfileScreen = (props) => {
  const [password, setPassword] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [wingName, setWingName] = useState('')
  const [noOfFamilyMembers, setNoOfFamilyMembers] = useState('')
  const dispatch = useDispatch()

  const reditProfilePage = useSelector((store) => store.reditProfilePage)
  const { loading, response, error } = reditProfilePage

  // listen on change of the [loading, response, error] values
  // useEffect(() => {
  //   console.log('use effect called: ')
  //   console.log('loading: ', loading)
  //   console.log('response: ', response)
  //   console.log('error: ', error)

  //   if (response && response.status === 'success') {
  //     // user successfully got registered
  //     props.history.push('/signin')
  //   } else if (error) {
  //     // there is an error while making the API call
  //     console.log(error)
  //     alert('error while making API call')
  //   }
  // }, [loading, response, error])

  const onEdit = () => {
    const id = sessionStorage.getItem('userId')
    console.log(id)
    dispatch(editProfile(password, mobileNo, wingName, noOfFamilyMembers, id))
    props.history.push('/r-dashboard')
    sessionStorage.removeItem('userId')
  }

  return (
    <div>
      <ResidentNavbar />
      <Header title="Edit Profile" />
      <div className="form">
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
          <button onClick={onEdit} className="btn btn-success">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default REditProfileScreen
