import React, { useContext, useEffect, useState, Fragment } from  "react";

const Modal = ({ close })=>{
	const [modalType, setModalType] = useState("login");
    const [login, setLogin] = useState({ username: "", password: "", submitted: false, err: "" });
    const [register, setRegister] = useState({ username: "", password: "", submitted: false, err: "" });
	
    // handler for new input formfields
    const handleChange = (e) => {
    	if(e.target.alt.includes("register")){
			console.log(e.target)
    		setRegister({ ...register, submitted: false })
	        const { name, value } = e.target;
	        setRegister({ ...register, [name]: value });
    	}
    	else{
    		setLogin({ ...login, submitted: false })
	        const { value } = e.target;
	        setLogin({ ...login, [name]: value });
    	}
    	
	}
	
    // handler function for submitting form
    const handleSubmit = (action) =>{
    	switch(action) {
    		case "login":
                setLogin({ ...login, submitted: true })
				if(!login.username){
					setLogin({ ...login, err: "Please enter a valid username"})
    				break;
    			}
				validateUser(login)
				.then(user => dispatch({type: "userUpdate", payload: user }));
    			close();
    			break;
			case "register":
				setRegister({ ...register, submitted: true })
				if(!register.email){
					setRegister({ ...register, err: "Please enter a valid email"})
    				break;
    			}
				registerUser(register)
				.then(user => dispatch({type: "userUpdate", payload: user }));
				close();
    			break;
    		default:
    			break;
    	}
    }

	return(
		<div id="overlay">
			<div id="modal">
			{ 
				modalType === "login" && (
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
				)
			}
			{
				modalType === "register" && (
				// Modal for Registering
				<div className="type">
					<span  className="close" onClick={e => close()}>X</span>
					<h2 className="selected">codebase</h2>
					<h3>Register</h3>
					<form name="Modal"> 
						<div className="inputs">
							<input type="text" className="" name="username" value={register.username} onChange={handleChange} placeholder="Username" alt="register"/>
							<input type="text" className="" name="email" value={register.email} onChange={handleChange} placeholder="Email" alt="register"/>
							<input type="text" className="" name="password" value={register.password} onChange={handleChange} placeholder="Password" alt="register"/>
							<input type="text" className="" name="password" value={register.password} onChange={handleChange} placeholder="retype Password" alt="register"/>
							{
								register.submitted && !register.username && !register.password &&
								<div className="help-block">Please fill out form</div>
							}
						</div>
						<span className="form__error">{register.err}</span>
						<div className="" >
							<a onClick={e =>console.log("new user created!")}><h3 className="selected">Go</h3></a>
						</div>
					</form>
				</div>
				)
			}
			</div>
		</div>
		
	);
}

export default Modal;