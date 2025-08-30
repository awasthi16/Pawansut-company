import React, { useState } from "react";
import './EnquiryForm.css'
import { Link, useNavigate } from "react-router-dom";
function EnquiryFrom(){

  const[name , setname]=useState("")
  const[email , setemail]=useState("")
  const [phone , setphone]=useState("")
  const[enquiry , setenquiry]=useState("")
  const[description , setdescription]=useState("")


  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("user"));


  const enquirySubmit = async()=>{
    let result= await fetch("http://localhost:5000/enquiryFrom",{
      method: "post",
      body: JSON.stringify({name, email , phone , enquiry , description}),
      headers:{ "content-type":"application/json"}
    })
  result = await result.json()

   if(!auth){
          navigate("/sign")
      }else{
        localStorage.setItem("enquiry",JSON.stringify(result))
          // alert("please enter correct details")
          alert("Your enquiry has been submitted")
        }
      console.log(result)
  }

return(
    <>

{/* <div className="enquiry-from">
 <form action="">
 <label htmlFor="">Name:</label><br />
  <input type="text" placeholder="Enter your Name" required /><br />
  <label htmlFor="">Email:</label><br />
  <input type="email" placeholder="Enter your Email" required /> <br />
  <label htmlFor="">Phone Number:</label><br />
  <input type="text" placeholder="Enter your phone number" required /><br />
  <label htmlFor="">Enquiry:</label><br />
   <input type="text" placeholder="Enter subject of inquiry" required /> <br />
   <label htmlFor="">Description:</label><br />
   <textarea name="" id="">description</textarea><br />

   <button type="submit">Submit</button>

 </form>
</div> */}

    <div className="enquiry-from-container">
      <h2>PawanSutt | Enquiry Form</h2>
      <p>
        Welcome to PawanSutt! <br />
        Please fill out the form below with your enquiry and our team will get back to you shortly. <br />
        Fields marked with * are mandatory. <br />
        You can enquire about our services , fees, timings, Society or any other help.
      </p>
      {/* <form action={enquirySubmit}> */}
        <form >
        <label>Name* :</label>
        <input name="name" type="text" placeholder="Enter your Name"  required  onChange={(e)=>setname(e.target.value)} />

        <label>Email:</label>
        <input name="email" type="email" placeholder="Enter your Email" onChange={(e)=>setemail(e.target.value)} />

        <label>Phone Number* :</label>
        <input name="phone" type="text" placeholder="Enter your phone number" required  onChange={(e)=>setphone(e.target.value)} />

        <label>Enquiry Society* :</label>
        <input name="subject" type="text" placeholder="Enter subject of inquiry"  required onChange={(e)=>setenquiry(e.target.value)}  />

        <label>Description:</label>
        <textarea name="description" placeholder="Enter your detailed query here..."  onChange={(e)=>setdescription(e.target.value)}  ></textarea>

        <button type="submit"  ><Link to='/EnquirySubmitPage'>Submit</Link></button>
      </form>
    </div>
    
    </>
)
}
export default  EnquiryFrom;







