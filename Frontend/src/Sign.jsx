import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sign.css';

const Sign = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const[profession , setprofession]=useState("")

const[imageUrl , setimageUrl]=useState(null)
const[msg , setmsg]=useState("")
  const navigate = useNavigate();

   const collectData= async (e) => {

 e.preventDefault(); // stop page refresh

    const formData = new FormData();
    formData.append("name", name );
       formData.append("email", email );
           formData.append("password", password );
            // formData.append("profession",profession );
       
             formData.append("image", imageUrl);

   const result= await fetch("http://localhost:5000/register", {
      method: "POST",
      body: formData,
    });

    if(name.length==0){
      setmsg("Enter your name")
    }else if(email.length==0){
setmsg("Enter your email")
    }else if(password.length==0){
setmsg("Enter your password")
    }else{
setmsg("")
      const data = await result.json();
      localStorage.setItem("user", JSON.stringify(data));
      console.log(data)
    alert(`Welcome, ${name}!`);
    navigate("/");
  };
   }




  return (
    <div className="sign-container">
      <h2>Sign Up</h2>
<form action="" onSubmit={collectData}>




      <input type="text" required placeholder="Enter Name" onChange={(e) => setName(e.target.value)}   />
      <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} required/>
      <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required/>
  

      <input type="file" accept='image/*' onChange={(e)=> setimageUrl(e.target.files[0])} />

  
      <button type='submit'>Sign Up</button>

</form>
      <p style={{color:"red"}}>{msg}</p>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default Sign;


