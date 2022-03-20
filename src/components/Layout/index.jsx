import React from 'react'
import SideBarNav from '../Sidebar';
import { LayoutContent, LayoutWrapper, } from './style';
import { Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';

const AppLayout = (Component) => (props) => {

  const token = localStorage.getItem('@userToken');
    let details = {};

    try {
      details = token !== null ? jwtDecode(token) : null;

      if (!details) {
        return <Navigate to="/" />;
      }
      if (Date.now() >= details.exp * 1000) {
        localStorage.removeItem('@userToken');
        toast.warning('Signin session expired');
        return <Navigate to="/" />;
      }
    } catch (error) {
      localStorage.removeItem('@userToken');
      return <Navigate to="/" />;
    }

  return (
    <LayoutWrapper>
      <SideBarNav />
      <LayoutContent>
        <Component {...props} />
      </LayoutContent>
    </LayoutWrapper>
  )
}

export default AppLayout;