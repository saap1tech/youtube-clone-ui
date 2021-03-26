import React from 'react';
import './Header.css';
import Logo from './images/logo2.png';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';

const Header = () =>{
    return(
        <div className='header'>
            <div className='user'>
                <MenuIcon className='icon'/>
                Hello <Avatar className='icon'/>
                <NotificationsIcon className='icon'/>
            </div>
            <div className='search'>
                <div class="searchBox">
                    <input class="searchInput"type="text" name="" placeholder="Search"/>
                        <button class="searchButton" href="#">
                            <i class="material-icons">
                                <SearchIcon/>
                            </i>
                        </button>
                </div>
            </div>
            <div className='header__right'>
                <AppsIcon className='icon'/>
                <Link to='/upload'>
                    <VideoCallIcon className='icon'/>
                </Link>
                <Link to='/'>
                    <img className='logo' src={Logo} alt='logo'/>
                </Link>
            </div>
        </div>
    );
}

export default Header;