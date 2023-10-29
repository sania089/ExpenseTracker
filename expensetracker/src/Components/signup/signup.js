import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import SignupForm from './signupform';
// import SignupItem from './SignupItem';

function Signup() {
    const {getDetails, addDetails} = useGlobalContext()

    useEffect(() =>{
        getDetails()
    }, [])
    return (
        <SignupStyled>
            <InnerLayout>
                <h1>Signup</h1>
                <div className="details-content">
                    <div className="form-container">
                        <SignupForm />
                    </div>
                    <div className="details">
                        {/* {addDetails.map((details) => {
                            const {_id, name,username,password,age,profession} = details;
                            return <>

                            </>
                            
                            // <SignupItem
                            //     key={_id}
                            //     id={_id} 
                            //     name={name} 
                            //     dusername={username} 
                            //     password={password} 
                            //     age={age} 
                            //     profession={profession}
                            //     indicatorColor="var(--color-green)"
                            // />
                        })} */}
                    </div>
                </div>
            </InnerLayout>
        </SignupStyled>
    )
}

const SignupStyled = styled.div`
    display: flex;
    overflow: auto;
    }
    .details-content{
        display: flex;
        gap: 2rem;
        .details{
            flex: 1;
        }
    }
`;

export default Signup