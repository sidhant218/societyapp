import Header from '../components/Header'
import { useState, useEffect } from 'react'
import { visitorEnter } from '../actions/VisAndResActions'
import { useDispatch, useSelector } from 'react-redux'
import SecurityNavbar from '../components/SecurityNavbar'

const VisitorEnter = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [aadharNo, setAadharNo] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [wingName, setWingName] = useState('')
  const [flatNo, setFlatNo] = useState('')
  const [reason, setReason] = useState('')
  const [entryDateTime, setEntryDateTime] = useState('')
  const dispatch = useDispatch()

  const visEnter = useSelector((store) => store.visEnter)
  const { loading, response, error } = visEnter

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

  const entryV = () => {
    dispatch(
      visitorEnter(
        firstName,
        lastName,
        aadharNo,
        mobileNo,
        wingName,
        flatNo,
        reason,
        entryDateTime
      )
    )
    props.history.push('/s-view-visitors')
  }

  return (
    <div>
      <SecurityNavbar />
      <Header title="Visitors Entry" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">First Name :</label>
          <input
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name :</label>
          <input
            onChange={(e) => {
              setLastName(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">aadharNo :</label>
          <input
            onChange={(e) => {
              setAadharNo(e.target.value)
            }}
            className="form-control"
            placeholder="enter adhar no."
          />
        </div>
        <div className="mb-3">
          <label className="form-label">MobileNo :</label>
          <input
            onChange={(e) => {
              setMobileNo(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Wing Name :</label>
          <input
            onChange={(e) => {
              setWingName(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Flat No.:</label>
          <input
            onChange={(e) => {
              setFlatNo(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Enter His Reason:</label>
          <input
            onChange={(e) => {
              setReason(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Entry Date&Time</label>
          <input
            onChange={(e) => {
              setEntryDateTime(e.target.value)
            }}
            className="form-control"></input>
        </div>

        <div className="mb-3">
          <button onClick={entryV} className="btn btn-success">
            Enter
          </button>
        </div>
      </div>
    </div>
  )
}
export default VisitorEnter
