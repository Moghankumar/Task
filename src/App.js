import logo from "./image.png";
import "./App.css";
import { FiEdit } from "react-icons/fi";

function App() {
  return (
    <div className="App">
      <div className="cardbox">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <p className="welcometext"> Welcome Back !</p>
        </div>
        <div>
          <FiEdit
            style={{
              marginLeft: "3rem",
              position: "absolute",
              marginTop: "1rem",
              color: "#BFBFBF",
            }}
          />
          <input
            type="text"
            className="textbox"
            placeholder="Your Registration Number"
          />
        </div>
        <div>
          <button type="submit" className="submitbutton">
            Next &nbsp;&nbsp; >
          </button>
        </div>
        <div>
          <a href="#" className="forget">
            Forgot your registration number? Click here
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
