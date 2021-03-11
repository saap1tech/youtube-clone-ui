import React from 'react';
import './Sidebar.css';
import SidebarItem from './SidebarItem';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HistoryIcon from '@material-ui/icons/History';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SettingsIcon from '@material-ui/icons/Settings';

const Sidebar = () =>{
    return(
        <div className='sidebar'>
            <SidebarItem icon={HomeIcon} title='Home'/>
            <SidebarItem icon={WhatshotIcon} title='Trending'/>
            <SidebarItem icon={HistoryIcon} title='History'/>
            <SidebarItem icon={VideoLibraryIcon} title='Your Videos'/>
            <SidebarItem icon={SubscriptionsIcon} title='Subscriptions'/>
            <SidebarItem icon={WatchLaterIcon} title='Watch later'/>
            <SidebarItem icon={ThumbUpIcon} title='Liked videos'/>
            <SidebarItem icon={SportsEsportsIcon} title='Gaming'/>
            <SidebarItem icon={LiveTvIcon} title='Live'/>
            <SidebarItem icon={SettingsIcon} title='Settings'/>
        </div>
    );
}

export default Sidebar;