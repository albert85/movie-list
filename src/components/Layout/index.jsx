import React from 'react'
import SideBarNav from '../Sidebar';
import { LayoutContent, LayoutWrapper, } from './style';

const AppLayout = (Component) => (props) => {
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