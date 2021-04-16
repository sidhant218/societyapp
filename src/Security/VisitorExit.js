import Header from '../components/Header'
import { useState, useEffect } from 'react'
import { visitorExit } from '../actions/VisAndResActions'
import { useDispatch, useSelector } from 'react-redux'
import SecurityNavbar from '../components/SecurityNavbar'

const VisitorExit = (props) => {
  const [exitDateTime, setExitDateTime] = useState('')
  const [aadharNo, setAadharNo] = useState('')

  const dispatch = useDispatch()

  const visExit = useSelector((store) => store.visExit)
  const { loading, response, error } = visExit

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
    dispatch(visitorExit(exitDateTime, aadharNo))
    props.history.push('/s-view-visitors')
  }

  return (
    <div>
      <SecurityNavbar />
      <Header title="Visitors Exit" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Enter visitors Exit Date&Time. :</label>
          <input
            onChange={(e) => {
              setExitDateTime(e.target.value)
            }}
            className="form-control"></input>
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
          <button onClick={entryV} className="btn btn-success">
            Exit The Visitor
          </button>
        </div>
      </div>
    </div>
  )
}
export default VisitorExit
