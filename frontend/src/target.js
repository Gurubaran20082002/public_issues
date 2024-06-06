import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
export default function Target() {
  const location=useLocation();
  const navigate=useNavigate();
  const guru=location.state;
  return (
  <>  
<div id="t1"  >
        <div class="row ">
            <div class="col-sm-1">&nbsp;</div>
    <div class="col-sm-7" id="t9">
        <img src="https://news.tirunelveli.today/wp-content/uploads/2022/06/1500x900_727109-nomination.png" alt="" height="100px" width="120px"  class="float-start" />
    
    <div class="pt-4 ms-2 h5 ">Mudhalvarin Mugavari Department</div>    
    
    </div>

    <div class="col-sm-4 nav">
        <div class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
              <a class="nav-link text-dark h6" href='#t4'>Home</a>
              <a class="nav-link text-dark h6" href='#t4'>My Dashboard</a>
    
              <a class="nav-link text-dark h6"  href='#t4'>FAQs</a>
              <div align="center">
                <a class="nav-link text-dark h6"  href='#t4'><i class="fa fa-user" aria-hidden="true"></i><br/>View Profile</a>
              
              </div>
            
              </div>
            </div>
          </div>
    </div>
        </div>
        
      
    
        <img id="t10" alt="" width="100%" height="300px" />
        <br/>
        <div class=" pb-5 pt-5" align="center" id="t2"><h6 class="text-light">To file your Complaint or Issue</h6>
             <button class="btn btn-primary " onClick={e=>{navigate('/direct',{state:guru})}}>Click Here</button><br/><br/>
    
              <h6>Or</h6>
    <br/>
    <h6 class="text-light">To Track your Grievance</h6>
    <div id="t5" class="input-group"><input type="text " class="form-control " placeholder="Enter your Grievance Id" />
      <button class="btn btn-primary">Search</button>
    </div>
    
        </div>
        <div class="bg-danger    " id="t6">&nbsp;</div><br/>
        <div class="bg-primary ps-5 pe-5 pt-4 pb-2 row">
          <div class="col-sm-3 text-light"><span class="h6">CONTACT US</span>
    
    
        <br/><br/>  <span id="t7">  Special Officer,<br/>
          Mudhalvarin Mugavari Department,<br/>
          Secretariat,<br/>
          Chennai -600009.</span>
      
       </div>
      
       <div class="col-sm-6 text-light pt-5"  id="t3" align="center">Email us at cmcell@tn.gov.in , mudhalvarinmugavari@gmail.com
        <br/>Call us at: 1100</div>
     
        <div class="col-sm-3 text-light "><span class="h6 float-end">CONTACT US</span>
    
    
          <br/><br/>  <span id="t8"> <span class="float-end">About Us</span> <br/>
          <span class="float-end">Privacy and Copyright Policy</span> <br/>
          <span class="float-end">Terms of Use</span></span>
        
         </div>
        
         </div> 
        <div class=" pt-2 pb-2 text-light" align="center" id="t4">Content owned and updated by CM Helpline.</div>  
         </> 
        
         )
}
