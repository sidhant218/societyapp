import React from 'react'
import SecurityNavbar from '../components/SecurityNavbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getResidentCount } from '../actions/dashboardActions'
import { getSecurityCount } from '../actions/dashboardActions'
import { getVisitorsCount } from '../actions/dashboardActions'
import { getWingsCount } from '../actions/dashboardActions'

const SCard = (props) => {
  const dispatch = useDispatch()

  const getSecCount = useSelector((store) => store.getSecCount)
  const getResiCount = useSelector((store) => store.getResiCount)
  const getVisCount = useSelector((store) => store.getVisCount)
  const getWingCount = useSelector((store) => store.getWingCount)

  const { error, response, loading } = getSecCount
  const { err, resp, load } = getResiCount
  const { err2, resp2, load2 } = getVisCount
  const { err3, resp3, load3 } = getWingCount

  useEffect(() => {
    dispatch(getSecurityCount()) // from actions
  }, [])

  useEffect(() => {
    dispatch(getResidentCount()) // from actions
  }, [])

  useEffect(() => {
    dispatch(getVisitorsCount()) // from actions
  }, [])

  useEffect(() => {
    dispatch(getWingsCount()) // from actions
  }, [])

  useEffect(() => {}, [error, response, loading])
  useEffect(() => {}, [err, resp, load])
  useEffect(() => {}, [err2, resp2, load2])
  useEffect(() => {}, [err3, resp3, load3])
  return (
    <div>
      <SecurityNavbar />
      <form>
        <table>
          <tr>
            <td>
              <div class="card text-white bg-primary mb-3">
                <div class="card-header">Number of Wings</div>
                <div class="card-body">
                  <p class="card-text">{getWingCount.response}</p>
                </div>
              </div>
            </td>
            <td>
              <div class="card text-white bg-primary mb-3">
                <div class="card-header">Number of security assigned</div>
                <div class="card-body">
                  <p class="card-text">{getSecCount.response}</p>
                </div>
              </div>
            </td>
            <td>
              <div class="card text-white bg-primary mb-3">
                <div class="card-header">Number of residents</div>
                <div class="card-body">
                  <p class="card-text">{getResiCount.response}</p>
                </div>
              </div>
            </td>
            <td>
              <div class="card text-white bg-primary mb-3">
                <div class="card-header">Number of visitors</div>
                <div class="card-body">
                  <p class="card-text">{getVisCount.response}</p>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </form>
    </div>
  )
}

export default SCard
