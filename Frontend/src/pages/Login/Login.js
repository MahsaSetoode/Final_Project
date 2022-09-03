import "./Login.css";
import {Link} from 'react-router-dom';

function Login() {

  return (
    <div>
      <div className="btns">
        <h1 className="qu">Who Are You?</h1>
        <Link to={`/home`} className="btn">Admin</Link>
        <Link to={`/home`} className="btn">User</Link>
      </div>
    </div>
  );
}

export default Login;
