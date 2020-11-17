import React from 'react'
import './Widgets.css';
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';
function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">
            <SearchIcon className="widgets_search" />
            
            <input placeholder="Search " type="text" />
        </div>


        <div className="widgets_widgetcontainer">
        <h2> what's up guys</h2>
        <TwitterTweetEmbed tweetId={"1293107375491039232"}/>
        <TwitterTimelineEmbed
         sourceType="profile"
         screenName="rishavdps99"
         options={{height:400}}
         />
       <TwitterShareButton 
          url={"https://www.reddit.com/r/interestingasfuck/comments/i7kwrr/a_teacher_uses_upward_airflow_to_guide_a_paper/"}
          options={{text:"#reddit post",via:"rishavdps99"}}
          />
        </div>
        </div>
    )
}

export default Widgets
