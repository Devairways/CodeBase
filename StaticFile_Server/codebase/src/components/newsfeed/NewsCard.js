import React from 'react';	

const NewsCard = ({ article , nr }) => {		
  return (	
    <div className='newscard'>	
      <span>{nr +1}.</span>		
      <div>	
      	<h3>{article.title}</h3>	
        <p>{article.message}</p>    	
      </div> 	
    </div>	
  )	
}	

export default NewsCard; 