import "./Login.css";
import {Link} from 'react-router-dom';

function Login() {

  return (
    <div>
      <h1>Who Are You?</h1>
      <div className="btns">
        <Link to={`/admin/home`} className="btn">Admin</Link>
        <Link to={`/user/home`} className="btn">User</Link>
      </div>
    </div>
  );
}

export default Login;
