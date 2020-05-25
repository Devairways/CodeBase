import React,{ useState, useEffect } from 'react';
import FeedCard from './FeedCard';

function FeedList() {
    const [nav,setNav] = useState("Following");
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
          },1500)
    },[nav]);

    const navigate = (feed) =>{
        setLoading(true);
        setNav(feed);
    }

    return (
        <div className="feedlist">
            <div className="feed_nav">
                <ul>
                    <li onClick={()=> navigate("Following")} className={ nav == "Following" ? "selected": null }>Following</li>
                    <li onClick={()=> navigate("Featured")} className={ nav == "Featured" ? "selected": null}>Featured</li>
                    <li onClick={()=> navigate("Top Posts")} className={ nav == "Top Posts" ? "selected": null}>Top Posts</li>
                    <li onClick={()=> navigate("Recommended")} className={ nav == "Recommended" ? "selected": null }>Recommended</li>
                </ul>
            </div>
            <div className="feed_content">
                {
                    loading ?
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    :
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