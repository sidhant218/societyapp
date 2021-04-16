import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
  {
    title: 'Dasboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,

    cName: 'nav-text',
  },
  {
    title: 'Protocols',
    path: '/protocols',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: 'Society Information',
    path: '/society-info',
    icon: <FaIcons.FaHome />,
    cName: 'nav-text',
  },
  {
    title: 'Resident List',
    path: '/resident-list',
    icon: <IoIcons.IoIosBookmarks />,
    cName: 'nav-text',
  },
  {
    title: 'Security List',
    path: '/security-list',
    icon: <FaIcons.FaUserSecret />,
    cName: 'nav-text',
  },
  {
    title: 'Notice List',
    path: '/notice-list',
    icon: <IoIcons.IoIosNotifications />,
    cName: 'nav-text',
  },
  {
    title: 'Reply to Query and Complaint ',
    path: '/complaint',
    icon: <IoIcons.IoLogoHackernews />,
    cName: 'nav-text',
  },
  {
    title: 'Flats',
    path: '/flat-list',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },

  {
    title: 'View Documents',
    path: '/support',
    icon: <IoIcons.IoMdBook />,
    cName: 'nav-text',
  },
  {
    title: 'View Feedbacks',
    path: '/feedback',
    icon: <IoIcons.IoIosCheckbox />,
    cName: 'nav-text',
  },
  {
    title: 'View Visitors',
    path: '/view-visitors',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
  },
  {
    title: 'Add to gallery',
    path: '/gallery',
    icon: <IoIcons.IoMdImages />,
    cName: 'nav-text',
  },
  {
    title: 'Calender',
    path: '/sec-calender',
    icon: <IoIcons.IoMdCalendar />,
    cName: 'nav-text',
  },
  {
    title: 'Emergency Contact',
    path: '/contact',
    icon: <IoIcons.IoMdCall />,
    cName: 'nav-text',
  },
  {
    title: 'Edit Profile',
    path: '/edit-profile',
    icon: <IoIcons.IoMdPerson />,
    cName: 'nav-text',
  },
]
