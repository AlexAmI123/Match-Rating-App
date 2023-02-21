import React from "react";

const ReviewForm = (props) => {
    return(
    <div className="Wrapper">
        <form>
            <div>Have an opinion of the match: [name here]? Share it!</div>
            <div className="field">
                <input type="text" name="title" placeholder="Review Title"/>
            </div>
            <div className="field">
                <input type="text" name="description" placeholder="Review Title"/>
            </div>
            <div className="field">
                <div className="rating-container">
                    <div className="rating-title-text">Rate this Match</div>
                    [star rating goes here]
                </div>
            </div>
            <button type="submit">Submit your Review</button>
        </form>
    </div>
    )
}

export default ReviewForm