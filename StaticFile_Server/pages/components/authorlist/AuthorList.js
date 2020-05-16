import React from 'react'; 


function AuthorList(){
    return (
        <div className="authorlist">
            <h3>Top <span>Authors</span></h3>
            {
                tempList.map((author, i) =>{
                    return (
                    <div key={i} className="author">
                        <img src='https://i.kym-cdn.com/photos/images/newsfeed/000/252/758/c6f.jpg'  height="25px" width="25px" alt="profile pic"/>
                        <h4>{author.user}</h4>
                        <div>
                            <img src='/assets/icons/trophy_icon.png'  height="20px" width="20px"  alt="Trophy"/>
                        	<span>{author.count}</span>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    );
}

const tempList = [
    {
        user:"Geronimo",
        count: 29
    },
    {
        user: "kalimero",
        count: 6
    },
    {
        user: "Peter",
        count: 36
    },
    {
        user:"Geronimo",
        count: 29
    },
    {
        user: "kalimero",
        count: 6
    },
    {
        user: "Peter",
        count: 36
    }
]

export default AuthorList;
