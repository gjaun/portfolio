import { Link } from 'react-router-dom';

function Layout(props) {
  return (
    <div>
      <h4>Layout Page</h4>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Layout;
