import React from 'react';
import './SearchResult.css';

export function SearchResult(props) {
    const b = props.business;
    if (!b) {
        return (<div/>);
    }

    const tags = b.categories.map(category => (<span className={`tag ${'business-tag'}`} key={b.id + category.title}>{category.title}</span>));
    const addressLines = b.location.display_address.map(addressLine => <p key={b.id + addressLine} className='address'>{addressLine}</p>);

    return (
        <a href={b.url}>
            <div className='search-result'>
            <div className='info'>
                <h2>{b.name}</h2>
                <img src={b.image_url} alt='business' className='img'/>
                <p className="price">{b.price}</p>
                <p className="subInfo"> {tags} </p>
            </div>
            <div className='address'>
                {addressLines}
            </div>
        </div>
        </a>
    )
}