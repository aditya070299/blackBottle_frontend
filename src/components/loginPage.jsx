import { useEffect, useState } from "react";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const loginAuth = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      });
      const result = await response.json();

      console.log("result: ", result);
    } catch (error) {
      console.log("Failed to login", error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginAuth();
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <div>
        <h2>Login Page</h2>
        <form>
          <label for="login page">Login: </label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={(e) => setusername(e.target.value)}
          />
          <label for="password">Password: </label>
          <input
            id="login"
            name="login"
            type="text"
            onChange={(e) => setpassword(e.target.value)}
          />
          <div>
            <button onClick={handleLogin}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
