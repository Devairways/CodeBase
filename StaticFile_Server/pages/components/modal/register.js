<div className="type">
<span  className="close" onClick={e => close()}>X</span>
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
        <a onClick={e =>console.log("new user created!")}><h3>Go</h3></a>
    </div>
</form>
</div>