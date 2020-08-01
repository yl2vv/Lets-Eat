import React from 'react';
import { Dropdowns } from './Dropdowns';
import useReactRouter from 'use-react-router';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export function Select() {
    const {history} = useReactRouter();

    function search(term, location) {
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        history.push(`/search/one?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);
    }

    return (
        <div>
            <Link to ='/'>home</Link>
            <div>
                <Dropdowns search={search} />
            </div>        
            <Footer />
        </div>
    );
}