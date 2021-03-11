import React, { useEffect, useState } from 'react';
import './Videos.css';
import Item from './Item';
import axios from '../axios';

const Videos = () =>{

    const [videos, setVideos] = useState([]);

    const getVideos = () =>{
        axios.get('get_all/')
         .then((res)=>{
            setVideos(res.data)
         })
         .catch(err => {
            console.error(err);
        });
    }

    useEffect(()=>{
        getVideos()
    });
    return(
        <div className='content'>
            {videos.map(({id, title, channel, image, views, time}) => 
                <Item id={id} image={`http://localhost:8000/media/${image}/`} title={title} channel={channel} views={views} time={time} />
    )}
        </div>
    );
}

export default Videos;