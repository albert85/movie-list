import React from 'react';
import { toast } from 'react-toastify';
import { useQuery, useMutation } from 'react-query';
import CustomButton from '../../components/Buttons';
import { PageAppTitle } from '../../components/helper/style';
import AppLayout from '../../components/Layout';
import MovieCard from '../../components/MovieCard';
import { MovieCardListWrapper, MovieInfo, MovieInfoItemWrapper } from './style';
import { queryKeys } from '../../utils/queryKey';
import { GET_FAVORITE_LIST, GET_MOVIE_LIST } from '../../utils/apilUrl';
import { SpinnerCircular } from 'spinners-react';
import { postRequest } from '../../utils/apiCall';

const Dashboard = () => {
  const { data, isLoading } = useQuery(queryKeys.getMovieList, async () => {
    const res = await fetch(GET_MOVIE_LIST);
    return res.json();
  });

  const mutate = useMutation(postRequest, {
    onSuccess(res) {
      toast.success(res.message);
    },
    onError(err) {
      toast.error(err?.response?.data?.message);
    },
  });

  const RenderMovieInfo = ({ title, value }) => {
    return (
      <MovieInfoItemWrapper>
        <p>{title}</p>
        <p>{value}</p>
      </MovieInfoItemWrapper>
    );
  };

  const handleAddMovie = (movie) => {
    mutate.mutate({
      url: GET_FAVORITE_LIST,
      data: {
        title: movie.Title,
        year: movie.Year,
        movieId: movie.imdbID,
        type: movie.Type,
        poster: movie.Poster,
      },
    });
  };

  return (
    <div>
      <PageAppTitle>MOVIES</PageAppTitle>
      <MovieCardListWrapper>
        {isLoading && (
          <SpinnerCircular
            style={{ marginInline: 'auto', marginTop: '200px' }}
            size={200}
          />
        )}
        {!isLoading &&
          React.Children.toArray(
            data?.Search?.map((movie) => {
              return (
                <MovieCard path={movie?.Poster}>
                  <MovieInfo>
                    <RenderMovieInfo title="Title:" value={movie?.Title} />
                    <RenderMovieInfo title="Year:" value={movie?.Year} />
                    <CustomButton
                      onClick={mutate.isLoading ? null : () => handleAddMovie(movie)}
                      label={mutate.isLoading ? "Please wait..." : "Add to Movie List"}
                    />
                  </MovieInfo>
                </MovieCard>
              );
            })
          )}
        {!isLoading && !data?.Search.length && (
          <div>
            <p>No Movies Available</p>
          </div>
        )}
      </MovieCardListWrapper>
    </div>
  );
};

const DashbordPage = (props) => {
  return <Dashboard {...props} />;
};

export default AppLayout(DashbordPage);
