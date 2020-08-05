import React from 'react';
import { SearchResult } from './SearchResult';
import styles from './SingleSearch.css';
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
        <div className="result">
            {searchResults}
        </div>
    );
}