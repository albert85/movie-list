import styled from 'styled-components';

export const PosterWrapper = styled.div`
  background-image: url(${({ path }) => path});
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
`;

export const MovieWrapper = styled.div`
  width: 250px;
  height: 350px;
  background: rgba(32, 40, 62, 0.8);
  backdrop-filter: blur(80px);
  border-radius: 12px;
  box-shadow: none;
  padding: 5px;
`;

export const MovieInfo = styled.div`
padding: 10px;
`;


export const CardWrapper = styled.div`
  flex: 0 1 25%;
  margin-bottom: 12px;
  .movie-class:hover {
    box-shadow: 1px 2px 6px #e1dbdb;
  }
`;