import React from 'react';

const SidebarItem = (props) =>{
    return(
        <div className='item'>
            <props.icon className='item__icon'/>
            <h2>{props.title}</h2>
        </div>
    );
}

export default SidebarItem;