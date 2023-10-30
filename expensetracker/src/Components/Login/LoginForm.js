import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { useGlobalContext } from "../../context/globalContext";
import { useNavigate } from 'react-router-dom';


function LoginForm() {
  const navigate = useNavigate();
//   const { loginUser } = useGlobalContext();

  const [inputState, setInputState] = useState({
    username: "",
    password: "",
  });

  const notAMember = () => {
    navigate('/signup'); 
  };

  const { username, password } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // // Send the username and password to the login function
    // loginUser(username, password);

    setInputState({
      username: "",
      password: "",
    });
  };
  const login = async () => {
    const loggedInResponse = await fetch("http://localhost:5000/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({username: username, password: password}),
    });
    const loggedIn = await loggedInResponse.json();
    console.log(loggedIn)
    if (loggedIn.message === "Invalid credentials. Password does not match." ||loggedIn.message === "Both username and password are required." || loggedIn.message === "Invalid credentials. User not found."  ) {
     console.log('not logged in')
      
    }
    else {
      console.log('logged in')
      navigate("/dashboard");
    }
  };

  return (
    <FormContainer>
      <LoginHeading>Login</LoginHeading>
      <FormBox>
      
    <FormStyled onSubmit={handleSubmit}>
      <div className="input-control">
        <input
          type="text"
          value={username}
          name="Username"
          placeholder="Enter your username"
          onChange={handleInput("username")}
        />
      </div>
      <div className="input-control">
        <input
          type="password"
          value={password}
          name="Password"
          placeholder="Enter your password"
          onChange={handleInput("password")}
        />
      </div>
      <div className="submit-btn">
        <Button
          name="Login"
          bPad=".8rem 1.6rem"
          bRad="30px"
          bg="var(--color-accent)"
          color="#fff"
          onClick={login}
          
        />
        </div>
        <div className="not-a-member">
        <Button
          name="Not a Member"
          bPad=".8rem 1.6rem"
          bRad="30px"
          bg="var(--color-green)" 
          color="#fff"
          onClick={notAMember}
          />
        
      </div>
    </FormStyled>

    </FormBox>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  height: 100vh;
`;

const LoginHeading = styled.h2`
  font-size: 5rem;
  color: var(--color-text);
  margin-bottom: 1rem;
`;

const FormBox = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  height: 500px; /* Increase the height to make it bigger */
  width: 400px;  /* Increase the width to make it bigger */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  input {
    width: 100%;
    padding: 1.5rem;
    border: none;
    border-bottom: 2px solid var(--color-accent);
    background: transparent;
    color: var(--color-text);
    font-size: 1.5rem;
    transition: border-bottom 0.2s;

    &::placeholder {
      color: var(--color-placeholder);
      
    }

    &:focus {
      border-bottom: 2px solid var(--color-accent-hover);
    }
  }

  .submit-btn {
    display: flex;
    justify-content: center;
    button {
      width: 100%;
      padding: 1rem;
      border: none;
      border-radius: 30px;
      background: var(--color-accent);
      color: #fff;
      font-size: 1.5rem;
      cursor: pointer;
      justify-content: center;
      transition: background 0.2s;

      &:hover {
        background: var(--color-accent-hover);
      }
    }
  }

  .not-a-member {
    display: flex;
    justify-content: center;
    button {
      width: 100%;
      padding: 1rem;
      border: none;
      border-radius: 30px;
      background: var(--color-green);
      color: #fff;
      font-size: 1.5rem;
      cursor: pointer;
      justify-content: center;
      transition: background 0.2s;

      &:hover {
        background: var(--color-green-hover);
      }
    }
  }
};
`
export default LoginForm;
