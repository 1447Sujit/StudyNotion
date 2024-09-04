import frameImage from '../assets/frame.jpg'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FcGoogle } from "react-icons/fc";


const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div className='templateContainer'>
      
      {/* Left div */}
      <div className='leftBox'>
      <h1>{title}</h1>
      <p>
        <span>{desc1}</span>
        <br />
        <span className='desc2'>{desc2}</span>
      </p>

      {
        formtype === "signup" ? 
        (<SignupForm setIsLoggedIn={setIsLoggedIn} />):
        (<LoginForm  setIsLoggedIn={setIsLoggedIn} />)
      }



      <div className="horizontal-line-container">
          <div className="line"></div>
          <p className='text'>OR</p>
          <div className="line"></div>
      </div>


        <button className='google'>
          <span> <FcGoogle /> </span>
           Sign up with Google
        </button>

      </div>

      {/* Right div frame image */}
      <div className='rightBox'>   
        <img src={image} alt="Students" width={558} height={490} loading='lazy' />
      </div>
      

    </div>
  )
}

export default Template
