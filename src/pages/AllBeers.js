import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";





function AllBeers(props) {
 // const API = "https://ih-beers-api2.herokuapp.com/beers";
  const [beers, setBeers] = useState ([]);
  

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((result) => {
        setBeers(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

    return (
      <div >
        <h1>All Beers</h1>
        {beers.map(beer=>{
          console.log(beer)
          return(
            <div>
            <Link to={'/single-beer'}>
            <img src={beer.image_url}></img>
            <p>{beer.name}</p>
            <p>{beer.tagline}</p>
            <p>Created by: {beer.contributed_by}</p>
            </Link>   
            </div>
          )
        })}
      </div>
    );
  }
   
  export default AllBeers;

  