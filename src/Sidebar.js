import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExploreIcon from '@material-ui/icons/Explore';
import MessageIcon from '@material-ui/icons/Message';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from '@material-ui/core'
function Sidebar() {
    return (
        <div className="sidebar">
            {/* Twitter icon*/}
            <TwitterIcon className="sidebar_twitterIcon"/>
           <SidebarOption active Icon={HomeIcon} text="Home" />
           <SidebarOption Icon={ExploreIcon}  text="Explore"/>
           <SidebarOption Icon={NotificationsIcon} text="Notofications"/>
           <SidebarOption Icon={MessageIcon} text="Messages" />
           <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
           <SidebarOption Icon={ListAltIcon} text="Lists" />
           <SidebarOption Icon={PersonIcon} text="Profile" />
           <SidebarOption Icon={MoreHorizIcon} text="More"/>
           <Button variant="outlined" className="sidebar_tweet" fullWidth>Post</Button>



        </div>
    )
}

export default Sidebar
