import { Link } from "react-router-dom";

function HomePage() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to={'/beers'}>All Beers</Link>
        <br/>
        <Link to={'/randomBeer'}>Get a random Beer</Link>
        <br/>
        <Link to={'/new-beer'}>Add a New Beer</Link>
      </div>
    );
  }
   
  export default HomePage;