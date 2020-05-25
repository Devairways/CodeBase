import React, { useEffect, useState } from "react";	
import NewsCard from "./NewsCard";	

const NewsFeed = (props) => {	
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },1500)
  },[]);
  
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
          loading ?
          <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          :
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