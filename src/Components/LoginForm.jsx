import { useState } from "react"
import { AiOutlineEye , AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginForm = ({setIsLoggedIn}) => {

  const [formData,setFormData] = useState({
    email:"",
    password:"",
  })

  const [showPassword,setShowPassword] = useState(false)

  const navigate = useNavigate();

  function changeHandler(event){
      setFormData((prevData) =>(
        {
          ...prevData,
          [event.target.name] : [event.target.value]
        }
      ))
  }

  function submitHandler(event){
      event.preventDefault();
      setIsLoggedIn(true)
      toast.success("Logged In")
      navigate("/dashboard")
  }

  return (
      <form onSubmit={submitHandler}>
        {/* Email */}
        <label>
          <p>Email Address <sup>*</sup> </p>
          <input type="email" required value={formData.email} onChange={changeHandler} placeholder="Enter email id" name="email" />
        </label>

        {/* Password */}
        <label>
          <p>Password <sup>*</sup> </p>
          <input type={showPassword?("text"):("password")} required value={formData.password} onChange={changeHandler} placeholder="Enter password" name="password"/>

        <span className="eyeIcon" onClick={() => setShowPassword((prev)=>!prev)}>
          { showPassword ? (<AiOutlineEyeInvisible />): (<AiOutlineEye />)}
        </span>

        <Link to="#" className="link" >
        <p className="forget">Forgot Password</p>
        </Link>

        </label>

        {/* Button */}
        <button className="signinbtn">Sign in</button>
        
      </form>
  )
}

export default LoginForm
