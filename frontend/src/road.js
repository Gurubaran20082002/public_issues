import React from 'react'
import axios from 'axios';
import {useLocation} from 'react-router-dom'
export default function Road() {
  const location=useLocation();
  const [rstate,rsstate]=React.useState({
    uname:location.state,
    gname:'',
    age:'',
    gen:'',
    mob:'',
    email:'',
    dist:'',
    add:'',
    tamil:'',
    com:'',

  })
  const handlechange=(e)=>{
    rsstate({...rstate,[e.target.name]:e.target.value});
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:8081/insert",rstate)
    .then(res=>alert("Your Complaint Registered Successfully"))
    .catch(err=>alert("Something went wrong!! Please try again"));
  }
  return (
    <>

<div class="row ms-1 me-1">
    <div class="col-sm-5" id="r1" >
    </div>
    <div class="col-sm-6   mt-3 ms-2 ">
      <div align="center">
        <h2>Road Safety Department of Tamilnadu</h2><strong class="text-danger">ONLINE GRIEVANCE PETITION REDRESSAL SYSTEM</strong>
      </div><br/>
      <form onSubmit={e=>handlesubmit(e)}>
      <label for="" class="h6">Username</label>
      <input type="text"  class="form-control" name="uname" value={rstate.uname}  readOnly />
      <br/>
      <label for="" class="h6">Complainer's Name / புகார் அளிப்பவரின் பெயர்</label>
      <input type="text" placeholder="Name" class="form-control" name="gname" value={rstate.gname} onChange={handlechange} />
      <div id="box" class="text-danger"></div><br/>
        <label for="" class="h6" >Age / வயது</label>
        <input type="number" placeholder="Enter Age" class="form-control" name="age" value={rstate.age} onChange={handlechange}/><br/>
        <label for="" class="h6">Gender / பாலினம்</label><br/>
        <div class="row">
          <div class="col-sm-4"><input type="radio"  class="form-check float-start " name="gen" value="Male"  onChange={handlechange}/><label>&nbsp;Male / ஆண்</label></div>
          <div class="col-sm-4"><input type="radio"  class="form-check float-start " name="gen" value="Female"  onChange={handlechange}/><label>&nbsp;Female / பெண்</label></div>
          <div class="col-sm-4"><input type="radio"  class="form-check float-start " name="gen" value="Others"  onChange={handlechange}/><label>&nbsp;Others / பிற பாலினம்</label></div>
        </div>
    <div id="ver" class="text-success" ></div>
    <div id="veri" class="text-danger"></div><br/>
      <label for="" class="h6">Mobile / தொலைபேசி எண்</label> 
      <input type="text" placeholder="Enter Mobile no" class="form-control" name="mob" value={rstate.mob} onChange={handlechange}/>
      <div id="box2" class="text-danger"></div>
<br/>
<label for="" class="h6">Email / மின்னஞ்சல் (Optional)</label>
<input type="email" placeholder="Email address" class="form-control" name="email" id="email" value={rstate.email} onChange={handlechange}/>
        <div id="box1" class="text-danger"></div> <br/>
<label for="" class="h6">District / மாவட்டம்:<span class="text-danger"> *</span></label>
<select class="form-select" id="ser" onchange="g()" name="dist" onChange={handlechange}>
            <option value="">-- Select --</option>
            <option value="madurai">Madurai / மதுரை</option>
            <option value="trichy">Trichy / திருச்சி</option>
        </select>
<br/>
<label for="" class="h6">Address or Landmark of Problem Occurs / பிரச்சனையின் முகவரி :<span class="text-danger"> *</span></label>
<textarea type="text" placeholder="Enter the address of the Issued place" class="form-control" name="add" id="" rows="5" value={rstate.add} onChange={handlechange}></textarea><br/>
<label for="" class="h6">Type in Tamil:<span class="text-danger"> *</span></label><br/>
<input type="checkbox"  id="r3" class="form-check float-start me-2" value="Yes" name="tamil"  onChange={handlechange}/><p class="text-primary " name="tam">If want to Type in Tamil Select this Checkbox / தமிழில் உள்ளிட இந்த பெட்டியை கிளிக் செய்யவும்</p>

          <label for="" class="h6">Enter Complaint / புகார் உள்ளிடவும்:<span class="text-danger"> *</span></label>
<textarea type="text" placeholder="Enter Your Complaint" class="form-control" name="com" id="" rows="5" value={rstate.com} onChange={handlechange}></textarea>
<br/>
{/* <label for="fil" class="h6">File 1 to Upload / கோப்பு பதிவேற்ப்பு( PDF / Doc ):</label>
  <input type="file" class="form-control" name="file"/>
<br/> */}
<button class="btn btn-primary text-light w-100" id="r2" type="submit" >Submit</button>
    </form></div>
  </div><div>{location.state}</div>
    </>
    
  )
}
