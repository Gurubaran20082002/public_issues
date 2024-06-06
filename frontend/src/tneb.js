import React,{useState} from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
export default function Tneb() {
  const loc=useLocation();
  const [estate,esstate]=React.useState({
    uname:loc.state,
    sname:'',
    age:'',
    gen:'',
    mob:'',
    email:'',
    ser:'',
    issue_loc:'',
    tamil:'',
    com:''
  })
const handle=(e)=>{
  esstate({...estate,[e.target.name]:e.target.value});
}
const handlesubmit=(e)=>{
  e.preventDefault();
  axios.post('http://localhost:8081/tneb',estate).then(res=>alert("Your Complaint Registered Successfully")).catch(err=>alert("Something went wrong!! Please try again"));
}
  return (
    <>
      <div class="row ms-1 me-1">
    <div class="col-sm-5" id="eb1" >
    </div>
    <div class="col-sm-6   mt-3 ms-2 ">
    <h1>Tamilnadu Electricity Board (TNEB)</h1><br/>
      <form  onSubmit={e=>handlesubmit(e)}>
      <label for="" class="h6">Username</label>
      <input type="text"  class="form-control" name="uname" value={estate.uname}  readOnly />
      <br/>
      <label for="" class="h6">Complainer's Name / புகார் அளிப்பவரின் பெயர்</label>
      <input type="text" placeholder="Name" class="form-control" name="sname" value={estate.sname} onChange={handle} />
      <div id="box" class="text-danger"></div><br/>
        <label for="" class="h6">Age / வயது</label>
        <input type="number" placeholder="Enter Age" class="form-control" name="age" value={estate.age} onChange={handle} /><br/>
        <label for="" class="h6">Gender / பாலினம்</label><br/>
        <div class="row">
          <div class="col-sm-4"><input type="radio"  class="form-check float-start " name="gen" value="male" onChange={handle}/><label>&nbsp;Male / ஆண்</label></div>
          <div class="col-sm-4"><input type="radio"  class="form-check float-start " name="gen" value="female"  onChange={handle} /><label>&nbsp;Female / பெண்</label></div>
          <div class="col-sm-4"><input type="radio"  class="form-check float-start " name="gen" value="others"  onChange={handle} /><label>&nbsp;Others / பிற பாலினம்</label></div>
        </div>
    <div id="ver" class="text-success" ></div>
    <div id="veri" class="text-danger"></div><br/>
      <label for="" class="h6">Mobile / தொலைபேசி எண்</label>
      <input type="text" placeholder="Enter Mobile no" class="form-control" name="mob" value={estate.mob} onChange={handle}/>
      <div id="box2" class="text-danger"></div>
<br/>
<label for="" class="h6">Email / மின்னஞ்சல் (Optional)</label>
<input type="email" placeholder="Email address" class="form-control" name="email" id="email" value={estate.email} onChange={handle} />
        <div id="box1" class="text-danger"></div> <br/>
<label for="" class="h6">Services / சேவையை தேர்ந்தெடுக்கவும்</label>
<select class="form-select" id="ser"  name='ser'  onChange={handle}>
            <option value="">-- Select Service --</option>
            <option value="home">Home / வீடு</option>
            <option value="other">Others</option>
        </select>
        <div id="mes"> 
        </div>
<br/>
<label class="h6">Address or Landmark of Problem Occurs / பிரச்சனையின் முகவரி :</label><br/>
<textarea class='form-control' rows="3" columns="10" placeholder='Enter the address of the Issued place' name='issue_loc' value={estate.issue_loc} onChange={handle}></textarea><br/>
<label for="" class="h6">Type in Tamil:<span class="text-danger"> *</span></label><br/>
<input type="checkbox" id="pc2" class="form-check float-start me-2" name='tamil' value="yes" onChange={handle}/><p class="text-primary">If want to Type in Tamil Select this Checkbox / தமிழில் உள்ளிட இந்த பெட்டியை கிளிக் செய்யவும்</p>

<label class='h6'>Complaint / புகார் உள்ளிடவும்</label> 
<textarea type='text' placeholder='Enter Complaint' class='form-control' name="com" rows="5" value={estate.com} onChange={handle}></textarea>
<br/>
          <button class="btn btn-primary text-light w-100" id="eb2" type="submit" >Submit</button>
    </form></div>
  </div>
    
    </>
  )
}
