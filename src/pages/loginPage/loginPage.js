import React, { useState } from "react";
import "./loginPage.css"; // Import CSS file for styling
import { useNavigate } from "react-router-dom";
import imageUrl from "../../assets/images/food1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faLock } from "@fortawesome/free-solid-svg-icons";
import { login } from "../../services/loginPageApi";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLoginButton = async () => {
    if (username === "" && password == "") {
      alert("Please enter Username && Password!");
    } else {
      try {
        const userData = await login({
          username: username,
          passwordHash: password,
        });
        console.log("Logged in successfully:", userData);
        if (userData.UserRole === "Waiter") navigate("/waiter-page");
        else if (userData.UserRole === "Cashier")
          navigate("/cashier-home-page");
        else if (userData.UserRole === "KitchenStaff")
          navigate("/kitchen-staff");
      } catch (error) {
        alert("Incorrect Username or Password!")
        console.error("Login failed:", error);
      }
    }
  };

  const LoginButton = () => {
    return (
      <button
        className="login-button"
        style={{ backgroundColor: "rgb(241, 149, 10)", width: "80%" }}
        onClick={handleLoginButton}
      >
        Login
      </button>
    );
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className="login-page-main-container">
        <div style={{ fontWeight: "Bold", fontSize: "180%" }}>Welcome</div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "63%",
              borderRadius: "50%",
              overflow: "hidden",
              marginRight: "10%",
            }}
          >
            <img
              src={imageUrl}
              alt="Image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div style={{ fontSize: "130%", marginRight: "3%" }}>Yarl</div>
          <div style={{ fontSize: "130%" }}>Vibe</div>
        </div>
        <div
        style={{
          justifyContent: "start",
          alignItems: "start",
          width: "90%",
          marginBottom: "5%",
          marginTop: "10%",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{ fontWeight: "500", fontSize: "100%", marginRight: "3%" }}
          >
            Username
          </div>
          <FontAwesomeIcon icon={faIdCard} />
        </div>

        <input
          type="text"
          className="userID-text-field"
          placeholder="########"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
        <div
        style={{ justifyContent: "start", alignItems: "start", width: "90%" }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{ fontWeight: "500", fontSize: "100%", marginRight: "3%" }}
          >
            Password
          </div>
          <FontAwesomeIcon icon={faLock} />
        </div>

        <input
          type={showPassword ? "text" : "password"}
          className="userID-text-field"
          placeholder="**********"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
        />
      </div>
        <div className="show-password-checkbox">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={togglePasswordVisibility}
          />
          <div style={{ fontSize: "80%" }}>Show Password</div>
        </div>
        <LoginButton />
      </div>
    </div>
  );
};

export default LoginPage;
