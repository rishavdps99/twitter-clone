import React,{useState, useEffect} from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {



    const [posts,setPosts]=useState([]);



    useEffect(()=>{

        // when feed comp loads as well as based on the condition this only then.
      db.collection('posts').onSnapshot(snapshot=>{
          setPosts(snapshot.docs.map(doc=>doc.data()))
      })
   
    },[]);




    return (
        <div className="feed">
            {/* header*/}
            <div className="feed_header">
            <h2>Home</h2>
            </div>



            <TweetBox/>
            <FlipMove>
            {posts.map(post=>(

                <Post displayName={post.displayName}
                
                userName={post.userName}
                verified={post.verified}
                text={post.text}
                avatar={post.avatar}
                image={post.image}
                />

            ))}
            </FlipMove>
           
            
        </div>
    )
}

export default Feed
