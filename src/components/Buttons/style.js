import styled from 'styled-components';


export const ButtonWrapper = styled.button`
  width: 100%;
  min-height: 40px;
  border-radius: 5px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border: none;
  height: ${({ height }) => height}
`;