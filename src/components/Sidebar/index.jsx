import React from 'react'
import { LayoutSideNav, MenuTitle } from '../Layout/style'
import { MenuContainer } from '../Layout/style';
import {ReactComponent as HomeIcon} from '../../assets/home_icon.svg';
import {ReactComponent as FavoriteIcon} from '../../assets/favorites.svg';
import { useLocation } from 'react-router-dom';

const SideBarNav = () => {
  const {pathname} = useLocation();
  return (
    <LayoutSideNav>
       <MenuContainer active = {pathname.includes('/dashboard') ? 'true': 'false'}>
          <HomeIcon fill='#6491ec' />
          <MenuTitle color="white">Dashboard</MenuTitle>
        </MenuContainer>
        <MenuContainer active = {pathname.includes('/favorites') ? 'true': 'false'}>
          <FavoriteIcon fill= {pathname.includes('/favorites') ? '#FFAD49' : 'transparent' } />
          <MenuTitle color="white">Favourites</MenuTitle>
        </MenuContainer>
    </LayoutSideNav>
  )
}

export default SideBarNav