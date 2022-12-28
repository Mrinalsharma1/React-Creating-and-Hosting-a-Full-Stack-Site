import { Link, useNavigate } from "react-router-dom";
import useUser from './Hooks/Userhooks'
import { getAuth, signOut } from "firebase/auth";
const NavBar = () => {
  const { user } = useUser;
  const navigate = new useNavigate();
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/article">Article</Link>
        </li>
        <li>
          <Link to="/articleobj">Articleobj</Link>
        </li>
      </ul>
      <div className="nav-right">
        {user
          ? <button className="btn btn-success" onClick={() => {
            signOut(getAuth())
          }}>Log Out</button>
          : <button onClick={() => {
            navigate('/login')
          }}>Log In</button>}
      </div>
    </nav>
  );
};
export default NavBar;
