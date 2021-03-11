import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';

const Item = (props) =>{
    return(
        <Link to={`/show/${props.id}`}>
            <div className='front'>
                <img src={props.image} alt={'image for '+props.title}/>
                <div className='info'>
                    <Avatar className='info__avatar'/>
                    <div className='text'>
                        <h4>{props.title}</h4>
                        <p>{props.channel}</p>
                        <p>{props.views} • {props.time}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Item;