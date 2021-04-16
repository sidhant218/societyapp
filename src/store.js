import { createStore, combineReducers, applyMiddleware } from 'redux'
import { userSigninReducer } from './reducers/userReducers'
import {
  addResidentReducer,
  fetchResidentReducer,
} from './reducers/residentReducers'

import {
  addSecurityReducer,
  fetchSecurityReducer,
} from './reducers/securityReducers'

import { addNoticeReducer, fetchNoticeReducer } from './reducers/noticeReducers'
import {
  addVisitorReducer,
  fetchVisitorReducer,
  updateVisitorReducer,
} from './reducers/visitorReducers'

import {
  addComplaintReducer,
  fetchComplaintReducer,
  replyComplaintReducer,
} from './reducers/complaintReducers'

import {
  fetchResidentCountReducer,
  fetchSecurityCountReducer,
  fetchVisitorsCountReducer,
  fetchWingsCountReducer,
} from './reducers/dashboardReducers'

import {
  editProfileReducer,
} from './reducers/ProfileReducers'

import {
  visitorEnterReducer,
  visitorExitReducer,
  visitorParkingReducer,
  residentParkingReducer,
} from './reducers/VisAndResiReducers'

import { addFeedback, getFeedback } from './reducers/FeedbackReducers'

import { addFlat, flatList, flatDelete } from './reducers/FlatReducers'

import {
  addSocietyReducer,
  fetchSocietyReducer,
} from './reducers/SocietyReducers'

import {
  fetchDocumentReducer,
  uploadDocumentReducer,
  downloadDocumentReducer,
} from './reducers/documentReducers'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// selfName : Reducers (combined reducers)
const reducers = combineReducers({
  userSignin: userSigninReducer,
  addResidentData: addResidentReducer,
  residentList: fetchResidentReducer,
  securityList: fetchSecurityReducer,
  addSecurityData: addSecurityReducer,
  addNoticeData: addNoticeReducer,
  noticeList: fetchNoticeReducer,
  addVisitorData: addVisitorReducer,
  updateVisitorList: updateVisitorReducer,
  getVisitorList: fetchVisitorReducer,

  complaintList: fetchComplaintReducer,
  addComplaintPage: addComplaintReducer,

  replyComplaintData: replyComplaintReducer,
  getSecCount: fetchSecurityCountReducer,
  getResiCount: fetchResidentCountReducer,
  getVisCount: fetchVisitorsCountReducer,
  getWingCount: fetchWingsCountReducer,
  editProfilePage: editProfileReducer,
  reditProfilePage: editProfileReducer,
  seditProfilePage: editProfileReducer,

  visEnter: visitorEnterReducer,
  visExit: visitorExitReducer,
  parkVis: visitorParkingReducer,
  parkRes: residentParkingReducer,
  feedAdd: addFeedback,
  feedbacklist: getFeedback,
  flatAddInSec: addFlat,
  listFlat: flatList,
  deleteFlat: flatDelete,
  addSocietyData: addSocietyReducer,
  getSocietyData: fetchSocietyReducer,

  documentList: fetchDocumentReducer,
  uploadDocumentFile: uploadDocumentReducer,
  downloadDocument: downloadDocumentReducer,
})

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store
