import React from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";


const Wrapper = styled.div`
    padding: 20px;
    background:black;
    height: 100vh;
    padding-top: 100px;
    border-radius: 20px;
`
const LoginButton = styled.button`
    color: white;
    background: #333;
    border-radius: 4px;
    border 1px solid white;
    padding: 12px;
    font-size: 18px;
    cursor: pointer;
    transition: ease-in-out 0.1s;
    width: 100%;
    margin-top: 20px

    &:hover {
        background: white;
        color:black;
        border: 1px solid white;
    }
`
const Headline = styled.div`
    padding: 20px;
    font-size: 30px;
    font-weight: bold;
    color:white;
`

const LoginPrompt = () => {

    return(
    <Wrapper>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css"></link>
        <Headline>You need to Log In to write reviews:</Headline>
        <LoginButton><Link to="/Login">Log In Here!</Link></LoginButton>
    </Wrapper>
    )
}

export default LoginPrompt