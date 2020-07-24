import React from 'react';
import { Link } from 'react-router-dom';

function Filter() {
    return (
        <div className="hackerNews__header__filter">
            <div className="hackerNews__header__inner container">
                <div className="left_bar">
                <Link to="/"><span>Stories</span></Link>
                <Link to="ask"><span>Ask</span></Link>
                <Link to="jobs"><span>Jobs</span></Link>
                <Link to="/"><span>Comments</span></Link>
                <Link to="/"><span>Poll</span></Link>
                <Link to="/"><span>Submit</span></Link>
                </div>
                {/* <div className="right_bar">
                    <span>Submit</span>
                </div> */}
            </div>
        </div>
    )
}

export default Filter;
