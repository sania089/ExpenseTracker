import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import SignupForm from './signupform';
// import SignupItem from './SignupItem';

function Signup() {
    const {getDetails, signtry , addDetails} = useGlobalContext()

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
                </div>
            </InnerLayout>
        </SignupStyled>
    )
}

const SignupStyled = styled.div`
    display: flex;
    overflow: auto;
    }
    .detail-content{
        display: flex;
        gap: 2rem;
        .details{
            flex: 1;
        }
    }
`;

export default Signup