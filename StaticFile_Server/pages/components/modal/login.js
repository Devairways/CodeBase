<div className="type">
<span className="close" onClick={e => close()}>X</span>
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
        <a onClick={e => console.log("user logged in")}><h3>Go</h3></a>
    </div>
    <h4>New Here? <span alt="register" onClick={()=>{setModalType("register")}}>Register</span></h4>
</form>
</div>