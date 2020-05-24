import React, { useContext, useEffect, useState, Fragment } from  "react";
import { store } from "../../services/Store";

const Modal = ({ type, params, close })=>{
	const user = useContext(store);
	const [modalType, setModalType] = useState("login");
    const [login, setLogin] = useState({ username: "", password: "", submitted: false, err: "" });
    const [register, setRegister] = useState({ username: "", password: "", submitted: false, err: "" });
	
    // handler for new input formfields
    const handleChange = (e) => {
    	if(e.target.placeholder.includes("New")){
    		setRegister({ ...register, submitted: false })
	        const { name, value } = e.target;
	        setRegister({...register, [name]: value });
    	}
    	else{
    		setLogin({ ...login, submitted: false })
	        const { value } = e.target;
	        setLogin({...login, name: value });
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
		<div id="modal">
		{ 
			modalType === "login" && (
			// Modal for Login
			<div>
				<span onClick={e => close()}>X</span>
				<form name="Modal" className=""> 
	                <div className="">
	                    <input type="text" className="" name="username" value={login.username} onChange={handleChange} placeholder="Username"/>
	                    <input type="text" className="" name="password" value={login.password} onChange={handleChange} placeholder="Password"/>
	                    {
	                    	login.submitted && !login.username && !login.password&&
	                        <div className="help-block">Please fill out form</div>
	                    }
	                </div>
					<span className="form__error">{login.err}</span>
	                <div className="" >
	                    <a onClick={e => console.log("user logged in")}><h3>Go</h3></a>
	                </div>
                    <h4>New Here? <span alt="register" onClick={()=>{setModalType("register")}}>Register</span></h4>
	            </form>
			</div>
			)
		}
		{
			modalType === "register" && (
			// Modal for Registering
			<div>
				<span onClick={e => close()}>X</span>
				<form name="Modal" className=""> 
	                <div className="">
	                    <input type="text" className="" name="username" value={register.username} onChange={handleChange} placeholder="Set username"/>
                        <input type="text" className="" name="email" value={register.email} onChange={handleChange} placeholder="Set email"/>
	                    <input type="text" className="" name="picture" value={register.password} onChange={handleChange} placeholder="Set password"/>
	                    {
	                    	register.submitted && !register.username && !register.password &&
	                        <div className="help-block">Please fill out form</div>
	                    }
	                </div>
					<span className="form__error">{register.err}</span>
	                <div className="" >
	                    <a onClick={e =>console.log("new user created!")}>Go</a>
	                </div>
	            </form>
			</div>
			)
		}
		</div>
	);
}

export default Modal;