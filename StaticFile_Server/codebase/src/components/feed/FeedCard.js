import React from 'react';

function FeedCard({feed}){
    const { user, category, count } = feed;
    return (
        <div className="feedcard">
            <div className="card_head">
                <img src='https://i.kym-cdn.com/photos/images/newsfeed/000/252/758/c6f.jpg'  height="45px" width="45px" style={{borderRadius:"50%"}} alt="profile_picture"/>
                <h2>{user} <span className="post">posted in</span> <span className="category">{category}</span></h2>
                <span>{`${count} hours ago`}</span>
            </div>
            <div className="card_body">
                <h1>Header</h1>
                <span>category | type</span>
                <p>Lorem ipsum dolor sitamet, whole bunch of crap...</p>
                <p><img src='https://i7.pngguru.com/preview/634/616/883/download-clip-art-red-heart-outline.jpg'  height="15px" width="15px" style={{marginBottom:"-2px"}} alt="Like"/> 250</p>
            </div> 
        </div>
  );
}

export default FeedCard;
