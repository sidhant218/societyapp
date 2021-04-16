import React, { Component } from 'react'
import ApiService from '../service/APIService'

class ListUserComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      message: null,
    }

    this.reloadUserList = this.reloadUserList.bind(this)
  }

  componentDidMount() {
    this.reloadUserList()
  }

  reloadUserList() {
    ApiService.fetchUsers().then((res) => {
      this.setState({ users: res.data.result })
      console.log(this.state.users)
    })
    // UserService.getUsers().then(resp => {
    //     this.setState({ users: resp.data });
    //     console.log(this.state.users);
    // })
  }

  render() {
    return (
      <div>
        <h2 className="text-center">User Details</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>mobileNo</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((users) => (
              <tr>
                <td>{users.firstName}</td>
                <td>{users.lastName}</td>
                <td>{users.email}</td>
                <td>{users.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ListUserComponent
