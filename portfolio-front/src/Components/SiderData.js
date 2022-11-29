import React from 'react';
import { FaHome, FaCartPlus, FaEnvelopeOpenText } from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaHome />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '/Projects',
    icon: <FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/Contact',
    icon: <FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
];