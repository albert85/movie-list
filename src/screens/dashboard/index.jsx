import React from 'react';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import CustomButton from '../../components/Buttons';
import { PageAppTitle } from '../../components/helper/style';
import AppLayout from '../../components/Layout';
import MovieCard from '../../components/MovieCard';
import { MovieCardListWrapper, MovieInfo, MovieInfoItemWrapper } from './style';
import { queryKeys } from '../../utils/queryKey';
import { GET_MOVIE_LIST } from '../../utils/apilUrl';
import { SpinnerCircular } from 'spinners-react';

const Dashboard = () => {
  const { data, isLoading } = useQuery(queryKeys.getMovieList, async () => {
    const res = await fetch(GET_MOVIE_LIST);
    return res.json();
  });

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
      <PageAppTitle>MOVIES</PageAppTitle>
      <MovieCardListWrapper>
       {isLoading && ( <SpinnerCircular style={{ marginInline: 'auto', marginTop:'200px'}} size={200} />)}
      {!isLoading && data?.Search?.map((movie) => {
        return (
            <MovieCard path={movie?.Poster}>
              <MovieInfo>
                <RenderMovieInfo title="Title:" value={movie?.Title} />
                <RenderMovieInfo title="Year:" value={movie?.Year} />
                <CustomButton onClick={()=> {
                  toast.success('Successfully')
                }} label="Add to Movie List" />
              </MovieInfo>
            </MovieCard>
        );
      })}
      </MovieCardListWrapper>
    </div>
  );
};

const DashbordPage = (props) => {
  return <Dashboard {...props} />;
};

export default AppLayout(DashbordPage);
