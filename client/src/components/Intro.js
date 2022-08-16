import videoIntro from "./../mundial/video.mp4"
import "./intro.css"
import logo from "./../mundial/logoinicio.jpg"
import { Link } from "react-router-dom"

let Intro = () => {
  return (
    <div className="video">
      <video src={videoIntro} autoPlay muted loop />
      <Link to="/country">
        <div className="loquesea">
          <p>Welcome</p>
          <img src={logo} alt="logo" />
          <p>Press to Join</p>
        </div>
      </Link>
    </div>
  )
}

export default Intro
