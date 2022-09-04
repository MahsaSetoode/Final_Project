// import Router from "../../router/Router";
import {
  BrowserRouter as ReactRouter,
  Routes,
  Route,
}from "react-router-dom";
import Home from "../../pages/Home/Home";
import Edit from "../../pages/Edit/Edit";
import Login from "../../pages/Login/Login";

function App() {
  return (
    <>
      {/* <Router/> */}
      <ReactRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path=":user/home" element={<Home/>} />
          <Route path="/edit/:taskId" element={<Edit/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </ReactRouter>
    </>
  );
}

export default App;
