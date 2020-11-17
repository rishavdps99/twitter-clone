import React,{forwardRef} from 'react'
import './Post.css';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RepeatIcon from '@material-ui/icons/Repeat';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import PublishIcon from '@material-ui/icons/Publish';


const Post=forwardRef(({displayName,
    userName,
    verified,
    text,
    image,
    avatar
    },ref) =>
    {
    
    return (
        <div className="post" ref={ref}>
           <div className="post_avatar">
            <Avatar src={avatar}/>
             </div>
            
             <div className="post_body">
               <div className="post_header">
                   <div className="post_headerText">
                       <h3> 
                          {displayName} {" "}
                          <span className="post_headerspecial">
                             {verified && <VerifiedUserIcon className="post_badge"/> }
                              @{userName}
                             
                                  </span>
                         </h3>
                    </div> 
                    <div className="post_headerDescription">
                      
                      <p> {text}</p>
                    </div>
                    <img src={image}
                      alt=""/>

                      <div className="post_footer">
                        <FavoriteBorderIcon/>
                        <RepeatIcon/>
                        <ChatBubbleOutlineIcon/>
                    
                        <ThumbUpOutlinedIcon/>
                        <PublishIcon/>
                      </div>
                </div>
             </div>
        </div>
    )
})

export default Post
