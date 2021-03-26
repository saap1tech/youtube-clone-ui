import React, { useState } from "react";
import './upload.css';
import axios from '../axios';
import { Redirect } from "react-router-dom";

const Upload = () => {

    const [videoUp, setVideoUp] = useState('');
    const [videoName, setVideoName] = useState('Choose video');

    const onChangeVideo = (e) => {
        setVideoUp(e.target.files[0]);
        setVideoName(e.target.files[0].name);
    }

    const [imgUp, setImgUp] = useState('');
    const [imgName, setImgName] = useState('Choose image');

    const onChangeImg = (e) => {
        setImgUp(e.target.files[0]);
        setImgName(e.target.files[0].name);
    }

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const [uploadPercentage, setUploadPercentage] = useState(0);

    const onSubmitData = async e => {
        e.preventDefault();
        let formData = new FormData(e.target);
        formData.append('title', title);
        formData.append('desc', desc);
        formData.append('channel', 'test');
        formData.append('image', imgUp);
        formData.append('video', videoUp);

        const config = {     
            headers: {
                'content-type': 'multipart/form-data',
            },
            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN',

            onUploadProgress: ProgressEvent =>{
                setUploadPercentage(parseInt(Math.round((ProgressEvent.loaded * 100)/ProgressEvent.total)))

                setTimeout(()=> setUploadPercentage(0), 10000);
            }
        }

        axios.defaults.xsrfHeaderName = "X-CSRFToken";
        axios.defaults.xsrfCookieName = 'csrftoken';

        await axios.post('post/', formData, config)
         .then((res)=>{
             console.log(res.data);
         })
         .catch((err)=>console.log(err))
        }

        if (uploadPercentage === 100) {
            return <Redirect to='/' />
        }

    return(
        <div className='up'>
            <form onSubmit={onSubmitData} className='upload_form' encType="multipart/form-data">
                <div class="custom-file">
                    <input onChange={onChangeVideo} type="file" className="custom-file-input" id="customFile"/>
                    <label className="custom-file-label" htmlFor="customFile">{videoName}</label>
                </div>

                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Video title : </label>
                    <div className="col-sm-10">
                        <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" className="form-control" id="colFormLabel" placeholder="Title example" />
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="validationTextarea">Video description : </label>
                    <textarea onChange={(e)=>setDesc(e.target.value)} value={desc} className="form-control" id="validationTextarea" placeholder="Write the description of your video"></textarea>
                </div>
                
                <div class="custom-file">
                    <input onChange={onChangeImg} type="file" className="custom-file-input" id="customFile"/>
                    <label className="custom-file-label" htmlFor="customFile">{imgName}</label>
                </div>
                {uploadPercentage === 0 ? <button class="btn btn-primary" type="submit">Submit</button>
                 : <progress className='progress_bar' max='100' value={uploadPercentage}></progress>}
            </form>
        </div>
    )
}

export default Upload;