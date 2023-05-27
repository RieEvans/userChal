import { useState } from "react";
import "./App.css";
import UserChallenger from "./components/UserChallenger";

function App() {
  const [showAlert, setShowAlert] = useState(false)

  return (
    <>
      <div className="app m-auto w-3/4 mt-20">
          <h2 className="text-center font-bold text-4xl">Short Circuit Sample</h2>
          <div className="content justify-center flex mt-10">
              <button onClick={() => setShowAlert(!showAlert)} className="btn border-style: solid border-2 px-5 rounded-lg border-gray-950 font-bold">Button</button>
              
          </div>
          {showAlert && <Alert/>}
      </div>

      <UserChallenger/>  
    </>
  );
}

const Alert = () => {
  return <div className="bg-red-300 text-red-950 w-full text-center">Button Clicked</div>
}

export default App;
