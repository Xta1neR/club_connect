import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

import Navbar from "../../component/Navbar/Navbar";
import Footer from '../../component/Footer/footer';
import Button from "@mui/material/Button";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import aboutCard1 from "./Assets/aboutCard1.png";
import aboutCard2 from "./Assets/aboutCard2.png";
import aboutCard3 from "./Assets/aboutCard3.png";
import aboutCard4 from "./Assets/aboutCard4.png";
import detailsImg from "./Assets/detailsImg.png";
import contactus from "./Assets/contactus.png";


const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      
      <section className="home" id='home'>   
      <br />
      <br /> 
        <div className="home_container container">
          <div className="home_data">
            <div className="home_title">
             <h1>CLUB CONNECT</h1> 
             <br />
             <h3 className="home_subtitle">
                Lorem ipsum dolor sit amet consectetur. <br />
                Lorem, ipsum dolor.
             </h3>
             <br />
             <button className='Button' onClick={() => navigate("/register")}>Register Now</button>
            </div>
          </div>
        </div>
      </section>


    <section className="section container" id="about">
      <div className="about_container grid">

      <div className="about_cards grid">
          <div className="about_card">
            <img src={aboutCard1} alt="" className="about_img" />
            <h4>Innovation</h4>
          </div>
          <div className="about_card">
            <img src={aboutCard2} alt="" className="about_img" />
            <h4>Excellence</h4>
          </div>
          <div className="about_card">
            <img src={aboutCard3} alt="" className="about_img" />
            <h4>Quality</h4>
          </div>
          <div className="about_card">
            <img src={aboutCard4} alt="" className="about_img" />
            <h4>Integrity</h4>
          </div>
        </div>

        <div className="about_data">
          <span className="section-subtitle">Discover</span>
          <h2 className="home_title">
            About the approach <br />
          </h2>
          <p className="about_description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quaerat dicta provident quod atque sit reprehenderit ut quis inventore vero perferendis pariatur nemo blanditiis, ratione temporibus doloribus consectetur ullam! Asperiores rerum.
          </p>
        </div>

      </div>
    </section>

    <section className="images">
      <br />
      <br />
      <h1 className="hover-card-heading">Glimse into the events</h1>
      <br />
    <div class="hover-card">
    <p><span>HOVER ME</span></p>
    <p><span>HOVER ME</span></p>
    <p><span>HOVER ME</span></p>
    <p><span>HOVER ME</span></p>
    <p><span>HOVER ME</span></p>
    </div>
    </section>


    <section className="section container-full">
      <div className="details_container grid">
      <img src={detailsImg} alt="some Image" className='details_img'/>
      <div className="details_data">
        <span className="section-subtitle">Student Welfare Wing</span>
        <h2 className="home_title">More than <br />Organisation</h2>
        <p className="details_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ea ab voluptates dolorem quia aliquam deleniti culpa perferendis repellat ad eveniet, labore at distinctio obcaecati iusto eaque, molestiae laborum ipsam!
        </p>
      </div>
      </div>
    </section>


    <section className="section container" id="contact">
      <div className="contact_container grid">
        <div className="contact_data">
          <span className="section-subtitle">Get in touch</span>
          <h2 className="home_title">Contact Us</h2>
          <p className="contact_description">
            If you want to know more about club connect, contact us and we will go back to you quickly, within our 24 hours.</p>
        </div>

        <div className="contact_button">
          <a href="#" class="Button">Contact Us Now</a>
        </div>
      </div>
    </section>

      <script src="https://unpkg.com/scrollreveal"></script>

      <br />
      <br />
      <Footer/>

      <a href="#home" className="scrolltop">
        <i className='bx bx-chevron-up scrolltop_icon'></i>
      </a>
    </>
     
  );
};

export default Home;
