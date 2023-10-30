import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/Layouts";
import LoginForm from "./LoginForm";
import Button from "../Button/Button";

function Login() {
  
  
  return (
    <LoginStyled>
      <InnerLayout>
        <h1>Login</h1>
        <div className="login-content">
          <div className="form-container">
            <LoginForm />
          </div>
        </div>
      </InnerLayout>
    </LoginStyled>
  );
}

const LoginStyled = styled.div`
display: flex;
    overflow: auto;
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .income-content{
        display: flex;
        gap: 2rem;
        .incomes{
            flex: 1;
        }
    }
button{name="Login";
bPad=".8rem 1.6rem";
bRad="30px";
bg="var(--color-accent)";
color="#fff";}
`;

export default Login;
