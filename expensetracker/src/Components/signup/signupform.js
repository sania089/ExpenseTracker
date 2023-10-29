import React from "react";
import { useState } from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../Button/Button";
import { plus } from "../../utils/Icons";
import { useGlobalContext } from "../../context/globalContext";

function SignupForm(){
    const{addDetails, getDetails} = useGlobalContext()
    const [inputState, setInputState] = useState({
        name: '',
        username:'',
        password: '',
        age: '',
        profession: '',
    })
    const{name,username,password,age,profession}= inputState
    const handleInput= name => e => {
        setInputState({...inputState, [name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        addDetails(inputState)
        // getDetails()
        setInputState({
            name: '',
            username:'',
            password: '',
            age: '',
            profession: '',
        })
    }
    return(
        <FormStyled onSubmit={handleSubmit}>
            <div className="input-control">
                <input 
                type="text" 
                value={name}
                name={"Name"}
                placeholder="Enter your Name"
                onChange={handleInput('name')}

                />

            </div>
            <div className="input-control">
                <input 
                type="text" 
                value={username}
                name={"Username"}
                placeholder="Enter your username"
                onChange={handleInput('username')}

                />
                
            </div>
            <div className="input-control">
                <input 
                type="integer" 
                value={age}
                name={"Age"}
                placeholder="Enter your age"
                onChange={handleInput('age')}

                />
                
            </div>
            <div className="input-control">
                <input 
                type="text" 
                value={password}
                name={"Password"}
                placeholder="Enter your password"
                onChange={handleInput('password')}

                />
                
            </div>
            <div className="input-control">
                <input 
                type="text" 
                value={profession}
                name={'profession'}
                placeholder="Enter your profession"
                onChange={handleInput('profession')}

                />

            </div>
            <div className="submit-btn">
                <Button 
                    name={'Add Details'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
            </div>

        </FormStyled>
    )
}
const FormStyled=styled.form`
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
    .input-control{
        input{
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
export default SignupForm