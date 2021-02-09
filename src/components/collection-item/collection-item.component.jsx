import React from 'react';
import {withRouter} from 'react-router-dom';
import './collection-item.styles.scss';

const Item = ({title, imageUrl, linkUrl, history}) => {
    return (
        <div className='item' style={{backgroundImage: `url(${imageUrl})`}} onClick={() => history.push(`${linkUrl}`)}>
            <div className='item-title'><h3 className='title'>{title.toUpperCase()}</h3></div>
        </div>
    );
}

export default withRouter(Item);