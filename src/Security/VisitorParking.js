import Header from '../components/Header'
import { useState, useEffect } from 'react'
import { visitorParking } from '../actions/VisAndResActions'
import { useDispatch, useSelector } from 'react-redux'
import SecurityNavbar from '../components/SecurityNavbar'

const VisitorParking = (props) => {
  const [vehicleNo, setVehicleNo] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const [parkingStatus, setParkingStatus] = useState('')
  const [aadharNo, setAadharNo] = useState('')

  const dispatch = useDispatch()

  const parkVis = useSelector((store) => store.parkVis)
  const { loading, response, error } = parkVis

  useEffect(() => {
    console.log('use effect called: ')
    console.log('loading: ', loading)
    console.log('response: ', response)
    console.log('error: ', error)

    if (response && response.status === 'success') {
      props.history.push('/security')
    } else if (error) {
      console.log(error)
      alert('error while making API call')
    }
  }, [loading, response, error])

  const vPark = () => {
    dispatch(visitorParking(vehicleNo, vehicleType, parkingStatus, aadharNo))
    props.history.push('/s-view-visitors')
  }

  return (
    <div>
      <SecurityNavbar />
      <Header title="Visitors Parking" />
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
          <label className="form-label">Enter Visitors Aadhar No.:</label>
          <input
            onChange={(e) => {
              setAadharNo(e.target.value)
            }}
            className="form-control"
            placeholder="enter visitors Aadhar no."></input>
        </div>

        <div className="mb-3">
          <button onClick={vPark} className="btn btn-success">
            Allot Parking to Visitor
          </button>
        </div>
      </div>
    </div>
  )
}
export default VisitorParking
