import React from 'react'

export default function MovieCard({ movie: { imdbID, Year, Poster, Title, Type } }) {

  return (
    
    <div className='movie'>
        <div>{Year}</div>

        <div>
            <img src={Poster=='N/A'?"https://via.placeholder.com/400":Poster} alt="poster" />
        </div>

        <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>

    </div>
  )
}
