import Template from "../Components/Template"
import singupImg from "../assets/Signup.jpg"


const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Join the millions learning to  code wiht StudyNotion for free "
      desc1="Build skills for today,tomorrow, and beyond."
      desc2="Education to future-proof your carrer."
      image={singupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
      />
  )
}

export default Signup
