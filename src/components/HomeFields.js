import React, {useState} from 'react';
import styles from './HomeFields.css';

export function HomeFields(props) {
    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');

    function submit(e) {
        if(typeof props.search === 'function') {
            props.search(term, location);
        }
        console.log(term, location);
        e.preventDefault();
    }
    return (
        <form onSubmit={submit}>
            <div className="items">

                <div className="food">
                    <text className="directions">Select the type of food you want to eat</text>
                     <select className="foodDrop" id="food" onChange={(e) => setTerm(e.target.value)} value={term}>
                        <option value="food">any</option>
                        <option value="american">american</option>
                        <option value="asian">asian</option>
                        <option value="burgers">burgers</option>
                        <option value="chinese">chinese</option>
                        <option value="fast food">fast food</option>
                        <option value="italian">italian</option>
                        <option value="japanese">japanese</option>
                        <option value="pizza">pizza</option>
                        <option value="steak">steak</option>
                        
                    </select>
                </div>

                <div className="location">
                    <text className="directions">Where are you located?</text>
                    <input
                           onChange={(e) => setLocation(e.target.value)}
                           type="text"
                           className="locationType"
                           value={location}
                           placeholder="Where"/>
                </div>

                <div className="button" onClick={submit}>
                    Search
                </div>
            </div>
        </form>
    );
}