import styled from 'styled-components';

export const MovieInfo = styled.div`
padding: 10px;
margin-top: 20px;
`;

export const MovieInfoItemWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;

  p:nth-of-type(2) {
    padding-left: 10px;
  }

  p {
    color: white;
    margin: 0;
  }
`;

export const MovieCardListWrapper = styled.div`
display: flex;
flex-wrap: wrap;
`;
