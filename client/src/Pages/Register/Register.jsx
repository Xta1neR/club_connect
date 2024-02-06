import React from 'react';
import './Register.css';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


import Navbar from "../../component/Navbar/Navbar";
import Footer from '../../component/Footer/footer';



const Register = () => {

    const registerUser = (e) => {
        e.preventDefault();
        }

  return (
<>
    <Navbar/>
  
<section class="register">
    <input type="checkbox" id="one"/>
    <input type="checkbox" id="two"/>
    <input type="checkbox" id="three"/>
  <div class="container_register">
    <h1>Register Now</h1>
    <div class="indicator">
        <div class="step step1">
            <div>1</div>
            <span>Personal Details</span>
        </div>
        <div class="line line1"></div>
        <div class="step step2">
            <div>2</div>
            <span>Select Your Organization</span>
        </div>
        <div class="line line2"></div>
        <div class="step step3">
            <div>3</div>
            <span>Choose a Slot</span>
        </div>
  
    </div>

   
    <div class="panel">
        <div class="page1">
            <form onSubmit={registerUser} action="#" class="form">
                <h2>Basic Information</h2>
                <div class="form-group">
                    <input type="text" required/>
                    <label for="">Full Name</label>
                </div>
                <div class="form-group">
                    <input type="text" required/>
                    <label for="">Registration Number</label>
                </div>
                <div class="form-group">
                    <input type="tel" required/>
                    <label for="">Whatsapp Number </label>
                </div>
                <div class="form-group">
                    <input type="email" required/>
                    <label for="">Email Address</label>
                </div>
                <div class="form-group">
                    <input type="password" required/>
                    <label for="">Password</label>
                </div>
                


                <div class="btn-group">
                    <label for="one" class="btn btn-f">Next</label>
                </div>
            </form>
        </div>

        <div class="page2">
            <form action="#" class="form">
                <h2>Select Organization & Domain</h2>
                <div class="form-group">
                    <input type="text" required/>
                    <label for="">Organization Name</label>
                </div>
                <div class="form-group">
                    <input type="text" required/>
                    <label for="">Domain Name</label>
                </div>
                <div class="btn-group">
                    <label for="one" class="btn">Previous</label>
                    <label for="two" class="btn">Next</label>
                </div>
            </form>
        </div>

        <div class="page3">
            <form action="#" class="form">
                <h2>Select your Interview Slot</h2>
                
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker']}>
                <DateTimePicker label="Basic date time picker" />
                </DemoContainer>
                </LocalizationProvider>

                


                <div class="btn-group">
                    <label for="two" class="btn">Previous</label>
                    <label for="three" class="btn">Submit</label>
                </div>
            </form>
        </div>

              
    </div>
  </div>      
</section>
<Footer/>
</>
  );
};

export default Register;
