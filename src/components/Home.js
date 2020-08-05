import React from 'react';
import "./Home.css"
import { HomeFields } from './HomeFields';
import useReactRouter from 'use-react-router';

export function Home() {
    const {history} = useReactRouter();

    function search(term, location) {
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        history.push(`/search/one?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);
    }

    return (
        <div className="screen">
            <h1>Let's Eat!</h1>
            <h5>Randomly generate a place to eat!</h5>
            <div className="searchbar">
                <HomeFields search={search} />
            </div>  
            <div className="bottomFoot">
            <p>Created by James Lim, 2020</p> 
            </div>   
        </div>
    );
}
