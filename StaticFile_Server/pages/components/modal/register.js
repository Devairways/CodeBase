import React, { useState } from  "react";

const RegisterCard = ({ type, close })=>{
	const [register, setRegister] = useState({ username: "", password: "", submitted: false, err: "" });

	
    // handler for new input formfields
    const handleChange = (e) => {
        setRegister({ ...register, submitted: false })
        const { name, value } = e.target;
        setRegister({ ...register, [name]: value });
    }
	
    // handler function for submitting form
    const handleSubmit = () => {
        setRegister({ ...register, submitted: true })
        if(!register.email){
            setRegister({ ...register, err: "Please enter a valid email"})
            return;
        }
        registerUser(register)
        .then(user => dispatch({type: "userUpdate", payload: user }));
        close();
    }

	return(
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
    );
}

export default RegisterCard;