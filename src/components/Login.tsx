import React, { useState } from "react";
import { StyledLogin } from "../css/Login.styled";
import Reminder from "../assets/Reminder.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/slices/authSlice";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface UserCredentials {
  username: string;
  password: string;
}

const Login = () => {
  const [action, setAction] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateForm = () => {
    if (!username || !password) {
      toast.error("Please fill out all fields");
      return true;
    }
  };

  const loginUser = async () => {
    if (validateForm()) {
      return;
    }
    setLoading(true);

    const response = await axios
      .post(
        "https://todo-fullstack-client.herokuapp.com/auth/login",
        {
          username,
          password,
        } as UserCredentials,
        { withCredentials: true }
      )
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.error);
        return;
      });

    setLoading(false);

    //request never reached server
    if (!response) {
      return;
    }

    //request returned 200
    toast.success("Login Successful!");
    dispatch(setToken(response.data.accessToken));
    navigate("/home/all");
  };

  const signUpUser = async () => {
    if (validateForm()) {
      return;
    }
    setLoading(true);
    const response = await axios
      .post("https://todo-fullstack-client.herokuapp.com/auth/register", {
        username,
        password,
      } as UserCredentials)
      .catch((error) => {
        console.log(error.response.data.error);
        toast.error(error.response.data.error);
        setLoading(false);
        return;
      });

    setLoading(false);
    //request never reached server
    if (!response) {
      return;
    }

    toast.success("Account Created!");
  };

  return (
    <StyledLogin>
      <div className="svgContainer">
        <h1 className="compMoto">A New Way to Get More Done</h1>
        <img src={Reminder} />
      </div>
      <div className="loginContainer">
        <div className="formWrapper">
          <div className="formInfo">{action ? "Sign Up" : "Login"}</div>
          <div className="formBody">
            <div className="formInput">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="formInput">
              <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="formFooter">
            <p className="message" onClick={() => setAction(!action)}>
              {action ? "Already a Member?" : "Not a Member?"}
            </p>
            <button
              className="sub"
              disabled={loading}
              onClick={action ? signUpUser : loginUser}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
