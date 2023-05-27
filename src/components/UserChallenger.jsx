import React, { useState } from "react";

function UserChallenger() {
  const [user, setUser] = useState(false);

  const login = () => {
    setUser({ name: "Welcome to Vegan Truck" });
  };

  const logout = () => {
    setUser(null);
  };

  const [toggle, setToggle] = useState(false)

  console.log(toggle);

  return (
    <div className="m-auto w-3/4 mt-20">
      <h1 className="font-bold text-center text-4xl">User Challenge</h1>
      <div className="flex justify-center text-cente my-20 ">
        {user ? (
          <div>
            <h4>Hello There, {user.name}</h4>
            <button
              onClick={logout}
              className="btn border-style: solid border-2 px-5 rounded-lg border-gray-950 font-bold"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <h4>Please Login </h4>
            <button
              onClick={login}
              className="btn border-style: solid border-2 px-5 rounded-lg border-gray-950 font-bold"
            >
              Login
            </button>
          </div>
        )}
      </div>

      <h1 className="font-bold text-center text-4xl">Cleanup Function </h1>
            <div className="flex gap-2 justify-center my-10">
                <button onClick={() => setToggle(!toggle)} className="btn w-1/2 border-style: solid border-2 px-5 rounded-lg border-gray-950 font-bold">Toggle</button>
                {toggle && <RandomComponent />}
            </div>
           
    </div>
  );
}

const RandomComponent = () => {
    return <h1 className="font-bold text-4xl">Hello There</h1>
}

export default UserChallenger;
