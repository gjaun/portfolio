import { Link } from 'react-router-dom';
import Logo from '../assets/images/portfolio-logo.png';

function Layout(props) {
  return (
    <div>
      <h4>Layout Page</h4>
      <nav>
        <Link to="/">
          <img src={Logo} alt="portfolio page logo" />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

export default Layout;
