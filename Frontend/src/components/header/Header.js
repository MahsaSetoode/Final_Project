import "./Header.css";
const Header = (props) => {
  return <div>
    <h2 className="header">Task Managment {">"} {props.title}</h2>
  </div>;
};

export default Header;
