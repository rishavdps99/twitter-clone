import React,{useState} from 'react'
import './TweetBox.css';
import {Avatar,Button} from '@material-ui/core';
import db from './firebase'
function TweetBox() {

    const [tweet,setTweet]=useState("");
    const [imagetweet,setImageTweet]=useState("");

    const sendTweet=e=>{
        e.preventDefault();

        //on submitting send it to database
         db.collection('posts').add({

            displayName:'rishav',
            userName:'rishavdps99',
            verified:true,
            text:tweet,
            avatar:'https://pmcvariety.files.wordpress.com/2020/07/ryan-reynolds.jpg?w=681&h=383&crop=1',
            image:imagetweet

         }) 

          setTweet("")
          setImageTweet("")
    }

    return (
        <div className="tweetBox">
            <form>
            <div className="tweetBox_input">
            <Avatar alt="Leo" src="https://pmcvariety.files.wordpress.com/2020/07/ryan-reynolds.jpg?w=681&h=383&crop=1" />
            <input 
            onChange={e=>setTweet(e.target.value)}
            value={tweet} 
            placeholder=" what's hot?"
             type="text"/>
           
            </div>
            <input
            value={imagetweet}
            onChange={e=>setImageTweet(e.target.value)}
            className="tweetBox_inputimg"
            placeholder="Enter image url"
            type="text"
             />
            <Button onClick={sendTweet} type="submit" className="tweet_button">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
