// import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
export default function App()

{
  const nav=useNavigate();
// const guru="gurubaran";
const [sstate,ssetstate]=React.useState({
  email:'',
  pass:''
})

const handlechange=(e)=>{
  ssetstate({...sstate,[e.target.name]:e.target.value});
}

const handlesubmit=(e)=>{
  e.preventDefault();
  axios.post("http://localhost:8081/login",{sstate})
  .then(res=>{
    // const g=res.data;
    if(res.data==="no")
    alert("Invalid Username or Password")
    else {
    nav('/target',{state:res.data});
      // <Target guru={res.data}/>
    }
  })
  .catch(err=>console.log(err));
}
  return (
<>
<div  id="i1">
 <div class=" row" id="i2">
  <div class="col-sm-4">&nbsp;</div>
  <div class="col-sm-5 ms-2 me-5">
    <img src="https://i.gifer.com/MeG.gif" alt="" class="float-start" height="px" width="100px" />
   <h3 class="mt-3">&nbsp;Public Issues Rectification Portal</h3>

  </div>

<div class="col-sm-2">&nbsp;</div> 
</div>
        
        

        <nav class="navbar navbar-expand-lg navbar-light " id="i3">
            <div class="container-fluid" >
        
                <ul class="navbar-nav " >
                  <li class="nav-item" >
                    <a class="nav-link active text-light" aria-current="page" href="#g" >Home</a> 
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-light" href="#g" >About</a>
                  </li>
              
                  <li class="nav-item">
                    <a class="nav-link text-light" href="#g" tabindex="-1" aria-disabled="true" >Contact</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-light" href="#g" tabindex="-1" aria-disabled="true" >Services</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-light" href="#g" tabindex="-1" aria-disabled="true">Helpline</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-light" href="#g" tabindex="-1" aria-disabled="true">Security measures</a>
                  </li>

                </ul>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-primary text-light" type="submit">Search</button>
                </form>
              </div>
          </nav>
        
          <div id="i4">
            <br/>
  <div class="row ms-2 me-1">
    <div class="col-sm-2">&nbsp;</div>
    <div class="text-light col-sm-5" >
      <br/>
    <h2>Welcome to Our Site</h2>
<br/><br/>
    <div  id="i7" class="text-light">Introducing a dynamic web application dedicated to resolving public issues efficiently and transparently. Our platform empowers citizens to report concerns, track progress, and engage with authorities seamlessly. Join us in revolutionizing community problem-solving through accessible, user-friendly manner.
            
    </div>
    
    </div>
    <div class="col-sm-2"><img src="https://media.tenor.com/CigpzapemsoAAAAi/hi-robot.gif" alt="" height="350px"/></div>
 <br/>&nbsp; </div>
            
            <div class="row">
              <div class="col-sm-1"></div>
              
              
            </div>
            
            </div><br/><br/>
        <div class="row ">
           
          <div class="col-sm-7">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 2"></button>
                
              </div>
              <div class="carousel-inner">
               
                <div class="carousel-item">
                  <img src="https://c4.wallpaperflare.com/wallpaper/207/277/137/ancient-tamil-valluvar-statue-india-wallpaper-preview.jpg" class="d-block w-100 img-fluid i5" alt="..."   />
                </div>
                <div class="carousel-item active">
                  <img src="https://edgy.app/wp-content/uploads/2019/09/Robots-Get-MacGyver-Esque-Problem-Solving-Skills-970x647.webp" class="d-block w-100 img-fluid i5" alt="..."  />
                </div>
                <div class="carousel-item">
                  <img src="https://e7.pngegg.com/pngimages/966/771/png-clipart-man-holding-bulb-and-socket-electrician-electricity-handyman-electrical-contractor-electrical-wires-cable-professional-electrician-miscellaneous-service-thumbnail.png" class="d-block w-100 img-fluid i5" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="https://www.sagefuels.com/uploads/home/news/three-tech-trends-solve-problems.jpeg" class="d-block w-100 img-fluid i5" alt="..."  />
                </div>
                <div class="carousel-item">
                  <img src="https://i0.wp.com/www.ecomena.org/wp-content/uploads/2014/10/environmental-education.jpg?w=620&ssl=1" class="d-block w-100 img-fluid i5" alt="..."  />
                </div>
              
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="col-sm-4 ms-2 ">
            <div class="card border-2 rounded">
              <div class="card-body">
              <form onSubmit={e=>handlesubmit(e)}>
                <input type="email" class="form-control" placeholder="Email address or phone number" name="email" value={sstate.email} onChange={handlechange}/>
                <div id="email" class="text-danger"></div><br/>
                <input type="password" class="form-control" placeholder="Password" name="pass" value={sstate.pass} onChange={handlechange}/>
                <div id="pass" class="text-danger"></div><br/>
                <button class="btn btn-primary w-100" type="submit" >Log in</button></form>

                <br/><br/>
                <div><a href="#g" align="center" data-bs-toggle="modal" data-bs-target="#moda">Forgot Password?</a></div>
                
             
                
              <hr/>
      
      <div class="row">
        <div class="col-sm-2">&nbsp;</div> 
        <a type="button" class="btn btn-outline-secondary col-sm-8" href="sign.php" >
         New Registration
        </a>
      </div>
              </div>
            </div>
        </div></div>
        <br/>
        <div class="row ms-2 me-1">

          <div class="col-sm-4 mb-1"><img src="https://www.tnesevai.tn.gov.in/Images/footer2.jpg" alt="" width="450px" height="110px" /></div>
          <div class="col-sm-4 mb-1"><img src="https://tnega.tn.gov.in/cmsimages/HomeSlider/08082022070832.png" alt="" width="450px" height="110px" /></div>
          <div class="col-sm-4"><img src="https://www.tnesevai.tn.gov.in/Images/footer5.jpg" alt="" width="450px" height="110px" /></div>
        </div><br/>
<div  id="i6">
<br/>
<div class="row ms-2">
<div class="col-sm-1">&nbsp; </div>
<div class="col-sm-7 h3  " ><div class="row">&nbsp;</div><div class="row">&nbsp;</div><i>Digital India is an opportunity to empower the common man and transform his life.</i></div>

<div class="col-sm-4 " ><span class="h6"><br/>HELPDESK</span> <br/>
<p>
  
  <a href="mailto:gurubaran073@gmail.com" class='text-primary'>gurubaran073@gmail.com</a><br/>
  <a   class='text-primary' href="mailto:amaramarnath447@gmail.com">amaramarnath447@gmail.com</a><br/>
  <img src="https://upload.wikimedia.org/wikipedia/en/5/59/Klncelogo.gif" alt="" height="70px" width="70px" class="img-fluid float-start" />
  <p  class="h6 pt-3"> &nbsp;K.L.N College of Engineering</p><br/><br/> 
  <a data-bs-toggle="modal" data-bs-target="#feed" class="text-primary" href='#g'>Feedback</a>

</p>
</div>
</div>
<br/>


</div>
<p align="center" class="h6 text-light">© 2024 All Rights Reserved</p>
<div class="modal fade" id="moda">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Verify Your Email</h2>
        <button data-bs-dismiss="modal" class="btn-close"></button>
      </div>
      <div class="modal-body">
        <div class="input-group">
        <input type="email" class="form-control" placeholder="Enter Your Email" name="email" id="email" /><br/>
        <button class="btn btn-primary " onclick="sendOTP()" type="button">Send OTP</button>
        </div>
       <br/>
        <div class="input-group otpverify">
			<input type="text" id="otp_inp" placeholder="Enter the OTP sent to your Email..." class="form-control" />
			<button class="btn btn-primary" id="otp-btn" type="button">Verify</button>
		</div><div id="veri" class="text-danger"></div>

      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="feed">
<div class="modal-dialog">
  <div class="modal-content">
<div class="modal-header">
  <h2>Share your Thoughts</h2>
  <button data-bs-dismiss="modal" class="btn-close"></button>
</div>
<div class="modal-body">
  <form action="">
    <input type="text" class="form-control" placeholder="Enter your name" /><br/>
    <input type="text" class="form-control" placeholder="Enter your Email" /><br/>
    <textarea name="" id="" cols="30" rows="10" placeholder="Enter your Feedback" class="form-control" type="text"></textarea>
 <br/> <button class="btn btn-primary">Submit</button>
  </form>
</div>
  </div>
</div>


</div>
</div>
</>)
}
