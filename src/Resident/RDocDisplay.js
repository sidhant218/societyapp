import React from 'react'
import ResidentNavbar from '../components/ResidentNavbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDocumentList } from '../actions/documentActions'

const RDocDisplay = (props) => {
  const dispatch = useDispatch()
  const documentList = useSelector((store) => store.documentList)
  const { error, response, loading } = documentList

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getDocumentList())
  }, [])

  const onUploadDoc = () => {
    props.history.push('/r-upload-doc')
  }

  useEffect(() => {}, [error, response, loading])

  return (
    <div>
      <ResidentNavbar />
      <h2 className="text-center">Document List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Document Name</th>
            <th>Valid Upto</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response &&
            response.length > 0 &&
            response.map((documentList) => {
              return (
                <tr>
                  <td>{documentList.documentName}</td>
                  <td>{documentList.validUpTo}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
      <button onClick={onUploadDoc} className="btn btn-success">
        Upload
      </button>
    </div>
  )
}

export default RDocDisplay
