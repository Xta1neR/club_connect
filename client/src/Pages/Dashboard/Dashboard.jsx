import React from 'react';
import './Dashboard.css';
import Footer from '../../component/Footer/footer';
import { useNavigate } from 'react-router-dom';


function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
    <section classNameName='Dashboard'>
  <div className="das-w">
    <nav>
      <ul>
        <li><a href="#" className="logo">
          <img src="/logo.jpg" alt=""/>
          <span className="nav-item">Dashboard</span>
        </a></li>
        <li><a href="#">
          <i className="fas fa-home"></i>
          <span className="nav-item">Home</span>
        </a></li>
        <li><a href="">
          <i className="fas fa-user"></i>
          <span className="nav-item">Profile</span>
        </a></li>
        <li><a href="">
          <i className="fas fa-wallet"></i>
          <span className="nav-item">Announcements</span>
        </a></li>
        <li><a href="">
          <i className="fas fa-chart-bar"></i>
          <span className="nav-item">Logout</span>
        </a></li>
                
      </ul>
    </nav>


    


  </div>
</section>

<Footer/>
    </>
  )
}

export default Dashboard
