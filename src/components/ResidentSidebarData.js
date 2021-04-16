import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const ResidentSidebarData = [
  {
    title: 'Dasboard',
    path: '/r-dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Protocols',
    path: '/r-protocols',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: 'Society Information',
    path: '/r-society-info',
    icon: <FaIcons.FaHome />,
    cName: 'nav-text',
  },
  {
    title: 'Resident List',
    path: '/r-resident-list',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
  },
  {
    title: 'Notice Board',
    path: '/r-notice-list',
    icon: <IoIcons.IoMdList />,
    cName: 'nav-text',
  },
  {
    title: 'Query and Complaint ',
    path: '/r-complaint',
    icon: <IoIcons.IoIosCard />,
    cName: 'nav-text',
  },

  {
    title: 'Documents Upload',
    path: '/r-doc',
    icon: <IoIcons.IoMdFlask />,
    cName: 'nav-text',
  },
  {
    title: 'Gallery',
    path: '/r-gallery',
    icon: <IoIcons.IoMdPhotos />,
    cName: 'nav-text',
  },
  {
    title: 'Calender',
    path: '/resident-calender',
    icon: <IoIcons.IoMdCalendar />,
    cName: 'nav-text',
  },
  {
    title: 'Emergency Contact',
    path: '/r-contact',
    icon: <IoIcons.IoMdMedical />,
    cName: 'nav-text',
  },
  {
    title: 'Edit Profile',
    path: '/r-edit',
    icon: <IoIcons.IoMdPerson />,
    cName: 'nav-text',
  },
  {
    title: 'Feedback',
    path: '/r-feedback',
    icon: <IoIcons.IoMdBookmarks />,
    cName: 'nav-text',
  },
  // {
  //   title: 'Mail to Secretary',
  //   path: '/r-mail',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text',
  // },
]
