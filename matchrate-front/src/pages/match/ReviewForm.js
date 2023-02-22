import React, {Fragment} from "react";
import styled from "styled-components";
import Gray from "./Stars/gray";
import Selected from "./Stars/selected";
import Hover from "./Stars/hover";

const RatingContainer = styled.div`
    text-align: center;
    border-radius: 4px;
    font-size: 18px;
    padding: 40px 0 10px 0;
    border: 1px solid grey;
    background: white;
`
const RatingBox = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    position: relative;
    margin-top: 12px;

    input{
        display:none;
    }
    label{
        cursor:pointer;
        width: 40px;
        height: 40px;
        background-image: url("data:image/svg+xml;charset=UTF-8,${Gray}");
        background-repeat: no-repeat;
        background-position:center;
        background-size: 70%;
    }

    input:checked ~ label,
    input:checked ~ label ~ label{
        background-image: url("data:image/svg+xml;charset=UTF-8,${Selected}");
    }
    input:not(:checked) ~ label:hover,
    input:not(:checked) ~ label:hover ~ label{
        background-image: url("data:image/svg+xml;charset=UTF-8,${Hover}");
    }
`

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
    color:white;
`
const RatingTitle = styled.div`
    font-size: 20px;
    padding-bottom: 20px;
    font-weight: bold;
`

const ReviewForm = (props) => {
    const ratingOptions = [5,4,3,2,1].map( (score, index) => {
        return(
            <Fragment>
                <input type="radio" value={score} checked={props.review.score == score} name="rating" onChange={() => console.log("selected", score)} id={`rating-${score}`}/>
                <label onClick={props.setRating.bind(this,score)}></label>
            </Fragment>
        )
    })

    return(
    <Wrapper>
        <form onSubmit={props.handleSubmit}>
            <Headline>Have an opinion of the match: {props.attributes.name}? Share it!</Headline>
            <Field>
                <input onChange={props.handleChange} value = {props.review.title} type="text" name="title" placeholder="Review Title"/>
            </Field>
            <Field>
                <input onChange={props.handleChange} value = {props.review.description} type="text" name="description" placeholder="Review Title"/>
            </Field>
            <Field>
                <RatingContainer>
                    <RatingTitle>Rate this Match</RatingTitle>
                    <RatingBox>
                        {ratingOptions}
                    </RatingBox>
                </RatingContainer>
            </Field>
            <SubmitButton type="submit">Submit your Review</SubmitButton>
        </form>
    </Wrapper>
    )
}

export default ReviewForm