import React from "react"
import styled from "styled-components"

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
            <div className="wrapper">
                <h1>
                    <Flag><div class={`fi fi-${props.attributes.c1alpha2} fis`}></div> <div class={`fi fi-${props.attributes.c2alpha2} fis`}></div></Flag>Match Name
                </h1>
                <div className="TotalReviews">{total} user reviews.</div>
                <div className="StarRating"></div>
                <div className="TotalOutOf">{avg_score} out of 5</div>
            </div>
        )
    }

export default Header