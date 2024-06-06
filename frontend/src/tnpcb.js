import axios from 'axios';
import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Tnpcb() {
  const loc=useLocation();
  const [pstate,psstate]=React.useState({
uname:loc.state,
sname:'',
age:'',
gen:'',
mob:'',
email:'',
sel:'',
ser:'',
issue_loc:'',
tamil:'',
com:''
  })
  const handle=(e)=>{
    psstate({...pstate,[e.target.name]:e.target.value});
  }
  const handlesubmit=(e)=>{
e.preventDefault();
axios.post('http://localhost:8081/pcb',pstate)
.then(res=>alert("Your Complaint Registered Successfully"))
.catch(err=>alert("Something went wrong!! Please try again"));
  }
  
  return (
  <>
    <div class="row ms-1 me-1">
    <div class="col-sm-5" id="pc1">
    </div>
    <div class="col-sm-6   mt-3 ms-2 ">
        
      
      <div align="center">
        <h2>Tamil Nadu Pollution Control Board (TNPCB)</h2><strong class="text-danger">ONLINE GRIEVANCE PETITION REDRESSAL SYSTEM</strong>
      </div><br/>
      <form onSubmit={e=>handlesubmit(e)}>
      <label for="" class="h6">Username</label>
      <input type="text"  class="form-control" name="uname" value={pstate.uname}  readOnly />
      <br/>
      <label for="" class="h6">Complainer's Name / புகார் அளிப்பவரின் பெயர்</label>
      <input type="text" placeholder="Name" class="form-control" name="sname" value={pstate.sname} onChange={handle}/>
      <div id="box" class="text-danger"></div><br/>
        <label for="" class="h6">Age / வயது</label>
        <input type="number" placeholder="Enter Age" class="form-control" name="age" value={pstate.age} onChange={handle}/><br/>
        <label for="" class="h6">Gender / பாலினம்</label><br/>
        <div class="row">
          <div class="col-sm-4"><input type="radio"  class="form-check float-start " name="gen" value="Male"  onChange={handle}/><label>&nbsp;Male / ஆண்</label></div>
          <div class="col-sm-4"><input type="radio"  class="form-check float-start " name="gen" value="Female"  onChange={handle}/><label>&nbsp;Female / பெண்</label></div>
          <div class="col-sm-4"><input type="radio"  class="form-check float-start " name="gen" value="Others"  onChange={handle}/><label>&nbsp;Others / பிற பாலினம்</label></div>
        </div>
    <div id="ver" class="text-success" ></div>
    <div id="veri" class="text-danger"></div><br/>
      <label for="" class="h6">Mobile / தொலைபேசி எண்</label>
      <input type="text" placeholder="Enter Mobile no" class="form-control" name="mob" value={pstate.mob} onChange={handle}/>
      <div id="box2" class="text-danger"></div>
<br/>
<label for="" class="h6">Email / மின்னஞ்சல் (Optional)</label>
<input type="email" placeholder="Email address" class="form-control" name="email" id="email" value={pstate.email} onChange={handle}/>
        <div id="box1" class="text-danger"></div> <br/>
        <label for="" class="h6">Type of Complaint / புகார் வகைகள்<span class="text-danger"> *</span></label>
<select class="form-select" id="ser" onchange="g()" name="sel" onChange={handle}>
            <option value="">-- Select --</option>
            <option value="water_pollution">Water Pollution / நீர் மாசுபாடு</option>
            <option value="air_pollution">Air Pollution / காற்று மாசுபாடு</option>
            <option value="biomedical_waste">Biomedical Waste / உயிர் மருத்துவ கழிவுகள்</option>
            <option value="hazardeous_waste">Hazardeous Waste / அபாயகரமான கழிவுகள்</option>
            <option value="municipal_solid_waste">Municipal Solid Waste / நகராட்சி திட கழிவு</option>
            <option value="noise_pollution">Noise Pollution / ஒலி மாசு</option>
            <option value="others">Others / மற்ற மாசுபாடு</option>
            
        </select><br/>
<label for="" class="h6">District / மாவட்டம்:<span class="text-danger"> *</span></label>
<select class="form-select" id="ser"  name='ser' onChange={handle}>
            <option value="">-- Select --</option>
            <option value="madurai">Madurai / மதுரை</option>
            <option value="trichy">Trichy / திருச்சி</option>
        </select>

<br/>
<label class="h6">Address or Landmark of Problem Occurs / பிரச்சனையின் முகவரி :</label>
<textarea class='form-control' rows="3" columns="10" placeholder='Enter the address of the Issued place' name="issue_loc" value={pstate.issue_loc} onChange={handle}></textarea><br/>
<label for="" class="h6">Type in Tamil:<span class="text-danger"> *</span></label><br/>
<input type="checkbox" id="pc2" class="form-check float-start me-2" name='tamil' value="yes" onChange={handle}/><p class="text-primary">If want to Type in Tamil Select this Checkbox / தமிழில் உள்ளிட இந்த பெட்டியை கிளிக் செய்யவும்</p>
          <label for="" class="h6">Enter Complaint / புகார் உள்ளிடவும்:<span class="text-danger"> *</span></label>
<textarea type="text" placeholder="Enter Your Complaint" class="form-control" name="com" id="" rows="5" value={pstate.com} onChange={handle}></textarea>
<br/><button class="btn btn-primary text-light w-100" id="pc3" type="submit" >Submit</button>
    </form></div>
  </div></>
  )
}
