import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import SigninScreen from './screens/SigninScreen'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import ProtocolsScreen from './screens/ProtocolsScreen'
import DashboardScreen from './screens/DashboardScreen'
import ContactScreen from './screens/ContactScreen'
import RDashboardScreen from './screens/RDashboardScreen'
import ResidentProtocolsScreen from './screens/ResidentProtocolsScreen'
import RContactScreen from './screens/RContactScreen'
import SDashboardScreen from './screens/SDashboardScreen'
import SecurityProtocolsScreen from './screens/SecurityProtocolsScreen'
import SContactScreen from './screens/SContactScreen'
import SocietyInfoScreen from './screens/SocietyInfoScreen'
import addResidentScreen from './screens/addResidentScreen'
import AddSecurityScreen from './screens/addSecurityScreen'
import AddNoticeScreen from './screens/addNoticeScreen'
import ReplyComplaintScreen from './screens/replyComplaintScreen'
import SSocietyInfoScreen from './screens/SSocietyInfoScreen'
import RSocietyInfoScreen from './screens/RSocietyInfoScreen'
import Gallery from './screens/Gallery'
import RGallery from './screens/RGallery'
import SGallery from './screens/SGallery'
import AddFlatScreen from './screens/AddFlatScreen'

import ResidentList from './Secretary/ResidentList'
import NoticeList from './Secretary/NoticeList'
import SecurityList from './Secretary/SecurityList'
import VisitorList from './Secretary/VisitorList'
import ComplaintList from './Secretary/ComplaintList'
import EditProfileScreen from './Secretary/editProfileScreen'
import SecretaryHome from './Secretary/SecretaryHome'
import FlatList from './Secretary/FlatList'
import FeedBackList from './Secretary/FeedbackList'
import SecCalender from './Secretary/SecCalender'

import RResidentList from './Resident/RResidentList'
import RSecurityList from './Resident/RSecurityList'
import RNoticeList from './Resident/RNoticeList'
import ResidentHome from './Resident/ResidentHome'
import REditProfileScreen from './Resident/ReditProfileScreen'
import RAddFeedBack from './Resident/RAddFeedBack'
import RComplaintList from './Resident/RComplaintList'
import RDocDisplay from './Resident/RDocDisplay'
import RDocumentUpload from './Resident/RDocumentUpload'
import ResidentCalender from './Resident/ResidentCalender'

import VisitorEnter from './Security/VisitorEnter'
import SVisitorList from './Security/SVisitorList'
import VisitorExit from './Security/VisitorExit'
import VisitorParking from './Security/VisitorParking'
import ResidentParking from './Security/ResidentParking'
import SecurityHome from './Security/SecurityHome'
import SResidentList from './Security/SResidentList'
import SNoticeList from './Security/SNoticeList'
import SEditProfileScreen from './Security/SeditProfileScreen'
import SAddFeedBack from './Security/SAddFeedBack'
import SComplaintList from './Security/SComplaintList'
import SDocDisplay from './Security/SDocDisplay'
import SDocumentUpload from './Security/SDocumentUpload'
import SecurityCalender from './Security/SecurityCalender'


function App() {

  return (
    <div>
      <Router>
        <div className="container">
          <Switch>
            <Route path="/signin" component={SigninScreen} />
            <Route path="/home" exact component={HomeScreen} />
            <Route path="/about" component={AboutScreen} />
            <Route path="/protocols" component={ProtocolsScreen} />
            <Route path="/dashboard" component={DashboardScreen} />
            <Route path="/contact" component={ContactScreen} />
            <Route path="/r-dashboard" component={RDashboardScreen} />
            <Route path="/r-protocols" component={ResidentProtocolsScreen} />
            <Route path="/r-contact" component={RContactScreen} />
            <Route path="/s-dashboard" component={SDashboardScreen} />
            <Route path="/s-protocols" component={SecurityProtocolsScreen} />
            <Route path="/s-contact" component={SContactScreen} />
            <Route path="/society-info" component={SocietyInfoScreen} />
            <Route path="/add-resident" component={addResidentScreen} />
            <Route path="/add-security" component={AddSecurityScreen} />
            <Route path="/add-notice" component={AddNoticeScreen} />
            <Route path="/reply-complaint" component={ReplyComplaintScreen} />
            <Route path="/s-society-info" component={SSocietyInfoScreen} />
            <Route path="/r-society-info" component={RSocietyInfoScreen} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/r-gallery" component={RGallery} />
            <Route path="/s-gallery" component={SGallery} />
            <Route path="/add-flat" component={AddFlatScreen} />


            <Route path="/resident-list" component={ResidentList} />
            <Route path="/notice-list" component={NoticeList} />
            <Route path="/security-list" component={SecurityList} />
            <Route path="/view-visitors" component={VisitorList} />
            <Route path="/complaint" component={ComplaintList} />
            <Route path="/edit-profile" component={EditProfileScreen} />
            <Route path="/secretary" component={SecretaryHome} />
            <Route path="/flat-list" component={FlatList} />
            <Route path="/feedback" component={FeedBackList} />
            <Route path="/sec-calender" component={SecCalender} />


            <Route path="/r-resident-list" component={RResidentList} />
            <Route path="/r-security-list" component={RSecurityList} />
            <Route path="/r-notice-list" component={RNoticeList} />
            <Route path="/resident" component={ResidentHome} />
            <Route path="/r-edit" component={REditProfileScreen} />
            <Route path="/r-feedback" component={RAddFeedBack} />
            <Route path="/r-complaint" component={RComplaintList} />
            <Route path="/r-doc" component={RDocDisplay} />
            <Route path="/r-upload-doc" component={RDocumentUpload} />
            <Route path="/resident-calender" component={ResidentCalender} />


            <Route path="/s-visEntry" component={VisitorEnter} />
            <Route path="/security" component={SecurityHome} />
            <Route path="/s-resident-list" component={SResidentList} />
            <Route path="/s-notice-list" component={SNoticeList} />
            <Route path="/s-edit" component={SEditProfileScreen} />
            <Route path="/s-visExit" component={VisitorExit} />
            <Route path="/s-visPark" component={VisitorParking} />
            <Route path="/s-resPark" component={ResidentParking} />
            <Route path="/s-view-visitors" exact component={SVisitorList} />
            <Route path="/s-feedback" component={SAddFeedBack} />
            <Route path="/s-complaint" component={SComplaintList} />
            <Route path="/s-doc" component={SDocDisplay} />
            <Route path="/s-upload-doc" component={SDocumentUpload} />
            <Route path="/security-calender" component={SecurityCalender} />
            
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App