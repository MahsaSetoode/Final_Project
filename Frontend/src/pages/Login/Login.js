import "./Login.css";
import {Link} from 'react-router-dom';

function Login() {

  return (
    <div>
      
      <div className="btns">
        <h1>Who Are You?</h1>
        <Link to={`/admin/home`} className="btn">Admin</Link>
        <Link to={`/user/home`} className="btn">User</Link>
      </div>
    </div>
  );
}

export default Login;
