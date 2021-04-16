import { useState, useEffect } from 'react'
import Header from '../components/Header'
import { signin } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const SigninScreen = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userSignin = useSelector((store) => store.userSignin)
  const { loading, error, response, role, userId } = userSignin

  const dispatch = useDispatch()
  // const onSignin = () => {
  //   dispatch(signin(email, password))
  // }

  function onSignin(userId) {
    console.log(userId)
    // sessionStorage.setItem('userId', userId)
    dispatch(signin(email, password))
    console.log(userId)
  }

  useEffect(() => {
    sessionStorage.setItem('userId', userId)
    if (role === 'RESIDENT') {
      sessionStorage.setItem('token', role)
      props.history.push('/resident')
    } else if (role === 'SECRETARY') {
      sessionStorage.setItem('token', role)
      props.history.push('/secretary')
    } else if (role === 'SECURITY') {
      sessionStorage.setItem('token', role)
      props.history.push('/security')
    } else if (response && response.status === 'error') {
      alert(response.error)
    } else if (error) {
      alert("please enter Valid credentails !!")
    }
  }, [loading, error, response, role, userId])

  return (
    <div>
      <Header title="Signin" />
      <div className="form">
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
            className="form-control"
            placeholder="*****"></input>
        </div>
        <div className="mb-3">
          <button
            onClick={() => onSignin(userSignin.userId)}
            class="btn btn-success">
            Signin
          </button>
        </div>
      </div>
      {loading && <div>waiting for response</div>}
    </div>
  )
}

export default SigninScreen
