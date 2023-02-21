import React, { useState, useEffect, Fragment} from "react"
import axios from 'axios'
import Match from "./Match"
import styled from "styled-components"
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Home = styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right; auto;
    `
const Header = styled.div`
    padding: 100px 100px 10px 100px;

    h1{
        font-size; 42px
    }
    `
const Subheader = styled.div`
    font-weight: 300;
    font-size: 42px;
`
const Grid = styled.div`
    diplay: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
`



const Matches = () => {
    const[matches, setMatches] = useState([])

    const API_URL = "http://localhost:3000/api/v1/matches"

    useEffect(() =>{
        axios
        .get(API_URL)
        .then(resp => setMatches(resp.data.data))
        .catch(resp => console.log(resp))
    }, [matches.length])

    const grid = matches.map( item => {
        return (
        <Match 
            key={item.attributes.name}
            attributes={item.attributes}
        />
        )
    })


    return (
    <Home>
        <Header>
            <h1>MatchRate</h1>
            <Subheader>Real people's opinions on Matches</Subheader>
        </Header>
        <Grid> 
            {grid}
        </Grid>
    </Home>
    )
}
export default Matches