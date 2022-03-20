import React from 'react'
import { LayoutContent, LayoutSideNav, LayoutWrapper, MenuContainer, MenuTitle } from './style';
import {ReactComponent as HomeIcon} from '../../assets/home_icon.svg';
import {ReactComponent as FavoriteIcon} from '../../assets/favorites.svg';

const AppLayout = (Component) => (props) => {
  return (
    <LayoutWrapper>
      <LayoutSideNav>
        <MenuContainer>
          <HomeIcon fill='#6491ec' />
          <MenuTitle color="white">Dashboard</MenuTitle>
        </MenuContainer>
        <MenuContainer>
          <FavoriteIcon  />
          <MenuTitle color="white">Favourites</MenuTitle>
        </MenuContainer>
      </LayoutSideNav>
      <LayoutContent>
        <Component {...props} />
      </LayoutContent>
    </LayoutWrapper>
  )
}

export default AppLayout;