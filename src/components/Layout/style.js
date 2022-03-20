
import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: #121829;
`;

export const LayoutSideNav = styled.div`
  width: 20%;
  min-width: 300px;
  height: 100%;
  background-color: #212C4E;
  padding-top: 60px;
  padding-left: 20px;
  `;
  
  export const LayoutContent = styled.div`
  width: 100%;
  min-width: 300px;
  height: 100%;
  padding-left: 30px;
  padding-top: 30px;
  background-color: #121829;
  overflow: scroll;
`;

export const MenuTitle = styled.p`
 padding-left: 20px;
 color: ${({ color }) => color || 'black'}
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    padding-left: 10px;
  }
`;