import React, { useState } from  "react";

const LoginCard = ({ setModalType, close })=>{
    const [login, setLogin] = useState({ username: "", password: "", submitted: false, err: "" });
    
	
    // handler for new input formfields
    const handleChange = (e) => {
    		setLogin({ ...login, submitted: false })
	        const { value } = e.target;
	        setLogin({ ...login, [name]: value });    	
	}
	
    // handler function for submitting form
    const handleSubmit = () =>{
        setLogin({ ...login, submitted: true })
        if(!login.username){
            setLogin({ ...login, err: "Please enter a valid username"})
            return;
        }
        validateUser(login)
        .then(user => dispatch({type: "userUpdate", payload: user }));
        close();
    }

	return(
        // Modal for Login
        <div className="type">
            <span className="close" onClick={e => close()}>X</span>
            <h2 className="selected">codebase</h2>
            <h3>Sign in</h3>
            <form name="Modal" > 
                <div className="inputs">
                    <input type="text" className="" name="username" value={login.username} onChange={handleChange} placeholder="Username"/>
                    <input type="text" className="" name="password" value={login.password} onChange={handleChange} placeholder="Password"/>
                    {
                        login.submitted && !login.username && !login.password&&
                        <div className="help-block">Please fill out form</div>
                    }
                </div>
                <span className="form__error">{login.err}</span>
                <div className="" >
                    <a onClick={e => console.log("user logged in")}><h3 className="selected">Go</h3></a>
                </div>
                <h4>New Here? <span alt="register" onClick={()=>{setModalType("register")}}>Register</span></h4>
            </form>
        </div>
    );

}

export default LoginCard;