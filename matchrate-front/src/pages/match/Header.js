import React from "react"
import styled from "styled-components"
import Match from "./Match"

const Wrapper = styled.div`
    padding: 50px 100px 50px 0;
    font-size: 30px;
    text-align: center;
`

const TotalReviews = styled.div`
    font-size: 18px;
    padding: 10px 0;
`

const TotalOutOf = styled.div`
font-size: 18px;
font-weight: bold;
padding: 10px 0;
`

const Flag = styled.div`
.fi.fis{
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 1px solid #efefef;
}
`

    const Header = (props) => {
        const {name, c1alpha2, c2alpha2, avg_score} = props.attributes
        const total = props.reviews.length
        
        return(
            <Wrapper>
                <Flag><div class={`fi fi-${props.attributes.c1alpha2} fis`}></div> <div class={`fi fi-${props.attributes.c2alpha2} fis`}></div></Flag>
                <h1>{name}</h1>
                <TotalReviews>{total} user reviews.</TotalReviews>
                <div className="StarRating"></div>
                <TotalOutOf>{avg_score} out of 5</TotalOutOf>
            </Wrapper>
        )
    }

export default Header