import React from 'react';
import { useQuery } from 'react-query';
import CustomButton from '../../components/Buttons';
import { PageAppTitle } from '../../components/helper/style';
import AppLayout from '../../components/Layout';
import MovieCard from '../../components/MovieCard';
import { MovieCardListWrapper, MovieInfo, MovieInfoItemWrapper } from './style';
import { queryKeys } from '../../utils/queryKey';
import { GET_FAVORITE_LIST } from '../../utils/apilUrl';
import { getRequest } from '../../utils/apiCall';

const Favorites = () => {
  const { data } = useQuery(queryKeys.getFavoriteList, async () => getRequest({ url: GET_FAVORITE_LIST }));

  const RenderMovieInfo = ({ title, value }) => {
    return (
      <MovieInfoItemWrapper>
        <p>{title}</p>
        <p>{value}</p>
      </MovieInfoItemWrapper>
    );
  };
  return (
    <div>
      <PageAppTitle>FAVORITES</PageAppTitle>
      <MovieCardListWrapper>
      {data?.Search?.map((movie) => {
        return (
            <MovieCard path={movie?.Poster}>
              <MovieInfo>
                <RenderMovieInfo title="Title:" value={movie?.Title} />
                <RenderMovieInfo title="Year:" value={movie?.Year} />
                <CustomButton label="Add to Movie List" />
              </MovieInfo>
            </MovieCard>
        );
      })}
      </MovieCardListWrapper>
    </div>
  );
};

const DashbordPage = (props) => {
  return <Favorites {...props} />;
};

export default AppLayout(DashbordPage);
