import './Styles.css'
import SearchIcon from './search.svg'
import { useEffect,useState } from 'react'
import './MovieCard'
import MovieCard from './MovieCard'

const App = () =>{
    const [movien,setmov] = useState([]);
    const[search,setser] = useState();  
    
    let API_URL = 'http://www.omdbapi.com/?apikey=3d1cb324';
    
  
    const Searchmovies = async(title)=>{
        
        const resp = await fetch(`${API_URL}&s=${title}`)
        const data = await resp.json();
        
        setmov(data.Search)
        
    }
    //useEffect(()=>Searchmovies('Avenger'),[])
    var movie1=[]
    {
       movie1 = {
            "Title": "Samurai Avenger: The Blind Wolf",
            "Year": "2009",
            "imdbID": "tt1243972",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTAwNjc4MTkyNjBeQTJeQWpwZ15BbWU3MDg3NTQyMzI@._V1_SX300.jpg"
        }
    }
  
        
    return(<div className='app'>
        <h1>KinderTalkie</h1>
        <h6>One Stop for All Movies</h6>
       
       
        <div className='search'>
            <input placeholder='Drop Your Watch' value ={search}  onChange={(e)=>{setser(e.target.value)}}></input>
            <img src={SearchIcon} alt='Search' onClick={()=>Searchmovies(search)} ></img>
        </div>

    {
        movien?.length > 0? 
        (
           
        <div className='container'>
            
            {
            movien.map((movie)=>{

                return(<MovieCard movie1={movie} />)
            })
        }
             
         </div>
         
         ):(
         <div><h2></h2></div>)
    }
        
            

        </div>
    )
}
export default App