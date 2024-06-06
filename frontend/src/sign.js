import React from 'react'
import axios from 'axios';
export default function Sign() {

    const [state,setstate]=React.useState({

sname:'',
email:'',
mob:'',
pas:'',
dob:'',
gen:'',
dist:'',
sec_qn:'',
sec_ans:''
    })


const handle=(e)=>{
    setstate({...state,[e.target.name]:e.target.value});
}
const handlesubmit=(e)=>{
e.preventDefault();
if(document.getElementById("sname").value==="" || document.getElementById("email").value==="" || document.getElementById("mob").value==="" || document.getElementById("pas").value===""  || document.getElementById("gen").value==="" || document.getElementById("dob").value==="" || document.getElementById("dist").value==="")
alert("Please enter the all necessary fields");
else{
  axios.post('http://localhost:8081/path',{state})
.then(res=>alert("You are Registered Successfully!!"))
.catch(err=>alert('Something went wrong, Please try again later'));
// console.log(document.getElementById("sname").value);
}
}

const handler=(e)=>{
  setstate({...state,[e.target.name]:e.target.value});
  var x=document.getElementById("pas").value;
  var y=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  if(!x.match(y))
    {
  document.getElementById("box3").innerHTML="Password must be strong (i.e., minimum eight characters, at least one letter, one number and one special character)";
  document.getElementById("bo").innerHTML='';
}
  else
  {
    document.getElementById("box3").innerHTML='';
    document.getElementById("bo").innerHTML='Password is strong';
  }
  

}
const handles=(e)=>{
  setstate({...state,[e.target.name]:e.target.value});
  var x=document.getElementById("pas").value;
  var y=document.getElementById("cpas").value;
  var z='';
  if(x!==y)
    z="Password must be same"; 
  document.getElementById("box31").innerHTML=z;
}

// </script>


  return (
    <div>


<div class="row">
    <div class="col-sm-6" id='g1'>
    </div>
    <div class="col-sm-5 mt-3 ms-2 ">
      <form onSubmit={e=>handlesubmit(e)}>
      <h1>Sign-up</h1><p class="h6">It's quick and easy</p><br/>
      <label for="" class="h6">Full Name</label>
      <input type="text" placeholder="Name" class="form-control" name="sname" value={state.sname} onChange={handle} id="sname"/>
      <div id="box" class="text-danger"></div><br/>
      <label for="" class="h6">Email</label>
      
<input type="email" placeholder="Email address" class="form-control" name="email" id="email" value={state.email} onChange={handle} />

    <div id="ver" class="text-success" ></div>
    <div id="veri" class="text-danger"></div><br/>
      <label for="" class="h6">Mobile</label>
      <input type="text" placeholder="Enter Mobile no" class="form-control" name="mob" id="mob" value={state.mob} onChange={handle}/>
      <div id="box2" class="text-danger"></div>
<br/>

      <label for="" class="h6">Password</label>
      <input type="password" placeholder="Enter Password" class="form-control" name="pas" value={state.pas} onChange={handler} id="pas"/>
      <div id="box3" class="text-danger"></div><div id="bo" class="text-success"></div>
<br/>
      <label for="" class="h6">Confirm Password</label>
      <input type="password" placeholder="Re-Enter your Password" class="form-control" name="cpas" value={state.cpas} onChange={handles} id="cpas"/><div id="box31" class="text-danger"></div><br/>
      <label for="" class="h6">Date of Birth</label>
      <input type="date"  class="form-control" name="dob" id="dob" placeholder="Date of Birth" value={state.dob} onChange={handle}/>
      <div id="box4" class="text-danger"></div>
<br/>
      <label for="" class="h6">Gender</label><br/>
    <div class="row">
      <div class="col-sm-4"><input type="radio"  class="form-check float-start " name="gen" id="gen" value="Male"  onChange={handle}/><label>&nbsp;Male</label></div>
      <div class="col-sm-4"><input type="radio"  class="form-check float-start " name="gen" id="gen" value="Female" onChange={handle}/><label>&nbsp;Female</label></div>
      <div class="col-sm-4"><input type="radio"  class="form-check float-start " name="gen" id="gen" value="Others" onChange={handle}/><label>&nbsp;Others</label></div>
      

    </div>
    <div id="box5" class="text-danger"></div><br/>
    
    <label for="" class="h6">District</label>
    <select name="dist"  class="form-select"  onChange={handle} id="dist">
      <option value="">Select your District</option>
      <option value="Madurai">Madurai</option>
      
    </select>
    <div id="box6" class="text-danger"></div>
    <br/>
       <label for="" class="h6">Select Security Question</label>
       <select name="sec_qn" id="" class="form-select"  onChange={handle}>
        <option value="school_name">What is your First School Name?</option>
        <option value="pet_name">What is your Pet Name?</option>
        <option value="fav_food">What is your Favourite Food?</option>
        <option value="fav_hero">Who is your Fourite Hero?</option>
       </select><br/>
       <label for="" class="h6">Security Answer</label>
    <input type="text"  class="form-control" name="sec_ans" placeholder="Enter your Security Answer" value={state.sec_ans} onChange={handle}/><br/>
       
          <button class="btn btn-secondary text-light w-100" id="g2" type='submit' >Sign-Up</button>
    </form></div>
    
  </div>





    </div>
  )
}
