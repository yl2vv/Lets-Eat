import React, {useState} from 'react';
// import styles from './Dropdowns.css';

export function Dropdowns(props) {
    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');

    function submit(e) {
        if(typeof props.search === 'function') {
            props.search(term, location);
        }
        console.log(term, location);
        e.preventDefault();
    }

    // const sizeClass = props.small ? '' : 'is-medium';
    return (
        <form onSubmit={submit}>
            <div className="field has-addons">

                {/* <p className="control">
                     <select id="lang" onChange={(e) => setTerm(e.target.value)} value={term}>
                        <option value="food">any</option>
                        <option value="chinese">chinese</option>
                        <option value="burgers">burgers</option>
                    </select>
                </p> */}

                <p className="control">
                    <input
                           onChange={(e) => setTerm(e.target.value)}
                           type="text"
                           value={term}
                           placeholder="What"/>
                </p>

                <p className="control">
                    <input
                           onChange={(e) => setLocation(e.target.value)}
                           type="text"
                           value={location}
                           placeholder="Where"/>
                </p>

{/* 
                <select id="loc" onChange={(e) => setLocation(e.target.value)} value={location}>
                        <option value="Charlottesville">Charlottesville</option>
                        <option value="Centreville">Centreville</option>
                        <option value="Greensboro">Greensboro</option>
                </select> */}

                <div className={`button`} onClick={submit}>
                    Search
                </div>
            </div>
        </form>
    );
}