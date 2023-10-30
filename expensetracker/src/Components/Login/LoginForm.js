import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { useGlobalContext } from "../../context/globalContext";

function LoginForm() {
//   const { loginUser } = useGlobalContext();

  const [inputState, setInputState] = useState({
    username: "",
    password: "",
  });

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

  return (
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
        />
      </div>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  input, textarea, select{
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: .5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder{
        color: rgba(34, 34, 96, 0.4);
    }
  }
  .input-control {
    input {
      width: 100%;
    }
  }
  .submit-btn{
    button{
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        &:hover{
            background: var(--color-green) !important;
        }
    }
}
 
`;

export default LoginForm;
