import React from "react";	
import NewsCard from "./NewsCard";	

const NewsFeed = (props) => {	
	const tempDatalist = [{	
        title:"hello i am a  title",	
        message:"this is the message"	
    },	
    {	
        title:"hello i am a  title",	
        message:"this is the message"	
    },	
    {	
        title:"hello i am a  title",	
        message:"this is the message"	
    },	
    {	
        title:"hello i am a  title",	
        message:"this is the message"	
    },	
    ];	

  return (	
    <div className='newsfeed'>	
    	<div>	
        <h2>Latest <span>in</span> Tech News</h2>	
    	  {	
    	  	// loop	
    	  	tempDatalist.map((temp,i) =>{	
    	  		return <NewsCard key={i} article={temp} nr={i}/>	
    	  	})	
    	  }	
    	</div>	
    </div>	
  )	
}	

export default NewsFeed; 