import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import MyApi from './api';
import MyDashboard from './dashboard';
import MyProduct from './product';
import MyUser from './user';
import MyBook from './book';

function App() {
  return (
    <HashRouter>
      {/* <h1 className='text-danger text-center mt-4'> React & Redux</h1> */}

      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

        <div className="container">
          <a className="navbar-brand me-4"  > React with redux</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/"> DashBoard </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/api"> Manage Api </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/product"> Manage Product </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/user"> Manage User </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/book"> Manage Book </Link>
              </li>
            </ul>  
          </div>
        </div>
      </nav>


      <Routes>
        <Route exact path="/" element={<MyDashboard />} />
        <Route exact path="/product" element={<MyProduct />} />
        <Route exact path="/user" element={<MyUser />} />
        <Route exact path="/book" element={<MyBook />} />
        <Route exact path="/api" element={<MyApi />} />
      </Routes>

    </HashRouter>
  );
}

export default App;
