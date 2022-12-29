import {useState,useEffect} from 'react';
import './App.css';
import Moviecard from './Moviecard';
import search from './search.svg'
import axios from 'axios';



const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";



function App() {
const [searchterm,setsearchterm] = useState("");
const [setMovie,setMovieset] = useState([]);



const searchMovie = async(title) =>{
  // const res = await fetch(`${API_URL}&s=${title}`);
  // const data = await res.json();
  const response = await axios.get(`${API_URL}&s=${title}`);
  const data = response.data;
  // console.log(data.Response);
  data.Response!=="False"?setMovieset(data.Search):setMovieset([]);
  console.log(setMovie);
 

}
 
useEffect(()=>{
  searchMovie("Batman")
},[])

 console.log(searchterm);
  return (
    <div className="app">
      <h1>FilmWallah</h1>

<div className="search">
           <input value={searchterm}
           onChange={(e)=>setsearchterm(e.target.value)}
           placeholder="Search Movie"
           />
        
           <img
           src= {search}
           onClick={()=>searchMovie(searchterm)}
           />
           </div>
        { setMovie.length>0?(      
        <div className='display__card'>
           {setMovie.map((movie)=>{
           return <Moviecard movie={movie} />
           })}
        </div>
  ):(
     <div className='empty'>
    <h2>  Movie Not found</h2>
     </div>
  )
}
      

    </div>
  );
}

export default App;
