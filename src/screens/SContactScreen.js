import React from 'react'

import SecurityNavbar from '../components/SecurityNavbar'

function Contact() {
  return (
    <div>
      <SecurityNavbar />
      <h5 class="caption">Emergency Contact</h5>
      <ul class="list-group">
        <li class="list-group-item">Police : 100</li>
        <li class="list-group-item">Ambulance No: 108</li>
        <li class="list-group-item">Fire brigade: 200</li>
      </ul>
    </div>
  )
}
export default Contact
