import React from "react";
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';

const VideoRight = (props) =>{
    return(
        <Link to={`/show/${props.id}`}>
            <div className='right'>
                <img src={props.image} alt={'image for '+props.title}/>
                <div className='right_info'>
                    <Avatar className='right_avatar'/>
                    <div className='right_text'>
                        <h5>{props.title}</h5>
                        <p>{props.channel}</p>
                        <p>{props.views} • {props.time}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default VideoRight;