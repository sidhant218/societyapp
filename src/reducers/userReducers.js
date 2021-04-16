import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from '../constants/userConstants'

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true }
    case USER_SIGNIN_SUCCESS:
      return {
        loading: false,
        response: action.payload,
        dateOfBirth: action.payload.dateOfBirth,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        mobileNo: action.payload.mobileNo,
        noOfFamilyMembers: action.payload.noOfFamilyMembers,
        parkingStatus: action.payload.parkingStatus,
        role: action.payload.role,
        userId: action.payload.userId,
        vehicleNo: action.payload.vehicleNo,
        vehicleType: action.payload.vehicleType,
        wingName: action.payload.wingName,

        islogin: true,
      }
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_SIGNOUT:
      return {}
    default:
      return state
  }
}
