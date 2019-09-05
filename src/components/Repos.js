import React from 'react';

const Repos = props => (
    <div>
        {
            props.repo && <p className="user_details__key">Repos:
       <span className="user_details__value">{props.repo}</span>
            </p>
        }
    </div>
);

 
export default Repos;