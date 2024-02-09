import React from 'react';
import './Dashboard.css'; // Assuming there are already some layout styles
import Footer from '../../component/Footer/footer';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../component/Sidebar/sidebar';
import { Gif, Handshake, PhotoAlbum, VerifiedUser } from '@mui/icons-material';
import { TextField } from '@mui/material';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
    <Sidebar />
    
      <section className='Dashboard'>

      <div className="post1">
      <VerifiedUser  />
      <h2>TEST</h2>
      <p>START YOUR POST AS A CEO </p>
      <div className="icons-post">
        <PhotoAlbum/>
        <Gif/>
      </div>
      <h3>add caption</h3>
      <button>POST</button>
      </div>

        <br /><br />
       <h1>HELLO Verto</h1>

       <div className="post">
        <div className="post">
          <img src="https://source.unsplash.com/random" alt="" />
          <br />
          <h4>Test post 01</h4>
          <br />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed illum perspiciatis hic neque inventore doloremque maxime ducimus! Possimus rerum laboriosam laborum consequuntur corrupti placeat itaque earum quaerat nulla amet quas quod sint voluptatibus dolores, odit ipsam! Beatae mollitia iure velit, tenetur dolorem quae aperiam, necessitatibus vero provident accusamus numquam voluptates?</p>
        </div>

        <br />

        <div className="post">
          <img src="https://source.unsplash.com/random" alt="" />
          <br />
          <h4>Test post 02</h4>
          <br />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed illum perspiciatis hic neque inventore doloremque maxime ducimus! Possimus rerum laboriosam laborum consequuntur corrupti placeat itaque earum quaerat nulla amet quas quod sint voluptatibus dolores, odit ipsam! Beatae mollitia iure velit, tenetur dolorem quae aperiam, necessitatibus vero provident accusamus numquam voluptates?</p>
        </div>
       </div>

       <div className="post">
          <img src="https://source.unsplash.com/random" alt="" />
          <br />
          <h4>Test post 03</h4>
          <br />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed illum perspiciatis hic neque inventore doloremque maxime ducimus! Possimus rerum laboriosam laborum consequuntur corrupti placeat itaque earum quaerat nulla amet quas quod sint voluptatibus dolores, odit ipsam! Beatae mollitia iure velit, tenetur dolorem quae aperiam, necessitatibus vero provident accusamus numquam voluptates?</p>
        </div>
       

      </section>

      {/* <Footer /> */}
    </>
  );
}

export default Dashboard;
