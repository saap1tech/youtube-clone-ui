import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from '../axios';
import './Body.css';
import Avatar from '@material-ui/core/Avatar';
import VideoRight from './VideoRight';

const Body = () =>{
    const {id} = useParams();
    const [item, setItem] = useState([]);

    const getItem = () =>{
        axios.get(`get_item/${id}/`)
        .then((res)=>{
            setItem(res.data[0])
         })
         .catch(err => {
            console.error(err);
        })
    }

    const [all, setAll] = useState([]);

    const getAll = () =>{
        axios.get(`get_all/`)
        .then((res)=>{
            setAll(res.data)
         })
         .catch(err => {
            console.error(err);
        })
    }
    useEffect(()=>{
        getItem()
    });

    useEffect(()=>{
        getAll()
    }, [])

    return(
        <div>
            {item.video ?
                <div className='all'>
                    <div className='item_video'>
                        <video width="100%" src={`http://127.0.0.1:8000/media/${item.video}`} controls autoPlay/>
                        <div className='title_video'>
                            <h2>{item.title}</h2>
                        </div>
                        <div className='info_video'>
                            <div className='channel'>
                                <Avatar/> 
                                <h4>{item.channel}</h4>
                            </div>
                            <h5>{item.views} views in {item.time}</h5>
                        </div>
                    </div>
                    <div className='videos'>
                    {all.map(({id, title, channel, image, views, time}) => 
                        id === item.id ? ''
                        : <VideoRight id={id} image={`http://localhost:8000/media/${image}/`} title={title} channel={channel} views={views} time={time} />
                        
                    )}
                    </div>
                </div>
                : <h1>Loading</h1>
            }
        </div>
    );
} 

export default Body;