import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

export default Home;
