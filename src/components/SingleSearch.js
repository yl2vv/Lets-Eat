import React from 'react';
import { SearchResult } from './SearchResult';
// import styles from './SearchResults.css';
import {Spinner} from './Spinner.js';

export function SingleSearch(props) {
    let searchResults = <Spinner/>;
    if(props.businesses && props.businesses.length) {
        var l = props.businesses.length;
        var rand =  Math.floor(Math.random() * l);

        searchResults = <SearchResult key={props.businesses[rand].id} business={props.businesses[rand]}/>;
        var b = props.businesses[rand];
        console.log(props.businesses.length);
        console.log("hello")
    }



    return (
        <div>
            {searchResults}
            {/* <div>
            <img src={b.image_url} alt='business'/>
            <div>
                <h2>{b.name}</h2>
                <p>{b.price}</p>
            </div>
            <div>
                <p>{b.phone}</p>
                <p>{b.location.display_address}</p>
            </div>
        </div> */}
        </div>
    );
}