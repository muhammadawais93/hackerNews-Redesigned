import React, { useContext } from 'react';
import ListItem from './ListItem';
import { HackerNewsContext } from '../../ContextAPI';

function List() {
    const { TopSotries } = useContext(HackerNewsContext);
    return (
        <div className="news__list container">
            <h1>News Of Today</h1>
            <div className="list_container">
                <div className="news__listItems">
                {TopSotries.map((item, index) => (
                    <ListItem key={index} story={item} numbers={index}/>
                ))}
                </div>
            </div>
        </div>
    )
}

export default List;
