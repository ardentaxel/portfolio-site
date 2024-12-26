import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './root.css';
import { Outlet } from 'react-router';

const root = () => {
  return (
    <>
        <div className='root-container'>
            <Navbar className='root-navbar'/>
            <div className="root-body">
                <Sidebar className='root-sidebar'/>
                <div className="root-content">
                    <Outlet/>
                </div>
            </div>
        </div>
    </>
  )
}

export default root
