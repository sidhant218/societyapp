import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { ResidentSidebarData } from './ResidentSidebarData'
import { IconContext } from 'react-icons'

const ResidentNavbar = (props) => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)


  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-md">
            <div>
              {/* <a class="navbar-brand" href="#">Navbar</a> */}
              <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                  <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                  </Link>
                </div>

                <div className="sdf">
                <a href="/home">LogOut</a>
                </div>
                
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                  <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                      <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose />
                      </Link>
                    </li>

                    {ResidentSidebarData.map((item, index) => {
                      return (
                        <li key={index} className={item.cName}>
                          <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </nav>
              </IconContext.Provider>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default ResidentNavbar
