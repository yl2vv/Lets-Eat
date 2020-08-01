import React from 'react';
import { SingleSearch } from './SingleSearch';
import useReactRouter from 'use-react-router';
import {YelpSearch} from '../../hooks/api/yelpSearch';
import { Link } from 'react-router-dom';

export function Results() {
    const {location, history} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const [businesses, performSearch] = YelpSearch(term, locationParam);

    if (!term || !locationParam) {
        history.push('/');
    }

    return (
        <div>
             <Link to ='/'>home</Link>
             <h1>How About You Try</h1>
            <SingleSearch businesses={businesses}/>
        </div>
    );
}