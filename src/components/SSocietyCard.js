import React from 'react'
import SecurityNavbar from './SecurityNavbar'

function SSocietyCard() {
  return (
    <div>
      <SecurityNavbar />
      <form>
        <table>
          <tr>
            <td>
              <div class="card-info text-white bg-primary mb-3">
                <div class="card-header">Society Information</div>
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </form>
    </div>
  )
}

export default SSocietyCard
