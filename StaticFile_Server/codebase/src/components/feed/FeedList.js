import React from 'react';
import FeedCard from './FeedCard';

function FeedList() {
  return (
    <div className="feedlist">
        <div>
            <ul className="nav_ul">
                <li>Following</li>
                <li>Featured</li>
                <li>Top Posts</li>
                <li>Recommended</li>
            </ul>
        </div>
        <div className="feed_content">
            {
                tempList.map(feed =>{
                    return <FeedCard key={feed.id} feed={feed}/>
                })
            }
        </div>
    </div>
  );
}

export default FeedList;


const tempList= [
    {
        user: "Mike",
        category: "javascript",
        count: 16,
        id:1
    },
    {
        user: "Katelynn",
        category: "javascript",
        count: 24,
        id:2
    },
    {
        user: "JohnnyFlyboy",
        category: "javascript",
        count: 11,
        id:3
    },
]