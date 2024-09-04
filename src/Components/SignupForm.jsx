import { useState } from "react"
import toast from "react-hot-toast";
import { AiOutlineEye , AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) => {

  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",

  })

  const [showPassword1,setShowPassword1] = useState(false)
  const [showPassword2,setShowPassword2] = useState(false)

  const navigate =useNavigate();

//   function changeHandler(event){
//     setFormData((prevData) =>(
//       {
//         ...prevData,
//         [event.target.name] : [event.target.value]
//       }
//     ))
// }

function changeHandler(event) {
  const { name, value } = event.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
}

function submitHandler(event){
    event.preventDefault();
    if(formData.password != formData.confirmPassword){
      toast.error("Passwords do not match");
      return;
    }

      setIsLoggedIn(true)
      toast.success("Account Created")
      const accountData = {
        ...formData
      }
      console.log("Printing account data");
      console.log(accountData);
  
      navigate("/dashboard")
    
   

}

  return (
    <div>
      {/* Student-Instructor tab */}
      <div className="signupHeading">
        <button>Student</button>
        <button>Instructor</button>
      </div>

        <form onSubmit={submitHandler}>

           {/* first & last Name */}
         <div className="nameBox">
          <label>
              <p>First Name <sup>*</sup></p>
              <input type="text" required value={formData.firstName} name="firstName" onChange={changeHandler} placeholder="Enter First Name" />
            </label>

            <label>
              <p>Last Name <sup>*</sup></p>
              <input type="text" required value={formData.lastName} name="lastName" onChange={changeHandler} placeholder="Enter Last Name" />
            </label>
         </div>

        {/* email address */}
            <label>
              <p>Email Address <sup>*</sup></p>
              <input type="email" required value={formData.email} name="email" onChange={changeHandler} placeholder="Enter Email Address" />
            </label>

            {/* createPassword and Confirm Password */}
            <div className="passwordBox">
              <label>
                <p>Create Password <sup>*</sup></p>
                  <input type={showPassword1?("text"):("password")} required value={formData.password} name="password" onChange={changeHandler} placeholder="Enter Password" />

                  <span className="eyeIcon" onClick={() => setShowPassword1((prev)=>!prev)}>
                { showPassword1 ? (<AiOutlineEyeInvisible />): (<AiOutlineEye />)}
                </span>
              </label>


              <label>
                <p>Confrim Password <sup>*</sup></p>
                  <input type={showPassword2?("text"):("password")} required value={formData.confirmPassword} name="confirmPassword" onChange={changeHandler} placeholder="Confirm Password" />

                  <span className="eyeIcon" onClick={() => setShowPassword2((prev)=>!prev)}>
                { showPassword2 ? (<AiOutlineEyeInvisible />): (<AiOutlineEye />)}
                </span>
              </label>
            </div>

          <button className="createAccountbtn">Create Account</button>

        </form>

    </div>
  )
}

export default SignupForm
