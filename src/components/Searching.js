import React from 'react';
import styles from './Searching.css'
import { SearchBar } from './SearchBar';
import useReactRouter from 'use-react-router';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export function Searching() {
    const {history} = useReactRouter();

    function search(term, location) {
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);
    }

    return (
        <div className={styles.landing}>
            <Link to ='/'>home</Link>
            <div className={styles['search-area']}>
                <SearchBar search={search} />
            </div>
            <Footer />
        </div>
    );
}