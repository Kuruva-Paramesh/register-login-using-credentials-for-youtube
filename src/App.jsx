import { useState } from "react";
import "./App.css";
import KK from "./kk";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [con, setCon] = useState(true); // true = login, false = register
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const backendURL = "https://reg-log-umber.vercel.app/api/users";

  // =========================
  // REGISTER FUNCTION
  // =========================
  async function Reg() {
    if (!name || !email || !password) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const res = await fetch(`${backendURL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      alert(data.message);

      if (res.ok) {
        setCon(true); // Switch to login after successful registration
        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      alert("Server error ❌");
      console.error(error);
    }
  }

  // =========================
  // LOGIN FUNCTION
  // =========================
  async function Login() {
    if (!email || !password) {
      alert("Please fill email & password!");
      return;
    }

    try {
      const res = await fetch(`${backendURL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Invalid credentials ❌");
        return;
      }

      alert(data.message);
      setIsLoggedIn(true);
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert("Server error ❌");
      console.error(error);
    }
  }

  // =========================
  // IF LOGGED IN SHOW KK COMPONENT
  // =========================
  if (isLoggedIn) {
    return <KK />;
  }

  // =========================
  // RENDER LOGIN / REGISTER
  // =========================
  return (
    <>
      <div className="card">
        {con ? (
          <div className="car">
            <h1>Login</h1>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
            />
            <button className="c" onClick={Login}>
              Login
            </button>
            <small>
              Don't have an Account?{" "}
              <button onClick={() => setCon(false)}>Sign up</button>
            </small>
          </div>
        ) : (
          <div className="car">
            <h1>Register</h1>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
            />
            <button className="c" onClick={Reg}>
              Register
            </button>
            <small>
              Already have an Account?{" "}
              <button onClick={() => setCon(true)}>Login</button>
            </small>
          </div>
        )}
      </div>
    </>
  );
}