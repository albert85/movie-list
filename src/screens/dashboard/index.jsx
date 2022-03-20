import React from 'react'
import CustomButton from '../../components/Buttons';
import AppLayout from '../../components/Layout'
import MovieCard from '../../components/MovieCard'
import { DashboardWrapper, MovieCardListWrapper, MovieInfo, MovieInfoItemWrapper } from './style';

const Dashboard = () => {
  const RenderMovieInfo = ({ title, value }) => {
    return (
      <MovieInfoItemWrapper>
        <p>{title}</p>
        <p>{value}</p>
      </MovieInfoItemWrapper>
    )
  }
  return (
    <MovieCardListWrapper>
      <MovieCard className="movie-class">
      <MovieInfo>
       <RenderMovieInfo title='title:' value="Oriel" />
       <RenderMovieInfo title='year:' value="1932" />
      <CustomButton label='Add to Movie List' />
      </MovieInfo>
      </MovieCard>
    </MovieCardListWrapper>
  )
}

const DashbordPage = () => {
  return <Dashboard />
}


export default AppLayout(DashbordPage);