import React from 'react';
// import styles from './Home.css'
import Footer from './Footer';
import { Link } from 'react-router-dom';

export function Home() {

    return (
        <div>
            <h1>Let's Eat!</h1>
            <div>
                <Link to ='/one'>alone</Link>
            </div>
            <div>
                <Link to ='/searching'>searching</Link>
            </div>
            <Footer/>
        </div>
    );
}