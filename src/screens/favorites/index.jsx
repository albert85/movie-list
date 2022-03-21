import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import CustomButton from '../../components/Buttons';
import { PageAppTitle } from '../../components/helper/style';
import AppLayout from '../../components/Layout';
import MovieCard from '../../components/MovieCard';
import { MovieCardListWrapper, MovieInfo, MovieInfoItemWrapper } from './style';
import { queryKeys } from '../../utils/queryKey';
import { GET_FAVORITE_LIST } from '../../utils/apilUrl';
import { deleteRequest, getRequest } from '../../utils/apiCall';
import { toast } from 'react-toastify';
import { SpinnerCircular } from 'spinners-react';

const Favorites = () => {
  const query = useQueryClient();
  const { data, isLoading } = useQuery(queryKeys.getFavoriteList, async () =>
    getRequest({ url: GET_FAVORITE_LIST })
  );

  const mutate = useMutation(deleteRequest, {
    onSuccess(res) {
      toast.success(res.message);
      query.invalidateQueries(queryKeys.getFavoriteList);
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

  const handleRemoveMovie = (movie) => {
    mutate.mutate({
      url: `${GET_FAVORITE_LIST}/${movie.movieId}`,
    });
  };

  return (
    <div>
      <PageAppTitle>FAVORITES</PageAppTitle>
      <MovieCardListWrapper>
        {isLoading && (
          <SpinnerCircular
            style={{ marginInline: 'auto', marginTop: '200px' }}
            size={200}
          />
        )}
        {!isLoading &&
          React.Children.toArray(
            data?.data?.data?.map((movie) => {
              return (
                <MovieCard path={movie?.poster}>
                  <MovieInfo>
                    <RenderMovieInfo title="Title:" value={movie?.title} />
                    <RenderMovieInfo title="Year:" value={movie?.year} />
                    <CustomButton
                      bgColor="red"
                      onClick={
                        mutate.isLoading ? null : () => handleRemoveMovie(movie)
                      }
                      label={  mutate.isLoading ? 'Please wait...' : "Remove from Movie List"}
                    />
                  </MovieInfo>
                </MovieCard>
              );
            })
          )}
        {!data?.data?.data?.length && (
          <div>
            <p style={{ color: 'white' }}>No Movies List Available</p>
          </div>
        )}
      </MovieCardListWrapper>
    </div>
  );
};

const DashbordPage = (props) => {
  return <Favorites {...props} />;
};

export default AppLayout(DashbordPage);
