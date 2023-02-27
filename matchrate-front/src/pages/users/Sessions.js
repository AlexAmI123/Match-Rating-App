import React, {useState,useEffect,Fragment} from "react";
import axios from "axios"
import styled from "styled-components";
import { redirect } from "react-router-dom";

const Field = styled.div`
    border-radius: 4px;
    input{
        min-height: 50px;
        border-radius: 4px;
        border: 1px solid grey;
        margin: 0 0 12px 0 ;
        padding: 12px;
        width: 100%;
    }
    textarea{
        width: 100%;
        min-height: 80px;
        border-radius: 4px;
        border: 1px solid grey;
        margin: 12px 0 ;
        padding: 12px;
    }
`
const Wrapper = styled.div`
    padding: 20px;
    background:black;
    height: 100vh;
    padding-top: 100px;
    border-radius: 20px;
`
const SubmitButton = styled.button`
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
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color:white;
`

const Sessions = (props) => {
    const [user, setUser] = useState({})

    const handleChange = (e) => {
        e.preventDefault()
        setUser(Object.assign({}, user, {[e.target.name]: e.target.value} ))
        console.log("user:", user)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:3000/api/v1/sessions", {user})

        window.location.href = "/"
    }


    return(
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <Headline>Log In!</Headline>
                <Field>
                    <input onChange={handleChange} value = {user.username} type="text" name="username" placeholder="Please type your Username"/>
                </Field>
                <Field>
                    <input onChange={handleChange} value = {user.email} type="text" name="email" placeholder="Please type your Email"/>
                </Field>
                <Field>
                    <input onChange={handleChange} value = {user.password_digest} type="password" name="password" placeholder="Please type your Password"/>
                </Field>
                <SubmitButton type="submit">Log In</SubmitButton>
            </form>
        </Wrapper>
        )
    }
export default Sessions