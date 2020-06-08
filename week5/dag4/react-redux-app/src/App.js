import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signIn, signOut } from "./actions";

function App() {
  const { counter, loggedIn } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Count: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(3))}>-</button>

      {!loggedIn ? (
        <button onClick={() => dispatch(signIn())}>Log In</button>
      ) : (
        ""
      )}
      {loggedIn ? (
        <button onClick={() => dispatch(signOut())}>Log Out</button>
      ) : (
        ""
      )}
      {loggedIn ? <h3>Only visible when logged in</h3> : ""}
    </div>
  );
}

export default App;
