import React from "react";
import { BrowserRouter as Router, Link} from "react-router-dom";

const Match = (props) => {
    return(
        <div className="card">
            <div className="Match-Flag1"> <img src={props.attributes.image_url1}/> <img src={props.attributes.image_url2}/> </div>
            <div className="Match-name">{props.attributes.name}</div>
            <div className="Match-score">{props.attributes.avg_score}</div>
            <div className="Match-link">
                <Link to={`/matches/${props.attributes.slug}`}> View Match</Link>
            </div>
        </div>
    )
}

export default Match