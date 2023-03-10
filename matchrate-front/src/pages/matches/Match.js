import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Rating from "../rating/Rating";

const Card = styled.div`
    border: 1px solid #efefef;
    background: white;
    text-align: center;
    border-radius: 15px;
`
const Flag = styled.div`
    .fi.fis{
        width: 50px;
        height: 50px;
        border-radius: 100%;
        border: 1px solid #efefef;
    }
`
const MatchName = styled.div`
    padding: 20px 0 20px 0;
`

const LinkWrapper = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;

    a {
        color: white;
        background: black;
        border-radius: 4px;
        padding: 10px 50px;
        border: 1px solid black;
        width: 100%;
        text-decoration: none;
    }
`

const Match = (props) => {
    return(
        <Card>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css"></link>
            <Flag> 
                <div class={`fi fi-${props.attributes.c1alpha2} fis`}></div> <div class={`fi fi-${props.attributes.c2alpha2} fis`}></div>
            </Flag>
            <MatchName>{props.attributes.name}</MatchName>
            <Rating score={props.attributes.avg_score}/>
            <LinkWrapper>
                <Link to={`/matches/${props.attributes.slug}`}> View Match</Link>
            </LinkWrapper>
        </Card>
    )
}

export default Match