import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
export default function Direct() {
    const navigate=useNavigate();
    const location=useLocation();
    const gu=location.state;
    // const [guru,gurubaran]=React.useState({
    //     sel:''
    // })
    // const han=(e)=>{
    //     gurubaran({...guru,[e.target.name]:e.target.value});
    // }
//    const redirectToAnotherPage=(e)=>{
//     const { history } = this.props;
//     history.push('/tneb');}
// const handle=(e)=>{

// var x=document.getElementById("dept").value;
// alert(x);
//  if(x==="tneb")
// window.location.assign('/tneb');
//  alert("hai")
// else if(x==="tnpcb")
// window.location.assign("pcb.php");
// else if(x==="road")
// window.location.assign("transport.php");
// else if(x==="school")
// window.location.assign("");
// else if(x==="clg")
// window.location.assign("");
// else if(x==="health")
// window.location.assign();
// else
// alert("Please select Department!");

    
// }
const guru=(e)=>{
    var x=document.getElementById('dept').value;
    if(x==="tneb")
    navigate('/tneb',{state:gu});
else if(x==="tnpcb")
    navigate('/tnpcb',{state:gu});
else if(x==="road")
    navigate('/road',{state:gu});
else
alert("Please select Department");
}
  return (
    <>
    <div>
    <div id="d1" align="center">
    <br/><h2 align="center"  class="text-primary">You are very close to Raise your Issue</h2><br/>
    <h2 ><i>Please Select Department / துறையைத் தேர்ந்தெடுக்கவும் </i></h2>
    
    <div id="d2">
        
        <select  id="dept" class="form-select" >
            <option value="">--Select Department--</option>
            <option value="tneb">Tamilnadu Electricity Board / தமிழ்நாடு மின்சார வாரியம்(TNEB)</option>
            <option value="tnpcb">Tamilnadu Pollution Control Board / தமிழ்நாடு மாசுக்கட்டுப்பாட்டு வாரியம் (TNPCB)</option>
            <option value="road">Road Safety Department of Tamilnadu / தமிழ்நாடு சாலை பாதுகாப்பு துறை</option>
        </select>
    </div><br/>
    <button class="btn btn-success" onClick={e=>guru(e)}>Submit</button>
    
       </div>
        
        
        
        </div>
        
        
        </>
    
  )
}
