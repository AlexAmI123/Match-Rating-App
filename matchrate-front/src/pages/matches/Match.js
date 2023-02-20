import React from "react";
import { BrowserRouter as Router, Link} from "react-router-dom";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Match = (props) => {
    return(
        <div className="card">
            <div className="Match-Flag"> <span class={`fi fi-${props.attributes.c1alpha2} fis`}></span> <span class={`fi fi-${props.attributes.c2alpha2} fis`}></span></div>
            <div className="Match-name">{props.attributes.name}</div>
            <div className="Match-score">{props.attributes.avg_score}</div>
            <div className="Match-link">
                <Link to={`/matches/${props.attributes.slug}`}> View Match</Link>
            </div>
        </div>
    )
}

export default Match