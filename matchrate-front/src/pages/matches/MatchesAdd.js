import React, {useState,useEffect,Fragment} from "react";
import axios from "axios"
import styled from "styled-components";

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
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    color:white;
`

const NewForm = (props) => {
    const [match, setMatch] = useState({})

    const handleChange = (e) => {
        e.preventDefault()
        setMatch(Object.assign({}, match, {[e.target.name]: e.target.value} ))
        console.log("match:", match)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:3000/api/v1/matches", {match})


        // LOGS YOU OUT FOR SOME REASON.
        window.location.href = "/"
    }


    return(
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <Headline>Add a Match!</Headline>
                <Field>
                    <input onChange={handleChange} value = {match.name} type="text" name="name" placeholder="Please type he name of the Match: e.g Country1 vs Country2 DATE"/>
                </Field>
                <Field>
                    <input onChange={handleChange} value = {match.c1alpha2} type="text" name="c1alpha2" placeholder="Please type the alpha 2 code of the first country"/>
                </Field>
                <Field>
                    <input onChange={handleChange} value = {match.c2alpha2} type="text" name="c2alpha2" placeholder="Please type he alpha 2 code of the second country"/>
                </Field>
                <SubmitButton type="submit">Add</SubmitButton>
            </form>
        </Wrapper>
        )
    }
    
    export default NewForm