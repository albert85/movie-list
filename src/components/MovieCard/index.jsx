import React from 'react'
import { CardWrapper, MovieWrapper, PosterWrapper } from './style'

const MovieCard = ({ children, path = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea196117-0b64-49b7-b13f-79f43cf77e53/dds8g3c-f551804e-fa8f-4811-9560-a5049e3f1068.png/v1/fill/w_757,h_1055,strp/black_widow__3___movie____png_by_captain_kingsman16_dds8g3c-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA3NDQiLCJwYXRoIjoiXC9mXC9lYTE5NjExNy0wYjY0LTQ5YjctYjEzZi03OWY0M2NmNzdlNTNcL2RkczhnM2MtZjU1MTgwNGUtZmE4Zi00ODExLTk1NjAtYTUwNDllM2YxMDY4LnBuZyIsIndpZHRoIjoiPD03NzA4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.dFPqK_XCVJ-UVSoAaDbYngzOZ3qVKTDqINODQdNUybg' }) => {
  return (
    <CardWrapper>
    <MovieWrapper className="movie-class">
      <PosterWrapper path={path} />
      {children}
      </MovieWrapper>
    </CardWrapper>
  )
}

export default MovieCard