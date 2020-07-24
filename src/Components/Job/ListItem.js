import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'

function ListItem(props) {
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo('en-US');

    //get base url form complete link.
    let pathArray = props.story.url ? props.story.url.split( '/' ) : '';

    return (
        <div className="news__listItem">
            <div className="news_pointInfo">
                <div className="news__point">
                    <span>{props.story.score}</span>
                    <label>Points</label>
                </div>
                <div className="all_news_info">
                    <h2>{props.numbers + 1}- {props.story.title}</h2>
                    <div className="time_author_url">
                        <label className="time">
                            <span className="material-icons">access_time</span>
                            <span>{timeAgo.format(props.story.time)}</span>
                        </label>
                        <label className="author">
                            <span className="material-icons">person</span>
                            <span>{props.story.by}</span>
                        </label>
                        <label className="url">
                            <span className="material-icons">link</span>
                            <span>{pathArray[0] + '//' + pathArray[2]}</span>
                        </label>
                    </div>
                </div>
            </div>
            {props.story.url && <a href={props.story.url} title="detail link" className="read_more" target="_blank">Read more</a>}
        </div>
    )
}

export default ListItem;
