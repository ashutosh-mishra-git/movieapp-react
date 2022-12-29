import React from 'react'

function Moviecard(props) {
  
   const {Title,Year,Type,Poster,imdbID} = props.movie;
   console.log(Poster);
  return (
    <div className='movie' key={imdbID}>
        <div>
        <p>{Year}</p>
      </div>
        <div>
        <img src={Poster} alt={Title} />
        </div>
        

        <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  )
}

export default Moviecard
