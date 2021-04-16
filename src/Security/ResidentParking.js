import Header from '../components/Header'
import { useState, useEffect } from 'react'
import { residentParking } from '../actions/VisAndResActions'
import { useDispatch, useSelector } from 'react-redux'
import SecurityNavbar from '../components/SecurityNavbar'

const ResidentParking = (props) => {
  const [vehicleNo, setVehicleNo] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const [parkingStatus, setParkingStatus] = useState('')
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()

  const parkRes = useSelector((store) => store.parkRes)
  const { loading, response, error } = parkRes

  useEffect(() => {
    console.log('use effect called: ')
    console.log('loading: ', loading)
    console.log('response: ', response)
    console.log('error: ', error)

    if (response && response.status === 'success') {
      props.history.push('/s-dashboard')
      alert('parking alloted API call')
    } else if (error) {
      console.log(error)
      alert('error while making API call')
    }
  }, [loading, response, error])

  const rPark = () => {
    dispatch(residentParking(vehicleNo, vehicleType, parkingStatus, email))
    props.history.push('/s-resident-list')
  }

  return (
    <div>
      <SecurityNavbar />
      <Header title="Residents Parking" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Enter Vehicle No. :</label>
          <input
            onChange={(e) => {
              setVehicleNo(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Enter Vehicle Type :</label>
          <input
            onChange={(e) => {
              setVehicleType(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Enter Parking Status As:</label>
          <input
            onChange={(e) => {
              setParkingStatus(e.target.value)
            }}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Enter Visitors Email.:</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className="form-control"
            placeholder="enter visitors email."></input>
        </div>

        <div className="mb-3">
          <button onClick={rPark} className="btn btn-success">
            Allot Parking to Resident
          </button>
        </div>
      </div>
    </div>
  )
}
export default ResidentParking
