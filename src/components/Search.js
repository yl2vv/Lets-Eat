import React from 'react';
import { SearchResults } from './SearchResults';
import useReactRouter from 'use-react-router';
import {YelpSearch} from '../hooks/api/yelpSearch';
import { Link } from 'react-router-dom';

export function Search() {
    const {location, history} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const [businesses, performSearch] = YelpSearch(term, locationParam);

    if (!term || !locationParam) {
        history.push('/');
    }

    function search(term, location) {
        const encodedTerm = encodeURI(term);
        const encodedLocation = encodeURI(location);
        history.push(`/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`);
        performSearch({term, location});
    }

    return (
        <div>
             <Link to ='/'>home</Link>
            <SearchResults businesses={businesses}/>
        </div>
    );
}