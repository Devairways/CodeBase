import React from "react";

const FriendsList = (props) => {
    return (
        <div className="friendslist">
            <h2>Friends <span alt="arrow">></span></h2>
            {
                tempList.map((friend, i) =>{
                    return (
                    <div key={i} className="friend">
                        <img src='https://i.kym-cdn.com/photos/images/newsfeed/000/252/758/c6f.jpg'  height="45px" width="45px" alt="profile pic"/>
                        <span alt="online"  style={friend.online ? {backgroundColor:"green"}: {backgroundColor:"#999999"}} ></span>
                        <div>
                            <h4>{friend.user}</h4>
                        	<span>{friend.role}</span>
                        </div>
                        <img src='/assets/icons/person_icon.png'  height="35px" width="30px"  alt="person"/>
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
        role: "CEO",
        online: false
    },
    {
        user: "kalimero",
        role: "Driver",
        online: false
    },
    {
        user: "Peter",
        role: "MurderRobotDog",
        online: true
    },
    {
        user:"Geronimo",
        role: "killer",
        online: false
    },
    {
        user: "kalimero",
        role: "partyboi",
        online: true
    },
    {
        user: "Peter",
        role: "gentleman",
        online: false
    }
]

export default FriendsList;