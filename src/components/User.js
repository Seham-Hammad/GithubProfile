import React from 'react';

const User = props => (
    
    <div className="">
        {
            props.name && <p className="user_details__key">Name: 
                 <span className="user_details__value">{props.name}</span>
            </p>
        }
        {
            props.id && <p className="user_details__key">Id: 
                <span className="user_details__value">{props.id}</span>
            </p>
        }
        {
            props.organization && <p className="user_details__key">Organization: 
               <span className="user_details__value">{props.organization}</span>
            </p>
        }
        {
            props.bio && <p className="user_details__key">Bio: 
               <span className="user_details__value">{props.bio}</span>
            </p>
        }
    </div>
);
 
export default User;